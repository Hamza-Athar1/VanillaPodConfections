import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { useCart } from "../context/CartContext";

export default function Cart() {
  // Use global cart context
  const { cartItems, addToCart, removeFromCart, updateQuantity, clearCart } =
    useCart();

  const cartStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Shopping Cart - VanillaPod Confections",
    description:
      "Review your selected vanilla confections and proceed to checkout. Free shipping on orders over $50.",
    url: "https://vanillapodconfections.com/cart",
  };

  const [checkoutStatus, setCheckoutStatus] = useState({
    isProcessing: false,
    isSuccess: false,
    isError: false,
    message: "",
    orderId: null,
  });
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const subtotal = cartItems.reduce((sum, item) => {
    const price =
      typeof item.price === "string"
        ? parseFloat(item.price.replace("$", ""))
        : item.price;
    return sum + price * item.quantity;
  }, 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleCustomerInfoChange = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckout = async () => {
    // Validate customer information
    if (!customerInfo.name || !customerInfo.email) {
      setCheckoutStatus({
        isProcessing: false,
        isSuccess: false,
        isError: true,
        message: "Please provide your name and email address.",
        orderId: null,
      });
      return;
    }

    // Validate cart has items
    if (cartItems.length === 0) {
      setCheckoutStatus({
        isProcessing: false,
        isSuccess: false,
        isError: true,
        message: "Your cart is empty. Add some items before checkout.",
        orderId: null,
      });
      return;
    }

    // Start processing
    setCheckoutStatus({
      isProcessing: true,
      isSuccess: false,
      isError: false,
      message: "Processing your order...",
      orderId: null,
    });

    try {
      // Prepare order data
      const orderData = {
        customerName: customerInfo.name,
        customerEmail: customerInfo.email,
        customerPhone: customerInfo.phone,
        items: cartItems.map((item) => ({
          productId: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          description: item.description || "",
          sku: item.sku || "",
        })),
        subtotal: subtotal,
        shipping_cost: shipping,
        tax: tax,
        total: total,
        billing: {
          // Add billing info if you have a form for it
          address1: "",
          city: "",
          state: "",
          postcode: "",
          country: "CA",
        },
        notes: `Order placed via React frontend on ${new Date().toLocaleString()}`,
      };

      // Submit order to WordPress
      const result = await submitOrder(orderData, true); // true = use WooCommerce

      if (result.success) {
        setCheckoutStatus({
          isProcessing: false,
          isSuccess: true,
          isError: false,
          message: result.message,
          orderId: result.orderId,
        });

        // Clear cart after successful order
        clearCart();

        // Reset customer info
        setCustomerInfo({ name: "", email: "", phone: "" });
      } else {
        setCheckoutStatus({
          isProcessing: false,
          isSuccess: false,
          isError: true,
          message: result.message,
          orderId: null,
        });
      }
    } catch (error) {
      console.error("Checkout error:", error);
      setCheckoutStatus({
        isProcessing: false,
        isSuccess: false,
        isError: true,
        message: "An unexpected error occurred. Please try again.",
        orderId: null,
      });
    }
  };

  return (
    <>
      <SEO
        title="Shopping Cart - Your Selected Confections"
        description="Review your selected vanilla confections and proceed to checkout. Enjoy free shipping on orders over $50 from VanillaPod Confections."
        keywords="shopping cart, vanilla confections checkout, artisan sweets order, confections delivery"
        url="https://vanillapodconfections.com/cart"
        structuredData={cartStructuredData}
      />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50 pt-20">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1
              className="text-5xl font-bold text-gray-800 mb-4"
              style={{ fontFamily: "Lobster, cursive" }}
            >
              Your Cart
            </h1>
            <p className="text-xl text-gray-600">
              {cartItems.length === 0
                ? "Your cart is empty"
                : `${cartItems.length} item${
                    cartItems.length > 1 ? "s" : ""
                  } in your cart`}
            </p>
          </div>

          {cartItems.length === 0 ? (
            /* Empty Cart */
            <div className="text-center bg-white rounded-xl shadow-lg p-12">
              <div className="text-8xl mb-6">🛒</div>
              <h2
                className="text-3xl font-bold text-gray-800 mb-4"
                style={{ fontFamily: "Lobster, cursive" }}
              >
                Your Cart is Empty
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Looks like you haven't added any delicious confections yet!
              </p>
              <Link
                to="/products"
                className="bg-red-400 hover:bg-red-500 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 transform shadow-lg inline-block"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl">{item.emoji}</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800">
                            {item.name}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {item.description}
                          </p>
                          <p className="text-lg font-semibold text-red-400 mt-2">
                            $
                            {typeof item.price === "string"
                              ? item.price.startsWith("$")
                                ? item.price
                                : `$${parseFloat(item.price).toFixed(2)}`
                              : `$${item.price.toFixed(2)}`}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-300"
                          >
                            -
                          </button>
                          <span className="w-8 text-center font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-300"
                          >
                            +
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-400 hover:text-red-600 p-2 transition-colors duration-300"
                          title="Remove item"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>

                    {/* Item Total */}
                    <div className="mt-4 pt-4 border-t border-gray-200 text-right">
                      <span className="text-lg font-bold text-gray-800">
                        Subtotal: $
                        {(
                          (typeof item.price === "string"
                            ? parseFloat(item.price.replace("$", ""))
                            : item.price) * item.quantity
                        ).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                  {/* Customer Information */}
                  <div className="mb-8">
                    <h2
                      className="text-2xl font-bold text-gray-800 mb-6"
                      style={{ fontFamily: "Lobster, cursive" }}
                    >
                      Customer Information
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={customerInfo.name}
                          onChange={handleCustomerInfoChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={customerInfo.email}
                          onChange={handleCustomerInfoChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={customerInfo.phone}
                          onChange={handleCustomerInfoChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  <h2
                    className="text-2xl font-bold text-gray-800 mb-6"
                    style={{ fontFamily: "Lobster, cursive" }}
                  >
                    Order Summary
                  </h2>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-semibold">
                        ${subtotal.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-semibold">
                        {shipping === 0 ? (
                          <span className="text-green-600">FREE</span>
                        ) : (
                          `$${shipping.toFixed(2)}`
                        )}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-semibold">${tax.toFixed(2)}</span>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between">
                        <span className="text-lg font-bold text-gray-800">
                          Total
                        </span>
                        <span className="text-lg font-bold text-red-400">
                          ${total.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Checkout Status Messages */}
                  {checkoutStatus.isProcessing && (
                    <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                        <p className="text-blue-700">
                          {checkoutStatus.message}
                        </p>
                      </div>
                    </div>
                  )}

                  {checkoutStatus.isSuccess && (
                    <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center">
                        <span className="text-green-600 text-lg mr-2">✅</span>
                        <div>
                          <p className="text-green-700 font-medium">
                            {checkoutStatus.message}
                          </p>
                          {checkoutStatus.orderId && (
                            <p className="text-sm text-green-600 mt-1">
                              Order ID: {checkoutStatus.orderId}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {checkoutStatus.isError && (
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center">
                        <span className="text-red-600 text-lg mr-2">❌</span>
                        <p className="text-red-700">{checkoutStatus.message}</p>
                      </div>
                    </div>
                  )}

                  {/* Free Shipping Notice */}
                  {shipping > 0 && (
                    <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        🚚 Add ${(50 - subtotal).toFixed(2)} more for free
                        shipping!
                      </p>
                    </div>
                  )}

                  {/* Checkout Button */}
                  <button
                    onClick={handleCheckout}
                    disabled={
                      checkoutStatus.isProcessing || checkoutStatus.isSuccess
                    }
                    className={`w-full mt-6 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform shadow-lg ${
                      checkoutStatus.isProcessing || checkoutStatus.isSuccess
                        ? "bg-gray-400 cursor-not-allowed text-white"
                        : "bg-red-400 hover:bg-red-500 text-white hover:-translate-y-1"
                    }`}
                  >
                    {checkoutStatus.isProcessing
                      ? "Processing Order..."
                      : checkoutStatus.isSuccess
                        ? "Order Complete! 🎉"
                        : "Place Order"}
                  </button>

                  {/* Continue Shopping - only show if not successful */}
                  {!checkoutStatus.isSuccess && (
                    <Link
                      to="/products"
                      className="block w-full mt-3 border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                    >
                      Continue Shopping
                    </Link>
                  )}

                  {/* Payment Methods */}
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600 mb-2">We accept:</p>
                    <div className="flex justify-center space-x-2">
                      <span className="text-2xl">💳</span>
                      <span className="text-2xl">💰</span>
                      <span className="text-2xl">📱</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Orders are processed through WooCommerce
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Recommended Products */}
          {cartItems.length > 0 && (
            <div className="mt-16">
              <h2
                className="text-3xl font-bold text-center text-gray-800 mb-8"
                style={{ fontFamily: "Lobster, cursive" }}
              >
                You Might Also Like
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="text-5xl mb-4">🥮</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Vanilla Macarons
                  </h3>
                  <p className="text-red-400 font-semibold">$32.99</p>
                  <button
                    onClick={() =>
                      addToCart({
                        id: 101,
                        name: "Vanilla Macarons",
                        description:
                          "Delicate French macarons with vanilla cream filling",
                        price: 32.99,
                        emoji: "🥮",
                        sku: "VM001",
                      })
                    }
                    className="mt-3 bg-red-400 hover:bg-red-500 text-white py-2 px-4 rounded-full transition-colors duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="text-5xl mb-4">🟫</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Vanilla Fudge
                  </h3>
                  <p className="text-red-400 font-semibold">$16.99</p>
                  <button
                    onClick={() =>
                      addToCart({
                        id: 102,
                        name: "Vanilla Fudge",
                        description:
                          "Rich and creamy vanilla fudge made with real vanilla beans",
                        price: 16.99,
                        emoji: "🟫",
                        sku: "VF001",
                      })
                    }
                    className="mt-3 bg-red-400 hover:bg-red-500 text-white py-2 px-4 rounded-full transition-colors duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="text-5xl mb-4">🍭</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Cake Pops
                  </h3>
                  <p className="text-red-400 font-semibold">$22.99</p>
                  <button
                    onClick={() =>
                      addToCart({
                        id: 103,
                        name: "Vanilla Cake Pops",
                        description:
                          "Moist vanilla cake pops dipped in white chocolate",
                        price: 22.99,
                        emoji: "🍭",
                        sku: "CP001",
                      })
                    }
                    className="mt-3 bg-red-400 hover:bg-red-500 text-white py-2 px-4 rounded-full transition-colors duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
