import React, { useState } from 'react';
import { Camera, AlertCircle, CheckCircle, Upload } from 'lucide-react';

const ReturnRequest = () => {
  const [reason, setReason] = useState('');
  
  const reasons = [
    'Wrong item delivered',
    'Damaged in transit',
    'Defective or not working',
    'Size/Fit issue',
    'Not as expected',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-white px-4 pt-12 pb-4 shadow-sm sticky top-0 z-10">
        <h1 className="text-xl font-bold text-gray-900">Request Return</h1>
      </div>

      <div className="p-4 flex flex-col gap-6">
        {/* Item Selection */}
        <div>
          <h2 className="text-sm font-semibold text-gray-900 mb-3 ml-1">Select Item</h2>
          <div className="bg-white rounded-xl p-3 border-2 border-primary shadow-sm flex gap-4 items-center">
            <div className="w-6 h-6 rounded-full border-2 border-primary bg-primary flex items-center justify-center text-white">
              <CheckCircle size={14} />
            </div>
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=150&h=150" alt="Product" className="w-16 h-16 bg-gray-100 rounded-lg object-cover" />
            <div>
              <h3 className="font-medium text-gray-900 text-sm">Nike Air Max 270</h3>
              <p className="text-xs text-gray-500">Qty: 1</p>
            </div>
          </div>
        </div>

        {/* Eligibility */}
        <div className="bg-green-50 rounded-xl p-4 border border-green-100 flex items-start gap-3">
          <CheckCircle className="text-success mt-0.5" size={18} />
          <div>
            <h4 className="text-sm font-semibold text-green-900 mb-1">Eligible for Return</h4>
            <p className="text-xs text-green-800">You can return this item within the 14-day window. Full refund will be processed upon inspection.</p>
          </div>
        </div>

        {/* Reason */}
        <div>
          <h2 className="text-sm font-semibold text-gray-900 mb-3 ml-1">Why are you returning this?</h2>
          <select 
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm appearance-none"
          >
            <option value="" disabled>Select a reason...</option>
            {reasons.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-sm font-semibold text-gray-900 mb-3 ml-1">Additional details (Optional)</h2>
          <textarea 
            rows={4}
            placeholder="Please describe the issue in detail..."
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm resize-none"
          />
        </div>

        {/* Photos */}
        <div>
          <h2 className="text-sm font-semibold text-gray-900 mb-3 ml-1">Upload Photos (Required for damage)</h2>
          <div className="flex gap-3">
            <button className="w-24 h-24 bg-white border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-colors">
              <Camera size={24} className="mb-2" />
              <span className="text-xs font-medium">Add Photo</span>
            </button>
            <div className="w-24 h-24 bg-gray-100 rounded-xl relative border border-gray-200">
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=150&h=150" alt="Uploaded" className="w-full h-full object-cover rounded-xl" />
              <button className="absolute -top-2 -right-2 w-6 h-6 bg-red-100 text-error rounded-full flex items-center justify-center border border-red-200">✕</button>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2 ml-1">You can upload up to 3 photos (Max 5MB each).</p>
        </div>

        {/* Policy Summary */}
        <div className="bg-gray-100 rounded-xl p-4 flex items-start gap-3 mt-4">
          <AlertCircle className="text-gray-500 mt-0.5" size={18} />
          <p className="text-xs text-gray-600">
            By requesting a return, you agree to our <a href="#" className="text-primary underline">Return Policy</a>. Items must be returned in original condition with tags attached.
          </p>
        </div>

        {/* Submit */}
        <button 
          className={`w-full py-4 rounded-xl font-medium shadow-sm transition-all mt-4
            ${reason ? 'bg-primary text-white active:scale-95' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
        >
          Submit Return Request
        </button>
      </div>
    </div>
  );
};

export default ReturnRequest;
