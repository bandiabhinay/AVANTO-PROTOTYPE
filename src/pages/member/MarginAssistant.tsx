import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Check } from 'lucide-react';

interface MarginAssistantProps {
  onClose: () => void;
  currentMargin: number;
  onApply: (margin: number) => void;
}

const MarginAssistant: React.FC<MarginAssistantProps> = ({ onClose, currentMargin, onApply }) => {
  const [selectedMargin, setSelectedMargin] = useState(currentMargin);
  const [customMargin, setCustomMargin] = useState('');

  const scenarios = [
    { margin: 100, price: 999, commission: 10, earnings: 90, label: 'High Conversion' },
    { margin: 150, price: 1049, commission: 15, earnings: 135, label: 'Recommended', suggested: true },
    { margin: 200, price: 1099, commission: 20, earnings: 180, label: 'High Profit' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-gray-900/40 backdrop-blur-sm p-4">
        <motion.div 
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-blue-50 to-violet-50">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-violet-600" />
              <h2 className="font-bold text-gray-900">AI Margin Assistant</h2>
            </div>
            <button onClick={onClose} className="p-2 bg-white rounded-full text-gray-400 hover:text-gray-600">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-5 space-y-4 max-h-[70vh] overflow-y-auto">
            <p className="text-sm text-gray-500 mb-2">Select a pricing scenario based on similar past requests.</p>
            
            {scenarios.map((sc, i) => (
              <div 
                key={i}
                onClick={() => setSelectedMargin(sc.margin)}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedMargin === sc.margin ? 'border-violet-600 bg-violet-50/50' : 'border-gray-100 hover:border-gray-200 bg-white'
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-bold text-gray-900 text-lg">₹{sc.margin} Margin</span>
                      {sc.suggested && (
                        <span className="text-[10px] uppercase tracking-wider font-bold bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full">Suggested</span>
                      )}
                    </div>
                    <span className="text-xs font-medium text-gray-500">{sc.label}</span>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    selectedMargin === sc.margin ? 'border-violet-600 bg-violet-600 text-white' : 'border-gray-300'
                  }`}>
                    {selectedMargin === sc.margin && <Check className="w-3 h-3" />}
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-gray-100/50">
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase">Final Price</p>
                    <p className="text-sm font-medium text-gray-900">₹{sc.price}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase">Com (10%)</p>
                    <p className="text-sm font-medium text-gray-500">₹{sc.commission}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase">Earnings</p>
                    <p className="text-sm font-bold text-green-600">₹{sc.earnings}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-4 mt-4 border-t border-gray-100">
              <label className="text-sm font-medium text-gray-700 block mb-2">Custom Margin</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                <input 
                  type="number"
                  value={customMargin}
                  onChange={(e) => {
                    setCustomMargin(e.target.value);
                    if(e.target.value) setSelectedMargin(Number(e.target.value));
                  }}
                  placeholder="Enter custom amount"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-8 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:bg-white"
                />
              </div>
            </div>

            <p className="text-xs text-gray-400 text-center italic mt-4">
              Illustrative scenarios. Margin does not guarantee sales.
            </p>
          </div>

          <div className="p-4 border-t border-gray-100 bg-white">
            <button 
              onClick={() => onApply(selectedMargin)}
              className="w-full bg-gray-900 text-white font-bold py-3.5 rounded-xl hover:bg-gray-800 transition-colors"
            >
              Apply Margin
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default MarginAssistant;
