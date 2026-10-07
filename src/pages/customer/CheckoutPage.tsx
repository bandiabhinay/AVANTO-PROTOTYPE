import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, MapPin, Truck, CreditCard, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockAddresses, mockCartItems } from '../../data/mockData';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const address = mockAddresses[0];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <header className="bg-white shadow-sm flex flex-col px-4 pt-4 pb-3">
        <div className="flex items-center mb-4">
          <button onClick={() => navigate(-1)} className="mr-3 p-1 hover:bg-gray-100 rounded-full">
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-lg font-bold text-gray-900">Checkout</h1>
        </div>
        
        {/* Progress Steps */}
        <div className="flex items-center justify-between px-2">
          {[
            { num: 1, label: 'Address', icon: MapPin },
            { num: 2, label: 'Delivery', icon: Truck },
            { num: 3, label: 'Payment', icon: CreditCard },
            { num: 4, label: 'Review', icon: CheckCircle }
          ].map((s, idx) => (
            <div key={s.num} className="flex flex-col items-center flex-1 relative">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold z-10 ${step >= s.num ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                {step > s.num ? <CheckCircle className="w-4 h-4" /> : s.num}
              </div>
              <span className={`text-[10px] mt-1 font-medium ${step >= s.num ? 'text-primary-700' : 'text-gray-500'}`}>{s.label}</span>
              {idx < 3 && (
                <div className={`absolute top-4 left-[50%] right-[-50%] h-[2px] ${step > s.num ? 'bg-primary-600' : 'bg-gray-200'}`} />
              )}
            </div>
          ))}
        </div>
      </header>

      <div className="p-4 space-y-4">
        {step === 1 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-semibold text-gray-900 flex items-center gap-2"><MapPin className="w-5 h-5 text-gray-600" /> Delivery Address</h2>
              <button onClick={() => navigate('/address')} className="text-primary-600 text-sm font-medium">Change</button>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
              <h3 className="font-medium text-gray-900">{address.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{address.addressLine1}, {address.city}</p>
              <p className="text-sm text-gray-600">{address.state} - {address.pincode}</p>
              <p className="text-sm text-gray-600 mt-1">{address.phone}</p>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-2xl p-4 shadow-sm">
            <h2 className="font-semibold text-gray-900 flex items-center gap-2 mb-3"><Truck className="w-5 h-5 text-gray-600" /> Delivery Options</h2>
            <div className="border-2 border-primary-600 bg-primary-50 p-3 rounded-lg flex items-start gap-3">
              <div className="mt-0.5 w-4 h-4 rounded-full bg-primary-600 flex items-center justify-center border-2 border-white ring-1 ring-primary-600" />
              <div>
                <h3 className="font-medium text-primary-900">Standard Delivery</h3>
                <p className="text-sm text-primary-700">Estimated between Oct 15 - Oct 18</p>
                <p className="text-sm font-medium text-green-600 mt-1">Free</p>
              </div>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-2xl p-4 shadow-sm text-center py-8">
            <CreditCard className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h2 className="font-semibold text-gray-900">Proceed to Payment Screen</h2>
            <p className="text-sm text-gray-500 mt-1">You will select payment method in the next step.</p>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-2xl p-4 shadow-sm">
            <h2 className="font-semibold text-gray-900 mb-3">Order Summary</h2>
            <div className="space-y-3 mb-4">
              {mockCartItems.map((item, i) => (
                <div key={i} className="flex gap-3 text-sm">
                  <img src={item.imageUrl} className="w-12 h-12 rounded object-cover" alt="" />
                  <div className="flex-1">
                    <p className="font-medium line-clamp-1">{item.name}</p>
                    <p className="text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-medium">₹{item.price}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 pb-safe z-40 flex gap-3">
        {step > 1 && (
          <button onClick={() => setStep(step - 1)} className="flex-1 bg-gray-100 text-gray-700 font-semibold py-3.5 rounded-xl text-center">
            Back
          </button>
        )}
        <button 
          onClick={() => {
            if (step < 4) setStep(step + 1);
            else navigate('/payment');
          }} 
          className="flex-2 w-full bg-primary-600 text-white font-semibold py-3.5 rounded-xl shadow-sm text-center"
        >
          {step === 4 ? 'Proceed to Pay' : 'Continue'}
        </button>
      </div>
    </div>
  );
}
