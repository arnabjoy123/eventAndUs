import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    "Home",
    "About Us",
    "Portfolio",
    "Services",
    "Banquet Hall",
    "Events",
    "Videos",
    "Contact Us",
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">Event and Us</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
              className="hover:text-blue-600 transition"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pb-4">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-gray-700">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                className="hover:text-blue-600 transition"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
