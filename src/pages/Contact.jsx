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

    // Validate required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Create subject line with proper formatting
    const subjectMap = {
      general: "General Inquiry",
      "custom-order": "Custom Order",
      wholesale: "Wholesale Inquiry",
      feedback: "Feedback",
      other: "Other",
    };

    const emailSubject = `VanillaPod Confections - ${
      subjectMap[formData.subject] || formData.subject
    }`;

    // Create email body with all form data
    const emailBody = `Name: ${formData.name}
Email: ${formData.email}
Subject: ${subjectMap[formData.subject] || formData.subject}

Message:
${formData.message}`;

    // Create mailto link
    const mailtoLink = `mailto:sumaira@vanillapodconfections.ca?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Reset form after opening email client
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      alert(
        "Your email client should now be open with your message ready to send!"
      );
    }, 1000);
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto fade-in">
              We'd love to hear from you! Whether you have questions about our
              confections, want to place a custom order, or just want to say
              hello.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8 slide-in-left transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2 group">
                <h2
                  className="text-3xl font-bold text-gray-800 mb-6 text-glow group-hover:text-red-500 transition-colors duration-300"
                  style={{ fontFamily: "Lobster, cursive" }}
                >
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="fade-in">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-300 hover:border-red-300 focus:ring-2 focus:ring-red-400 focus:border-transparent hover:scale-105 hover:shadow-md"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="fade-in">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-300 hover:border-red-300 focus:ring-2 focus:ring-red-400 focus:border-transparent hover:scale-105 hover:shadow-md"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="fade-in">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-300 hover:border-red-300 focus:ring-2 focus:ring-red-400 focus:border-transparent hover:scale-105 hover:shadow-md"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="custom-order">Custom Order</option>
                      <option value="wholesale">Wholesale Inquiry</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="fade-in">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-300 resize-none hover:border-red-300 focus:ring-2 focus:ring-red-400 focus:border-transparent hover:scale-105 hover:shadow-md"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform shadow-lg pulse scale-in hover:bg-red-500 hover:scale-105 hover:-translate-y-2 hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Inspirational Quote */}
              <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-xl shadow-lg p-8 text-center slide-in-left delay-900 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2 group">
                <div className="text-6xl mb-6 bounce-in delay-1000 float group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  💌
                </div>
                <h3
                  className="text-2xl font-bold text-gray-800 mb-6 text-glow fade-in delay-1100 group-hover:text-red-500 transition-colors duration-300"
                  style={{ fontFamily: "Lobster, cursive" }}
                >
                  We're Here to Help
                </h3>
                <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-4 fade-in delay-1200 group-hover:text-gray-800 transition-colors duration-300">
                  "Every message we receive is like finding a sweet note in a
                  cookie jar. We read each one with care and respond with the
                  same love we put into our confections."
                </blockquote>
                <p className="text-sm text-gray-600 font-semibold fade-in delay-1300 group-hover:text-gray-700 transition-colors duration-300">
                  — Sumaira, Founder of VanillaPod Confections
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-xl shadow-lg p-8 slide-in-right delay-400 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2">
                <h2
                  className="text-3xl font-bold text-gray-800 mb-6 text-glow"
                  style={{ fontFamily: "Lobster, cursive" }}
                >
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center fade-in delay-500 group transition-all duration-300 hover:scale-105 hover:-translate-y-1"></div>
                  <div className="flex items-center fade-in delay-600 group transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                    <div className="text-2xl mr-4 pulse group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                      📞
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 group-hover:text-red-500 transition-colors duration-300">
                        Phone
                      </h4>
                      <a
                        href="https://wa.me/+17808632152"
                        className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                      >
                        (+1) 780-863-2152
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center fade-in delay-700 group transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                    <div className="text-2xl mr-4 pulse group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                      ✉️
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 group-hover:text-red-500 transition-colors duration-300">
                        Email
                      </h4>
                      <a
                        href="mailto:sumaira@vanillapodconfections.ca"
                        className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                      >
                        sumaira@vanillapodconfections.ca
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center fade-in delay-800 group transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                    <div className="text-2xl mr-4 pulse group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                      🕒
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 group-hover:text-red-500 transition-colors duration-300">
                        Hours
                      </h4>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        Mon-Sat: 9AM-7PM
                        <br />
                        Sunday: 10AM-5PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-xl shadow-lg p-8 slide-in-right delay-900 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2">
                <h3
                  className="text-2xl font-bold text-gray-800 mb-6 text-glow"
                  style={{ fontFamily: "Lobster, cursive" }}
                >
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  <div className="fade-in delay-1000 group transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                    <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-red-500 transition-colors duration-300">
                      Do you ship nationwide?
                    </h4>
                    <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                      Yes! We ship our confections nationwide with special
                      packaging to ensure freshness.
                    </p>
                  </div>
                  <div className="fade-in delay-1100 group transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                    <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-red-500 transition-colors duration-300">
                      Can you accommodate allergies?
                    </h4>
                    <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                      We offer various allergen-free options. Please contact us
                      to discuss your specific needs.
                    </p>
                  </div>
                  <div className="fade-in delay-1200 group transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                    <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-red-500 transition-colors duration-300">
                      How far in advance should I order for events?
                    </h4>
                    <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                      For custom orders and large events, we recommend placing
                      orders at least 2 weeks in advance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-r from-red-400 to-pink-400 rounded-xl shadow-lg p-8 text-white text-center slide-in-right delay-1300 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2 group">
                <h3
                  className="text-2xl font-bold mb-4 text-glow bounce-in delay-1400"
                  style={{ fontFamily: "Lobster, cursive" }}
                >
                  Follow Us
                </h3>
                <p className="mb-6 opacity-90 fade-in delay-1500 group-hover:opacity-100 transition-opacity duration-300">
                  Stay updated with our latest creations and behind-the-scenes
                  content!
                </p>
                <div className="flex justify-center space-x-4">
                  <button className="bg-white bg-opacity-20 p-3 rounded-full transition-all duration-300 pulse scale-in delay-1600 hover:bg-opacity-40 hover:scale-125 hover:rotate-12">
                    📘
                  </button>
                  <button className="bg-white bg-opacity-20 p-3 rounded-full transition-all duration-300 pulse scale-in delay-1700 hover:bg-opacity-40 hover:scale-125 hover:rotate-12">
                    📷
                  </button>
                  <button className="bg-white bg-opacity-20 p-3 rounded-full transition-all duration-300 pulse scale-in delay-1800 hover:bg-opacity-40 hover:scale-125 hover:rotate-12">
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
