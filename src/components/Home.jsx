// Home Section

import { useState } from "react";
import { Menu, X } from "lucide-react"; // lightweight icons
import { motion } from "framer-motion";


// import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-950 text-white px-6 md:px-20"
    >
      {/* Profile Image */}
      <motion.img
        src="https://drive.google.com/uc?export=view&id=YOUR_FILE_ID"
        alt="Amit Kumar Dubey"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-lg border-4 border-blue-500 mb-6 md:mb-0 md:mr-12 object-cover"
      />

      {/* Short Intro */}
      <div className="text-center md:text-left max-w-2xl">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Hi, I'm <span className="text-blue-400">Amit Kumar Dubey</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg leading-relaxed"
        >
          Full-Stack Developer | Problem Solver | Tech Enthusiast
        </motion.p>
      </div>
    </section>
  );
}

