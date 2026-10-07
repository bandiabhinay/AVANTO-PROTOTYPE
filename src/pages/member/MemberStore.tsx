import React from 'react';
import { Share2, Edit, Sparkles, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const MemberStore = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Store Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-violet-100 rounded-full flex items-center justify-center border-4 border-white shadow-sm">
              <span className="text-3xl font-bold text-blue-600">R</span>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900 mb-1">Rahul's Style Store</h1>
              <p className="text-gray-500 max-w-lg mx-auto md:mx-0">Curated fashion, gadgets, and lifestyle products just for you.</p>
              <div className="flex items-center justify-center md:justify-start space-x-1 mt-2 text-sm font-medium text-gray-600">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span>4.9</span>
                <span className="text-gray-400">(120+ happy customers)</span>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="p-2.5 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors flex items-center space-x-2">
                <Edit className="w-4 h-4" />
                <span className="text-sm font-medium hidden sm:inline">Edit</span>
              </button>
              <button className="px-4 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center space-x-2 font-medium">
                <Share2 className="w-4 h-4" />
                <span>Share Store</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
        {/* AI Shopping CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-violet-600 to-blue-600 rounded-2xl p-6 text-white shadow-md relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between">
            <div className="mb-4 sm:mb-0 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start space-x-2 mb-2">
                <Sparkles className="w-5 h-5 text-violet-200" />
                <h2 className="text-xl font-bold">Can't find what you need?</h2>
              </div>
              <p className="text-violet-100 text-sm max-w-sm">Tell me what you're looking for, and my AI will find the perfect match.</p>
            </div>
            <button className="bg-white text-violet-600 px-6 py-3 rounded-xl font-bold shadow-sm hover:shadow-md transition-all w-full sm:w-auto">
              Tell me your requirements
            </button>
          </div>
          {/* Abstract background shapes */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400 opacity-20 rounded-full blur-2xl"></div>
        </motion.div>

        {/* Categories */}
        <div className="flex overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide space-x-3">
          {['All Items', 'Featured', 'Electronics', 'Fashion', 'Home Decor', 'Gifts'].map((cat, i) => (
            <button 
              key={i}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium ${
                i === 0 ? 'bg-gray-900 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Featured Collection</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: 'Wireless Noise-Cancelling Headphones', price: '₹2,499', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80' },
              { name: 'Minimalist Ceramic Vase', price: '₹899', img: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500&q=80' },
              { name: 'Smart Fitness Watch Pro', price: '₹1,999', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80' },
              { name: 'Premium Leather Wallet', price: '₹599', img: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80' },
            ].map((prod, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="aspect-square bg-gray-100 relative overflow-hidden">
                  <img src={prod.img} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2 min-h-[40px]">{prod.name}</h4>
                  <p className="text-lg font-bold text-gray-900">{prod.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberStore;
