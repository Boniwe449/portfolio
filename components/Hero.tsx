"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <div className="mb-8 flex justify-center">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl shadow-blue-500/20">
            <Image
              src="/profile.jpg"
              alt="Mohale Boniwe Sthembiso"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Mohale Boniwe Sthembiso
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-400 font-semibold mb-3">
          Computer Systems Engineer
        </p>
        
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
          Cybersecurity • Networking • Cloud Security • Software Development
        </p>

        <div className="flex justify-center gap-6 mb-8">
          <a href="https://github.com/Boniwe449" target="_blank" rel="noopener noreferrer" 
             className="text-blue-400 hover:text-blue-300 transition font-medium">
            GitHub
          </a>
          <a href="https://www.facebook.com/sthembiso.mohale.90" target="_blank" rel="noopener noreferrer" 
             className="text-blue-400 hover:text-blue-300 transition font-medium">
            Facebook
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" 
             className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition">
            View Projects
          </a>
          <a href="/CV_Mohale_Boniwe_Sthembiso.pdf" download
             className="px-8 py-3 border border-blue-500 hover:bg-blue-500/10 rounded-full font-semibold transition">
            Download CV
          </a>
        </div>
      </motion.div>
    </section>
  );
}