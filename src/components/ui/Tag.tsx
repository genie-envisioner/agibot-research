import React from 'react';
import { cn } from '@/lib/utils';

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'active';
  size?: 'sm' | 'md';
  className?: string;
  onClick?: () => void;
}

const Tag: React.FC<TagProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className,
  onClick
}) => {
  const baseClasses = 'inline-flex items-center rounded-md font-medium transition-all duration-200';
  
  const variantClasses = {
    default: 'bg-[#333333] text-[#E0E0E0] hover:bg-[#53a9de] hover:bg-opacity-20 hover:text-[#53a9de]',
    active: 'bg-[#53a9de] bg-opacity-20 text-[#53a9de] border border-[#53a9de]'
  };
  
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm'
  };

  const Component = onClick ? 'button' : 'span';

  return (
    <Component
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        onClick && 'cursor-pointer hover:scale-105',
        className
      )}
      onClick={onClick}
    >
      {children}
    </Component>
  );
};

export default Tag;
