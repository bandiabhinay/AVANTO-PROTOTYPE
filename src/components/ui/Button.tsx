import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "disabled"> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'ai';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-[10px] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-[#2563EB] text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-transparent text-[#172033] border border-[#D0D5DD] hover:bg-gray-50 focus:ring-gray-200",
    accent: "bg-[#F97316] text-white hover:bg-orange-600 focus:ring-orange-500",
    ghost: "bg-transparent text-[#667085] hover:text-[#172033] hover:bg-gray-100 focus:ring-gray-200",
    ai: "bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white hover:opacity-90 focus:ring-[#7C3AED]",
  };

  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-6 text-base",
  };

  return (
    <motion.button
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      disabled={disabled || loading}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </motion.button>
  );
}
