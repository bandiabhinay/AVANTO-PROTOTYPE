import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';

const steps = [
  'Approved catalog',
  'Availability',
  'Variant',
  'Delivery',
  'Price',
  'Personalized match'
];

export default function AIMatching() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= steps.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 800); // Fast steps

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (activeStep > steps.length) {
      setTimeout(() => navigate('/results'), 500);
    }
  }, [activeStep, navigate]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gray-900 rounded-xl w-32 h-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="text-center mb-12 z-10">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-100 to-violet-100 text-blue-600 mb-4"
        >
          <Sparkles className="w-6 h-6" />
        </motion.div>
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
          Finding your best matches
        </h1>
      </div>

      <div className="flex flex-col items-center z-10 w-full max-w-xs">
        {steps.map((step, index) => {
          const isActive = index === activeStep;
          const isCompleted = index < activeStep;

          return (
            <div key={step} className="flex flex-col items-center w-full relative">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isActive || isCompleted ? 1 : 0.3, x: 0 }}
                className="w-full flex items-center gap-4 py-2"
              >
                <div className={`w-3 h-3 rounded-full flex-shrink-0
                  ${isActive ? 'bg-blue-500 scale-125' : 
                    isCompleted ? 'bg-gradient-to-r from-blue-600 to-violet-600' : 'bg-gray-200'} transition-all duration-300`} 
                />
                <span className={`text-sm font-medium ${
                  isActive ? 'text-blue-600' : 
                  isCompleted ? 'text-gray-900' : 'text-gray-400'
                }`}>
                  {step}
                </span>
                {isCompleted && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="ml-auto">
                    <CheckCircle2 className="w-4 h-4 text-violet-600" />
                  </motion.div>
                )}
              </motion.div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="w-0.5 h-6 bg-gray-100 ml-[5px] self-start absolute top-8 left-0">
                  <motion.div
                    className="w-full bg-gradient-to-b from-blue-500 to-violet-500"
                    initial={{ height: 0 }}
                    animate={{ height: isCompleted ? '100%' : 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
