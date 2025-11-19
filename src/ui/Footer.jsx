import React from "react";
import { Link } from "react-router-dom";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer
      className="text-white"
      style={{
        backgroundColor: "#000",
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)",
        backgroundSize: "22px 22px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* ABOUT */}
        <div className="col-span-2 md:col-span-1">
          <h2 className="font-bold text-lg mb-3 text-white">Sourabh Corporation</h2>
          <p className="text-gray-300 text-sm">
            Your trusted partner for construction materials, labour supply &
            industrial services.
          </p>

          <div className="flex gap-4 mt-4 text-xl">
            <FiFacebook className="hover:text-blue-500 cursor-pointer" />
            <FiTwitter className="hover:text-blue-500 cursor-pointer" />
            <FiInstagram className="hover:text-blue-500 cursor-pointer" />
            <FiLinkedin className="hover:text-blue-500 cursor-pointer" />
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-bold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="text-gray-300 hover:text-blue-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-gray-300 hover:text-blue-500">
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-gray-300 hover:text-blue-500">
                Products
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-gray-300 hover:text-blue-500">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-300 hover:text-blue-500">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-bold mb-4 text-white">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-blue-500">HVAC & Ducting</li>
            <li className="hover:text-blue-500">Insulation Works</li>
            <li className="hover:text-blue-500">Fabrication</li>
            <li className="hover:text-blue-500">Painting & Scaffolding</li>
            <li className="hover:text-blue-500">Labour Contracting</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-bold mb-4 text-white">Contact</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            63, Mangaldeep, Rajpipla Road,<br />
            Ankleshwar, Bharuch 393001,<br />
            Gujarat, India
          </p>

          <p className="mt-3 text-gray-300 text-sm hover:text-blue-500">
            +91 63589 00891
          </p>

          <p className="text-gray-300 text-sm hover:text-blue-500">
            info@sourabhcorp.com
          </p>
        </div>

      </div>

      {/* Bottom Strip */}
      <div className="text-center py-4 border-t border-gray-700 text-gray-400 text-sm">
        © {new Date().getFullYear()} Sourabh Corporation — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
