import React, { useState } from "react";
import { motion } from "framer-motion";

import a1 from "../assets/a1.png";
import a2 from "../assets/a2.png";
import a3 from "../assets/a3.png";
import a4 from "../assets/a4.png";
import a5 from "../assets/a5.png";

const projectData = [
  {
    img: a1,
    title: "Industrial Warehouse Setup",
    tag: "Steel Fabrication • Flooring • HVAC",
    desc: "A complete turnkey warehouse project including steel fabrication and HVAC setup.",
  },
  {
    img: a2,
    title: "Commercial Interior Work",
    tag: "Premium Design • Painting • Electrical",
    desc: "Modern office interior setup with partitions, POP, lighting and painting.",
  },
  {
    img: a3,
    title: "HVAC Ducting Project",
    tag: "Ducting • Insulation • Airflow Setup",
    desc: "GI duct fabrication, insulation and industrial airflow setup.",
  },
  {
    img: a4,
    title: "Construction Material Supply",
    tag: "Bulk Supply • On-Time Delivery",
    desc: "Premium sand, bricks, cement, steel with fast delivery.",
  },
  {
    img: a5,
    title: "Manpower Contracting",
    tag: "Skilled Labour • Industrial Support",
    desc: "Trained labours, helpers, welders and civil workers.",
  },
];

// ---------------------------------------------
// SEPARATE CARD COMPONENT (Fixes useState issue)
// ---------------------------------------------
const ProjectCard = ({ p }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 200 }}
      onClick={() => setIsActive(!isActive)}
      className="relative bg-white rounded-2xl shadow-lg overflow-hidden 
                 border cursor-pointer hover:shadow-2xl group"
    >
      {/* Glow Effect */}
      <div
        className="absolute bottom-0 left-0 w-full h-1/3 bg-blue-400 opacity-0 
        group-hover:opacity-40 blur-xl transition-all duration-300 pointer-events-none"
      />

      {/* Image + Overlay */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={p.img}
          alt={p.title}
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <motion.div
          animate={{
            y: isActive ? 0 : 90,
            opacity: isActive ? 1 : 0,
          }}
          className="absolute bottom-0 left-0 w-full bg-black/60 text-white 
                     py-4 px-4 font-semibold text-sm transition-all duration-300
                     translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <p className="text-base font-bold">{p.title}</p>
          <p className="text-blue-400 text-xs mt-1">{p.tag}</p>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{p.title}</h3>
        <p className="text-gray-700 text-sm leading-relaxed">{p.desc}</p>
      </div>
    </motion.div>
  );
};

// ---------------------------------------------
// MAIN PROJECT COMPONENT
// ---------------------------------------------
const Project = () => {
  return (
    <div
      className="min-h-screen pt-28 px-4 pb-20 font-poppins"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #cfe9f9 30%, #91c8f0 100%, #62b2e6 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Our Projects
        </h1>
        <p className="text-gray-700 text-center max-w-2xl mx-auto text-lg mb-12">
          A glimpse of our completed fabrication, HVAC, interior and construction projects.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projectData.map((p, index) => (
            <ProjectCard key={index} p={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
