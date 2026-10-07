import { motion } from 'framer-motion';
import { MapPin, Copy, Phone, MessageCircle } from 'lucide-react';

const TrackOrder = () => {
  const steps = [
    { label: 'Confirmed', done: true },
    { label: 'Preparing', done: true },
    { label: 'Dispatched', done: true },
    { label: 'In Transit', active: true },
    { label: 'Out for Delivery', done: false },
    { label: 'Delivered', done: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-white px-4 pt-12 pb-4 shadow-sm z-10 sticky top-0 flex flex-col">
        <h1 className="text-xl font-bold text-gray-900 mb-1">Track Order</h1>
        <p className="text-sm text-gray-500">Arriving by Oct 5</p>
      </div>

      {/* Map Area */}
      <div className="h-64 bg-gray-200 relative">
        {/* Placeholder for map */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="text-center">
            <MapPin size={48} className="mx-auto mb-2 text-gray-600" />
            <p className="font-medium text-gray-600">Map View Available During Delivery</p>
          </div>
        </div>
        
        {/* Delivery partner info floating card */}
        <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
            <span className="text-xl">🚚</span>
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-500">Delivery Partner</p>
            <p className="font-semibold text-gray-900">BlueDart Logistics</p>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-primary border border-gray-100">
              <Phone size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 mt-2">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-4">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Tracking ID</p>
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900 text-lg">BD987654321IN</span>
                <button className="text-gray-400 hover:text-primary transition-colors">
                  <Copy size={16} />
                </button>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 mb-1">Last updated</p>
              <p className="text-sm font-medium text-gray-900">Today, 09:30 AM</p>
            </div>
          </div>

          {/* Horizontal Timeline (Desktop) / Vertical (Mobile) */}
          <div className="relative pt-2">
            <div className="absolute top-4 left-4 right-4 h-1 bg-gray-100 rounded-full hidden sm:block" />
            <div className="absolute top-4 left-4 h-1 bg-primary rounded-full hidden sm:block w-[60%]" />
            
            <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-0 relative">
              {steps.map((step, i) => (
                <div key={i} className="flex sm:flex-col items-center gap-4 sm:gap-2 relative z-10">
                  {/* Vertical Line for mobile */}
                  {i !== steps.length - 1 && (
                    <div className={`absolute left-3 top-8 bottom-[-24px] w-0.5 sm:hidden ${step.done || step.active ? 'bg-primary' : 'bg-gray-100'}`} />
                  )}
                  
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center bg-white z-10
                    ${step.done ? 'border-primary bg-primary' : step.active ? 'border-primary' : 'border-gray-200'}`}
                  >
                    {step.done && <div className="w-2 h-2 bg-white rounded-full" />}
                    {step.active && (
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-3 h-3 bg-primary rounded-full"
                      />
                    )}
                  </div>
                  <span className={`text-sm sm:text-xs font-medium sm:text-center max-w-[80px] ${step.active ? 'text-primary' : step.done ? 'text-gray-900' : 'text-gray-400'}`}>
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button className="w-full bg-white text-gray-900 py-3.5 rounded-xl font-medium border border-gray-200 flex items-center justify-center gap-2 shadow-sm">
          <MessageCircle size={18} /> Contact Support
        </button>
      </div>
    </div>
  );
};

export default TrackOrder;
