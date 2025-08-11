import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Youtube, Mail } from 'lucide-react';
import { socialLinks, contact } from '../../data/about';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Research',
      links: [
        { name: 'Publications', path: '/research' },
        { name: 'Models', path: '/models' },
        { name: 'Datasets', path: '/research?filter=dataset' },
        { name: 'Open Source', path: 'https://github.com/agi-bot' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Careers', path: '/about#careers' },
        { name: 'Team', path: '/about#team' },
        { name: 'Press', path: '/press' }
      ]
    },
    {
      title: 'Connect',
      links: [
        { name: 'Contact Us', path: `mailto:${contact.email}` },
        { name: 'Partnerships', path: `mailto:${contact.partnerships}` },
        { name: 'Media Inquiries', path: `mailto:${contact.press}` },
        { name: 'Support', path: '/support' }
      ]
    }
  ];

  const socialIcons = [
    { Icon: Github, url: socialLinks.github, label: 'GitHub' },
    { Icon: Twitter, url: socialLinks.twitter, label: 'Twitter' },
    { Icon: Linkedin, url: socialLinks.linkedin, label: 'LinkedIn' },
    { Icon: Youtube, url: socialLinks.youtube, label: 'YouTube' }
  ];

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#333333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#53a9de] to-[#3d7fb2] flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-none">
                  AgiBot
                </span>
                <span className="text-[#888888] text-xs leading-none">Research</span>
              </div>
            </Link>
            <p className="text-[#E0E0E0] text-sm leading-relaxed mb-6 max-w-md">
              Pioneering the frontiers of embodied artificial intelligence through cutting-edge research 
              in robotics, world models, and intelligent agents.
            </p>
            <div className="flex items-center space-x-4">
              {socialIcons.map(({ Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[#888888] hover:text-[#53a9de] transition-colors duration-200 hover:bg-[#53a9de]/10 rounded-lg"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.path.startsWith('http') || link.path.startsWith('mailto:') ? (
                      <a
                        href={link.path}
                        target={link.path.startsWith('http') ? '_blank' : undefined}
                        rel={link.path.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-[#E0E0E0] hover:text-[#53a9de] transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-[#E0E0E0] hover:text-[#53a9de] transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#333333] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-[#888888] text-sm">
            © {currentYear} AgiBot Research. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <Link to="/privacy" className="text-[#888888] hover:text-[#53a9de] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-[#888888] hover:text-[#53a9de] transition-colors">
              Terms of Service
            </Link>
            <a
              href={`mailto:${contact.email}`}
              className="text-[#888888] hover:text-[#53a9de] transition-colors flex items-center space-x-1"
            >
              <Mail size={16} />
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
