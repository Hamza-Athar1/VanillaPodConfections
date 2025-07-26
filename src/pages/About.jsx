import React from "react";
import SEO from "../components/SEO";

export default function About() {
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About VanillaPod Confections - Our Story",
    description:
      "Learn about VanillaPod Confections' journey, our founder Sumaira, and our commitment to premium vanilla confections.",
    url: "https://vanillapodconfections.com/about",
    mainEntity: {
      "@type": "Person",
      name: "Sumaira",
      jobTitle: "Founder & Head Pastry Chef",
      worksFor: {
        "@type": "Organization",
        name: "VanillaPod Confections",
      },
    },
  };

  return (
    <>
      <SEO
        title="About Us - Our Vanilla Story & Artisan Heritage"
        description="Discover the story behind VanillaPod Confections. Founded by pastry chef Sumaira in 2018, we specialize in handcrafted vanilla confections using authentic beans from Madagascar, Tahiti, and Mexico."
        keywords="about vanillapod confections, sumaira pastry chef, artisan confectionery story, handcrafted sweets, vanilla bean confections history"
        url="https://vanillapodconfections.com/about"
        structuredData={aboutStructuredData}
      />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50 pt-20">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1
              className="text-5xl font-bold text-gray-800 mb-4"
              style={{ fontFamily: "Lobster, cursive" }}
            >
              Our Story
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the passion and craftsmanship behind every VanillaPod
              confection
            </p>
          </div>

          {/* Main Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2
                className="text-3xl font-bold text-gray-800 mb-6"
                style={{ fontFamily: "Lobster, cursive" }}
              >
                The Beginning
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                VanillaPod was born from a simple belief: vanilla is anything
                but vanilla. Founded in 2018 by pastry chef Sumaira, our
                confectionery began as a quest to showcase the complex,
                sophisticated flavors of authentic vanilla beans from
                Madagascar, Tahiti, and Mexico.
              </p>
              <p className="text-gray-600 leading-relaxed">
                What started as weekend farmers market visits has grown into a
                beloved artisanal confectionery, but our commitment to quality
                and authenticity remains unchanged. Every confection is still
                handcrafted in small batches using traditional techniques and
                the finest ingredients.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center">
                <div className="text-8xl mb-6">👩‍🍳</div>
                <h3
                  className="text-2xl font-bold text-gray-800 mb-4"
                  style={{ fontFamily: "Lobster, cursive" }}
                >
                  Sumaira
                </h3>
                <p className="text-red-400 font-semibold mb-4">
                  Founder & Head Pastry Chef
                </p>
                <p className="text-gray-600 leading-relaxed">
                  "I've always believed that the best confections tell a story.
                  Each vanilla pod we use has traveled thousands of miles and
                  carries the essence of its origin. My job is to honor that
                  journey and create something truly magical."
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2
              className="text-3xl font-bold text-center text-gray-800 mb-12"
              style={{ fontFamily: "Lobster, cursive" }}
            >
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🌱</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Sustainability
                </h3>
                <p className="text-gray-600">
                  We source our vanilla beans directly from farmers, ensuring
                  fair trade practices and sustainable farming methods that
                  protect the environment.
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">✨</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Quality
                </h3>
                <p className="text-gray-600">
                  Every confection is made with premium ingredients and
                  traditional techniques. We never compromise on quality, even
                  as we grow.
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">❤️</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Passion
                </h3>
                <p className="text-gray-600">
                  Our team's passion for confectionery shines through in every
                  creation. We love what we do, and we think you can taste the
                  difference.
                </p>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="bg-gradient-to-r from-red-400 to-pink-400 rounded-xl shadow-lg p-8 text-white mb-16">
            <h2
              className="text-3xl font-bold text-center mb-12"
              style={{ fontFamily: "Lobster, cursive" }}
            >
              Our Crafting Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl mb-3">🌍</div>
                <h4 className="font-bold mb-2">Source</h4>
                <p className="text-sm opacity-90">
                  Premium vanilla beans from Madagascar, Tahiti, and Mexico
                </p>
              </div>
              <div>
                <div className="text-4xl mb-3">🧪</div>
                <h4 className="font-bold mb-2">Extract</h4>
                <p className="text-sm opacity-90">
                  Traditional extraction methods to capture pure vanilla essence
                </p>
              </div>
              <div>
                <div className="text-4xl mb-3">👨‍🍳</div>
                <h4 className="font-bold mb-2">Craft</h4>
                <p className="text-sm opacity-90">
                  Handcrafted in small batches using time-honored techniques
                </p>
              </div>
              <div>
                <div className="text-4xl mb-3">📦</div>
                <h4 className="font-bold mb-2">Deliver</h4>
                <p className="text-sm opacity-90">
                  Carefully packaged and delivered fresh to your door
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white rounded-xl shadow-lg p-8">
            <h2
              className="text-3xl font-bold text-gray-800 mb-4"
              style={{ fontFamily: "Lobster, cursive" }}
            >
              Join Our Sweet Journey
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Follow us on social media to see behind-the-scenes content and be
              the first to know about new flavors.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-red-400 hover:bg-red-500 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300">
                Visit Our Shop
              </button>
              <button className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
