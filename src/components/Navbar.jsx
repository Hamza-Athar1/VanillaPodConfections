import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black shadow-lg sticky top-0 z-50 w-full slide-in-top">
      <div className="w-full mx-auto px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 left-0">
            <Link
              to="/"
              className="flex items-center text-white hover:text-red-400 transition-colors duration-300 no-underline font-bold text-xl"
            >
              <span className="text-3xl mr-2">🍰</span>
              <span
                className="font-bold text-2xl hidden sm:block"
                style={{ fontFamily: "Lobster, cursive", fontSize: "2rem" }}
              >
                Vanilla Pod Confections
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden flex flex-col justify-center items-center w-8 h-8 bg-transparent border-0 cursor-pointer p-1 relative`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 my-1 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 text-white text-xl">
            <Link
              to="/"
              className=" hover:text-red-400 font-medium py-2 px-1 transition-colors duration-300 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/products"
              className=" hover:text-red-400 font-medium py-2 px-1 transition-colors duration-300 relative group"
            >
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/about"
              className=" hover:text-red-400 font-medium py-2 px-1 transition-colors duration-300 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/contact"
              className=" hover:text-red-400 font-medium py-2 px-1 transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/cart"
              className="flex items-center bg-red-400 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 transform"
            >
              <span className="text-lg mr-2">🛒</span>
              <span>Cart</span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-1 bg-gray-800 rounded-2xl border-gray-200 text-white">
            <Link
              to="/"
              className="block px-3 py-2  hover:text-red-400 hover:bg-gray-700 rounded-md font-medium transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block px-3 py-2 hover:text-red-400 hover:bg-gray-700 rounded-md font-medium transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 hover:text-red-400 hover:bg-gray-700 rounded-md font-medium transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 hover:text-red-400 hover:bg-gray-700 rounded-md font-medium transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/cart"
              className="flex items-center justify-center mx-3 mt-4 bg-red-400 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-lg mr-2">🛒</span>
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
