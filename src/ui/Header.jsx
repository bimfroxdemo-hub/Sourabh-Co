import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);

  const nav = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/products", label: "Products" },
    { to: "/hire-labour", label: "Hire Labour" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="h-10 w-10 bg-red-600 text-white rounded-md flex items-center justify-center font-bold text-xl">
            SC
          </div>
          <span className="text-lg md:text-xl font-bold whitespace-nowrap">
            Sourabh Corporation
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center text-lg">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="hover:text-red-600 transition font-medium"
            >
              {item.label}
            </Link>
          ))}

        
        </nav>

        {/* Mobile Menu Button */}
        <button
          className=" md:hidden text-3xl text-gray-900 mr-8 "
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-100 shadow-inner overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-3 text-lg">
              {nav.map((i) => (
                <Link
                  key={i.to}
                  to={i.to}
                  onClick={() => setOpen(false)}
                  className="block py-2 px-3 rounded-lg hover:bg-gray-200 transition"
                >
                  {i.label}
                </Link>
              ))}

              
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};

export default Header;
