"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

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

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

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
          <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
          <p className="text-lg text-gray-600">{item.description}</p>
          <p className="text-lg text-gray-600">{item.label}</p>
        </div>
      </motion.div>

      {/* Afbeeldingsgedeelte */}
      <motion.div
        className="relative w-full md:w-[500px] h-[600px]"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative w-full h-full overflow-hidden rounded-lg shadow-xl">
          <img
            src={item.image}
            alt={item.title}
            className="object-cover w-full h-full transform transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </motion.div>
    </div>
  );
}
