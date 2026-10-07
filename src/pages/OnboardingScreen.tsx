import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Search, Sparkles, Wand2, ShoppingBag, Store, TrendingUp, IndianRupee, BarChart3, ChevronRight } from 'lucide-react';

const onboardingData = [
  {
    id: 1,
    title: 'Find Exactly What You Need',
    subtitle: 'Describe what you want in your own words — text, voice, or image',
    icons: [Search, Sparkles],
    colors: 'from-blue-500 to-cyan-400'
  },
  {
    id: 2,
    title: 'Your Personal AI Shopper',
    subtitle: 'AI understands your needs and finds the best matching products',
    icons: [Wand2, ShoppingBag],
    colors: 'from-violet-500 to-purple-400'
  },
  {
    id: 3,
    title: 'Sell Without Inventory',
    subtitle: 'Curate products, set your margin, and earn from every sale',
    icons: [Store, TrendingUp],
    colors: 'from-emerald-500 to-teal-400'
  },
  {
    id: 4,
    title: 'Earn From Every Sale',
    subtitle: 'Track your earnings and grow your business with AI assistance',
    icons: [IndianRupee, BarChart3],
    colors: 'from-orange-500 to-amber-400'
  }
];

const OnboardingScreen: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      navigate('/login');
    }
  };

  const handleSkip = () => {
    navigate('/login');
  };

  const onDragEnd = (_event: any, info: any) => {
    if (info.offset.x < -50 && currentIndex < onboardingData.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else if (info.offset.x > 50 && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 max-w-md mx-auto overflow-hidden">
      <div className="flex justify-end p-4">
        <button 
          onClick={handleSkip}
          className="text-slate-500 font-medium text-sm py-2 px-4 rounded-full active:bg-slate-200 transition-colors"
        >
          Skip
        </button>
      </div>

      <div className="flex-1 relative flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={onDragEnd}
            className="flex flex-col items-center px-8 h-full"
          >
            {/* Illustration Area */}
            <div className="w-full aspect-square max-h-[300px] mb-10 relative flex items-center justify-center">
              <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${onboardingData[currentIndex].colors} opacity-10 rotate-3 scale-95`} />
              <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${onboardingData[currentIndex].colors} opacity-20 -rotate-3 scale-95`} />
              
              <motion.div 
                className={`relative w-4/5 h-4/5 rounded-3xl bg-gradient-to-br ${onboardingData[currentIndex].colors} shadow-2xl flex items-center justify-center p-6`}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Floating elements inside illustration */}
                <motion.div 
                  className="absolute -top-4 -left-4 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center"
                  animate={{ y: [0, 8, 0], rotate: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                >
                  {React.createElement(onboardingData[currentIndex].icons[0], { size: 28, className: "text-slate-800" })}
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-6 -right-4 w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center"
                  animate={{ y: [0, -8, 0], rotate: [5, -5, 5] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  {React.createElement(onboardingData[currentIndex].icons[1], { size: 36, className: "text-slate-800" })}
                </motion.div>
                
                {/* Center abstract shapes */}
                <div className="w-full h-full rounded-2xl border-4 border-white/20 flex flex-col justify-between p-4">
                  <div className="w-2/3 h-4 rounded-full bg-white/30" />
                  <div className="space-y-3">
                    <div className="w-full h-12 rounded-xl bg-white/20" />
                    <div className="w-4/5 h-12 rounded-xl bg-white/20" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Text Content */}
            <div className="text-center space-y-4 max-w-[280px]">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                {onboardingData[currentIndex].title}
              </h2>
              <p className="text-slate-500 leading-relaxed text-sm">
                {onboardingData[currentIndex].subtitle}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="p-8 pb-12 flex flex-col items-center space-y-8">
        {/* Indicators */}
        <div className="flex space-x-2">
          {onboardingData.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-6 bg-blue-600' : 'w-2 bg-slate-200'
              }`}
            />
          ))}
        </div>

        {/* Action Button */}
        <div className="w-full space-y-4">
          <button
            onClick={handleNext}
            className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all active:scale-[0.98] ${
              currentIndex === onboardingData.length - 1 
                ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30' 
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30'
            }`}
          >
            <span>{currentIndex === onboardingData.length - 1 ? 'Get Started' : 'Continue'}</span>
            {currentIndex !== onboardingData.length - 1 && <ChevronRight size={20} />}
          </button>
          
          {currentIndex === onboardingData.length - 1 && (
            <button 
              onClick={() => navigate('/login')}
              className="w-full py-3 text-slate-600 font-medium text-sm text-center"
            >
              Already have an account? <span className="text-blue-600 font-bold">Login</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen;
