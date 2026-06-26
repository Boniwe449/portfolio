"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Azure Honeypot SIEM",
    description: "Deployed a cloud-based honeypot on Microsoft Azure to attract real-world cyber-attacks. Configured and integrated a SIEM solution to aggregate, analyze, and correlate attack logs in real time. Visualized live threat intelligence including attacker geolocation and attack patterns.",
    tech: ["Azure", "SIEM", "Cloud Security", "Threat Intelligence"],
    image: "/projects/images/azure-honeypot.png",
    link: "#",
    featured: true,
  },
  {
    title: "SOC Automation Lab (Wazuh & Splunk)",
    description: "Established a comprehensive SOC lab environment integrating Wazuh for endpoint detection and response (EDR) alongside Splunk for centralized log aggregation. Developed custom dashboards and automated alerting workflows to reduce MTTD and MTTR.",
    tech: ["Wazuh", "Splunk", "EDR", "Security Automation"],
    image: "/projects/images/soc-lab.png",
    link: "#",
    featured: false,
  },
  {
    title: "Threat Detection & SIEM (Elastic Stack)",
    description: "Deployed a cloud-based honeypot with Elastic Stack SIEM for real-time threat detection. Visualized attack patterns and implemented automated incident response workflows for improved security monitoring.",
    tech: ["Elastic Stack", "SIEM", "Threat Detection", "Automation"],
    image: "/projects/images/threat-detection.png",
    link: "#",
    featured: false,
  },
  {
    title: "Phishing Detection System",
    description: "Developed a system to automatically identify and analyze phishing campaigns. Utilized email header analysis, domain reputation scoring, and payload inspection to classify suspicious emails and block malicious senders.",
    tech: ["Python", "Email Analysis", "Threat Intelligence", "Security"],
    image: "/projects/images/phishing-detection.png",
    link: "#",
    featured: false,
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
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
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
              whileHover={{ y: -5, scale: 1.02 }}
              className={`bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,180,255,0.1)] overflow-hidden ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative w-full h-48 md:h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-xs font-semibold text-white shadow-lg">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className={`font-bold mb-2 transition ${
                  project.featured ? 'text-2xl text-cyan-400' : 'text-xl text-white'
                }`}>
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs border border-cyan-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition text-sm">
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