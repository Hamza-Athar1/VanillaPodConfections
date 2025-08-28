/**
 * Order submission utility for WordPress/WooCommerce integration
 * Handles both WooCommerce API and custom endpoint scenarios
 */

// Configuration
const WC_CONSUMER_KEY = import.meta.env.VITE_WC_CONSUMER_KEY;
const WC_CONSUMER_SECRET = import.meta.env.VITE_WC_CONSUMER_SECRET;
const WP_API_BASE = import.meta.env.VITE_WP_API_BASE || 'https://vanillapodconfections.ca/wp-json';
const CUSTOM_ORDER_ENDPOINT = import.meta.env.VITE_CUSTOM_ORDER_ENDPOINT;

/**
 * Submit order to WordPress backend for invoice generation
 * @param {Object} orderData - Order details
 * @param {string} orderData.customerName - Customer's full name
 * @param {string} orderData.customerEmail - Customer's email address
 * @param {Array} orderData.items - Array of order items
 * @param {number} orderData.total - Order total amount
 * @param {Object} orderData.billing - Billing address (optional)
 * @param {Object} orderData.shipping - Shipping address (optional)
 * @param {boolean} useWooCommerce - Whether to use WooCommerce API (default: true)
 * @returns {Promise<Object>} Response with success/error status
 */
export const submitOrder = async (orderData, useWooCommerce = true) => {
  try {
    // Validate required fields
    if (!orderData.customerName || !orderData.customerEmail || !orderData.items || !orderData.total) {
      throw new Error('Missing required order data: customerName, customerEmail, items, and total are required');
    }

    let response;

    if (useWooCommerce && WC_CONSUMER_KEY && WC_CONSUMER_SECRET) {
      // Use WooCommerce API
      response = await submitToWooCommerce(orderData);
    } else {
      // Use custom endpoint
      response = await submitToCustomEndpoint(orderData);
    }

    return response;

  } catch (error) {
    console.error('Order submission failed:', error);
    return {
      success: false,
      message: error.message || 'Failed to submit order. Please try again.',
      error: error
    };
  }
};

/**
 * Submit order via WooCommerce REST API
 * @param {Object} orderData - Order details
 * @returns {Promise<Object>} WooCommerce API response
 */
const submitToWooCommerce = async (orderData) => {
  // Create Basic Auth header
  const auth = btoa(`${WC_CONSUMER_KEY}:${WC_CONSUMER_SECRET}`);
  
  // Transform order data to WooCommerce format
  const wooCommerceOrder = {
    payment_method: 'pending', // Will be handled by your checkout process
    payment_method_title: 'Pending Payment',
    set_paid: false, // Invoice will be sent, payment pending
    billing: {
      first_name: orderData.customerName.split(' ')[0] || '',
      last_name: orderData.customerName.split(' ').slice(1).join(' ') || '',
      email: orderData.customerEmail,
      phone: orderData.customerPhone || '',
      address_1: orderData.billing?.address1 || '',
      address_2: orderData.billing?.address2 || '',
      city: orderData.billing?.city || '',
      state: orderData.billing?.state || '',
      postcode: orderData.billing?.postcode || '',
      country: orderData.billing?.country || 'CA'
    },
    shipping: orderData.shipping || orderData.billing || {
      first_name: orderData.customerName.split(' ')[0] || '',
      last_name: orderData.customerName.split(' ').slice(1).join(' ') || '',
      address_1: '',
      address_2: '',
      city: '',
      state: '',
      postcode: '',
      country: 'CA'
    },
    line_items: orderData.items.map(item => ({
      product_id: item.productId || item.id,
      quantity: item.quantity || 1,
      price: item.price,
      name: item.name,
      sku: item.sku || '',
    })),
    shipping_lines: [
      {
        method_id: 'flat_rate',
        method_title: 'Standard Shipping',
        total: orderData.shipping_cost?.toString() || '0'
      }
    ],
    fee_lines: orderData.fees ? orderData.fees.map(fee => ({
      name: fee.name,
      total: fee.amount.toString()
    })) : [],
    meta_data: [
      {
        key: '_invoice_requested',
        value: 'yes'
      },
      {
        key: '_source',
        value: 'react_frontend'
      },
      {
        key: '_order_timestamp',
        value: new Date().toISOString()
      }
    ]
  };

  const response = await fetch(`${WP_API_BASE}/wc/v3/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${auth}`,
      'Accept': 'application/json'
    },
    body: JSON.stringify(wooCommerceOrder)
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(`WooCommerce API Error: ${result.message || response.statusText}`);
  }

  return {
    success: true,
    message: 'Order submitted successfully! Invoice email will be sent shortly.',
    orderId: result.id,
    orderNumber: result.number,
    data: result
  };
};

/**
 * Submit order via custom WordPress endpoint
 * @param {Object} orderData - Order details
 * @returns {Promise<Object>} Custom endpoint response
 */
const submitToCustomEndpoint = async (orderData) => {
  // Prepare custom payload
  const customPayload = {
    customer: {
      name: orderData.customerName,
      email: orderData.customerEmail,
      phone: orderData.customerPhone || ''
    },
    items: orderData.items.map(item => ({
      name: item.name,
      quantity: item.quantity || 1,
      price: item.price,
      total: (item.price * (item.quantity || 1)),
      description: item.description || '',
      sku: item.sku || ''
    })),
    totals: {
      subtotal: orderData.subtotal || orderData.total,
      shipping: orderData.shipping_cost || 0,
      tax: orderData.tax || 0,
      total: orderData.total
    },
    billing_address: orderData.billing || {},
    shipping_address: orderData.shipping || orderData.billing || {},
    notes: orderData.notes || '',
    request_invoice: true,
    source: 'react_frontend',
    timestamp: new Date().toISOString()
  };

  const response = await fetch(CUSTOM_ORDER_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(customPayload)
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(`Custom API Error: ${result.message || response.statusText}`);
  }

  return {
    success: true,
    message: result.message || 'Order submitted successfully! Invoice email will be sent shortly.',
    orderId: result.order_id || result.id,
    data: result
  };
};

/**
 * Get order status from WordPress
 * @param {string|number} orderId - Order ID
 * @param {boolean} useWooCommerce - Whether to use WooCommerce API
 * @returns {Promise<Object>} Order status response
 */
export const getOrderStatus = async (orderId, useWooCommerce = true) => {
  try {
    let response;

    if (useWooCommerce && WC_CONSUMER_KEY && WC_CONSUMER_SECRET) {
      const auth = btoa(`${WC_CONSUMER_KEY}:${WC_CONSUMER_SECRET}`);
      response = await fetch(`${WP_API_BASE}/wc/v3/orders/${orderId}`, {
        headers: {
          'Authorization': `Basic ${auth}`,
          'Accept': 'application/json'
        }
      });
    } else {
      response = await fetch(`${WP_API_BASE}/custom-api/v1/orders/${orderId}`, {
        headers: {
          'Accept': 'application/json'
        }
      });
    }

    const result = await response.json();

    if (!response.ok) {
      throw new Error(`Failed to get order status: ${result.message || response.statusText}`);
    }

    return {
      success: true,
      order: result
    };

  } catch (error) {
    console.error('Failed to get order status:', error);
    return {
      success: false,
      message: error.message
    };
  }
};

export default {
  submitOrder,
  getOrderStatus
};
