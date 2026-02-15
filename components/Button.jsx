import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Reusable Button Component
 * Variants: primary, secondary, outline, ghost
 * Sizes: sm, md, lg
 */
export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon = false,
  onClick,
  className = '',
  ...props 
}) {
  const baseStyles = 'font-semibold rounded-xl transition-all inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-2xl hover:scale-105',
    secondary: 'bg-white text-slate-700 hover:shadow-lg border-2 border-slate-200',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
    ghost: 'text-blue-600 hover:bg-blue-50'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon && <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />}
    </button>
  );
}
