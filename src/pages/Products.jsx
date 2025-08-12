import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const productsStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Premium Vanilla Confections - VanillaPod",
    description:
      "Browse our complete collection of handcrafted vanilla confections including truffles, cupcakes, cookies, and more.",
    url: "https://vanillapodconfections.com/products",
  };

  const products = [
    {
      id: 1,
      name: "Vanilla Bean Truffles",
      price: "$24.99",
      emoji: "🍫",
      description:
        "Rich, creamy truffles infused with Madagascar vanilla beans",
      category: "Chocolates",
    },
    {
      id: 2,
      name: "Vanilla Cupcakes",
      price: "$18.99",
      emoji: "🧁",
      description: "Fluffy vanilla cupcakes with silky buttercream frosting",
      category: "Baked Goods",
    },
    {
      id: 3,
      name: "Vanilla Cookies",
      price: "$12.99",
      emoji: "🍪",
      description: "Crispy vanilla cookies with a hint of sea salt",
      category: "Cookies",
    },
    {
      id: 4,
      name: "Vanilla Macarons",
      price: "$32.99",
      emoji: "🥮",
      description: "Delicate French macarons with vanilla ganache filling",
      category: "Macarons",
    },
    {
      id: 5,
      name: "Vanilla Fudge",
      price: "$16.99",
      emoji: "🟫",
      description: "Smooth and creamy vanilla fudge cut into perfect squares",
      category: "Fudge",
    },
    {
      id: 6,
      name: "Vanilla Cake Pops",
      price: "$22.99",
      emoji: "🍭",
      description: "Bite-sized vanilla cake pops dipped in white chocolate",
      category: "Cake Pops",
    },
  ];

  const categories = [
    "All",
    "Chocolates",
    "Baked Goods",
    "Cookies",
    "Macarons",
    "Fudge",
    "Cake Pops",
  ];

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Handle category filter
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Handle add to cart
  const handleAddToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    // Show success message
    alert(`${product.name} added to cart!`);
  };

  // Get cart item count
  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <>
      <SEO
        title="Premium Vanilla Confections & Artisanal Sweets"
        description="Browse our complete collection of handcrafted vanilla confections including premium truffles, cupcakes, cookies, macarons, and custom confections. Made with Madagascar vanilla beans."
        keywords="vanilla confections catalog, premium truffles, vanilla cupcakes, artisanal cookies, handmade macarons, vanilla fudge, cake pops, custom confections"
        url="https://vanillapodconfections.com/products"
        structuredData={productsStructuredData}
      />
      <div className="bg-gradient-to-br from-pink-50 to-orange-50 pt-20 pb-8">
        <div className="max-w-6xl mx-auto px-4 py-8 min-h-[calc(100vh-5rem)]">
          {/* Header */}
          <div className="text-center mb-12">
            <h1
              className="text-5xl font-bold text-gray-800 mb-4 slide-in-top"
              style={{ fontFamily: "Lobster, cursive" }}
            >
              Our Confections
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto fade-in delay-200">
              Discover our handcrafted collection of vanilla-inspired
              confections, made with love and the finest ingredients from around
              the world.
            </p>
            {getCartItemCount() > 0 && (
              <div className="mt-4 inline-flex items-center bg-red-100 text-red-600 px-4 py-2 rounded-full bounce-in delay-300">
                <span className="text-lg mr-2">🛒</span>
                <span className="font-semibold">
                  {getCartItemCount()} item{getCartItemCount() !== 1 ? "s" : ""}{" "}
                  in cart
                </span>
              </div>
            )}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 slide-in-bottom delay-300">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full border-2 border-red-400 transition-all duration-300 font-medium hover-scale ${
                  selectedCategory === category
                    ? "bg-red-400 text-white"
                    : "text-red-400 hover:bg-red-400 hover:text-white"
                }`}
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Info */}
          <div className="text-center mb-8 fade-in delay-400">
            <p className="text-gray-600">
              {selectedCategory === "All"
                ? `Showing all ${filteredProducts.length} confections`
                : `Showing ${filteredProducts.length} confection${
                    filteredProducts.length !== 1 ? "s" : ""
                  } in ${selectedCategory}`}
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-lg transition-all duration-300 overflow-hidden group scale-in hover:shadow-xl hover:scale-105 hover:-translate-y-2"
                  style={{
                    animationDelay: `${0.6 + (index % 6) * 0.1}s`,
                    animationFillMode: "both",
                  }}
                >
                  <div className="p-6">
                    <div className="text-6xl text-center mb-4 float pulse group-hover:scale-110 transition-transform duration-300">
                      {product.emoji}
                    </div>
                    <div className="text-center">
                      <span className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-3 shimmer group-hover:bg-red-200 group-hover:text-red-700 transition-colors duration-300">
                        {product.category}
                      </span>
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-500 transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-red-400 text-glow group-hover:text-red-500 transition-colors duration-300">
                          {product.price}
                        </span>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="bg-red-400 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 transform shadow-md hover:bg-red-500 hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12 fade-in">
                <div className="text-6xl mb-4 bounce-in">🍮</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 slide-in-top delay-200">
                  No confections found
                </h3>
                <p className="text-gray-600 mb-4 fade-in delay-300">
                  We couldn't find any confections in the "{selectedCategory}"
                  category.
                </p>
                <button
                  onClick={() => handleCategoryChange("All")}
                  className="bg-red-400 hover:bg-red-500 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 hover-lift hover-glow scale-in delay-400"
                >
                  View All Products
                </button>
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 bg-white rounded-xl shadow-lg p-8 slide-in-bottom delay-500 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2">
            <h2
              className="text-3xl font-bold text-gray-800 mb-4 text-glow"
              style={{ fontFamily: "Lobster, cursive" }}
            >
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-gray-600 mb-6 fade-in delay-600">
              We offer custom confections for special occasions and events.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-red-400 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform shadow-lg hover:bg-red-500 hover:scale-105 hover:-translate-y-2 hover:shadow-xl pulse"
            >
              Contact Us for Custom Orders
            </Link>
          </div>

          {/* Cart Summary (if items in cart) */}
          {getCartItemCount() > 0 && (
            <div className="fixed bottom-4 right-4 bg-red-400 text-white p-4 rounded-xl shadow-lg slide-in-right float transition-all duration-300 hover:bg-red-500 hover:scale-105 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center space-x-3">
                <span className="text-2xl pulse">🛒</span>
                <div>
                  <p className="font-semibold">
                    {getCartItemCount()} item
                    {getCartItemCount() !== 1 ? "s" : ""}
                  </p>
                  <p className="text-sm opacity-90">
                    Total: $
                    {cart
                      .reduce(
                        (total, item) =>
                          total +
                          parseFloat(item.price.replace("$", "")) *
                            item.quantity,
                        0
                      )
                      .toFixed(2)}
                  </p>
                </div>
                <Link
                  to="/cart"
                  className="bg-white text-red-400 px-3 py-1 rounded-full text-sm font-semibold transition-all duration-200 hover:bg-gray-100 hover:scale-110"
                >
                  View Cart
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
