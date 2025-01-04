import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="no-print bg-gray-900 text-white sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            Bion Biller
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="border-b-2 border-transparent hover:border-white transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/product"
              className="border-b-2 border-transparent hover:border-white transition duration-300"
            >
              Products
            </Link>
            <Link
              to="/invoice"
              className="border-b-2 border-transparent hover:border-white transition duration-300"
            >
              Invoice
            </Link>
            <button
              onClick={() => navigate("/signin")}
              className="hover:underline"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="hover:underline"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/product"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/invoice"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
              onClick={() => setIsOpen(false)}
            >
              Invoice
            </Link>
            <button
              onClick={() => {
                navigate("/signin");
                setIsOpen(false);
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-indigo-500"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                navigate("/signup");
                setIsOpen(false);
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-indigo-500"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
