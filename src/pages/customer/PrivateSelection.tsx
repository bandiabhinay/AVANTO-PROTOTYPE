import React from 'react';
import { Gift, Lock, CheckCircle2, ChevronRight, ShieldCheck, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock data directly defined to avoid missing import issues
const mockMatches = [
  { 
    id: 'PRD-001', 
    name: 'Premium Silk Evening Gown', 
    price: 12500, 
    image: 'https://images.unsplash.com/photo-1566160983868-c6ce73331828?auto=format&fit=crop&q=80&w=400&h=500', 
    matchScore: 98,
    variant: 'Midnight Blue / M',
    delivery: '2-3 days'
  },
  { 
    id: 'PRD-002', 
    name: 'Designer Crystal Necklace', 
    price: 8900, 
    image: 'https://images.unsplash.com/photo-1599643478524-fb66f7f6f1c7?auto=format&fit=crop&q=80&w=400&h=500', 
    matchScore: 92,
    variant: 'Silver / One Size',
    delivery: 'Next day'
  },
];

const PrivateSelection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-8 px-4 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-600 rounded-full mb-4">
          <Gift className="w-6 h-6" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif">Your Personal Selection</h1>
        <p className="text-gray-500 mt-2 max-w-md mx-auto">Prepared especially for your request by our AI sourcing engine and verified by human experts.</p>
        
        <div className="flex items-center justify-center gap-1 mt-6 text-xs font-medium text-gray-400 bg-gray-50 py-1.5 px-3 rounded-full inline-flex mx-auto border border-gray-100">
          <Lock className="w-3 h-3" />
          This selection is private and exclusive to you.
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {mockMatches.map((product, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            key={product.id} 
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row group"
          >
            <div className="md:w-2/5 relative h-64 md:h-auto">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1 text-xs font-bold text-green-700 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5" /> 
                {product.matchScore}% Match
              </div>
            </div>
            
            <div className="p-6 md:w-3/5 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold text-gray-900">{product.name}</h2>
                  <p className="text-xl font-bold text-blue-600">₹{product.price.toLocaleString('en-IN')}</p>
                </div>
                
                <p className="text-sm text-gray-500 mb-6">Variant: {product.variant}</p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <ShieldCheck className="w-4 h-4 text-green-500" />
                    <span>Verified Supplier Quality</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span>Estimated delivery: {product.delivery}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3 mt-4 md:mt-0">
                <button className="flex-1 py-3 px-4 border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors">
                  View Details
                </button>
                <button className="flex-1 py-3 px-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-sm flex items-center justify-center gap-2">
                  Select <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PrivateSelection;
