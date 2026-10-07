import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X } from 'lucide-react';

export interface ToastProps {
  id: string;
  title: string;
  description?: string;
  variant?: 'success' | 'error' | 'warning' | 'info';
  onClose: (id: string) => void;
  duration?: number;
}

const icons = {
  success: <CheckCircle2 className="w-5 h-5 text-[#12B76A]" />,
  error: <AlertCircle className="w-5 h-5 text-[#F04438]" />,
  warning: <AlertTriangle className="w-5 h-5 text-[#F79009]" />,
  info: <Info className="w-5 h-5 text-[#2563EB]" />,
};

export default function Toast({
  id,
  title,
  description,
  variant = 'info',
  onClose,
  duration = 5000,
}: ToastProps) {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose(id);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [id, duration, onClose]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      className="flex items-start p-4 bg-white rounded-xl shadow-lg border border-gray-100 mb-3 w-full max-w-sm pointer-events-auto"
    >
      <div className="flex-shrink-0 mr-3 mt-0.5">
        {icons[variant]}
      </div>
      <div className="flex-1 mr-2">
        <h4 className="text-sm font-semibold text-[#172033]">{title}</h4>
        {description && (
          <p className="text-sm text-[#667085] mt-1">{description}</p>
        )}
      </div>
      <button
        onClick={() => onClose(id)}
        className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors rounded-full p-1 hover:bg-gray-100 -mr-2 -mt-2"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
}
