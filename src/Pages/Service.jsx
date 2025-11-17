import React from "react";
import { motion } from "framer-motion";
import {
  FiWind,
  FiLayers,
  FiTool,
  FiCpu,
  FiHome,
  FiBox,
  FiCheckCircle,
} from "react-icons/fi";

// ⭐ Premium Service Data
const services = [
  {
    icon: <FiWind className="text-red-600 text-4xl" />,
    title: "HVAC & Industrial Ducting",
    desc: "Complete HVAC setup including GI/SS ducting, AHU installation and ventilation systems.",
    features: [
      "GI & SS Duct Fabrication",
      "AHU Installation",
      "Thermal & Acoustic Insulation",
      "Industrial Ventilation Setup",
    ],
  },
  {
    icon: <FiLayers className="text-red-600 text-4xl" />,
    title: "Hot & Cold Thermal Insulation",
    desc: "High-grade insulation for pipelines, plants, machinery and commercial buildings.",
    features: [
      "Hot & Cold Pipe Insulation",
      "Energy Saving Solutions",
      "Aluminium/SS Cladding",
      "Industrial Insulation Work",
    ],
  },
  {
    icon: <FiTool className="text-red-600 text-4xl" />,
    title: "Scaffolding & Industrial Painting",
    desc: "Reliable scaffolding with professional industrial painting and coating solutions.",
    features: [
      "Scaffolding Setup",
      "Industrial Painting",
      "Surface Preparation",
      "Anti-Corrosive Coating",
    ],
  },
  {
    icon: <FiCpu className="text-red-600 text-4xl" />,
    title: "Pipeline & Structural Fabrication",
    desc: "Fabrication & erection of pipelines, steel structures, tanks and industrial assemblies.",
    features: [
      "Pipeline Fabrication",
      "Welding & Testing",
      "MS/SS Structure Work",
      "Industrial Steel Fabrication",
    ],
  },
  {
    icon: <FiBox className="text-red-600 text-4xl" />,
    title: "Material & Labour Contracting",
    desc: "Skilled manpower and material supply for industries & construction projects.",
    features: [
      "Skilled Labour Supply",
      "Material Procurement",
      "Project Workforce",
      "Site Supervision",
    ],
  },
  {
    icon: <FiHome className="text-red-600 text-4xl" />,
    title: "Construction & Renovation",
    desc: "End-to-end construction, renovation and interior decoration services.",
    features: [
      "New Construction",
      "Renovation Work",
      "Interior Decoration",
      "Turnkey Projects",
    ],
  },
];

const Service = () => {
  return (
    <div className="min-h-screen bg-white pt-28 px-4 pb-20">
      <div className="max-w-7xl mx-auto">

        {/* ⭐ PAGE HEADER */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Our Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 text-lg text-center max-w-2xl mx-auto mb-12"
        >
          Construction, fabrication, insulation, labour supply, HVAC, painting and complete industrial services — all in one place.
        </motion.p>

        {/* ⭐ SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-gray-200 bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* ICON + TITLE */}
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 rounded-full bg-red-100 shadow">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold">{service.title}</h2>
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-600 mb-4">{service.desc}</p>

              {/* FEATURES */}
              <h3 className="font-semibold mb-3">Key Features:</h3>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-gray-700">
                    <FiCheckCircle className="text-red-600 mt-1" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* BUTTON */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/quote"
                className="inline-block mt-6 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
              >
                Request Estimate
              </motion.a>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Service;
