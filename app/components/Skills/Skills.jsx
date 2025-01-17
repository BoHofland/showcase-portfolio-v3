"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { FaHtml5, FaCss3Alt, FaJs, FaFigma, FaReact } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";

export default function Skills() {
  const colors = [
    "text-blue-500",
    "text-orange-500",
    "text-yellow-500",
    "text-purple-500",
  ];

  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 5000);

    return () => clearInterval(colorInterval);
  }, []);

  return (
    <motion.section
      className="min-h-screen bg-background text-white flex items-center justify-center"
      initial={{ opacity: 0, y: 100 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, amount: 0.2 }} 
      transition={{ duration: 1.75, ease: "easeOut" }} 
    >
      <div className="container mx-auto px-4 pt-8 pb-8">
        {/* Skills sectie */}
        <div className="text-center">
          <h2
            className={`text-8xl font-bold mb-8 transition-colors duration-[2000ms] ${colors[colorIndex]}`}
          >
            Skills
          </h2>
          <p className="text-2xl text-gray-300 mb-12">
            UX/UI designer / Front-End developer
          </p>

          {/* Skills iconen */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center group">
              <FaHtml5 className="text-6xl text-gray-400 group-hover:text-orange-500 transition-colors duration-300" />
              <span className="mt-2 text-gray-400 group-hover:text-orange-500 transition-colors duration-300">
                HTML
              </span>
            </div>
            <div className="flex flex-col items-center group">
              <FaCss3Alt className="text-6xl text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
              <span className="mt-2 text-gray-400 group-hover:text-blue-500 transition-colors duration-300">
                CSS
              </span>
            </div>
            <div className="flex flex-col items-center group">
              <FaJs className="text-6xl text-gray-400 group-hover:text-yellow-400 transition-colors duration-300" />
              <span className="mt-2 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300">
                JavaScript
              </span>
            </div>
            <div className="flex flex-col items-center group">
              <FaFigma className="text-6xl text-gray-400 group-hover:text-purple-500 transition-colors duration-300" />
              <span className="mt-2 text-gray-400 group-hover:text-purple-500 transition-colors duration-300">
                Figma
              </span>
            </div>
            <div className="flex flex-col items-center group">
              <SiAdobephotoshop className="text-6xl text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
              <span className="mt-2 text-gray-400 group-hover:text-blue-600 transition-colors duration-300">
                Photoshop
              </span>
            </div>
            <div className="flex flex-col items-center group">
              <FaReact className="text-6xl text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
              <span className="mt-2 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
                React
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
