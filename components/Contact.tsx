"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarker, FaGithub, FaFacebook } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-900/20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-4 text-center">
          Contact <span className="text-blue-400">Me</span>
        </h2>
        <p className="text-gray-400 text-center mb-10">
          Get in touch for collaboration, opportunities, or just to connect!
        </p>
        
        <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <FaEnvelope className="text-3xl text-blue-400 mx-auto mb-2" />
              <p className="text-sm text-gray-400">Email</p>
              <a href="mailto:boniwesthembiso@gmail.com" className="text-white hover:text-blue-400 transition">
                boniwesthembiso@gmail.com
              </a>
            </div>
            <div className="text-center">
              <FaPhone className="text-3xl text-blue-400 mx-auto mb-2" />
              <p className="text-sm text-gray-400">Phone</p>
              <a href="tel:+27665962195" className="text-white hover:text-blue-400 transition">
                +27 66 596 2195
              </a>
            </div>
            <div className="text-center">
              <FaMapMarker className="text-3xl text-blue-400 mx-auto mb-2" />
              <p className="text-sm text-gray-400">Location</p>
              <p className="text-white">Pretoria, South Africa</p>
            </div>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <a href="https://github.com/Boniwe449" target="_blank" rel="noopener noreferrer" 
               className="text-2xl text-gray-400 hover:text-blue-400 transition">
              <FaGithub />
            </a>
            <a href="https://www.facebook.com/sthembiso.mohale.90" target="_blank" rel="noopener noreferrer" 
               className="text-2xl text-gray-400 hover:text-blue-400 transition">
              <FaFacebook />
            </a>
          </div>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" 
                     className="bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition" />
              <input type="email" placeholder="Your Email" 
                     className="bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition" />
            </div>
            <textarea rows={4} placeholder="Your Message" 
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition" />
            <button type="submit" 
                    className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition">
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}