"use client";

import { motion } from "framer-motion";

const roadmap = [
  { year: "2025 – 2026", title: "Complete Diploma & Internship", desc: "Finalize studies at TUT and complete the 4IR LAB internship." },
  { year: "Q4 2026", title: "Launch Cybersecurity Portfolio", desc: "Publish case studies and research on my personal site." },
  { year: "2027+", title: "Security Engineer / Tech Lead", desc: "Lead security teams and architect robust systems." },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-10 text-center">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Roadmap</span>
        </h2>

        <div className="space-y-8">
          {roadmap.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <span className="text-lg font-bold text-cyan-400 md:w-40">{item.year}</span>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm md:ml-auto">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}