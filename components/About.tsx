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
          About <span className="text-blue-400">Me</span>
        </h2>
        
        <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
          <p className="text-gray-300 text-lg leading-relaxed">
            I am a dedicated <span className="text-blue-400 font-semibold">Computer Systems Engineering</span> student 
            at Tshwane University of Technology, driven by a passion for technology and innovation. 
            I believe in the power of tech solutions to simplify and enrich everyday life, and I am 
            committed to contributing to the creation of accessible, user-friendly, and impactful solutions 
            that make a meaningful difference in people's lives.
          </p>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
              <h4 className="font-semibold text-blue-400">🎓 Education</h4>
              <p className="text-gray-300 text-sm mt-1 font-medium">Diploma in Computer Systems Engineering</p>
              <p className="text-gray-400 text-sm">Tshwane University of Technology (2021 - 2026)</p>
              <p className="text-gray-500 text-xs mt-1">Sosh South Campus</p>
            </div>
            
            <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
              <h4 className="font-semibold text-blue-400">💼 Experience</h4>
              <p className="text-gray-300 text-sm mt-1 font-medium">Cybersecurity & Networking Intern</p>
              <p className="text-gray-400 text-sm">4IR LAB, TUT South Campus</p>
              <p className="text-gray-500 text-xs mt-1">08/2025 - 07/2026</p>
            </div>
          </div>

          <div className="mt-6 bg-gray-800/30 p-4 rounded-xl border border-gray-700">
            <h4 className="font-semibold text-blue-400 mb-2">📚 Coursework</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Communication Science", "Digital Electronics", "Electrical Principles",
                "Programming", "Network Systems", "Databases", "Operating Systems",
                "Logic Design", "Artificial Intelligence", "Embedded Systems",
                "Software Engineering", "Cybersecurity", "Mobile Robotics"
              ].map((course, i) => (
                <span key={i} className="px-2 py-1 bg-blue-500/10 text-blue-300 rounded-full text-xs">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}