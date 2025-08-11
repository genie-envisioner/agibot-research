import React, { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import HeroSection from '../components/sections/HeroSection';
import ProjectSection from '../components/sections/ProjectSection';
import { homeProjects } from '../data/home';

const Home: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);

  // Smooth scroll to next section
  const scrollToSection = (index: number) => {
    const element = document.getElementById(`section-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToNext = () => {
    const nextSection = Math.min(currentSection + 1, homeProjects.length - 1);
    scrollToSection(nextSection);
  };

  // Handle scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = homeProjects.map((_, index) => 
        document.getElementById(`section-${index}`)
      );
      
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setCurrentSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-page min-h-screen bg-[#0A0A0A] text-[#E0E0E0]">
      <Header />
      <div className="relative">
        {/* Progress Indicator */}
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
          <div className="flex flex-col space-y-4">
            {homeProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSection === index
                    ? 'bg-[#53a9de] scale-125'
                    : 'bg-[#333333] hover:bg-[#53a9de]/50'
                }`}
                aria-label={`Go to section ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Sections */}
        {homeProjects.map((project, index) => (
          <div
            key={project.id}
            id={`section-${index}`}
            className={`snap-y snap-mandatory ${index === 0 ? 'scroll-mt-20' : ''}`}
          >
            {index === 0 && <div className='placeholder-div' style={{ height: 80, pointerEvents: 'none' }} />}
            {index === 0 ? (
              <HeroSection
                project={project}
                onScrollToNext={handleScrollToNext}
              />
            ) : (
              <ProjectSection
                project={project}
                index={index}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
