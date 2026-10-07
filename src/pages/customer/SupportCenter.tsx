import React from 'react';
import { Package, CreditCard, Truck, RotateCcw, HelpCircle, MessageCircle, Phone, ChevronRight, Search } from 'lucide-react';

const SupportCenter = () => {
  const categories = [
    { icon: <Package size={24} />, label: 'Order Issue', color: 'text-blue-600', bg: 'bg-blue-50' },
    { icon: <CreditCard size={24} />, label: 'Payment', color: 'text-purple-600', bg: 'bg-purple-50' },
    { icon: <Truck size={24} />, label: 'Delivery', color: 'text-orange-600', bg: 'bg-orange-50' },
    { icon: <RotateCcw size={24} />, label: 'Returns', color: 'text-green-600', bg: 'bg-green-50' },
    { icon: <HelpCircle size={24} />, label: 'Product FAQ', color: 'text-pink-600', bg: 'bg-pink-50' },
    { icon: <MessageCircle size={24} />, label: 'Other', color: 'text-gray-600', bg: 'bg-gray-100' }
  ];

  const faqs = [
    'How do I track my order?',
    'What is your return policy?',
    'How long does a refund take?',
    'Can I modify my order after placing it?'
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-primary px-4 pt-16 pb-12 rounded-b-3xl text-white">
        <h1 className="text-2xl font-bold mb-2">How can we help?</h1>
        <p className="text-blue-100 text-sm mb-6">Search our knowledge base or contact support.</p>
        
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Search for articles..." 
            className="w-full bg-white text-gray-900 rounded-xl py-3.5 pl-11 pr-4 focus:outline-none shadow-sm"
          />
        </div>
      </div>

      <div className="px-4 -mt-6">
        {/* Contact CTA */}
        <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100 mb-8 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Talk to a Person</h3>
            <p className="text-xs text-gray-500">Available 24/7 for urgent issues</p>
          </div>
          <button className="bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm">
            <Phone size={20} />
          </button>
        </div>

        {/* Categories */}
        <h2 className="font-bold text-gray-900 mb-4 ml-1">Browse Topics</h2>
        <div className="grid grid-cols-3 gap-3 mb-8">
          {categories.map((cat, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-3 active:scale-95 transition-transform cursor-pointer">
              <div className={`w-12 h-12 rounded-full ${cat.bg} ${cat.color} flex items-center justify-center`}>
                {cat.icon}
              </div>
              <span className="text-xs font-medium text-gray-700 text-center">{cat.label}</span>
            </div>
          ))}
        </div>

        {/* Recent Tickets */}
        <h2 className="font-bold text-gray-900 mb-4 ml-1">Recent Tickets</h2>
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-8">
          <div className="flex justify-between items-center mb-2">
            <div>
              <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">Resolved</span>
              <h4 className="font-medium text-sm text-gray-900 mt-1">Missing item in delivery</h4>
            </div>
            <span className="text-xs text-gray-400">Oct 1</span>
          </div>
          <p className="text-xs text-gray-500 line-clamp-1 mb-3">I ordered 2 shirts but only received 1 in the package...</p>
          <button className="text-xs font-medium text-primary">View Ticket</button>
        </div>

        {/* FAQs */}
        <h2 className="font-bold text-gray-900 mb-4 ml-1">Popular FAQs</h2>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {faqs.map((faq, i) => (
            <div key={i} className="px-4 py-4 border-b border-gray-50 last:border-0 flex justify-between items-center active:bg-gray-50 cursor-pointer">
              <span className="text-sm font-medium text-gray-700">{faq}</span>
              <ChevronRight size={16} className="text-gray-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportCenter;
