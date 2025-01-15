"use client";

import React, { useEffect, useRef, useState } from "react";
import * as framerMotion from "framer-motion";

const { motion, useInView, useAnimation } = framerMotion;

// Array met kleuren
const colors = ["text-blue-500", "text-orange-500", "text-yellow-500", "text-purple-500"];

export default function PortfolioSection({ items }) {
  return (
    <div className="space-y-32">
      {items.map((item, index) => (
        <PortfolioItem key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}

function PortfolioItem({ item }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const controls = useAnimation();

  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  // Kleuren veranderen in een trage loop met langer wachten
  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 5000); // Verander kleur elke 8 seconden

    return () => clearInterval(colorInterval); // Opruimen bij unmount
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row items-center gap-8 md:gap-24"
    >
      {/* Tekstgedeelte */}
      <motion.div
        className="md:w-1/2 md:pl-16"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-md">
          {/* Dynamische labelkleur met een trage overgang */}
          <p
            className={`text-lg ${colors[colorIndex]} transition-colors duration-[2000ms]`}
          >
            {item.label}
          </p>
          <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
          <p className="text-lg text-gray-600">{item.description}</p>
        </div>
      </motion.div>

      {/* Afbeeldingsgedeelte met gradient border */}
      <motion.div
        className="relative w-full md:w-[500px] h-[600px] group"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Gradient border container */}
        <div className="absolute inset-0 p-1 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-xy">
          {/* Afbeelding container */}
          <div className="relative w-full h-full overflow-hidden rounded-lg">
            <img
              src={item.image}
              alt={item.title}
              className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
