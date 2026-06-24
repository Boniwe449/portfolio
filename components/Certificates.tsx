"use client";

import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const certificates = [
  {
    name: "Six Sigma White Belt Certificate",
    issuer: "Council for Six Sigma Certification",
    date: "2024",
    file: "/certificates/six-sigma-white-belt.pdf",  // Updated with .pdf
    icon: "📊",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-4 text-center">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Certificates</span>
        </h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
          Professional certifications and achievements that validate my expertise
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,180,255,0.1)]"
            >
              <div className="text-4xl mb-3">{cert.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-1">
                {cert.name}
              </h3>
              <p className="text-sm text-gray-400 mb-1">
                Issued by: <span className="text-cyan-400">{cert.issuer}</span>
              </p>
              <p className="text-sm text-gray-500 mb-4">
                {cert.date}
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={cert.file}
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg text-white text-sm font-medium transition shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
              >
                <FaDownload />
                Download Certificate
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}