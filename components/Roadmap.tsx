"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaRocket, FaCode } from "react-icons/fa";

const roadmapItems = [
  {
    year: "2024 – 2025",
    title: "Work Integrated Learning (WIL)",
    description: "Completed internship at 4IR LAB, building cybersecurity skills and earning certifications.",
    icon: FaCheckCircle,
    color: "text-green-400",
  },
  {
    year: "2025 – 2026",
    title: "Complete Diploma",
    description: "Finalize Computer Systems Engineering diploma at Tshwane University of Technology.",
    icon: FaCode,
    color: "text-cyan-400",
  },
  {
    year: "2026",
    title: "Launch Cybersecurity Portfolio",
    description: "Publish case studies, research, and projects on my personal website.",
    icon: FaRocket,
    color: "text-purple-400",
  },
  {
    year: "2027+",
    title: "Security Engineer / Tech Lead",
    description: "Lead security teams, architect robust systems, and drive innovation.",
    icon: FaRocket,
    color: "text-yellow-400",
  },
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
        <h2 className="text-4xl font-bold mb-4 text-center">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Roadmap</span>
        </h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
          My journey and goals for the future
        </p>

        <div className="space-y-6">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,180,255,0.05)]"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <div className="flex items-center gap-3 md:w-48">
                  <item.icon className={`text-2xl ${item.color}`} />
                  <span className="text-lg font-bold text-cyan-400">{item.year}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}