import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface CardProps extends HTMLMotionProps<"div"> {
  variant?: 'default' | 'elevated' | 'glass' | 'ai-gradient';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  interactive?: boolean;
}

export default function Card({
  variant = 'default',
  padding = 'md',
  interactive = false,
  className = '',
  children,
  onClick,
  ...props
}: CardProps) {
  const baseStyles = "rounded-[16px] sm:rounded-[20px] overflow-hidden";
  
  const variants = {
    default: "bg-white border border-[#EAECF0]",
    elevated: "bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)]",
    glass: "bg-white/80 backdrop-blur-md border border-white/20",
    "ai-gradient": "bg-gradient-to-br from-blue-50/50 to-violet-50/50 border border-violet-100",
  };

  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const interactiveStyles = interactive || onClick ? "cursor-pointer transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1" : "";

  return (
    <motion.div
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${paddings[padding]} ${interactiveStyles} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
