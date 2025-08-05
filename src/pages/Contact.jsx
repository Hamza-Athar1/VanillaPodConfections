import React, { useState } from "react";
import SEO from "../components/SEO";

export default function Contact() {
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact VanillaPod Confections",
    description:
      "Get in touch with VanillaPod Confections for custom orders, wholesale inquiries, or general questions about our artisanal confections.",
    url: "https://vanillapodconfections.com/contact",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <SEO
        title="Contact Us - Get in Touch with VanillaPod Confections"
        description="Contact VanillaPod Confections for custom orders, wholesale inquiries, or questions about our handcrafted vanilla confections. Located at 123 Sweet Street, Confection City."
        keywords="contact vanillapod confections, custom orders, wholesale inquiries, artisan confections contact, vanilla confections business hours"
        url="https://vanillapodconfections.com/contact"
        structuredData={contactStructuredData}
      />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50 pt-20">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1
              className="text-5xl font-bold text-gray-800 mb-4 slide-in-top"
              style={{ fontFamily: "Lobster, cursive" }}
            >
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto fade-in delay-200">
              We'd love to hear from you! Whether you have questions about our
              confections, want to place a custom order, or just want to say
              hello.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8 slide-in-left delay-300 hover-lift">
                <h2
                  className="text-3xl font-bold text-gray-800 mb-6 text-glow"
                  style={{ fontFamily: "Lobster, cursive" }}
                >
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="fade-in delay-400">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent transition-colors duration-300 hover-lift"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="fade-in delay-500">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent transition-colors duration-300 hover-lift"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="fade-in delay-600">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent transition-colors duration-300 hover-lift"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="custom-order">Custom Order</option>
                      <option value="wholesale">Wholesale Inquiry</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="fade-in delay-700">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent transition-colors duration-300 resize-none hover-lift"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-400 hover:bg-red-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover-lift transform shadow-lg pulse hover-glow scale-in delay-800"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Inspirational Quote */}
              <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-xl shadow-lg p-8 text-center slide-in-left delay-900 hover-lift">
                <div className="text-6xl mb-6 bounce-in delay-1000 float">
                  💌
                </div>
                <h3
                  className="text-2xl font-bold text-gray-800 mb-6 text-glow fade-in delay-1100"
                  style={{ fontFamily: "Lobster, cursive" }}
                >
                  We're Here to Help
                </h3>
                <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-4 fade-in delay-1200">
                  "Every message we receive is like finding a sweet note in a
                  cookie jar. We read each one with care and respond with the
                  same love we put into our confections."
                </blockquote>
                <p className="text-sm text-gray-600 font-semibold fade-in delay-1300">
                  — Sumaira, Founder of VanillaPod Confections
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-xl shadow-lg p-8 slide-in-right delay-400 hover-lift">
                <h2
                  className="text-3xl font-bold text-gray-800 mb-6 text-glow"
                  style={{ fontFamily: "Lobster, cursive" }}
                >
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center fade-in delay-500 hover-scale">
                    <div className="text-2xl mr-4 pulse">📍</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Address</h4>
                      <p className="text-gray-600">
                        123 Sweet Street, Confection City, CC 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center fade-in delay-600 hover-scale">
                    <div className="text-2xl mr-4 pulse">📞</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone</h4>
                      <p className="text-gray-600">(555) 123-SWEET</p>
                    </div>
                  </div>
                  <div className="flex items-center fade-in delay-700 hover-scale">
                    <div className="text-2xl mr-4 pulse">✉️</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">hello@vanillapod.com</p>
                    </div>
                  </div>
                  <div className="flex items-center fade-in delay-800 hover-scale">
                    <div className="text-2xl mr-4 pulse">🕒</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Hours</h4>
                      <p className="text-gray-600">
                        Mon-Sat: 9AM-7PM
                        <br />
                        Sunday: 10AM-5PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-xl shadow-lg p-8 slide-in-right delay-900 hover-lift">
                <h3
                  className="text-2xl font-bold text-gray-800 mb-6 text-glow"
                  style={{ fontFamily: "Lobster, cursive" }}
                >
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  <div className="fade-in delay-1000 hover-scale">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Do you ship nationwide?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Yes! We ship our confections nationwide with special
                      packaging to ensure freshness.
                    </p>
                  </div>
                  <div className="fade-in delay-1100 hover-scale">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Can you accommodate allergies?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      We offer various allergen-free options. Please contact us
                      to discuss your specific needs.
                    </p>
                  </div>
                  <div className="fade-in delay-1200 hover-scale">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      How far in advance should I order for events?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      For custom orders and large events, we recommend placing
                      orders at least 2 weeks in advance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-r from-red-400 to-pink-400 rounded-xl shadow-lg p-8 text-white text-center slide-in-right delay-1300 hover-lift hover-glow">
                <h3
                  className="text-2xl font-bold mb-4 text-glow bounce-in delay-1400"
                  style={{ fontFamily: "Lobster, cursive" }}
                >
                  Follow Us
                </h3>
                <p className="mb-6 opacity-90 fade-in delay-1500">
                  Stay updated with our latest creations and behind-the-scenes
                  content!
                </p>
                <div className="flex justify-center space-x-4">
                  <button className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all duration-300 hover-scale pulse scale-in delay-1600">
                    📘
                  </button>
                  <button className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all duration-300 hover-scale pulse scale-in delay-1700">
                    📷
                  </button>
                  <button className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all duration-300 hover-scale pulse scale-in delay-1800">
                    🐦
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
