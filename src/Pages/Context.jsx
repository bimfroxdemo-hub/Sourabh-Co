import React, { useState } from "react";
import { motion } from "framer-motion";

const Context = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // placeholder action; replace with API call when ready
    alert("Thank you! Message sent.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white pt-24 px-4 pb-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-gray-600">
            For inquiries, quotations or site visits — reach out and we'll respond quickly.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Address</h4>
              <p className="text-gray-600">Bharuch, Gujarat, India</p>
            </div>

            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>

            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-gray-600">info@sourabhcorp.com</p>
            </div>

            <div>
              <h4 className="font-semibold">Working Hours</h4>
              <p className="text-gray-600">Mon - Sat: 9 AM - 6 PM</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <div>
            <label className="block font-semibold mb-1">Name *</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Email *</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Phone</label>
            <input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Message *</label>
            <textarea
              required
              rows="5"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-500"
            />
          </div>

          <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700">
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Context;
