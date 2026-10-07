import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Trash2, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const mockProducts = [
  { 
    id: 'PRD-101', 
    name: 'Premium Cotton T-Shirt', 
    price: 999, 
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=200&h=200',
    inStock: true
  },
  { 
    id: 'PRD-103', 
    name: 'Smart Watch', 
    price: 4999, 
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=200&h=200',
    inStock: false
  },
];

const WishlistPage: React.FC = () => {
  const [wishlist, setWishlist] = useState(mockProducts);

  const removeItem = (id: string) => {
    setWishlist(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto min-h-screen">
      <div className="flex items-center gap-2 mb-6">
        <h1 className="text-2xl font-bold text-gray-900">My Wishlist</h1>
        <span className="bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full text-sm font-medium">
          {wishlist.length} items
        </span>
      </div>

      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
            <Heart className="w-10 h-10 text-gray-300" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h2>
          <p className="text-gray-500 mb-8 text-center max-w-sm">Save items you love to your wishlist to review or purchase them later.</p>
          <Link to="/" className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors">
            Start exploring
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {wishlist.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-50">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  {!item.inStock && (
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] flex items-center justify-center">
                      <span className="px-3 py-1 bg-white text-gray-900 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">Out of stock</span>
                    </div>
                  )}
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors z-10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-1">{item.name}</h3>
                  <p className="font-bold text-gray-900 mb-4">₹{item.price}</p>
                  
                  <div className="mt-auto pt-2 border-t border-gray-100">
                    <button 
                      disabled={!item.inStock}
                      className={`w-full py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm font-medium transition-colors ${
                        item.inStock 
                          ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' 
                          : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Move to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
