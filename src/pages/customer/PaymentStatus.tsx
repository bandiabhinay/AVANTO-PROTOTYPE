import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Clock, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PaymentStatus() {
  const navigate = useNavigate();
  // In real app, this would come from router state or API polling
  const [status, setStatus] = useState<'success' | 'failed' | 'pending'>('success');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        {status === 'success' && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex flex-col items-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful</h1>
            <p className="text-gray-500 mb-6">Thank you for your purchase!</p>
            
            <div className="bg-white rounded-2xl p-4 w-full shadow-sm mb-8 text-left space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Amount Paid</span>
                <span className="font-semibold text-gray-900">₹1,417</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Order ID</span>
                <span className="font-semibold text-gray-900">#ORD-98765432</span>
              </div>
            </div>

            <div className="w-full space-y-3">
              <button onClick={() => navigate('/orders/1')} className="w-full bg-primary-600 text-white font-semibold py-3.5 rounded-xl shadow-sm">
                Track Order
              </button>
              <button onClick={() => navigate('/')} className="w-full bg-white text-gray-700 font-semibold py-3.5 rounded-xl shadow-sm border border-gray-200">
                Continue Shopping
              </button>
            </div>
          </motion.div>
        )}

        {status === 'failed' && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex flex-col items-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <XCircle className="w-10 h-10 text-red-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Failed</h1>
            <p className="text-gray-500 mb-8">We could not process your payment.</p>
            
            <div className="w-full space-y-3">
              <button onClick={() => navigate('/payment')} className="w-full bg-primary-600 text-white font-semibold py-3.5 rounded-xl shadow-sm">
                Try Again
              </button>
              <button onClick={() => navigate('/cart')} className="w-full bg-white text-gray-700 font-semibold py-3.5 rounded-xl shadow-sm border border-gray-200">
                Back to Cart
              </button>
            </div>
          </motion.div>
        )}

        {status === 'pending' && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex flex-col items-center">
            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <Clock className="w-10 h-10 text-amber-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Pending</h1>
            <p className="text-gray-500 mb-8">Your payment is being verified.</p>
            
            <button onClick={() => navigate('/')} className="w-full bg-primary-600 text-white font-semibold py-3.5 rounded-xl shadow-sm">
              Go to Home
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
