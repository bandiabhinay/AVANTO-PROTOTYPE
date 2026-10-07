import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Shield, Lock, CreditCard, Building2, Smartphone, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PaymentScreen() {
  const navigate = useNavigate();
  const [method, setMethod] = useState('upi');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      navigate('/payment-status');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24 relative">
      <header className="bg-white shadow-sm flex items-center px-4 py-4">
        <button onClick={() => navigate(-1)} className="mr-3 p-1 hover:bg-gray-100 rounded-full">
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-lg font-bold text-gray-900">Payment</h1>
      </header>

      <div className="p-4">
        <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-3 flex items-center justify-between mb-4">
          <span className="text-indigo-900 font-medium text-sm">Amount to Pay</span>
          <span className="text-lg font-bold text-indigo-900">₹1,417</span>
        </div>

        <div className="space-y-3">
          {/* UPI */}
          <div className={`bg-white rounded-xl border ${method === 'upi' ? 'border-primary-600 ring-1 ring-primary-600' : 'border-gray-200'} overflow-hidden`}>
            <button className="w-full flex items-center gap-3 p-4 text-left" onClick={() => setMethod('upi')}>
              <Smartphone className={`w-5 h-5 ${method === 'upi' ? 'text-primary-600' : 'text-gray-500'}`} />
              <span className="font-semibold flex-1">UPI (Google Pay, PhonePe, Paytm)</span>
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${method === 'upi' ? 'border-primary-600' : 'border-gray-300'}`}>
                {method === 'upi' && <div className="w-2 h-2 bg-primary-600 rounded-full" />}
              </div>
            </button>
            <AnimatePresence>
              {method === 'upi' && (
                <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden bg-gray-50 border-t border-gray-100">
                  <div className="p-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Enter UPI ID</label>
                    <input type="text" placeholder="username@bank" className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500" />
                    <p className="text-xs text-gray-500 mt-2">A payment request will be sent to your UPI app.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Cards */}
          <div className={`bg-white rounded-xl border ${method === 'card' ? 'border-primary-600 ring-1 ring-primary-600' : 'border-gray-200'} overflow-hidden`}>
            <button className="w-full flex items-center gap-3 p-4 text-left" onClick={() => setMethod('card')}>
              <CreditCard className={`w-5 h-5 ${method === 'card' ? 'text-primary-600' : 'text-gray-500'}`} />
              <span className="font-semibold flex-1">Credit / Debit Card</span>
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${method === 'card' ? 'border-primary-600' : 'border-gray-300'}`}>
                {method === 'card' && <div className="w-2 h-2 bg-primary-600 rounded-full" />}
              </div>
            </button>
            <AnimatePresence>
              {method === 'card' && (
                <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden bg-gray-50 border-t border-gray-100">
                  <div className="p-4 space-y-3">
                    <input type="text" placeholder="Card Number" className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm" />
                    <div className="flex gap-3">
                      <input type="text" placeholder="MM/YY" className="w-1/2 bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm" />
                      <input type="password" placeholder="CVV" className="w-1/2 bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm" />
                    </div>
                    <input type="text" placeholder="Name on Card" className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm" />
                    <p className="text-[10px] text-gray-400">Note: We do not store your raw card details.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Netbanking */}
          <div className={`bg-white rounded-xl border ${method === 'netbanking' ? 'border-primary-600 ring-1 ring-primary-600' : 'border-gray-200'} overflow-hidden`}>
            <button className="w-full flex items-center gap-3 p-4 text-left" onClick={() => setMethod('netbanking')}>
              <Building2 className={`w-5 h-5 ${method === 'netbanking' ? 'text-primary-600' : 'text-gray-500'}`} />
              <span className="font-semibold flex-1">Net Banking</span>
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${method === 'netbanking' ? 'border-primary-600' : 'border-gray-300'}`}>
                {method === 'netbanking' && <div className="w-2 h-2 bg-primary-600 rounded-full" />}
              </div>
            </button>
          </div>

          {/* COD */}
          <div className={`bg-white rounded-xl border ${method === 'cod' ? 'border-primary-600 ring-1 ring-primary-600' : 'border-gray-200'} overflow-hidden`}>
            <button className="w-full flex items-center gap-3 p-4 text-left" onClick={() => setMethod('cod')}>
              <span className="w-5 font-bold text-gray-500 text-center">₹</span>
              <span className="font-semibold flex-1">Cash on Delivery</span>
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${method === 'cod' ? 'border-primary-600' : 'border-gray-300'}`}>
                {method === 'cod' && <div className="w-2 h-2 bg-primary-600 rounded-full" />}
              </div>
            </button>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
          <Shield className="w-4 h-4 text-green-500" />
          Secured by 256-bit encryption
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 pb-safe z-40">
        <button onClick={handlePay} disabled={isProcessing} className="w-full bg-primary-600 text-white font-semibold py-3.5 rounded-xl shadow-sm flex justify-center items-center gap-2">
          <Lock className="w-4 h-4" />
          Pay ₹1,417
        </button>
      </div>

      {isProcessing && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
          <Loader2 className="w-10 h-10 text-primary-600 animate-spin mb-4" />
          <h2 className="text-lg font-semibold text-gray-900">Processing payment...</h2>
          <p className="text-sm text-gray-500 mt-2">Please do not press back or close the app</p>
        </div>
      )}
    </div>
  );
}
