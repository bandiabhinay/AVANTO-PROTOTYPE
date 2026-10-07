import { motion } from 'framer-motion';
import { ChevronLeft, Trash2, ShieldCheck, ShoppingCart, Minus, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockCartItems } from '../../data/mockData';

export default function CartPage() {
  const navigate = useNavigate();
  
  const subtotal = mockCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 0; // Free
  const tax = subtotal * 0.18; // 18% GST approx
  const total = subtotal + shipping + tax;

  if (mockCartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center">
        <ShoppingCart className="w-16 h-16 text-gray-300 mb-4" />
        <h2 className="text-xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-6">Looks like you haven't added anything yet.</p>
        <button onClick={() => navigate('/')} className="bg-primary-600 text-white font-semibold py-3 px-8 rounded-xl shadow-sm">
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <header className="sticky top-0 z-40 bg-white shadow-sm flex items-center px-4 py-4">
        <button onClick={() => navigate(-1)} className="mr-3 p-1 hover:bg-gray-100 rounded-full">
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-lg font-bold text-gray-900">Shopping Cart</h1>
      </header>

      <div className="p-4 space-y-4">
        {mockCartItems.map((item, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="bg-white rounded-2xl p-4 shadow-sm flex gap-4">
            <div className="w-20 h-24 bg-gray-100 rounded-lg overflow-hidden shrink-0">
              <img src={item.product?.images[0] || ''} alt={item.product?.name || 'Product'} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-medium text-gray-900 text-sm line-clamp-2">{item.product?.name}</h3>
                <button className="text-gray-400 hover:text-red-500">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mb-2">Size: M</p>
              
              <div className="flex justify-between items-center mt-auto">
                <div className="font-bold text-gray-900">₹{item.price}</div>
                <div className="flex items-center border border-gray-200 rounded-lg h-8">
                  <button className="px-2 text-gray-600 hover:bg-gray-50 rounded-l-lg h-full flex items-center"><Minus className="w-3.5 h-3.5" /></button>
                  <span className="px-2 text-sm font-medium w-8 text-center">{item.quantity}</span>
                  <button className="px-2 text-gray-600 hover:bg-gray-50 rounded-r-lg h-full flex items-center"><Plus className="w-3.5 h-3.5" /></button>
                </div>
              </div>
              <p className="text-[10px] text-gray-400 mt-2">Via Rahul's Style Store</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4">Price Details</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal ({mockCartItems.length} items)</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Tax (Est.)</span>
              <span>₹{tax.toFixed(2)}</span>
            </div>
            <div className="border-t border-gray-100 pt-3 flex justify-between items-center mt-1">
              <span className="font-bold text-gray-900">Total Amount</span>
              <span className="font-bold text-lg text-gray-900">₹{total.toFixed(2)}</span>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500 bg-gray-50 py-2 rounded-lg">
            <ShieldCheck className="w-4 h-4 text-green-500" />
            Safe and secure payments
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 pb-safe z-40">
        <button onClick={() => navigate('/checkout')} className="w-full bg-primary-600 text-white font-semibold py-3.5 rounded-xl shadow-sm text-center">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
