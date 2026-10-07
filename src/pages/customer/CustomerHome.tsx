import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Mic, MessageSquare, Camera, Heart, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

// Assuming mock data exists, adding fallbacks if not
import { mockCategories, mockProducts } from '../../data/mockData';

const fallbackCategories = [
  { id: '1', name: 'Fashion', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=150&q=80' },
  { id: '2', name: 'Electronics', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=150&q=80' },
  { id: '3', name: 'Home', image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=150&q=80' },
  { id: '4', name: 'Beauty', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54cb9?auto=format&fit=crop&w=150&q=80' },
];

const fallbackProducts = [
  { id: '1', name: 'Cotton Blue Kurti with Embroidery', price: 1299, image: 'https://images.unsplash.com/photo-1583391733958-d25e0a46636c?auto=format&fit=crop&w=300&q=80', deliveryEstimate: 'Tomorrow, by 9 PM' },
  { id: '2', name: 'Wireless Noise-Cancelling Headphones', price: 4500, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80', deliveryEstimate: 'In 2 days' },
  { id: '3', name: 'Ceramic Coffee Mug Set', price: 899, image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=300&q=80', deliveryEstimate: 'Tomorrow' },
  { id: '4', name: "Men's Black Formal Shoes", price: 2100, image: 'https://images.unsplash.com/photo-1614252339460-e1709424e6a8?auto=format&fit=crop&w=300&q=80', deliveryEstimate: 'In 3 days' },
];

const categories = mockCategories || fallbackCategories;
const products = mockProducts || fallbackProducts;

const ProductCard = ({ product }: { product: any }) => (
  <Link to={`/product/${product.id}`} className="block group">
    <div className="relative rounded-2xl overflow-hidden bg-white p-2 shadow-sm hover:shadow-md transition-all duration-300 transform group-hover:scale-[1.02]">
      <div className="aspect-square rounded-xl overflow-hidden mb-3 relative bg-gray-100">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        <button 
          className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full text-gray-500 hover:text-orange-500 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            // Handle wishlist
          }}
        >
          <Heart className="w-4 h-4" />
        </button>
      </div>
      <div className="px-1">
        <h3 className="font-medium text-sm text-[#172033] line-clamp-2 mb-1">{product.name}</h3>
        <div className="flex items-center gap-2 mb-2">
          <span className="font-bold text-[#172033]">₹{product.price.toLocaleString()}</span>
        </div>
        {product.deliveryEstimate && (
          <p className="text-xs text-[#667085] flex items-center gap-1">
            <Clock className="w-3 h-3" /> {product.deliveryEstimate}
          </p>
        )}
      </div>
    </div>
  </Link>
);

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function CustomerHome() {
  const [greeting, setGreeting] = useState('Good day');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 17) setGreeting('Good afternoon');
    else setGreeting('Good evening');
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F8FC] pb-24">
      <motion.div 
        className="px-4 pt-6 pb-4 bg-white sticky top-0 z-30 shadow-sm"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1 className="text-lg font-medium text-[#172033] mb-4">{greeting}, Priya</h1>
        
        {/* Search Bar */}
        <div className="relative flex items-center">
          <div className="absolute left-3 text-[#667085]">
            <Search className="w-5 h-5" />
          </div>
          <input 
            type="text" 
            placeholder="Search products or tell us what you need"
            className="w-full bg-[#F7F8FC] border-none rounded-full py-3 pl-10 pr-12 text-sm text-[#172033] placeholder:text-[#667085] focus:ring-2 focus:ring-[#2563EB] outline-none transition-shadow"
          />
          <Link to="/voice" className="absolute right-3 text-[#2563EB]">
            <Mic className="w-5 h-5" />
          </Link>
        </div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="p-4 space-y-8 overflow-x-hidden"
      >
        {/* Hero Card */}
        <motion.div variants={itemVariants}>
          <div className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-xl font-bold mb-1">Tell Us What You Need</h2>
              <p className="text-white/80 text-sm mb-6">Describe it. We'll find it.</p>
              
              <div className="flex items-center gap-3">
                <Link to="/need" className="flex-1 flex flex-col items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl py-3 transition-colors">
                  <MessageSquare className="w-5 h-5" />
                  <span className="text-xs font-medium">Type</span>
                </Link>
                <Link to="/voice" className="flex-1 flex flex-col items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl py-3 transition-colors">
                  <Mic className="w-5 h-5" />
                  <span className="text-xs font-medium">Speak</span>
                </Link>
                <Link to="/image" className="flex-1 flex flex-col items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl py-3 transition-colors">
                  <Camera className="w-5 h-5" />
                  <span className="text-xs font-medium">Add Image</span>
                </Link>
              </div>
            </div>
            {/* Decorative background circles */}
            <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-[-30px] left-[-30px] w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
          </div>
        </motion.div>

        {/* Categories Grid */}
        <motion.section variants={itemVariants}>
          <h2 className="text-base font-bold text-[#172033] mb-4">Categories</h2>
          <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.slice(0, 8).map(category => (
              <Link key={category.id} to={`/category/${category.id}`} className="flex flex-col items-center gap-2 group">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-white shadow-sm group-hover:shadow-md transition-shadow">
                  <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-xs text-[#172033] font-medium text-center">{category.name}</span>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Recommended for You */}
        <motion.section variants={itemVariants}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-[#172033]">Recommended for You</h2>
            <Link to="/recommended" className="text-sm text-[#2563EB] font-medium">See all</Link>
          </div>
          <div className="flex overflow-x-auto gap-4 pb-4 -mx-4 px-4 snap-x hide-scrollbar">
            {products.map(product => (
              <div key={product.id} className="min-w-[160px] max-w-[160px] snap-start">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </motion.section>

        {/* Trending Products */}
        <motion.section variants={itemVariants}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-[#172033]">Trending Products</h2>
            <Link to="/trending" className="text-sm text-[#2563EB] font-medium">See all</Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {products.slice(0, 4).map(product => (
              <ProductCard key={`trending-${product.id}`} product={product} />
            ))}
          </div>
        </motion.section>

        {/* Recently Viewed */}
        <motion.section variants={itemVariants}>
          <h2 className="text-base font-bold text-[#172033] mb-4">Recently Viewed</h2>
          <div className="flex overflow-x-auto gap-4 pb-4 -mx-4 px-4 snap-x hide-scrollbar">
            {products.slice().reverse().map(product => (
              <div key={`recent-${product.id}`} className="min-w-[140px] max-w-[140px] snap-start">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm p-1.5 flex gap-2 items-center">
                  <img src={product.image} alt={product.name} className="w-12 h-12 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs font-medium text-[#172033] truncate">{product.name}</h3>
                    <span className="text-xs font-bold text-[#2563EB]">₹{product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

      </motion.div>
    </div>
  );
}
