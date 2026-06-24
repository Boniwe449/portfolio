"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Azure Honeypot SIEM",
    description: "Deployed a cloud-based honeypot on Microsoft Azure to attract real-world cyber-attacks. Configured and integrated a SIEM solution to aggregate, analyze, and correlate attack logs in real time. Visualized live threat intelligence including attacker geolocation and attack patterns.",
    tech: ["Azure", "SIEM", "Cloud Security", "Threat Intelligence"],
    link: "#",
  },
  {
    title: "SOC Automation Lab (Wazuh & Splunk)",
    description: "Established a comprehensive SOC lab environment integrating Wazuh for endpoint detection and response (EDR) alongside Splunk for centralized log aggregation. Developed custom dashboards and automated alerting workflows to reduce MTTD and MTTR.",
    tech: ["Wazuh", "Splunk", "EDR", "Security Automation"],
    link: "#",
  },
  {
    title: "Threat Detection & SIEM (Elastic Stack)",
    description: "Deployed a cloud-based honeypot with Elastic Stack SIEM for real-time threat detection. Visualized attack patterns and implemented automated incident response workflows for improved security monitoring.",
    tech: ["Elastic Stack", "SIEM", "Threat Detection", "Automation"],
    link: "#",
  },
  {
    title: "Phishing Detection System",
    description: "Developed a system to automatically identify and analyze phishing campaigns. Utilized email header analysis, domain reputation scoring, and payload inspection to classify suspicious emails and block malicious senders.",
    tech: ["Python", "Email Analysis", "Threat Intelligence", "Security"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-4 text-center">
          My <span className="text-blue-400">Projects</span>
        </h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
          Cybersecurity and software development projects showcasing my skills in threat detection, 
          security automation, and system analysis.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-blue-500/50 transition group"
            >
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition text-sm">
                  <FaExternalLinkAlt /> View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}