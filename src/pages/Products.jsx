import React from "react";
import SEO from "../components/SEO";

export default function Products() {
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

  return (
    <>
      <SEO
        title="Premium Vanilla Confections & Artisanal Sweets"
        description="Browse our complete collection of handcrafted vanilla confections including premium truffles, cupcakes, cookies, macarons, and custom confections. Made with Madagascar vanilla beans."
        keywords="vanilla confections catalog, premium truffles, vanilla cupcakes, artisanal cookies, handmade macarons, vanilla fudge, cake pops, custom confections"
        url="https://vanillapodconfections.com/products"
        structuredData={productsStructuredData}
      />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50 pt-20">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1
              className="text-5xl font-bold text-gray-800 mb-4"
              style={{ fontFamily: "Lobster, cursive" }}
            >
              Our Confections
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our handcrafted collection of vanilla-inspired
              confections, made with love and the finest ingredients from around
              the world.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white transition-all duration-300 font-medium"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="text-6xl text-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {product.emoji}
                  </div>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-3">
                      {product.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-red-400">
                        {product.price}
                      </span>
                      <button className="bg-red-400 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 hover:-translate-y-1 transform shadow-md">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 bg-white rounded-xl shadow-lg p-8">
            <h2
              className="text-3xl font-bold text-gray-800 mb-4"
              style={{ fontFamily: "Lobster, cursive" }}
            >
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We offer custom confections for special occasions and events.
            </p>
            <button className="bg-red-400 hover:bg-red-500 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 transform shadow-lg">
              Contact Us for Custom Orders
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
