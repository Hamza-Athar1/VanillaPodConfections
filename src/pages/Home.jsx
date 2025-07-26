import React from "react";
import SEO from "../components/SEO";

export default function Home() {
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Home - VanillaPod Confections",
    description:
      "Premium handcrafted vanilla confections made with Madagascar vanilla beans. Shop our collection of artisanal sweets.",
    url: "https://vanillapodconfections.com/",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "VanillaPod Confections",
      description:
        "Artisanal confectionery specializing in premium vanilla-based sweets",
    },
  };

  return (
    <>
      <SEO
        title="Home"
        description="Premium handcrafted vanilla confections made with Madagascar vanilla beans. Shop our collection of truffles, cupcakes, cookies, and custom confections. Free shipping on orders over $50."
        keywords="vanilla confections, artisanal sweets, handmade truffles, vanilla cupcakes, premium desserts, Madagascar vanilla, custom confections"
        url="https://vanillapodconfections.com/"
        structuredData={homeStructuredData}
      />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50">
        {/* Hero Section */}
        <div className="relative overflow-hidden min-h-screen">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="text-center">
              <h1
                className="text-5xl md:text-7xl font-bold text-gray-800 mb-6"
                style={{ fontFamily: "Lobster, cursive" }}
              >
                Welcome to VanillaPod
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Artisanal confections crafted with love, premium vanilla, and
                the finest ingredients. Experience the magic of handmade sweets
                that tell a story.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-red-400 hover:bg-red-500 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 transform shadow-lg">
                  Shop Our Collection
                </button>
                <button className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300">
                  Learn Our Story
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Products Section */}
        <div className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2
              className="text-4xl font-bold text-center text-gray-800 mb-12"
              style={{ fontFamily: "Lobster, cursive" }}
            >
              Featured Confections
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Product Card 1 */}
              <div className="bg-gradient-to-br from-pink-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                <div className="text-6xl text-center mb-4">🍫</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                  Vanilla Bean Truffles
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  Rich, creamy truffles infused with Madagascar vanilla beans
                </p>
                <div className="text-center">
                  <span className="text-2xl font-bold text-red-400">
                    $24.99
                  </span>
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                <div className="text-6xl text-center mb-4">🧁</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                  Vanilla Cupcakes
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  Fluffy vanilla cupcakes with silky buttercream frosting
                </p>
                <div className="text-center">
                  <span className="text-2xl font-bold text-red-400">
                    $18.99
                  </span>
                </div>
              </div>

              {/* Product Card 3 */}
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                <div className="text-6xl text-center mb-4">🍪</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                  Vanilla Cookies
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  Crispy vanilla cookies with a hint of sea salt
                </p>
                <div className="text-center">
                  <span className="text-2xl font-bold text-red-400">
                    $12.99
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Preview Section */}
        <div className="py-16 bg-gradient-to-br from-gray-50 to-pink-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2
                  className="text-4xl font-bold text-gray-800 mb-6"
                  style={{ fontFamily: "Lobster, cursive" }}
                >
                  Our Vanilla Story
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  At VanillaPod, we believe vanilla is far from ordinary. Our
                  journey began with a passion for authentic flavors and
                  traditional confectionery techniques. Each creation is a labor
                  of love, made in small batches with the finest vanilla pods
                  from around the world.
                </p>
                <button className="bg-red-400 hover:bg-red-500 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300">
                  Read More
                </button>
              </div>
              <div className="text-center">
                <div className="text-9xl mb-4">🌟</div>
                <p className="text-gray-600 italic">
                  "The finest vanilla confections I've ever tasted!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
