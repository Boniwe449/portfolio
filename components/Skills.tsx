"use client";

import { motion } from "framer-motion";

const technicalSkills = [
  "Cybersecurity", "Networking", "Cloud Security", "SIEM",
  "Penetration Testing", "Malware Analysis", "Threat Investigation",
  "Incident Response", "Vulnerability Assessment"
];

const programmingLanguages = [
  "Python", "Java", "C", "C++", "C#", ".NET", 
  "Unity", "MySQL", "PLC Programming", "Assembly Language",
  "Cisco Packet Tracer", "Processing"
];

const toolsAndFrameworks = [
  "Wazuh", "Splunk", "Elastic Stack", "Azure",
  "SIEM Tools", "Security Automation", "Threat Detection"
];

const coreSkills = [
  "Analytical Thinking", "Problem Solving", "Leadership",
  "Team Collaboration", "Time Management", "Communication",
  "Interpersonal Skills", "Organizational Skills"
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-900/20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">
          My <span className="text-blue-400">Skills</span>
        </h2>
        
        {/* Technical Skills */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-blue-400 mb-4 text-center">🔒 Technical Skills</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {technicalSkills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-5 py-2 bg-red-500/20 text-red-300 rounded-full border border-red-500/30 text-sm font-medium hover:scale-105 transition"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Programming Languages */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-blue-400 mb-4 text-center">💻 Programming Languages</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {programmingLanguages.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-5 py-2 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30 text-sm font-medium hover:scale-105 transition"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Tools & Frameworks */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-blue-400 mb-4 text-center">🛠️ Tools & Frameworks</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {toolsAndFrameworks.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-5 py-2 bg-green-500/20 text-green-300 rounded-full border border-green-500/30 text-sm font-medium hover:scale-105 transition"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Core Skills */}
        <div>
          <h3 className="text-xl font-semibold text-blue-400 mb-4 text-center">⭐ Core Skills</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {coreSkills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-5 py-2 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30 text-sm font-medium hover:scale-105 transition"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}