import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, AlertTriangle, ChevronRight } from 'lucide-react';
// import { mockMatches } from '../../data/mockData';

const mockMatches = [
  {
    id: 'p1',
    name: 'Elegant Royal Blue Anarkali Kurti',
    variant: 'Size M · Royal Blue',
    price: '₹1,349',
    originalPrice: '₹2,100',
    stockStatus: 'In Stock',
    delivery: '3-5 days to 500001',
    matchScore: 98,
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=400&q=80',
    reasons: ['Matches your budget', 'Available in your size', 'Blue as requested', 'Perfect for Wedding'],
    tradeOffs: []
  },
  {
    id: 'p2',
    name: 'Printed Silk Blue Kurti',
    variant: 'Size M · Blue/Gold',
    price: '₹1,499',
    stockStatus: 'Low Stock',
    delivery: '2-3 days to 500001',
    matchScore: 92,
    image: 'https://images.unsplash.com/photo-1583391733958-d19f563065eb?auto=format&fit=crop&w=400&q=80',
    reasons: ['Fast delivery', 'Matches your budget', 'Available in your size'],
    tradeOffs: ['Slightly lighter shade of blue']
  },
  {
    id: 'p3',
    name: 'Premium Designer Blue Kurti',
    variant: 'Size M · Navy Blue',
    price: '₹1,650',
    stockStatus: 'In Stock',
    delivery: '3-5 days to 500001',
    matchScore: 85,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=400&q=80',
    reasons: ['Available in your size', 'Blue as requested', 'Elegant style'],
    tradeOffs: ['₹150 over budget']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function PersonalizedResults() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 pb-20 max-w-3xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 text-violet-600" />
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
            Your Personalized Selection
          </h1>
        </div>
        <p className="text-sm text-gray-500">
          Based on your request for a blue kurti under ₹1,500 for a wedding
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-6"
      >
        {mockMatches.slice(0, 3).map((product) => (
          <motion.div 
            key={product.id}
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row"
          >
            {/* Image Section */}
            <div className="relative w-full md:w-48 h-64 md:h-auto flex-shrink-0">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold text-gray-800 flex items-center gap-1 shadow-sm">
                <Sparkles className="w-3 h-3 text-violet-600" />
                {product.matchScore}% Match
              </div>
            </div>

            {/* Content Section */}
            <div className="p-4 md:p-5 flex-1 flex flex-col">
              <div className="mb-2">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.variant}</p>
              </div>

              <div className="flex items-end gap-3 mb-4">
                <span className="text-xl font-bold text-gray-900">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through mb-1">{product.originalPrice}</span>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`text-xs px-2 py-1 rounded-md font-medium ${
                  product.stockStatus === 'In Stock' ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'
                }`}>
                  {product.stockStatus}
                </span>
                <span className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700 font-medium">
                  {product.delivery}
                </span>
              </div>

              <div className="space-y-2 mb-6">
                {product.reasons.map((reason, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-600">{reason}</span>
                  </div>
                ))}
                {product.tradeOffs.map((tradeoff, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-600">{tradeoff}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-4 border-t border-gray-50 flex justify-end">
                <button 
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                >
                  View Details
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
