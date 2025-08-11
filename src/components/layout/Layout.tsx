import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E0E0E0]">
      <Header />
      <main className={`pt-20 ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
