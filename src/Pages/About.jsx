import React from "react";
import { motion } from "framer-motion";

/* IMPORT ICONS */
import {
  FaUsers,
  FaTasks,
  FaUserTie,
  FaHardHat,
  FaBriefcase,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-white pt-28 px-4 pb-20">
      <div className="max-w-5xl mx-auto">

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          About Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 text-lg text-center max-w-2xl mx-auto mb-12"
        >
          Trusted partner for construction materials, skilled labour, HVAC
          fabrication & full contracting services.
        </motion.p>

        {/* MAIN ABOUT PARAGRAPH */}
        <div className="space-y-8 text-lg text-gray-700 leading-relaxed">

          <p>
            Sourabh Corporation is a one-stop solution for premium construction
            materials, verified manpower, fabrication, HVAC works, industrial
            pipeline setup, insulation services, waterproofing, painting,
            structural steel fabrication, commercial interiors and full turnkey
            project execution.  
            <br /><br />
            With a mission to simplify project management for contractors,
            industries and commercial clients, we bring **quality, reliability
            and timely delivery** under one trusted brand. Our team ensures
            strict supervision, professional service and transparent work
            ethics—helping clients save time, cost and effort.
          </p>

          {/* EXPERIENCE SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold text-center mb-8">
              Our Experience
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

              {/* 13+ Years */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/70 border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition"
              >
                <FaBriefcase className="w-12 h-12 mx-auto text-blue-600 mb-3" />
                <h3 className="text-3xl font-bold">13+</h3>
                <p className="text-gray-600 text-sm mt-1">Years Experience</p>
              </motion.div>

              {/* 150+ Clients */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/70 border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition"
              >
                <FaUsers className="w-12 h-12 mx-auto text-green-600 mb-3" />
                <h3 className="text-3xl font-bold">150+</h3>
                <p className="text-gray-600 text-sm mt-1">Happy Clients</p>
              </motion.div>

              {/* 110+ Projects */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/70 border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition"
              >
                <FaTasks className="w-12 h-12 mx-auto text-red-600 mb-3" />
                <h3 className="text-3xl font-bold">110+</h3>
                <p className="text-gray-600 text-sm mt-1">Projects Completed</p>
              </motion.div>

              {/* 25 Labour */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/70 border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition"
              >
                <FaHardHat className="w-12 h-12 mx-auto text-yellow-600 mb-3" />
                <h3 className="text-3xl font-bold">25</h3>
                <p className="text-gray-600 text-sm mt-1">Skilled Labour</p>
              </motion.div>

              {/* 4 Engineers */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/70 border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition"
              >
                <FaUserTie className="w-12 h-12 mx-auto text-purple-600 mb-3" />
                <h3 className="text-3xl font-bold">4</h3>
                <p className="text-gray-600 text-sm mt-1">Certified Engineers</p>
              </motion.div>

            </div>
          </motion.div>

          {/* MISSION */}
          <div className="bg-gray-100 p-6 rounded-xl border">
            <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
            <p>
              To provide all construction materials and manpower under one
              trusted brand with maximum reliability, quality and on-time
              delivery.
            </p>
          </div>

          {/* VALUES */}
          <div>
            <h2 className="text-2xl font-bold mb-3">Our Core Values</h2>
            <ul className="space-y-3">
              <li>✔ <strong>Quality First:</strong> Only premium materials & skilled manpower.</li>
              <li>✔ <strong>Safety:</strong> Trained workforce with PPE & safe practices.</li>
              <li>✔ <strong>Reliability:</strong> Guaranteed on-time delivery & professional work.</li>
              <li>✔ <strong>Transparency:</strong> Fair pricing, GST billing & open communication.</li>
            </ul>
          </div>

          {/* ADDITIONAL INFO */}
          <div className="bg-white border rounded-2xl p-6 shadow-sm mt-8">
            <h2 className="text-2xl font-bold mb-3">Why Choose Sourabh Corporation?</h2>
            <p className="leading-relaxed">
              With over a decade of hands-on industry experience, we focus on
              combining strong manpower, premium materials and modern work
              practices to deliver high-quality results.  
              Our commitment to honesty, safety and timely project execution has
              helped us build long-term relationships with industries, corporate
              clients and contractors across multiple sectors.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
