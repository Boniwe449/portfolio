"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaFacebook, FaDownload, FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto relative z-10"
      >
        {/* Profile Image */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-xl shadow-cyan-500/20 bg-white/5 backdrop-blur-sm p-1">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-20 animate-spin-slow" />
            <Image
              src="/profile.jpg"
              alt="Mohale Boniwe Sthembiso"
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient">
            Mohale Boniwe Sthembiso
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl font-semibold mb-3"
        >
          <span className="text-cyan-400">Computer Systems Engineer</span>
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-6"
        >
          {["Cybersecurity", "Networking", "Cloud Security", "Software Development"].map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs md:text-sm bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center gap-4 mb-8"
        >
          <motion.a 
            whileHover={{ y: -3, scale: 1.1 }}
            href="https://github.com/Boniwe449" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
          >
            <FaGithub />
            <span className="text-sm font-medium hidden sm:inline">GitHub</span>
          </motion.a>
          <motion.a 
            whileHover={{ y: -3, scale: 1.1 }}
            href="https://www.facebook.com/sthembiso.mohale.90" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
          >
            <FaFacebook />
            <span className="text-sm font-medium hidden sm:inline">Facebook</span>
          </motion.a>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects" 
            className="group inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-full font-semibold transition shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
          >
            View Projects
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/CV_Mohale_Boniwe_Sthembiso.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3 border border-cyan-400/50 hover:border-cyan-400 rounded-full font-semibold transition bg-white/5 backdrop-blur-sm hover:bg-white/10"
          >
            <FaDownload className="group-hover:translate-y-0.5 transition-transform" />
            Download CV
          </motion.a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center"
          >
            <div className="w-1 h-2 bg-cyan-400 rounded-full mt-2 animate-pulse" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}