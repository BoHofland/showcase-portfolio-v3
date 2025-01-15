"use client";
import { useState, useEffect } from 'react';
import Header from '../components/header/page';
import Contact from '../components/contact/page';
import { FaHtml5, FaCss3Alt, FaJs, FaFigma, FaReact } from 'react-icons/fa';
import { SiAdobephotoshop } from 'react-icons/si';

export default function About() {
  const colors = [
    'text-blue-500',
    'text-orange-500',
    'text-yellow-500',
    'text-purple-500'
  ];

  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 5000);

    return () => clearInterval(colorInterval);
  }, []);

  return (
    <main className="min-h-screen bg-background text-white">
      <Header />

      <div className="container mx-auto px-4 py-16 mt-16">
        {/* Over mij sectie */}
        <h1 className={`text-[12.5rem] font-bold mb-16 mt-16 transition-colors duration-[2000ms] ${colors[colorIndex]}`}>
          Over mij
        </h1>


        <div className="text-2xl text-gray-300 space-y-8 max-w-4xl mb-96">
          <p>
            Hoi, ik ben Bo.
          </p>
          <p>
            Ik volg de opleiding HBO-ICT op Fontys in Eindhoven, ik zit momenteel in het tweede leerjaar. 
            Met een passie voor creativiteit, technologie en probleemoplossing werk ik graag op het gebied 
            van ICT & business. De combinatie van technologie, data en business spreekt mij heel erg aan. 
            Mijn kracht ligt in het inzetten van data-analyse en technologie om bedrijfsprocessen te 
            verbeteren en strategische beslissingen te ondersteunen.
          </p>
          <p>
            Met mijn doelgerichtheid, structuur en oog voor detail creëer ik oplossingen die echt waarde 
            toevoegen. Tegelijkertijd werk ik aan mijn groei door meer flexibiliteit en efficiëntie in 
            mijn werkprocessen te brengen.
          </p>
          <p>
            Wat mij het meest motiveert, is de uitdaging om technologie praktisch toepasbaar te maken 
            binnen bedrijven en organisaties te helpen slimmer en efficiënter te werken. Ik kijk ernaar 
            uit om mijn vaardigheden verder te ontwikkelen en bij te dragen aan vernieuwende en praktische 
            systemen die organisaties naar een hoger niveau tillen.
          </p>
          <p>
            Laten we samen werken aan slimme, toekomstgerichte oplossingen!
          </p>
        </div>

        {/* Skills sectie */}
        <div className="mt-48 mb-96">
          <h2 className="text-8xl font-bold mb-8">
            Skills
          </h2>
          <p className="text-2xl text-gray-300 mb-12">
            UX/UI designer / Front-End developer
          </p>

          {/* Skills iconen */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 max-w-3xl">
            <div className="flex flex-col items-center group">
              <FaHtml5 className="text-6xl text-gray-400 group-hover:text-orange-500 transition-colors duration-300" />
              <span className="mt-2 text-gray-400 group-hover:text-orange-500 transition-colors duration-300">HTML</span>
            </div>
            <div className="flex flex-col items-center group">
              <FaCss3Alt className="text-6xl text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
              <span className="mt-2 text-gray-400 group-hover:text-blue-500 transition-colors duration-300">CSS</span>
            </div>
            <div className="flex flex-col items-center group">
              <FaJs className="text-6xl text-gray-400 group-hover:text-yellow-400 transition-colors duration-300" />
              <span className="mt-2 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300">JavaScript</span>
            </div>
            <div className="flex flex-col items-center group">
              <FaFigma className="text-6xl text-gray-400 group-hover:text-purple-500 transition-colors duration-300" />
              <span className="mt-2 text-gray-400 group-hover:text-purple-500 transition-colors duration-300">Figma</span>
            </div>
            <div className="flex flex-col items-center group">
              <SiAdobephotoshop className="text-6xl text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
              <span className="mt-2 text-gray-400 group-hover:text-blue-600 transition-colors duration-300">Photoshop</span>
            </div>
            <div className="flex flex-col items-center group">
              <FaReact className="text-6xl text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
              <span className="mt-2 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">React</span>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </main>
  );
}
