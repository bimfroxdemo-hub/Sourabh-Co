import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-white pt-24 px-4 pb-20">
      <div className="max-w-5xl mx-auto">

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6"
        >
          About Sourabh Corporation
        </motion.h1>

        <p className="text-gray-600 text-lg text-center max-w-2xl mx-auto mb-10">
          Trusted partner for construction materials, skilled labour, HVAC fabrication & full contracting services.
        </p>

        <div className="space-y-8 text-lg text-gray-700 leading-relaxed">

          <p>
            Sourabh Corporation provides complete construction solutions including high-quality building 
            materials, verified labour, fabrication, HVAC services, pipeline works, insulation, painting 
            and turnkey project management.
          </p>

          <div className="bg-gray-100 p-6 rounded-xl border">
            <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
            <p>
              To provide all construction materials and manpower under one trusted brand with maximum 
              reliability, quality and on-time delivery.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Our Core Values</h2>
            <ul className="space-y-3">
              <li>✔ <strong>Quality First:</strong> Only premium materials & expert workmanship.</li>
              <li>✔ <strong>Safety:</strong> Trained workforce with PPE and safe practices.</li>
              <li>✔ <strong>Reliability:</strong> Guaranteed on-time delivery & professionalism.</li>
              <li>✔ <strong>Transparency:</strong> Honest pricing, GST billing & clear communication.</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;
