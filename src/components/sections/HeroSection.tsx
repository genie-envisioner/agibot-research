import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { HomeProject } from '../../data/home';

interface HeroSectionProps {
  project: HomeProject;
  onScrollToNext: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ project, onScrollToNext }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-[#0A0A0A]/40" />
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25px 25px, #53a9de 2px, transparent 0),
            radial-gradient(circle at 75px 75px, #53a9de 2px, transparent 0)
          `,
          backgroundSize: '100px 100px',
          animation: 'float 20s ease-in-out infinite'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          {project.title}
        </h1>
        <h2 className="text-2xl md:text-3xl text-[#53a9de] font-semibold mb-8">
          {project.subtitle}
        </h2>
        <p className="text-xl md:text-2xl text-[#E0E0E0] mb-12 leading-relaxed max-w-3xl mx-auto">
          {project.description}
        </p>
        
        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {project.features.map((feature, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-[#53a9de]/30 text-[#E0E0E0] text-sm font-medium"
            >
              {feature}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          {project.learnMoreUrl && (
            <Button size="lg" onClick={() => window.location.href = project.learnMoreUrl}>
              <span>Learn More</span>
              <ArrowRight size={20} className="ml-2" />
            </Button>
          )}
          {project.githubUrl && (
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              View on GitHub
            </Button>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={onScrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#53a9de] hover:text-white transition-colors duration-300 animate-bounce"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={32} />
      </button>

    </section>
  );
};

export default HeroSection;
