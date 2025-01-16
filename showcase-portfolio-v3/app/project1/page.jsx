"use client";
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Project1() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let isScrolling = false;
    let startX;
    let scrollLeft;

    const handleWheel = (e) => {
      e.preventDefault();
      if (!isScrolling) {
        isScrolling = true;
        container.scrollLeft += e.deltaY;
        setTimeout(() => {
          isScrolling = false;
        }, 50);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <main 
      ref={containerRef}
      className="h-screen overflow-x-auto overflow-y-hidden bg-background text-white whitespace-nowrap scroll-smooth"
      style={{
        scrollSnapType: 'x mandatory',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      <div className="inline-flex h-screen">
        {/* Sectie 1: Intro */}
        <section className="w-screen h-screen flex items-center p-16 shrink-0"
          style={{ scrollSnapAlign: 'start' }}
        >
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <h1 className="text-6xl font-bold mb-8">
              Modern Web Applications
            </h1>
            <div className="text-2xl text-gray-300">
              <p>
                Een diepgaande kijk in het ontwikkelingsproces van moderne web applicaties.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Sectie 2: Project Details */}
        <section className="w-screen h-screen flex items-center p-16 shrink-0"
          style={{ scrollSnapAlign: 'start' }}
        >
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <div className="space-y-8">
              <h2 className="text-4xl font-semibold mb-6">Het Project</h2>
              <p className="text-xl text-gray-300 whitespace-normal">
                Hier komt je projectbeschrijving. Leg uit wat het doel was, welke problemen je hebt opgelost,
                en welke technologieën je hebt gebruikt.
              </p>
            </div>
            <div>
              <img
                src="/images/project1-detail.jpg"
                alt="Project detail"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </motion.div>
        </section>

        {/* Sectie 3: Proces */}
        <section className="w-screen h-screen flex items-center p-16 shrink-0"
          style={{ scrollSnapAlign: 'start' }}
        >
          <motion.div 
            className="max-w-7xl w-full"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <h2 className="text-4xl font-semibold mb-8">Het Proces</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-medium">Research</h3>
                <p className="text-gray-300 whitespace-normal">
                  Beschrijf hier je research fase en belangrijke bevindingen.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-medium">Design</h3>
                <p className="text-gray-300 whitespace-normal">
                  Leg uit hoe je tot je design beslissingen bent gekomen.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-medium">Development</h3>
                <p className="text-gray-300 whitespace-normal">
                  Beschrijf de technische uitdagingen en oplossingen.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Sectie 4: Resultaat */}
        <section className="w-screen h-screen flex items-center p-16 shrink-0"
          style={{ scrollSnapAlign: 'start' }}
        >
          <motion.div 
            className="max-w-7xl w-full"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <h2 className="text-4xl font-semibold mb-8">Het Resultaat</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <img
                src="/images/project1-result1.jpg"
                alt="Project resultaat 1"
                className="rounded-lg w-full h-auto"
              />
              <img
                src="/images/project1-result2.jpg"
                alt="Project resultaat 2"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
} 