import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white overflow-hidden max-w-md mx-auto">
      {/* Background radial gradient and particles */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50 to-white" />
      
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-blue-400/20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Orbiting dots */}
        <div className="relative flex items-center justify-center mb-8">
          <motion.div
            className="absolute w-32 h-32 rounded-full border border-blue-100"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 w-3 h-3 -ml-1.5 -mt-1.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
            <div className="absolute bottom-0 left-1/2 w-2 h-2 -ml-1 -mb-1 bg-violet-500 rounded-full shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
            <div className="absolute top-1/2 left-0 w-2.5 h-2.5 -ml-1.25 -mt-1.25 bg-orange-400 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
          </motion.div>
          
          <motion.div
            className="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center z-10 relative overflow-hidden"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-violet-50" />
            <span className="text-3xl font-bold bg-gradient-to-br from-blue-600 to-violet-600 bg-clip-text text-transparent relative z-10">A</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-2 font-inter tracking-tight">
            ATTNS AI Commerce
          </h1>
          <p className="text-slate-500 font-medium text-sm">
            AI-powered personal commerce
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SplashScreen;
