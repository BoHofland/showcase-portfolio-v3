"use client";
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Header from '../components/header/page';

const sections = [
  {
    id: 'intro',
    title: 'Modern Web Applications',
    subtitle: 'Een diepgaande kijk in het ontwikkelingsproces van moderne web applicaties.'
  },
  {
    id: 'overview',
    title: 'Project Overview',
    content: 'Een uitgebreide beschrijving van het project, de doelen en de gebruikte technologieën.',
    image: '/images/project1-overview.jpg'
  },
  {
    id: 'process',
    title: 'Het Proces',
    phases: [
      { number: '01', title: 'Research', description: 'Onderzoek naar gebruikersbehoeften en technische mogelijkheden.' },
      { number: '02', title: 'Design', description: 'Ontwikkeling van het visuele ontwerp en gebruikerservaring.' },
      { number: '03', title: 'Development', description: 'Implementatie van de technische oplossingen.' }
    ]
  },
  {
    id: 'results',
    title: 'Het Resultaat',
    images: [
      { src: '/images/project1-result1.jpg', alt: 'Project Resultaat 1' },
      { src: '/images/project1-result2.jpg', alt: 'Project Resultaat 2' }
    ]
  }
];

export default function Project1() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateScrollProgress = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        const totalScroll = container.scrollWidth - container.clientWidth;
        const currentScroll = container.scrollLeft;
        const progress = (currentScroll / totalScroll) * 100;
        setScrollProgress(progress);
      });
    };

    const scrollToSection = (direction) => {
      if (isScrolling) return;
      setIsScrolling(true);

      const totalSections = sections.length;
      const newSection = direction === 'next' 
        ? Math.min(currentSection + 1, totalSections - 1)
        : Math.max(currentSection - 1, 0);

      setCurrentSection(newSection);
      
      container.scrollTo({
        left: window.innerWidth * newSection,
        behavior: 'smooth'
      });
      
      setTimeout(() => {
        setIsScrolling(false);
      }, 700);
    };

    let scrollTimeout;
    let scrollDelta = 0;
    const touchpadThreshold = 50;
    const mouseWheelThreshold = 50;

    const handleWheel = (e) => {
      e.preventDefault();
      
      if (Math.abs(e.deltaY) < mouseWheelThreshold) {
        scrollDelta += e.deltaY;
        if (Math.abs(scrollDelta) > touchpadThreshold) {
          scrollToSection(scrollDelta > 0 ? 'next' : 'prev');
          scrollDelta = 0;
        }
      } else {
        scrollToSection(e.deltaY > 0 ? 'next' : 'prev');
      }
    };

    // Scroll event listener voor continue updates
    const handleScroll = () => {
      updateScrollProgress();
    };

    // Touch handling
    let touchStart = 0;
    let touchEnd = 0;

    const handleTouchStart = (e) => {
      touchStart = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
      touchEnd = e.touches[0].clientX;
      updateScrollProgress(); // Update tijdens touch beweging
    };

    const handleTouchEnd = () => {
      const swipeDistance = touchStart - touchEnd;
      if (Math.abs(swipeDistance) > 30) {
        scrollToSection(swipeDistance > 0 ? 'next' : 'prev');
      }
    };

    // Event listeners
    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('scroll', handleScroll, { passive: false });
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('scroll', handleScroll);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [currentSection, isScrolling]);

  return (
    <div className="relative h-screen overflow-hidden bg-background">
      <Header />
      
      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div
          className="h-full bg-white"
          style={{ 
            width: `${scrollProgress}%`,
            transition: 'none',
            willChange: 'width',
            transform: 'translateZ(0)'
          }}
        />
      </div>

      {/* Main Content */}
      <main
        ref={containerRef}
        className="h-screen flex overflow-x-auto overflow-y-hidden scrollbar-hide transition-all duration-700 ease-in-out"
        style={{ 
          scrollBehavior: 'smooth',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {/* Intro Section */}
        <section className="w-screen h-screen flex items-center p-16 shrink-0 bg-background">
          <div className="max-w-4xl">
            <h1 className="text-7xl font-bold mb-8 text-white">
              {sections[0].title}
            </h1>
            <p className="text-2xl text-gray-300">
              {sections[0].subtitle}
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="w-screen h-screen flex items-center p-16 shrink-0 bg-background">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white">{sections[1].title}</h2>
              <p className="text-xl text-gray-300">{sections[1].content}</p>
            </div>
            <div className="relative h-[600px]">
              <Image
                src={sections[1].image}
                alt="Project Overview"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="w-screen h-screen flex items-center p-16 shrink-0 bg-background">
          <div className="max-w-7xl mx-auto w-full">
            <h2 className="text-4xl font-bold mb-16 text-white">{sections[2].title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {sections[2].phases.map((phase) => (
                <div key={phase.number} className="space-y-4">
                  <div className="text-5xl font-bold text-gray-500">{phase.number}</div>
                  <h3 className="text-2xl font-semibold text-white">{phase.title}</h3>
                  <p className="text-gray-300">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="w-screen h-screen flex items-center p-16 shrink-0 bg-background">
          <div className="max-w-7xl mx-auto w-full">
            <h2 className="text-4xl font-bold mb-16 text-white">{sections[3].title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sections[3].images.map((image, index) => (
                <div key={index} className="relative h-[400px]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 