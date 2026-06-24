"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
        </h2>
        
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            I am a dedicated <span className="text-cyan-400 font-semibold">Computer Systems Engineering</span> student 
            at Tshwane University of Technology, driven by a passion for technology and innovation. 
            I believe in the power of tech solutions to simplify and enrich everyday life.
          </p>

          {/* Timeline */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">My Journey</h3>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="border-l-2 border-cyan-400 pl-4 pb-6"
            >
              <h4 className="text-lg font-semibold text-white">2025 – 2026</h4>
              <p className="text-cyan-400 font-medium">Cybersecurity & Networking Intern</p>
              <p className="text-gray-400 text-sm">4IR LAB, TUT South Campus</p>
              <p className="text-gray-500 text-xs mt-1">Monitored security alerts, mitigated vulnerabilities, performed penetration testing</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="border-l-2 border-cyan-400 pl-4 pb-6"
            >
              <h4 className="text-lg font-semibold text-white">2021 – 2026</h4>
              <p className="text-cyan-400 font-medium">Diploma in Computer Systems Engineering</p>
              <p className="text-gray-400 text-sm">Tshwane University of Technology</p>
              <p className="text-gray-500 text-xs mt-1">Sosh South Campus</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="border-l-2 border-cyan-400 pl-4"
            >
              <h4 className="text-lg font-semibold text-white">2020</h4>
              <p className="text-cyan-400 font-medium">Bachelor's Degree</p>
              <p className="text-gray-400 text-sm">Semarela Secondary School</p>
              <p className="text-gray-500 text-xs mt-1">Mathematics, Physical Sciences, Life Sciences</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}