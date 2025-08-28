/**
 * Helper function to fetch products from WordPress REST API
 * Endpoint: https://vanillapodconfections.ca/wp-json/vpc/v1/products
 */

const API_BASE_URL = 'https://vanillapodconfections.ca/wp-json/vpc/v1';

/**
 * Fetches all products from WordPress
 * @param {AbortSignal} [signal] - AbortController signal for request cancellation
 * @returns {Promise<Array>} Array of product objects
 */
export const getProducts = async (signal = null) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Add cache control for better performance
      cache: 'default',
      // Add abort signal if provided
      signal: signal
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Transform WordPress data to match component structure
    const transformedProducts = Array.isArray(data) 
      ? data.map(transformWordPressProduct)
      : [];
    
    return transformedProducts;
    
  } catch (error) {
    console.error('Error fetching products:', error);
    
    // Return fallback products if API fails
    return getFallbackProducts();
  }
};

/**
 * Fetches products by category
 * @param {string} category - Product category to filter by
 * @param {AbortSignal} [signal] - AbortController signal for request cancellation
 * @returns {Promise<Array>} Array of filtered product objects
 */
export const getProductsByCategory = async (category, signal = null) => {
  try {
    // First get all products, then filter (since your API doesn't seem to support category filtering)
    const allProducts = await getProducts(signal);
    
    if (category === 'All') {
      return allProducts;
    }
    
    return allProducts.filter(product => 
      product.category.toLowerCase() === category.toLowerCase()
    );
    
  } catch (error) {
    console.error(`Error fetching products for category ${category}:`, error);
    
    // Filter fallback products by category
    const fallbackProducts = getFallbackProducts();
    return fallbackProducts.filter(product => 
      product.category.toLowerCase() === category.toLowerCase()
    );
  }
};

/**
 * Fetches a single product by ID
 * @param {number|string} productId - Product ID
 * @param {AbortSignal} [signal] - AbortController signal for request cancellation
 * @returns {Promise<Object|null>} Product object or null if not found
 */
export const getProductById = async (productId, signal = null) => {
  try {
    // Since your API returns all products, we'll get all and find the specific one
    const allProducts = await getProducts(signal);
    return allProducts.find(product => product.id == productId) || null;
    
  } catch (error) {
    console.error(`Error fetching product ${productId}:`, error);
    
    // Find in fallback products
    const fallbackProducts = getFallbackProducts();
    return fallbackProducts.find(product => 
      product.id == productId
    ) || null;
  }
};

/**
 * Fetches available product categories
 * @param {AbortSignal} [signal] - AbortController signal for request cancellation
 * @returns {Promise<Array>} Array of category strings
 */
export const getCategories = async (signal = null) => {
  try {
    // Get all products and extract unique categories
    const products = await getProducts(signal);
    const categories = [...new Set(products.map(product => product.category))];
    
    // Always include "All" at the beginning
    return ["All", ...categories.filter(cat => cat !== "All").sort()];
    
  } catch (error) {
    console.error('Error fetching categories:', error);
    
    // Return fallback categories based on your actual products
    return [
      "All",
      "Cupcakes",
      "Cakes", 
      "Cheesecakes",
      "Macarons",
      "Chocolates",
      "Other"
    ];
  }
};

/**
 * Fallback products in case WordPress API is unavailable
 * @returns {Array} Array of fallback product objects
 */
const getFallbackProducts = () => [
  {
    id: 1,
    name: "Vanilla Bean Truffles",
    price: "$24.99",
    emoji: "🍫",
    description: "Rich, creamy truffles infused with Madagascar vanilla beans",
    category: "Chocolates",
    image: null,
    featured: true
  },
  {
    id: 2,
    name: "Vanilla Cupcakes",
    price: "$18.99",
    emoji: "🧁",
    description: "Fluffy vanilla cupcakes with silky buttercream frosting",
    category: "Baked Goods",
    image: null,
    featured: true
  },
  {
    id: 3,
    name: "Vanilla Cookies",
    price: "$12.99",
    emoji: "🍪",
    description: "Crispy vanilla cookies with a hint of sea salt",
    category: "Cookies",
    image: null,
    featured: false
  },
  {
    id: 4,
    name: "Vanilla Macarons",
    price: "$32.99",
    emoji: "🥮",
    description: "Delicate French macarons with vanilla ganache filling",
    category: "Macarons",
    image: null,
    featured: true
  },
  {
    id: 5,
    name: "Vanilla Fudge",
    price: "$16.99",
    emoji: "🟫",
    description: "Smooth and creamy vanilla fudge cut into perfect squares",
    category: "Fudge",
    image: null,
    featured: false
  },
  {
    id: 6,
    name: "Vanilla Cake Pops",
    price: "$22.99",
    emoji: "🍭",
    description: "Bite-sized vanilla cake pops dipped in white chocolate",
    category: "Cake Pops",
    image: null,
    featured: false
  }
];

/**
 * Transforms WordPress product data to match component expectations
 * @param {Object} wpProduct - Raw WordPress product object
 * @returns {Object} Transformed product object
 */
export const transformWordPressProduct = (wpProduct) => {
  // Clean HTML from description
  const cleanDescription = wpProduct.description
    ?.replace(/<[^>]*>/g, '') // Remove HTML tags
    ?.replace(/&[^;]+;/g, '') // Remove HTML entities
    ?.trim() || 'Delicious confection';

  // Determine category based on product title/description
  const getCategory = (title, description) => {
    const text = `${title} ${description}`.toLowerCase();
    if (text.includes('cupcake')) return 'Cupcakes';
    if (text.includes('macaron')) return 'Macarons';
    if (text.includes('cake') && !text.includes('cupcake')) return 'Cakes';
    if (text.includes('cheesecake')) return 'Cheesecakes';
    if (text.includes('chocolate') || text.includes('cocoa')) return 'Chocolates';
    return 'Other';
  };

  // Get appropriate emoji based on category/title
  const getEmoji = (title, category) => {
    const text = title.toLowerCase();
    if (text.includes('cupcake')) return '🧁';
    if (text.includes('macaron')) return '🥮';
    if (text.includes('cake')) return '🎂';
    if (text.includes('cheesecake')) return '🍰';
    if (text.includes('chocolate') || text.includes('cocoa')) return '🍫';
    if (text.includes('gift')) return '🎁';
    if (text.includes('lemon')) return '🍋';
    if (text.includes('raspberry')) return '🍓';
    if (text.includes('pistachio')) return '🥜';
    return '🍰'; // Default
  };

  const category = getCategory(wpProduct.title, wpProduct.description);
  
  return {
    id: wpProduct.id,
    name: wpProduct.title || 'Unknown Product',
    price: wpProduct.price ? `$${wpProduct.price}` : '$0.00',
    emoji: getEmoji(wpProduct.title, category),
    description: cleanDescription.substring(0, 150) + (cleanDescription.length > 150 ? '...' : ''),
    category: category,
    image: wpProduct.image || null,
    featured: wpProduct.available && parseFloat(wpProduct.price || 0) > 0,
    available: wpProduct.available || false,
    // Additional WordPress fields
    slug: wpProduct.slug,
    rawDescription: wpProduct.description // Keep original for detailed view
  };
};

export default {
  getProducts,
  getProductsByCategory,
  getProductById,
  getCategories,
  transformWordPressProduct
};
