import React from 'react';
import { ExternalLink, Github, BarChart3 } from 'lucide-react';
import Button from '../ui/Button';
import { HomeProject } from '../../data/home';

interface ProjectSectionProps {
  project: HomeProject;
  index: number;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
          
          {/* Image Side */}
          <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Floating Stats */}
              {project.stats && (
                <div className="absolute -bottom-6 -right-6 bg-[#141414] border border-[#333333] rounded-xl p-6 backdrop-blur-sm">
                  <div className="flex items-center space-x-2 mb-4">
                    <BarChart3 className="text-[#53a9de]" size={20} />
                    <span className="text-white font-semibold">Key Metrics</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {project.stats.slice(0, 4).map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-[#53a9de]">{stat.value}</div>
                        <div className="text-sm text-[#888888]">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Content Side */}
          <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                  {project.title}
                </h2>
                <h3 className="text-xl lg:text-2xl text-[#53a9de] font-semibold mb-6">
                  {project.subtitle}
                </h3>
                <p className="text-lg text-[#E0E0E0] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-[#53a9de] mt-2 flex-shrink-0" />
                      <span className="text-[#E0E0E0] text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {project.learnMoreUrl && (
                  <Button
                    onClick={() => window.location.href = project.learnMoreUrl}
                  >
                    <span>Learn More</span>
                    <ExternalLink size={18} className="ml-2" />
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    variant="secondary"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github size={18} className="mr-2" />
                    <span>GitHub</span>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
