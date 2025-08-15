import React, { useState } from "react";
import SEO from "../components/SEO";

export default function Cart() {
  const cartStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Shopping Cart - VanillaPod Confections",
    description:
      "Review your selected vanilla confections and proceed to checkout. Free shipping on orders over $50.",
    url: "https://vanillapodconfections.com/cart",
  };

  const [cartItems, setCartItems] = useState([]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

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
              <button className="bg-red-400 hover:bg-red-500 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 transform shadow-lg">
                Start Shopping
              </button>
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
                            ${item.price.toFixed(2)}
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
                          onClick={() => removeItem(item.id)}
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
                        Subtotal: ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
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
                  <button className="w-full mt-6 bg-red-400 hover:bg-red-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:-translate-y-1 transform shadow-lg">
                    Proceed to Checkout
                  </button>

                  {/* Continue Shopping */}
                  <button className="w-full mt-3 border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                    Continue Shopping
                  </button>

                  {/* Payment Methods */}
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600 mb-2">We accept:</p>
                    <div className="flex justify-center space-x-2">
                      <span className="text-2xl">💳</span>
                      <span className="text-2xl">💰</span>
                      <span className="text-2xl">📱</span>
                    </div>
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
                  <button className="mt-3 bg-red-400 hover:bg-red-500 text-white py-2 px-4 rounded-full transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="text-5xl mb-4">🟫</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Vanilla Fudge
                  </h3>
                  <p className="text-red-400 font-semibold">$16.99</p>
                  <button className="mt-3 bg-red-400 hover:bg-red-500 text-white py-2 px-4 rounded-full transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="text-5xl mb-4">🍭</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Cake Pops
                  </h3>
                  <p className="text-red-400 font-semibold">$22.99</p>
                  <button className="mt-3 bg-red-400 hover:bg-red-500 text-white py-2 px-4 rounded-full transition-colors duration-300">
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
