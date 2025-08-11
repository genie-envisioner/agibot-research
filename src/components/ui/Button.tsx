import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#53a9de] focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#53a9de] to-[#3d7fb2] text-white hover:brightness-110 hover:-translate-y-0.5 shadow-lg hover:shadow-xl',
    secondary: 'border border-[#53a9de] text-[#53a9de] hover:bg-[#53a9de] hover:bg-opacity-15 hover:-translate-y-0.5',
    text: 'text-[#53a9de] hover:underline hover:text-white'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-md',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-lg'
  };

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
