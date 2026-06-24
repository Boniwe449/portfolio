"use client";

import { motion } from "framer-motion";

// Skill data with proficiency levels (0-100)
const skillCategories = [
  {
    title: "🔒 Technical Skills",
    color: "from-red-400 to-red-600",
    skills: [
      { name: "Cybersecurity", level: 90 },
      { name: "Networking", level: 85 },
      { name: "Cloud Security", level: 80 },
      { name: "SIEM", level: 85 },
      { name: "Penetration Testing", level: 75 },
      { name: "Malware Analysis", level: 70 },
      { name: "Threat Investigation", level: 80 },
      { name: "Incident Response", level: 75 },
      { name: "Vulnerability Assessment", level: 80 },
    ]
  },
  {
    title: "💻 Programming Languages",
    color: "from-blue-400 to-blue-600",
    skills: [
      { name: "Python", level: 85 },
      { name: "Java", level: 75 },
      { name: "C", level: 70 },
      { name: "C++", level: 70 },
      { name: "C#", level: 75 },
      { name: ".NET", level: 70 },
      { name: "Unity", level: 65 },
      { name: "MySQL", level: 80 },
      { name: "PLC Programming", level: 60 },
      { name: "Assembly Language", level: 55 },
      { name: "Cisco Packet Tracer", level: 75 },
      { name: "Processing", level: 65 },
    ]
  },
  {
    title: "🛠️ Tools & Frameworks",
    color: "from-green-400 to-green-600",
    skills: [
      { name: "Wazuh", level: 80 },
      { name: "Splunk", level: 85 },
      { name: "Elastic Stack", level: 75 },
      { name: "Azure", level: 80 },
      { name: "SIEM Tools", level: 85 },
      { name: "Security Automation", level: 75 },
      { name: "Threat Detection", level: 80 },
    ]
  },
  {
    title: "⭐ Core Skills",
    color: "from-purple-400 to-purple-600",
    skills: [
      { name: "Analytical Thinking", level: 90 },
      { name: "Problem Solving", level: 88 },
      { name: "Leadership", level: 80 },
      { name: "Team Collaboration", level: 85 },
      { name: "Time Management", level: 82 },
      { name: "Communication", level: 85 },
      { name: "Interpersonal Skills", level: 80 },
      { name: "Organizational Skills", level: 78 },
    ]
  }
];

// Skill Bar Component with animation
const SkillBar = ({ name, level, color }: { name: string; level: number; color: string }) => (
  <div className="mb-3">
    <div className="flex justify-between mb-1">
      <span className="text-gray-300 text-sm">{name}</span>
      <span className="text-cyan-400 text-sm font-medium">{level}%</span>
    </div>
    <div className="w-full bg-gray-700/30 rounded-full h-2 overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className={`h-2 rounded-full bg-gradient-to-r ${color}`}
      />
    </div>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-4 text-center">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Skills</span>
        </h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
          Technical proficiency and expertise across cybersecurity, development, and soft skills
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-4 text-center">
                {category.title}
              </h3>
              {category.skills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  name={skill.name} 
                  level={skill.level} 
                  color={category.color}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}