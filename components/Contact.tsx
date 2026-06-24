"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarker, FaGithub, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-4 text-center">
          Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
        </h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
          Get in touch for collaboration, opportunities, or just to connect!
        </p>
        
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="text-center bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
            >
              <FaEnvelope className="text-3xl text-cyan-400 mx-auto mb-3" />
              <p className="text-sm text-gray-400">Email</p>
              <a href="mailto:boniwesthembiso@gmail.com" className="text-white hover:text-cyan-400 transition font-medium">
                boniwesthembiso@gmail.com
              </a>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="text-center bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
            >
              <FaPhone className="text-3xl text-cyan-400 mx-auto mb-3" />
              <p className="text-sm text-gray-400">Phone</p>
              <a href="tel:+27665962195" className="text-white hover:text-cyan-400 transition font-medium">
                +27 66 596 2195
              </a>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="text-center bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
            >
              <FaMapMarker className="text-3xl text-cyan-400 mx-auto mb-3" />
              <p className="text-sm text-gray-400">Location</p>
              <p className="text-white font-medium">Pretoria, South Africa</p>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <motion.a 
              whileHover={{ y: -3, scale: 1.1 }}
              href="https://github.com/Boniwe449" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-2xl text-gray-400 hover:text-cyan-400 transition bg-white/5 p-3 rounded-full border border-white/10 hover:border-cyan-400/50"
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              whileHover={{ y: -3, scale: 1.1 }}
              href="https://www.facebook.com/sthembiso.mohale.90" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-2xl text-gray-400 hover:text-cyan-400 transition bg-white/5 p-3 rounded-full border border-white/10 hover:border-cyan-400/50"
            >
              <FaFacebook />
            </motion.a>
            <motion.a 
              whileHover={{ y: -3, scale: 1.1 }}
              href="https://wa.me/27665962195" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-2xl text-gray-400 hover:text-green-400 transition bg-white/5 p-3 rounded-full border border-white/10 hover:border-green-400/50"
            >
              <FaWhatsapp />
            </motion.a>
          </div>
          
          {/* Contact Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition" 
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition" 
              />
            </div>
            <textarea 
              rows={4} 
              placeholder="Your Message" 
              className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition resize-none" 
            />
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-xl font-semibold transition shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
            >
              Send Message ✉️
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}