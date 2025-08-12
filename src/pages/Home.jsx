import { Link } from "react-router-dom";
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
        <div className="relative overflow-hidden min-h-screen ">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
              {/* Hero Content */}
              <div className="text-center md:text-center lg:text-left slide-in-left">
                <h1
                  className="text-5xl md:text-8xl font-bold text-gray-800 mb-6 scale-in"
                  style={{ fontFamily: "Lobster, cursive" }}
                >
                  Welcome to VanillaPod
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl lg:max-w-none fade-in delay-200">
                  Artisanal confections crafted with love, premium vanilla, and
                  the finest ingredients. Experience the magic of handmade
                  sweets that tell a story.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start slide-in-bottom delay-400">
                  <Link to="/products">
                    <button className="bg-red-400 hover:bg-red-500 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:-translate-y-1 transform shadow-lg hover-lift">
                      Shop Our Collection
                    </button>
                  </Link>
                  <Link to="/about">
                    <button className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover-scale">
                      Learn Our Story
                    </button>
                  </Link>
                </div>
              </div>

              {/* Hero Image Section */}
              <div className=" hidden flex items-center justify-center lg:justify-end slide-in-right lg:flex">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30 w-full max-w-md h-96 flex items-center justify-center float hover-glow">
                  {/* Placeholder for image */}
                  <div className="text-center">
                    <div className="text-8xl mb-4 swing">🍰</div>
                    <p className="text-gray-600 font-medium fade-in delay-300">
                      Hero Image Placeholder
                    </p>
                    <p className="text-sm text-gray-500 mt-2 fade-in delay-500">
                      Add your beautiful confection image here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Products Section */}
        <div className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2
              className="text-4xl font-bold text-center text-gray-800 mb-12 fade-in"
              style={{ fontFamily: "Lobster, cursive" }}
            >
              Featured Confections
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Product Card 1 */}
              <div className="bg-gradient-to-br from-pink-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 bounce-in hover:scale-105 hover-glow">
                <div className="text-6xl text-center mb-4 pulse">🍫</div>
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
              <div
                className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 bounce-in hover:scale-105 hover-glow"
                style={{ animationDelay: "0.2s" }}
              >
                <div
                  className="text-6xl text-center mb-4 pulse"
                  style={{ animationDelay: "0.3s" }}
                >
                  🧁
                </div>
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
              <div
                className="bg-gradient-to-br from-yellow-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 bounce-in hover:scale-105 hover-glow"
                style={{ animationDelay: "0.4s" }}
              >
                <div
                  className="text-6xl text-center mb-4 pulse"
                  style={{ animationDelay: "0.5s" }}
                >
                  🍪
                </div>
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

        {/* Review Section */}
        <div className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 relative overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute top-10 left-10 text-6xl opacity-10 rotate-12">
            🍰
          </div>
          <div className="absolute top-20 right-20 text-4xl opacity-10 -rotate-12">
            🧁
          </div>
          <div className="absolute bottom-20 left-20 text-5xl opacity-10 rotate-45">
            🍪
          </div>
          <div className="absolute bottom-10 right-10 text-3xl opacity-10 -rotate-45">
            🍫
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2
                className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 fade-in"
                style={{ fontFamily: "Lobster, cursive" }}
              >
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto fade-in delay-200">
                Don't just take our word for it - hear from our delighted
                customers who have experienced the magic of our handcrafted
                confections
              </p>
              <div className="mt-6 flex justify-center items-center space-x-2 fade-in delay-300">
                <div className="flex text-yellow-400 text-2xl">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
                <span className="text-lg font-bold text-gray-800">4.9/5</span>
                <span className="text-gray-600">• 200+ Reviews</span>
              </div>
            </div>

            {/* Reviews Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Review Card 1 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 slide-in-left hover-lift border border-white/20 relative group">
                <div className="absolute -top-4 -right-4 bg-red-400 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  🏆
                </div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-yellow-400 text-xl">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                  <span className="text-sm font-bold bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                    5.0 ★
                  </span>
                </div>
                <div className="relative mb-6">
                  <div className="text-red-400 text-4xl absolute -top-2 -left-2 opacity-30">
                    ❝
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed italic pl-6">
                    The vanilla bean truffles are absolutely divine! You can
                    taste the quality of the Madagascar vanilla in every bite.
                    These aren't just confections - they're little pieces of
                    heaven.
                  </p>
                </div>
                <div className="flex items-center mt-8 pt-6 border-t border-gray-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-300 to-red-300 rounded-full flex items-center justify-center text-2xl shadow-lg">
                    👩‍💼
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-800 text-lg">
                      Sarah Johnson
                    </h4>
                    <p className="text-red-400 font-medium">Food Blogger</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Verified Purchase
                    </p>
                  </div>
                </div>
              </div>

              {/* Review Card 2 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 scale-in delay-200 hover-lift border border-white/20 relative group lg:-mt-8">
                <div className="absolute -top-4 -right-4 bg-purple-400 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  💎
                </div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-yellow-400 text-xl">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                  <span className="text-sm font-bold bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                    5.0 ★
                  </span>
                </div>
                <div className="relative mb-6">
                  <div className="text-purple-400 text-4xl absolute -top-2 -left-2 opacity-30">
                    ❝
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed italic pl-6">
                    I ordered custom cupcakes for my wedding and they were the
                    highlight of the dessert table. Beautiful presentation and
                    the most incredible vanilla flavor I've ever experienced!
                  </p>
                </div>
                <div className="flex items-center mt-8 pt-6 border-t border-gray-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full flex items-center justify-center text-2xl shadow-lg">
                    👰
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-800 text-lg">
                      Emily Chen
                    </h4>
                    <p className="text-purple-400 font-medium">
                      Bride & Mother
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Custom Order</p>
                  </div>
                </div>
              </div>

              {/* Review Card 3 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 slide-in-right delay-400 hover-lift border border-white/20 relative group">
                <div className="absolute -top-4 -right-4 bg-orange-400 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  👨‍🍳
                </div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-yellow-400 text-xl">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                  <span className="text-sm font-bold bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                    5.0 ★
                  </span>
                </div>
                <div className="relative mb-6">
                  <div className="text-orange-400 text-4xl absolute -top-2 -left-2 opacity-30">
                    ❝
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed italic pl-6">
                    As a pastry chef myself, I can appreciate true craftsmanship
                    when I taste it. VanillaPod's attention to detail and use of
                    premium ingredients is exceptional. Simply outstanding!
                  </p>
                </div>
                <div className="flex items-center mt-8 pt-6 border-t border-gray-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full flex items-center justify-center text-2xl shadow-lg">
                    👨‍🍳
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-800 text-lg">
                      Marcus Rivera
                    </h4>
                    <p className="text-orange-400 font-medium">
                      Executive Pastry Chef
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Industry Expert
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-6 hover-scale fade-in delay-500">
                <div className="text-3xl mb-2">📦</div>
                <div className="text-2xl font-bold text-gray-800">500+</div>
                <div className="text-sm text-gray-600">Orders Delivered</div>
              </div>
              <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-6 hover-scale fade-in delay-600">
                <div className="text-3xl mb-2">😊</div>
                <div className="text-2xl font-bold text-gray-800">98%</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-6 hover-scale fade-in delay-700">
                <div className="text-3xl mb-2">🏅</div>
                <div className="text-2xl font-bold text-gray-800">4.9/5</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-6 hover-scale fade-in delay-800">
                <div className="text-3xl mb-2">🔄</div>
                <div className="text-2xl font-bold text-gray-800">95%</div>
                <div className="text-sm text-gray-600">Repeat Customers</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center fade-in delay-900">
              <p className="text-lg text-gray-600 mb-6">
                Join hundreds of satisfied customers who trust VanillaPod for
                their sweetest moments
              </p>
              <Link
                to="/products"
                className="inline-block bg-gradient-to-r from-red-400 to-pink-400 hover:from-red-500 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover-lift shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Experience Our Confections Today
              </Link>
            </div>
          </div>
        </div>

        {/* About Preview Section */}
        <div className="py-16 bg-gradient-to-br from-gray-50 to-pink-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="slide-in-left">
                <h2
                  className="text-4xl font-bold text-gray-800 mb-6 rotate-in"
                  style={{ fontFamily: "Lobster, cursive" }}
                >
                  Our Vanilla Story
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed fade-in delay-200">
                  At VanillaPod, we believe vanilla is far from ordinary. Our
                  journey began with a passion for authentic flavors and
                  traditional confectionery techniques. Each creation is a labor
                  of love, made in small batches with the finest vanilla pods
                  from around the world.
                </p>
                <Link
                  to="/about"
                  className="bg-red-400 hover:bg-red-500 text-gray-500 font-semibold py-2 px-6 rounded-full transition-colors duration-300 hover-lift shimmer"
                >
                  Read More
                </Link>
              </div>
              <div className="text-center slide-in-right delay-300">
                <div className="text-9xl mb-4 bounce-in delay-400">🌟</div>
                <p className="text-gray-600 italic fade-in delay-500">
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
