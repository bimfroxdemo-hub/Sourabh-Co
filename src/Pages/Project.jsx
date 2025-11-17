import React from "react";
import { motion } from "framer-motion";
import { FiGrid, FiPhoneCall, FiMail } from "react-icons/fi";

const Project = () => {
  return (
    <div className="min-h-screen bg-white pt-24 px-4 pb-20">
      <div className="max-w-6xl mx-auto text-center">

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Our Projects
        </motion.h1>

        <p className="text-gray-600 text-lg mb-6 flex justify-center gap-2">
          <FiGrid className="text-red-600 text-2xl" /> Industrial & Residential Portfolio
        </p>

        <div className="bg-gray-100 p-8 rounded-lg border mt-4">
          <p className="text-lg mb-4">
            Project gallery coming soon! Contact us for details.
          </p>

          <p className="flex items-center justify-center gap-2">
            <FiPhoneCall className="text-red-600" /> +91 98765 43210
          </p>

          <p className="flex items-center justify-center gap-2">
            <FiMail className="text-red-600" /> info@sourabhcorp.com
          </p>
        </div>

      </div>
    </div>
  );
};

export default Project;
