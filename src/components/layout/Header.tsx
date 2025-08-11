import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
const imgPath = import.meta.env.BASE_URL || '/';
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Models', path: '/models' },
    { name: 'Research', path: '/research' },
    { name: 'About', path: '/about' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] bg-black/90 backdrop-blur-md border-b border-[#333333]/30 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            {/* <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#53a9de] to-[#3d7fb2] flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div> */}
            <img
                src={`${imgPath}images/logo-48x48.png`}
              alt="AgiBot"
              className="w-10 h-10 rounded-lg object-cover"
            />
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-none group-hover:text-[#53a9de] transition-colors">
                AgiBot
              </span>
              <span className="text-[#888888] text-xs leading-none">Research</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-base font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-[#53a9de]'
                    : 'text-[#E0E0E0] hover:text-[#53a9de]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => window.open('https://github.com/agi-bot', '_blank')}
            >
              GitHub
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#E0E0E0] hover:text-[#53a9de] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-[#333333]/50">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block text-lg font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-[#53a9de]'
                      : 'text-[#E0E0E0] hover:text-[#53a9de]'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-[#333333]/50">
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    window.open('https://github.com/agi-bot', '_blank');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
