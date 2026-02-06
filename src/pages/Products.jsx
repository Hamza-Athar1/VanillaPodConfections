import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchProducts, fetchImageUrl } from "../utils/fetchFunctions";
import SEO from "../components/SEO";
import { useCart } from "../context/CartContext";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use global cart context
  const { addToCart, getCartItemCount, getCartTotal } = useCart();

  const productsStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Premium Vanilla Confections - VanillaPod",
    description:
      "Browse our complete collection of handcrafted vanilla confections including truffles, cupcakes, cookies, and more.",
    url: "https://vanillapodconfections.com/products",
  };

  useEffect(() => {
    fetchProducts()
      .then(async (products) => {
        let data = products.rows;
        console.log(data);

        // Fetch image URLs for products with imageID
        const productsWithImages = await Promise.all(
          data.map(async (product) => {
            if (product.imageID) {
              try {
                const imageUrl = await fetchImageUrl(product.imageID);
                return { ...product, imageUrl };
              } catch (err) {
                console.error(
                  `Error fetching image for product ${product.id}:`,
                  err,
                );
                return product;
              }
            }
            return product;
          }),
        );

        setProducts(productsWithImages);

        // Extract unique categories from products
        const uniqueCategories = [
          ...new Set(productsWithImages.map((p) => p.category)),
        ];
        setCategories(["All", ...uniqueCategories.sort()]);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      });
  }, []);

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
    addToCart(product);
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto fade-in">
              Discover our handcrafted collection of vanilla-inspired
              confections, made with love and the finest ingredients from around
              the world.
            </p>
            {getCartItemCount() > 0 && (
              <div className="mt-4 inline-flex items-center bg-red-100 text-red-600 px-4 py-2 rounded-full bounce-in">
                <span className="text-lg mr-2">🛒</span>
                <span className="font-semibold">
                  {getCartItemCount()} item{getCartItemCount() !== 1 ? "s" : ""}{" "}
                  in cart
                </span>
              </div>
            )}
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4 bounce-in">⏳</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Loading our delicious confections...
              </h3>
              <p className="text-gray-600">
                Please wait while we fetch the latest products
              </p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-12 bg-red-50 rounded-xl mx-4">
              <div className="text-6xl mb-4">❌</div>
              <h3 className="text-2xl font-bold text-red-800 mb-2">
                Oops! Something went wrong
              </h3>
              <p className="text-red-600 mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="bg-red-400 hover:bg-red-500 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Category Filter - Only show when not loading */}
          {!loading && !error && (
            <div className="flex flex-wrap justify-center gap-2 mb-12 slide-in-bottom">
              {categories.map((category, index) => (
                <button
                  key={index}
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
          )}

          {/* Results Info - Only show when not loading */}
          {!loading && !error && (
            <div className="text-center mb-8 fade-in">
              <p className="text-gray-600">
                {selectedCategory === "All"
                  ? `Showing all ${filteredProducts.length} confections`
                  : `Showing ${filteredProducts.length} confection${
                      filteredProducts.length !== 1 ? "s" : ""
                    } in ${selectedCategory}`}
              </p>
            </div>
          )}

          {/* Products Grid - Only show when not loading */}
          {!loading && !error && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className={`bg-white pt-5 rounded-xl shadow-lg transition-all duration-300 overflow-hidden group scale-in hover:shadow-xl hover:scale-105 hover:-translate-y-2 ${
                      !product.available ? "opacity-60" : ""
                    }`}
                    style={{
                      animationDelay: `${0.6 + (index % 6) * 0.1}s`,
                      animationFillMode: "both",
                    }}
                  >
                    {/* Featured Badge */}
                    {product.featured && (
                      <div className="absolute top-2 right-2 bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-sm font-bold z-10">
                        ⭐ Featured
                      </div>
                    )}

                    {/* Product Image */}
                    {product.imageUrl ? (
                      <div className="h-48 w-auto overflow-hidden mb-2">
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="h-48 bg-gradient-to-br from-pink-100 to-orange-100 flex items-center justify-center rounded-lg">
                        <div className="text-8xl opacity-50">🍮</div>
                      </div>
                    )}

                    <div className="p-6">
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
                            ${product.price.toFixed(2)}
                          </span>
                          <button
                            onClick={() => handleAddToCart(product)}
                            disabled={!product.available}
                            className={`text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 transform shadow-md ${
                              product.available
                                ? "bg-red-400 hover:bg-red-500 hover:scale-105 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                                : "bg-gray-400 cursor-not-allowed"
                            }`}
                          >
                            {product.available ? "Add to Cart" : "Out of Stock"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12 fade-in">
                  <div className="text-6xl mb-4 bounce-in">🍮</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 slide-in-top">
                    No confections found
                  </h3>
                  <p className="text-gray-600 mb-4 fade-in">
                    We couldn't find any confections in the "{selectedCategory}"
                    category.
                  </p>
                  <button
                    onClick={() => handleCategoryChange("All")}
                    className="bg-red-400 hover:bg-red-500 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 hover-lift hover-glow scale-in"
                  >
                    View All Products
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Call to Action - Only show when not loading */}
          {!loading && !error && (
            <div className="text-center mt-16 bg-white rounded-xl shadow-lg p-8 slide-in-bottom transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2">
              <h2
                className="text-3xl font-bold text-gray-800 mb-4 text-glow"
                style={{ fontFamily: "Lobster, cursive" }}
              >
                Can't Find What You're Looking For?
              </h2>
              <p className="text-lg text-gray-600 mb-6 fade-in">
                We offer custom confections for special occasions and events.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-red-400 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform shadow-lg hover:bg-red-500 hover:scale-105 hover:-translate-y-2 hover:shadow-xl pulse"
              >
                Contact Us for Custom Orders
              </Link>
            </div>
          )}

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
                    Total: ${getCartTotal().toFixed(2)}
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
