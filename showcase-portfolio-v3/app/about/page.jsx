"use client";
import { useState, useEffect } from 'react';
import Header from '../components/header/page';
import Contact from '../components/contact/page';

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
    }, 5000); // Verandert elke 5 seconden van kleur

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



        <div className="text-2xl text-gray-300 space-y-8 max-w-4xl mb-48">
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
        <div className="mt-32">
          <h2 className="text-8xl font-bold mb-8">
            Skills
          </h2>
          <p className="text-2xl text-gray-300">
            UX/UI designer / Front-End developer
          </p>
        </div>
      </div>
      <Contact />
    </main>
  );
}
