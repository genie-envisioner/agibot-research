import React from 'react';
import { MapPin, Users, Calendar, ExternalLink, Mail, TrendingUp, Award, Building } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { researchDirections, careers, companyInfo, contact } from '../data/about';
const imgPath = import.meta.env.BASE_URL 
const About: React.FC = () => {
  const iconMap = {
    Brain: TrendingUp,
    Zap: TrendingUp,
    Globe: TrendingUp,
    Eye: TrendingUp,
    Settings: TrendingUp,
    Users: Users
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-[#0A0A0A] to-[#141414]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-[#53a9de]">AgiBot Research</span>
            </h1>
            <p className="text-xl text-[#E0E0E0] max-w-4xl mx-auto leading-relaxed mb-8">
              {companyInfo.mission}
            </p>
            <p className="text-lg text-[#888888] max-w-3xl mx-auto leading-relaxed">
              {companyInfo.vision}
            </p>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-12 bg-[#141414] border-b border-[#333333]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-[#53a9de] mb-2">{companyInfo.robots_num}</div>
                <div className="text-[#888888]">Robots</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#53a9de] mb-2">{companyInfo.publications}</div>
                <div className="text-[#888888]">Publications</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#53a9de] mb-2">{companyInfo.patents}</div>
                <div className="text-[#888888]">Patents</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#53a9de] mb-2">{companyInfo.products}</div>
                <div className="text-[#888888]">Products</div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Our Story</h2>
                <div className="space-y-6 text-[#E0E0E0]">
                  <p className="leading-relaxed">
                    Founded in {companyInfo.founded}, AgiBot Research emerged from a vision to bridge 
                    the gap between artificial intelligence and physical reality. Our multidisciplinary 
                    team of researchers, engineers, and visionaries work together to advance the 
                    frontiers of embodied artificial intelligence.
                  </p>
                  <p className="leading-relaxed">
                    We believe that the future of AI lies not just in digital intelligence, but in 
                    systems that can understand and interact with the physical world. Our research 
                    spans world models, multimodal perception, reinforcement learning, and 
                    human-AI interaction.
                  </p>
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-[#53a9de] mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-white mb-2">Global Presence</h4>
                      <p className="text-sm text-[#888888]">
                        {companyInfo.locations.join(' • ')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={`${imgPath}images/banner20250117.jpg`}
                  alt="AgiBot Research Lab"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Research Directions */}
        <section id="research" className="py-16 bg-[#141414]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Research Directions</h2>
              <p className="text-xl text-[#E0E0E0] max-w-3xl mx-auto">
                Our research spans multiple disciplines, from fundamental AI theory to practical 
                applications in robotics and embodied intelligence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {researchDirections.map((direction) => {
                const IconComponent = iconMap[direction.icon as keyof typeof iconMap] || TrendingUp;
                return (
                  <Card key={direction.id} className="h-full">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-[#53a9de]/20 flex items-center justify-center">
                        <IconComponent className="text-[#53a9de]" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{direction.title}</h3>
                        <p className="text-sm text-[#53a9de]">{direction.subtitle}</p>
                      </div>
                    </div>

                    <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-[#53a9de]/10 to-[#3d7fb2]/10">
                      <img
                        src={direction.image}
                        alt={direction.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <p className="text-[#E0E0E0] text-sm leading-relaxed mb-4">
                      {direction.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-3">Key Topics</h4>
                      <ul className="space-y-1">
                        {direction.keyTopics.map((topic, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm text-[#E0E0E0]">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#53a9de] mt-2 flex-shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between text-sm text-[#888888] mt-auto pt-4 border-t border-[#333333]">
                      <span>{direction.publications} publications</span>
                      <Button variant="text" size="sm">
                        Explore Research
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Careers */}
        {/* <section id="careers" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Join Our Team</h2>
              <p className="text-xl text-[#E0E0E0] max-w-3xl mx-auto">
                We're looking for passionate researchers and engineers to help us build 
                the future of embodied artificial intelligence.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {careers.map((career) => (
                <Card key={career.id} className="h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{career.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-[#888888]">
                        <div className="flex items-center space-x-1">
                          <Building size={14} />
                          <span>{career.department}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={14} />
                          <span>{career.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2 text-right">
                      <span className="px-2 py-1 bg-[#53a9de]/20 text-[#53a9de] text-xs font-medium rounded">
                        {career.type}
                      </span>
                      <span className="text-xs text-[#888888]">{career.level}</span>
                    </div>
                  </div>

                  <p className="text-[#E0E0E0] text-sm leading-relaxed mb-4">
                    {career.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Requirements</h4>
                    <ul className="space-y-1">
                      {career.requirements.slice(0, 3).map((requirement, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-[#E0E0E0]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#53a9de] mt-2 flex-shrink-0" />
                          <span>{requirement}</span>
                        </li>
                      ))}
                      {career.requirements.length > 3 && (
                        <li className="text-sm text-[#888888] ml-3.5">
                          +{career.requirements.length - 3} more requirements
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between text-sm text-[#888888] mt-auto pt-4 border-t border-[#333333]">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>Posted {new Date(career.posted).toLocaleDateString()}</span>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => window.location.href = career.applyUrl}
                    >
                      <Mail size={14} className="mr-2" />
                      Apply Now
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-[#888888] mb-4">
                Don't see a role that fits? We're always looking for exceptional talent.
              </p>
              <Button
                variant="secondary"
                onClick={() => window.location.href = `mailto:${contact.careers}`}
              >
                <Mail size={18} className="mr-2" />
                Send Us Your Resume
              </Button>
            </div>
          </div>
        </section> */}

        {/* Contact */}
        {/* <section className="py-16 bg-gradient-to-r from-[#53a9de]/10 to-[#3d7fb2]/10">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-lg text-[#E0E0E0] mb-8">
              Ready to collaborate on the future of embodied AI? We'd love to hear from you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <h4 className="font-semibold text-white mb-2">General Inquiries</h4>
                <a href={`mailto:${contact.email}`} className="text-[#53a9de] hover:text-white transition-colors">
                  {contact.email}
                </a>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-white mb-2">Partnerships</h4>
                <a href={`mailto:${contact.partnerships}`} className="text-[#53a9de] hover:text-white transition-colors">
                  {contact.partnerships}
                </a>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-white mb-2">Press & Media</h4>
                <a href={`mailto:${contact.press}`} className="text-[#53a9de] hover:text-white transition-colors">
                  {contact.press}
                </a>
              </div>
            </div>
            <Button onClick={() => window.location.href = `mailto:${contact.email}`}>
              <Mail size={18} className="mr-2" />
              Contact Us
            </Button>
          </div>
        </section> */}
      </div>
    </Layout>
  );
};

export default About;
