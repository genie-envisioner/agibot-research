import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ className, children, hover = true }) => {
  return (
    <div
      className={cn(
        'bg-[#141414] rounded-lg p-6 border border-[#333333] transition-all duration-300',
        hover && 'hover:-translate-y-1 hover:border-t-2 hover:border-t-[#53a9de] hover:shadow-lg hover:shadow-[#53a9de]/20',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
