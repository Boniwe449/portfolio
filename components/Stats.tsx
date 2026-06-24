"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "1", label: "Certifications" },
  { number: "4", label: "Projects" },
  { number: "3+", label: "Years of Learning" },
  { number: "1", label: "Internship" },
];

export default function Stats() {
  return (
    <section className="py-16 px-4 bg-white/5 border-y border-white/10">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,180,255,0.1)]"
          >
            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {stat.number}
            </div>
            <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}