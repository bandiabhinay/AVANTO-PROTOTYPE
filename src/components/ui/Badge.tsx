import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'ai';
  size?: 'sm' | 'md';
  className?: string;
}

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}: BadgeProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full";
  
  const variants = {
    default: "bg-gray-100 text-[#172033]",
    success: "bg-[#12B76A]/10 text-[#12B76A]",
    warning: "bg-[#F79009]/10 text-[#F79009]",
    error: "bg-[#F04438]/10 text-[#F04438]",
    info: "bg-[#2563EB]/10 text-[#2563EB]",
    ai: "bg-gradient-to-r from-blue-50 to-violet-50 text-violet-700 border border-violet-200",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-sm",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
}
