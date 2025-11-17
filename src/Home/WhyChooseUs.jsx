import React from "react";
import {
  FiUsers,
  FiCheckCircle,
  FiClock,
  FiShield,
  FiTool,
  FiTruck,
} from "react-icons/fi";

const WhyChooseUs = () => {
  const list = [
    {
      icon: <FiUsers className="text-red-600 text-5xl mx-auto" />,
      title: "Skilled Workforce",
      desc: "Verified, experienced labour with full PPE safety gear.",
    },
    {
      icon: <FiCheckCircle className="text-red-600 text-5xl mx-auto" />,
      title: "Quality Assurance",
      desc: "Premium materials and expert finishing with quality checks.",
    },
    {
      icon: <FiClock className="text-red-600 text-5xl mx-auto" />,
      title: "On-Time Delivery",
      desc: "Fast & reliable project completion without delays.",
    },
    {
      icon: <FiShield className="text-red-600 text-5xl mx-auto" />,
      title: "Trusted & Reliable",
      desc: "Hundreds of successful projects and repeat clients.",
    },
    {
      icon: <FiTool className="text-red-600 text-5xl mx-auto" />,
      title: "All-in-One Service",
      desc: "Construction, labour, HVAC, insulation & fabrication — everything in one place.",
    },
    {
      icon: <FiTruck className="text-red-600 text-5xl mx-auto" />,
      title: "Fast Material Supply",
      desc: "Quick delivery of cement, steel, tiles, paint & all building materials.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          Why Choose Us?
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          We deliver quality, trust, and efficiency across all construction and industrial work.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {list.map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow hover:shadow-xl border hover:border-red-500 transition-all duration-300 text-center"
            >
              {item.icon}
              <h3 className="text-xl font-bold mt-4 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
