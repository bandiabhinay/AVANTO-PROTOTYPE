import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Share2, ShieldCheck, Star, Truck, ShieldAlert, Sparkles, ChevronDown, ChevronUp, ShoppingBag, Minus, Plus, X } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockProducts } from '../../data/mockData';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = mockProducts.find(p => p.id === id) || mockProducts[0];
  
  const [selectedImage, setSelectedImage] = useState(product.imageUrl);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [pinCode, setPinCode] = useState('');
  const [specsOpen, setSpecsOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white shadow-sm flex items-center justify-between px-4 py-3">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full">
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Share2 className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </header>

      {/* Image Gallery */}
      <div className="bg-white p-4">
        <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden mb-4 relative" onClick={() => setIsFullScreen(true)}>
          <img src={selectedImage} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {[product.imageUrl, 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=200', 'https://images.unsplash.com/photo-1550525811-e5869dd03032?q=80&w=200'].map((img, i) => (
            <button key={i} onClick={() => setSelectedImage(img)} className={`w-16 h-16 rounded-lg overflow-hidden shrink-0 border-2 ${selectedImage === img ? 'border-primary-600' : 'border-transparent'}`}>
              <img src={img} className="w-full h-full object-cover" alt="" />
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen Image */}
      <AnimatePresence>
        {isFullScreen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black flex items-center justify-center p-4">
            <button onClick={() => setIsFullScreen(false)} className="absolute top-4 right-4 p-2 text-white bg-black/50 rounded-full">
              <X className="w-6 h-6" />
            </button>
            <img src={selectedImage} className="w-full max-h-full object-contain" alt="" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Details */}
      <div className="bg-white mt-2 p-4">
        <div className="flex justify-between items-start mb-2">
          <h1 className="text-xl font-bold text-gray-900 leading-tight">{product.name}</h1>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center text-yellow-500 text-sm font-medium">
            <Star className="w-4 h-4 fill-current mr-1" />
            {product.rating}
          </div>
          <span className="text-gray-400 text-sm">|</span>
          <span className="text-gray-500 text-sm">{product.reviewsCount} reviews</span>
        </div>
        <div className="flex items-end gap-3 mb-2">
          <span className="text-2xl font-bold text-primary-600">₹{product.price}</span>
          <span className="text-sm text-gray-500 line-through mb-1">₹{product.originalPrice}</span>
          <span className="text-sm font-medium text-green-600 mb-1">{Math.round((1 - product.price / product.originalPrice) * 100)}% OFF</span>
        </div>
        {product.isVerified && (
          <div className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-medium mt-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            Verified Product
          </div>
        )}
      </div>

      {/* Variants & Quantity */}
      <div className="bg-white mt-2 p-4">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-gray-900">Size</h3>
            <span className="text-primary-600 text-sm font-medium cursor-pointer">Size Guide</span>
          </div>
          <div className="flex gap-3">
            {['S', 'M', 'L', 'XL'].map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-12 h-12 rounded-xl flex items-center justify-center font-medium border transition-colors ${
                  selectedSize === size ? 'bg-primary-600 text-white border-primary-600' : 'bg-white text-gray-700 border-gray-200 hover:border-primary-600'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Quantity</h3>
          <div className="flex items-center gap-4">
            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 bg-gray-50 hover:bg-gray-100 text-gray-600">
                <Minus className="w-5 h-5" />
              </button>
              <div className="w-12 text-center font-medium">{quantity}</div>
              <button onClick={() => setQuantity(quantity + 1)} className="p-2 bg-gray-50 hover:bg-gray-100 text-gray-600">
                <Plus className="w-5 h-5" />
              </button>
            </div>
            {product.stock > 10 ? (
              <span className="text-sm font-medium text-green-600">In Stock</span>
            ) : product.stock > 0 ? (
              <span className="text-sm font-medium text-orange-600">Only {product.stock} left</span>
            ) : (
              <span className="text-sm font-medium text-red-600">Out of Stock</span>
            )}
          </div>
        </div>
      </div>

      {/* Delivery */}
      <div className="bg-white mt-2 p-4">
        <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <Truck className="w-5 h-5 text-gray-600" />
          Delivery Details
        </h3>
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            placeholder="Enter PIN Code"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
            className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500"
            maxLength={6}
          />
          <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium">Check</button>
        </div>
        <p className="text-sm text-gray-600">Usually delivers in 3-5 days</p>
      </div>

      {/* Specifications */}
      <div className="bg-white mt-2">
        <button onClick={() => setSpecsOpen(!specsOpen)} className="w-full flex items-center justify-between p-4 font-semibold text-gray-900">
          Product Specifications
          {specsOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        <AnimatePresence>
          {specsOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
              <div className="px-4 pb-4 border-t border-gray-100">
                <div className="space-y-3 pt-3">
                  <div className="flex justify-between text-sm"><span className="text-gray-500">Material</span><span className="font-medium text-gray-900">100% Cotton</span></div>
                  <div className="flex justify-between text-sm"><span className="text-gray-500">Fit</span><span className="font-medium text-gray-900">Regular Fit</span></div>
                  <div className="flex justify-between text-sm"><span className="text-gray-500">Care</span><span className="font-medium text-gray-900">Machine Wash</span></div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Supplier info */}
      <div className="bg-white mt-2 p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <ShoppingBag className="w-5 h-5 text-gray-500" />
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="font-medium text-gray-900">{product.supplierName}</span>
              {product.isVerified && <ShieldCheck className="w-4 h-4 text-green-500" />}
            </div>
            <p className="text-xs text-gray-500">Verified Seller • 4.8 Rating</p>
          </div>
        </div>
      </div>

      {/* AI Assistant */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 mt-2 p-4">
        <h3 className="font-semibold text-indigo-900 mb-2 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          Ask AI about this product
        </h3>
        <div className="bg-white rounded-lg p-3 shadow-sm flex flex-col gap-2">
          <div className="text-sm text-gray-600 mb-2">"Is this suitable for summer?"</div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            <button className="bg-indigo-50 text-indigo-700 text-xs px-3 py-1.5 rounded-full whitespace-nowrap">Size fitting?</button>
            <button className="bg-indigo-50 text-indigo-700 text-xs px-3 py-1.5 rounded-full whitespace-nowrap">Wash instructions?</button>
          </div>
        </div>
      </div>

      {/* Bottom Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 pb-safe flex gap-3 z-40">
        <button onClick={() => navigate('/cart')} className="flex-1 bg-white border-2 border-primary-600 text-primary-600 font-semibold py-3.5 rounded-xl text-center shadow-sm">
          Add to Cart
        </button>
        <button onClick={() => navigate('/checkout')} className="flex-1 bg-primary-600 text-white font-semibold py-3.5 rounded-xl shadow-sm text-center">
          Buy Now
        </button>
      </div>
    </div>
  );
}
