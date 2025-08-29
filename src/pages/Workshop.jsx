import React, { useState } from "react";
import SEO from "../components/SEO";
import { useCart } from "../context/CartContext";

export default function Workshop() {
  // Use global cart context
  const { addToCart } = useCart();

  const workshopStructuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "VanillaPod Confections Workshop",
    description:
      "Learn the art of confectionery making with hands-on workshops led by professional confectioners at VanillaPod Confections.",
    url: "https://vanillapodconfections.com/workshop",
    provider: {
      "@type": "Organization",
      name: "VanillaPod Confections",
    },
  };

  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    workshop: "",
    date: "",
    participants: 1,
    message: "",
  });

  const workshops = [
    {
      id: 1,
      title: "Vanilla Cupcake Masterclass",
      duration: "3 hours",
      price: "$85",
      capacity: "8 students",
      level: "Beginner",
      emoji: "🧁",
      description:
        "Learn to make perfect vanilla cupcakes with silky buttercream frosting. Includes decorating techniques and flavor variations.",
      includes: [
        "All ingredients and equipment",
        "Recipe cards to take home",
        "6 cupcakes to enjoy",
        "Professional tips and techniques",
      ],
      nextDates: ["March 15", "March 22", "March 29"],
    },
    {
      id: 2,
      title: "Chocolate Truffle Workshop",
      duration: "2.5 hours",
      price: "$95",
      capacity: "6 students",
      level: "Intermediate",
      emoji: "🍫",
      description:
        "Master the art of creating smooth, decadent chocolate truffles with various coatings and flavor infusions.",
      includes: [
        "Premium chocolate and ingredients",
        "Tempering techniques",
        "12 truffles to take home",
        "Flavor pairing guide",
      ],
      nextDates: ["March 18", "March 25", "April 1"],
    },
    {
      id: 3,
      title: "French Macaron Intensive",
      duration: "4 hours",
      price: "$120",
      capacity: "6 students",
      level: "Advanced",
      emoji: "🥮",
      description:
        "Perfect your macaron technique with professional methods, troubleshooting tips, and creative filling recipes.",
      includes: [
        "Professional equipment usage",
        "Troubleshooting guide",
        "18 macarons to take home",
        "Advanced techniques manual",
      ],
      nextDates: ["March 20", "March 27", "April 3"],
    },
    {
      id: 4,
      title: "Cake Decorating Fundamentals",
      duration: "3.5 hours",
      price: "$110",
      capacity: "8 students",
      level: "Beginner",
      emoji: "🎂",
      description:
        "Learn essential cake decorating skills including buttercream piping, fondant basics, and design principles.",
      includes: [
        "Complete cake to decorate",
        "Professional piping tools",
        "Decorated cake to take home",
        "Design template collection",
      ],
      nextDates: ["March 16", "March 23", "March 30"],
    },
    {
      id: 5,
      title: "Artisan Chocolate Making",
      duration: "5 hours",
      price: "$150",
      capacity: "4 students",
      level: "Advanced",
      emoji: "🍬",
      description:
        "Comprehensive course covering bean-to-bar chocolate making, molding techniques, and artisan presentation.",
      includes: [
        "Bean-to-bar process",
        "Professional molds",
        "24 chocolates to take home",
        "Chocolate making kit",
      ],
      nextDates: ["March 21", "March 28", "April 4"],
    },
    {
      id: 6,
      title: "Kids' Confectionery Fun",
      duration: "2 hours",
      price: "$45",
      capacity: "10 children",
      level: "Kids (8-14)",
      emoji: "🍭",
      description:
        "A fun, safe introduction to confectionery for children. Make colorful treats and learn basic techniques.",
      includes: [
        "Kid-friendly recipes",
        "Safe equipment",
        "Treats to take home",
        "Fun activity booklet",
      ],
      nextDates: ["March 19", "March 26", "April 2"],
    },
  ];

  const handleBookingChange = (e) => {
    setBookingForm({
      ...bookingForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (
      !bookingForm.name.trim() ||
      !bookingForm.email.trim() ||
      !bookingForm.workshop ||
      !bookingForm.date.trim()
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Find selected workshop details
    const workshopDetails = workshops.find(
      (w) => w.id === parseInt(bookingForm.workshop)
    );

    if (!workshopDetails) {
      alert("Please select a valid workshop.");
      return;
    }

    // Add workshop to cart
    const workshopCartItem = {
      id: `workshop-${workshopDetails.id}-${Date.now()}`, // Unique ID for workshop booking
      name: `${workshopDetails.title} - ${bookingForm.date}`,
      description: `Workshop booking for ${
        bookingForm.participants
      } participant${bookingForm.participants > 1 ? "s" : ""} on ${
        bookingForm.date
      }`,
      price:
        parseFloat(workshopDetails.price.replace("$", "")) *
        bookingForm.participants,
      quantity: 1,
      emoji: workshopDetails.emoji,
      sku: `WS${workshopDetails.id}`,
      category: "Workshop",
      workshopDetails: {
        originalWorkshop: workshopDetails,
        bookingInfo: bookingForm,
        date: bookingForm.date,
        participants: bookingForm.participants,
      },
    };

    addToCart(workshopCartItem);

    // Create email subject and body
    const emailSubject = `Workshop Booking Request - ${workshopDetails?.title}`;
    const emailBody = `Workshop Booking Request

Name: ${bookingForm.name}
Email: ${bookingForm.email}
Phone: ${bookingForm.phone}
Workshop: ${workshopDetails?.title}
Preferred Date: ${bookingForm.date}
Number of Participants: ${bookingForm.participants}
Total Price: ${workshopDetails.price} x ${bookingForm.participants} = $${(
      parseFloat(workshopDetails.price.replace("$", "")) *
      bookingForm.participants
    ).toFixed(2)}

Additional Message:
${bookingForm.message}

Workshop Details:
- Duration: ${workshopDetails?.duration}
- Price per person: ${workshopDetails?.price}
- Level: ${workshopDetails?.level}

Note: This workshop has been added to your cart for easy checkout.`;

    // Create mailto link
    const mailtoLink = `mailto:sumaira@vanillapodconfections.ca?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Reset form and close modal
    setTimeout(() => {
      setBookingForm({
        name: "",
        email: "",
        phone: "",
        workshop: "",
        date: "",
        participants: 1,
        message: "",
      });
      setSelectedWorkshop(null);
    }, 1000);
  };

  return (
    <>
      <SEO
        title="Confectionery Workshops - Learn with VanillaPod Confections"
        description="Join our hands-on confectionery workshops and learn from professional bakers. Classes for all skill levels including cupcakes, chocolates, macarons, and more."
        keywords="confectionery workshops, baking classes, cupcake classes, chocolate making, macaron workshop, cake decorating, hands-on learning"
        url="https://vanillapodconfections.com/workshop"
        structuredData={workshopStructuredData}
      />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1
              className="text-5xl font-bold text-gray-800 mb-4 slide-in-top"
              style={{ fontFamily: "Lobster, cursive" }}
            >
              Confectionery Workshops
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto fade-in">
              Learn the sweet art of confectionery making in our hands-on
              workshops. From beginner-friendly cupcake decorating to advanced
              chocolate tempering, discover your passion for creating beautiful,
              delicious treats.
            </p>
          </div>

          {/* Workshop Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
            {workshops.map((workshop, index) => (
              <div
                key={workshop.id}
                className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2 group fade-in"
              >
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3 float group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {workshop.emoji}
                  </div>
                  <h3
                    className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-red-500 transition-colors duration-300"
                    style={{ fontFamily: "Lobster, cursive" }}
                  >
                    {workshop.title}
                  </h3>
                  <div className="flex justify-center space-x-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      ⏰ {workshop.duration}
                    </span>
                    <span className="flex items-center">
                      👥 {workshop.capacity}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-red-500">
                      {workshop.price}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        workshop.level === "Beginner"
                          ? "bg-green-100 text-green-800"
                          : workshop.level === "Intermediate"
                          ? "bg-yellow-100 text-yellow-800"
                          : workshop.level === "Advanced"
                          ? "bg-red-100 text-red-800"
                          : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {workshop.level}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {workshop.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    What's Included:
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {workshop.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Upcoming Dates:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {workshop.nextDates.map((date, idx) => (
                      <span
                        key={idx}
                        className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-sm"
                      >
                        {date}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedWorkshop(workshop);
                    setBookingForm({
                      ...bookingForm,
                      workshop: workshop.id.toString(),
                    });
                  }}
                  className="w-full bg-red-400 hover:bg-red-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
                >
                  Book This Workshop
                </button>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16 slide-in-left transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2">
            <h2
              className="text-3xl font-bold text-gray-800 mb-8 text-center text-glow"
              style={{ fontFamily: "Lobster, cursive" }}
            >
              Why Choose Our Workshops?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center fade-in group transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <div className="text-4xl mb-3 pulse group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  👩‍🍳
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-red-500 transition-colors duration-300">
                  Expert Instructors
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                  Learn from professional confectioners with years of experience
                </p>
              </div>
              <div className="text-center fade-in group transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <div className="text-4xl mb-3 pulse group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  🥇
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-red-500 transition-colors duration-300">
                  Small Class Sizes
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                  Personalized attention with maximum 8-10 students per class
                </p>
              </div>
              <div className="text-center fade-in group transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <div className="text-4xl mb-3 pulse group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  🎁
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-red-500 transition-colors duration-300">
                  Take Home Treats
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                  Enjoy your creations at home plus recipes and tips
                </p>
              </div>
              <div className="text-center fade-in group transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <div className="text-4xl mb-3 pulse group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  🏆
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-red-500 transition-colors duration-300">
                  All Skill Levels
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                  From beginners to advanced bakers, everyone is welcome
                </p>
              </div>
            </div>
          </div>

          {/* Booking Modal */}
          {selectedWorkshop && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3
                      className="text-2xl font-bold text-gray-800"
                      style={{ fontFamily: "Lobster, cursive" }}
                    >
                      Book Workshop
                    </h3>
                    <button
                      onClick={() => setSelectedWorkshop(null)}
                      className="text-gray-500 hover:text-gray-700 text-2xl"
                    >
                      ×
                    </button>
                  </div>

                  <div className="mb-4 p-4 bg-pink-50 rounded-lg">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">
                        {selectedWorkshop.emoji}
                      </span>
                      <h4 className="font-semibold text-gray-800">
                        {selectedWorkshop.title}
                      </h4>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>Duration: {selectedWorkshop.duration}</p>
                      <p>Price: {selectedWorkshop.price}</p>
                      <p>Level: {selectedWorkshop.level}</p>
                    </div>
                  </div>

                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    {/* Hidden workshop ID field */}
                    <input
                      type="hidden"
                      name="workshop"
                      value={selectedWorkshop.id}
                      onChange={handleBookingChange}
                    />

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={bookingForm.name}
                        onChange={handleBookingChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={bookingForm.email}
                        onChange={handleBookingChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={bookingForm.phone}
                        onChange={handleBookingChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-300"
                        placeholder="(123) 456-7890"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Date *
                      </label>
                      <select
                        name="date"
                        value={bookingForm.date}
                        onChange={handleBookingChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a date</option>
                        {selectedWorkshop.nextDates.map((date, idx) => (
                          <option key={idx} value={date}>
                            {date}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Number of Participants
                      </label>
                      <select
                        name="participants"
                        value={bookingForm.participants}
                        onChange={handleBookingChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-300"
                      >
                        {[1, 2, 3, 4].map((num) => (
                          <option key={num} value={num}>
                            {num} participant{num > 1 ? "s" : ""}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Message
                      </label>
                      <textarea
                        name="message"
                        value={bookingForm.message}
                        onChange={handleBookingChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Any special requirements or questions..."
                      />
                    </div>

                    <div className="flex space-x-3 pt-4">
                      <button
                        type="button"
                        onClick={() => setSelectedWorkshop(null)}
                        className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-red-400 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                      >
                        Send Booking Request
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
