import React from "react";
import { motion } from "framer-motion";
import { FiGrid, FiPhoneCall, FiMail } from "react-icons/fi";

const Project = () => {
  return (
    <div
      className="min-h-screen pt-24 px-4 pb-20 text-black"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #cfe9f9 30%, #91c8f0 100%, #62b2e6 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto text-center">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Our Projects
        </motion.h1>

        <p className="text-gray-700 text-lg mb-6 flex justify-center gap-2">
          <FiGrid className="text-blue-600 text-2xl" /> Industrial & Residential Portfolio
        </p>

        {/* Card */}
        <div className="p-8 rounded-lg border border-black/10 bg-white/60 backdrop-blur-sm mt-4 shadow-md">
          <p className="text-lg mb-4 text-gray-800">
            Project gallery coming soon! Contact us for details.
          </p>

          <p className="flex items-center justify-center gap-2 text-gray-800">
            <FiPhoneCall className="text-blue-600" /> +91 98765 43210
          </p>

          <p className="flex items-center justify-center gap-2 mt-2 text-gray-800">
            <FiMail className="text-blue-600" /> info@saurabhcorp.com
          </p>
        </div>

      </div>
    </div>
  );
};

export default Project;
