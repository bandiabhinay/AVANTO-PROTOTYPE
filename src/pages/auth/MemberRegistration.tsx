import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Store, MapPin, Tag, Check, ChevronRight } from 'lucide-react';

const MemberRegistration: React.FC = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else navigate('/home'); // Final completion
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
    else navigate(-1);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center border-b border-slate-100 z-10 sticky top-0">
        <button onClick={handleBack} className="p-2 -ml-2 rounded-full hover:bg-slate-100 transition-colors">
          <ArrowLeft size={20} className="text-slate-700" />
        </button>
        <h1 className="flex-1 text-center font-semibold text-slate-800 mr-8">
          Member Registration
        </h1>
      </div>

      {/* Progress Bar */}
      <div className="bg-white px-6 py-4 shadow-sm relative z-0">
        <div className="flex justify-between relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0 rounded-full" />
          <motion.div 
            className="absolute top-1/2 left-0 h-1 bg-blue-600 -translate-y-1/2 z-0 rounded-full origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: (step - 1) / 2 }}
            transition={{ duration: 0.3 }}
            style={{ width: '100%' }}
          />
          {[1, 2, 3].map((i) => (
            <div 
              key={i}
              className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300 ${
                step >= i ? 'bg-blue-600 text-white shadow-md shadow-blue-200' : 'bg-slate-100 text-slate-400'
              }`}
            >
              {step > i ? <Check size={14} /> : i}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-xs font-medium text-slate-500">
          <span>Profile</span>
          <span>Store</span>
          <span>Agreement</span>
        </div>
      </div>

      {/* Form Content */}
      <div className="flex-1 overflow-x-hidden relative">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              className="p-6 space-y-5"
            >
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-1">Basic Profile</h2>
                <p className="text-sm text-slate-500">Tell us a bit about yourself</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 ml-1">Full Name</label>
                  <input type="text" defaultValue="John Doe" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all text-sm" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 ml-1">Email</label>
                  <input type="email" defaultValue="john@example.com" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all text-sm" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 ml-1">City</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <MapPin size={18} />
                    </div>
                    <input type="text" placeholder="Enter your city" className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all text-sm" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              className="p-6 space-y-5"
            >
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-1">Store Setup</h2>
                <p className="text-sm text-slate-500">Configure your AI storefront</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 ml-1">Store Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Store size={18} />
                    </div>
                    <input type="text" placeholder="e.g. John's Trendy Finds" className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all text-sm" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 ml-1">Store Description (Optional)</label>
                  <textarea rows={3} placeholder="What kind of products do you sell?" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all text-sm resize-none"></textarea>
                </div>
                
                <div className="space-y-2 pt-2">
                  <label className="text-sm font-medium text-slate-700 ml-1 flex items-center gap-1"><Tag size={14}/> Preferred Categories</label>
                  <div className="flex flex-wrap gap-2">
                    {['Electronics', 'Fashion', 'Home & Kitchen', 'Beauty', 'Toys'].map((cat) => (
                      <label key={cat} className="relative cursor-pointer">
                        <input type="checkbox" className="peer sr-only" />
                        <div className="px-4 py-2 text-sm text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 peer-checked:bg-blue-50 peer-checked:text-blue-700 peer-checked:border-blue-300 transition-colors">
                          {cat}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              className="p-6 space-y-5 flex flex-col h-full"
            >
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-1">Terms & Agreement</h2>
                <p className="text-sm text-slate-500">Review member guidelines</p>
              </div>

              <div className="flex-1 bg-white border border-slate-200 rounded-xl p-4 overflow-y-auto text-sm text-slate-600 space-y-4 max-h-[300px]">
                <p><strong>1. Member Responsibilities</strong><br/>As a seller member, you agree to curate items responsibly and maintain accurate product descriptions.</p>
                <p><strong>2. Earnings and Margins</strong><br/>You set your own margins on top of base product prices. Payouts are processed weekly for completed deliveries.</p>
                <p><strong>3. Code of Conduct</strong><br/>Misleading buyers or engaging in fraudulent activity will result in immediate account termination.</p>
                <p><strong>4. AI Assistance</strong><br/>Our AI tools are provided "as-is" to assist with product matching and description generation. You remain responsible for the final listing.</p>
              </div>

              <div className="flex items-start pt-2">
                <input id="agree" type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-600" />
                <label htmlFor="agree" className="ml-3 block text-sm text-slate-700 font-medium">
                  I have read and agree to the Member Terms and Conditions
                </label>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Actions */}
      <div className="p-6 bg-white border-t border-slate-100 z-10 sticky bottom-0">
        <button
          onClick={handleNext}
          className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md shadow-blue-600/20 active:scale-[0.98] transition-all flex items-center justify-center space-x-2"
        >
          <span>{step === 3 ? 'Complete Registration' : 'Continue'}</span>
          {step < 3 && <ChevronRight size={18} />}
        </button>
      </div>
    </div>
  );
};

export default MemberRegistration;
