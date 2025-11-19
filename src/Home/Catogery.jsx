import React from "react";
import { motion } from "framer-motion";
import { 
  FiHome, 
  FiWind, 
  FiTool, 
  FiLayers, 
  FiCpu, 
  FiUsers, 
  FiBox 
} from "react-icons/fi";

const Catogery = () => {
  const categories = [
    {
      icon: <FiCpu className="text-red-600 text-5xl mx-auto" />,
      title: "Pipeline & Fabrication",
      desc: "Pipeline, welding & structural fabrication.",
    },
    {
      icon: <FiLayers className="text-red-600 text-5xl mx-auto" />,
      title: "Thermal Insulation",
      desc: "Hot & cold insulation works for industries.",
    },
    {
      icon: <FiWind className="text-red-600 text-5xl mx-auto" />,
      title: "HVAC & Insulation",
      desc: "Duct fabrication, installation & insulation.",
    },
    {
      icon: <FiTool className="text-red-600 text-5xl mx-auto" />,
      title: "Labour & Contracting",
      desc: "Skilled labour with supervision.",
    },
    {
      icon: <FiUsers className="text-red-600 text-5xl mx-auto" />,
      title: "Professional Experts",
      desc: "Verified, trained and experienced manpower.",
    },
    {
      icon: <FiBox className="text-red-600 text-5xl mx-auto" />,
      title: "Material Supply",
      desc: "All construction materials available at best rates.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-3"
        >
          Our Categories
        </motion.h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We provide every essential service and material needed for construction,
          renovation, fabrication and industrial projects.
        </p>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="p-6 border rounded-xl text-center shadow-sm bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-4">{c.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{c.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Description */}
        <div className="mt-16 text-center max-w-3xl mx-auto text-gray-700 text-lg">
          We aim to deliver everything you need to complete your construction
          and industrial projects — from skilled manpower to high-quality
          materials, fabrication, HVAC works, safety equipment and more.
        </div>

      </div>
    </section>
  );
};

export default Catogery;
