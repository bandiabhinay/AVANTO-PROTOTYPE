import React, { useState } from 'react';
import { ChevronLeft, Edit2, CheckCircle2, RefreshCw, MessageSquarePlus, Sparkles } from 'lucide-react';
import MarginAssistant from './MarginAssistant';

const MemberReview = () => {
  const [showMarginAssistant, setShowMarginAssistant] = useState(false);
  const [margin, setMargin] = useState(150);

  const supplierBase = 899;
  const customerPrice = supplierBase + margin;
  const commission = customerPrice * 0.10;
  const earnings = margin - commission;

  return (
    <div className="max-w-2xl mx-auto p-4 pb-24 bg-gray-50 min-h-screen">
      <header className="flex items-center mb-6 space-x-4">
        <button className="p-2 bg-white rounded-full shadow-sm">
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <h1 className="text-xl font-bold text-gray-900">Review AI Selection</h1>
      </header>

      <div className="space-y-6">
        {/* Requirement Card */}
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-2">Customer Asked For</p>
          <p className="text-gray-800 text-sm">"I need a good quality running shoe for daily jogging. Size 9, color black or dark blue. Budget is around ₹2,000."</p>
        </div>

        {/* Selected Product */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="h-48 bg-gray-100 relative">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80" alt="Running Shoe" className="w-full h-full object-cover" />
            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs font-bold text-green-600 flex items-center space-x-1">
              <Sparkles className="w-3 h-3" />
              <span>98% Match</span>
            </div>
          </div>
          <div className="p-4">
            <h2 className="font-bold text-lg text-gray-900 mb-1">Nike Revolution 6</h2>
            <p className="text-sm text-gray-500 mb-4">Black / Dark Grey • Size 9 (UK)</p>
            
            <div className="flex space-x-2">
              <button className="flex-1 py-2 bg-gray-50 text-gray-600 text-sm font-medium rounded-xl border border-gray-200 flex items-center justify-center space-x-2">
                <RefreshCw className="w-4 h-4" />
                <span>Replace</span>
              </button>
              <button className="flex-1 py-2 bg-gray-50 text-gray-600 text-sm font-medium rounded-xl border border-gray-200 flex items-center justify-center space-x-2">
                <MessageSquarePlus className="w-4 h-4" />
                <span>Add Note</span>
              </button>
            </div>
          </div>
        </div>

        {/* Financials */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-4">
          <h3 className="font-bold text-gray-900 mb-2">Pricing & Earnings</h3>
          
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Supplier Base Price</span>
            <span className="font-medium text-gray-900">₹{supplierBase}</span>
          </div>
          
          <div className="flex justify-between items-center text-sm p-2 -mx-2 bg-blue-50 rounded-lg">
            <span className="text-blue-800 font-medium">Your Margin</span>
            <div className="flex items-center space-x-3">
              <span className="font-bold text-blue-900">₹{margin}</span>
              <button onClick={() => setShowMarginAssistant(true)} className="p-1 bg-blue-100 rounded text-blue-600 hover:bg-blue-200">
                <Edit2 className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className="pt-2 border-t border-gray-100 flex justify-between items-center text-sm">
            <span className="text-gray-500">Customer Final Price</span>
            <span className="font-bold text-gray-900 text-base">₹{customerPrice}</span>
          </div>
          
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>Company Commission (10%)</span>
            <span>- ₹{commission.toFixed(0)}</span>
          </div>

          <div className="pt-2 border-t border-gray-100 flex justify-between items-center">
            <span className="font-bold text-gray-900">Your Net Earnings</span>
            <span className="font-bold text-green-600 text-lg">₹{earnings.toFixed(0)}</span>
          </div>
        </div>

        <button className="w-full bg-orange-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-200 flex items-center justify-center space-x-2 hover:bg-orange-600 transition-colors">
          <CheckCircle2 className="w-5 h-5" />
          <span>Approve Selection</span>
        </button>
      </div>

      {showMarginAssistant && (
        <MarginAssistant 
          onClose={() => setShowMarginAssistant(false)} 
          currentMargin={margin}
          onApply={(newMargin) => {
            setMargin(newMargin);
            setShowMarginAssistant(false);
          }}
        />
      )}
    </div>
  );
};

export default MemberReview;
