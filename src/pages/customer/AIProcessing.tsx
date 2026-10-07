import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Search, Package, BarChart3, Check } from 'lucide-react';

const steps = [
  { id: 1, label: 'Understanding your request', icon: Brain },
  { id: 2, label: 'Finding suitable products', icon: Search },
  { id: 3, label: 'Checking availability', icon: Package },
  { id: 4, label: 'Comparing options', icon: BarChart3 },
];

export default function AIProcessing() {
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
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (activeStep > steps.length) {
      navigate('/requirement-confirm');
    }
  }, [activeStep, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Orbit Animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <motion.div
          className="w-64 h-64 border border-blue-500 rounded-full absolute"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="w-96 h-96 border border-violet-500 rounded-full absolute"
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 p-8 z-10">
        <div className="space-y-6">
          {steps.map((step, index) => {
            const isActive = index === activeStep;
            const isCompleted = index < activeStep;
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: isActive || isCompleted ? 1 : 0.4,
                  y: 0,
                }}
                className="flex items-center gap-4"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center relative
                  ${isActive ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white' : 
                    isCompleted ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                  {isCompleted ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring" }}
                    >
                      <Check className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <Icon className="w-5 h-5" />
                  )}
                  
                  {isActive && (
                     <motion.div
                      className="absolute inset-0 border-2 border-blue-500 rounded-full"
                      animate={{ scale: [1, 1.2], opacity: [1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                </div>
                
                <span className={`text-sm font-medium ${
                  isActive ? 'text-gray-900' : 
                  isCompleted ? 'text-gray-900' : 'text-gray-400'
                }`}>
                  {step.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
