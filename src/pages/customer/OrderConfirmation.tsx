import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Package, Calendar, ChevronRight } from 'lucide-react';

const OrderConfirmation = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-16 px-4 pb-24 relative overflow-hidden">
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: '100vh', x: `${Math.random() * 100}vw`, opacity: 1 }}
              animate={{ y: '-10vh', opacity: 0 }}
              transition={{ duration: 2 + Math.random() * 2, ease: 'easeOut' }}
              className={`absolute w-3 h-3 rounded-full ${['bg-primary', 'bg-secondary', 'bg-accent', 'bg-success'][Math.floor(Math.random() * 4)]}`}
            />
          ))}
        </div>
      )}

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="w-20 h-20 bg-green-100 text-success rounded-full flex items-center justify-center mb-6"
      >
        <Check size={40} strokeWidth={3} />
      </motion.div>

      <h1 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
      <p className="text-gray-500 mb-8">Thank you for your purchase.</p>

      <div className="bg-white rounded-2xl shadow-sm p-5 w-full max-w-md mb-6 border border-gray-100">
        <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-50">
          <span className="text-sm text-gray-500">Order Number</span>
          <span className="font-semibold text-gray-900">ATTN-2026-00142</span>
        </div>

        <div className="flex gap-4 mb-4">
          <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=150&h=150" alt="Product" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-900 line-clamp-1">Nike Air Max 270</h3>
            <p className="text-sm text-gray-500">Size: US 10 • Black/White</p>
            <p className="font-semibold text-gray-900 mt-1">₹1,417</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-3">
          <Calendar className="text-gray-400" size={20} />
          <div>
            <p className="text-sm text-gray-500">Estimated Delivery</p>
            <p className="font-medium text-gray-900">3-5 Oct</p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-md flex flex-col gap-3">
        <button className="w-full bg-primary text-white py-3.5 rounded-xl font-medium shadow-sm shadow-blue-500/20 active:scale-95 transition-transform flex items-center justify-center gap-2">
          Track Order
        </button>
        <button className="w-full bg-white text-gray-900 py-3.5 rounded-xl font-medium border border-gray-200 active:scale-95 transition-transform">
          View Order
        </button>
        <button className="w-full text-gray-500 py-3.5 font-medium active:scale-95 transition-transform">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
