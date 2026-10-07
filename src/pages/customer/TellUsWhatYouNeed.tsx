import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, Camera, ClipboardList, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EXAMPLES = [
  'I need a blue kurti under ₹1,500 for a wedding',
  'I need a gift for my mother under ₹2,000',
  'I need black formal shoes, size 9'
];

export default function TellUsWhatYouNeed() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate('/ai-processing', { state: { query } });
    }
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-6 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-8 pb-6"
      >
        <h1 className="text-3xl font-bold text-[#172033] mb-3">Tell Us What You Need</h1>
        <p className="text-[#667085] text-sm md:text-base mb-8">
          Describe what you're looking for and our AI will find suitable products from our approved catalog.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What are you looking for?"
              className="w-full min-h-[160px] p-4 bg-[#F7F8FC] border border-gray-100 rounded-2xl resize-none text-[#172033] placeholder:text-[#667085] focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all"
            />
            <div className="absolute bottom-4 right-4 text-xs text-[#667085]">
              {query.length} characters
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-4 justify-center py-2">
            <button
              type="button"
              onClick={() => navigate('/voice')}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] flex items-center justify-center text-white shadow-md group-hover:shadow-lg transition-all group-hover:scale-105">
                <Mic className="w-6 h-6" />
              </div>
              <span className="text-xs font-medium text-[#172033]">Voice</span>
            </button>
            <button
              type="button"
              onClick={() => navigate('/image')}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-14 h-14 rounded-full bg-[#F7F8FC] border border-gray-200 flex items-center justify-center text-[#172033] shadow-sm group-hover:shadow-md transition-all group-hover:scale-105">
                <Camera className="w-6 h-6" />
              </div>
              <span className="text-xs font-medium text-[#172033]">Image</span>
            </button>
            <button
              type="button"
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-14 h-14 rounded-full bg-[#F7F8FC] border border-gray-200 flex items-center justify-center text-[#172033] shadow-sm group-hover:shadow-md transition-all group-hover:scale-105">
                <ClipboardList className="w-6 h-6" />
              </div>
              <span className="text-xs font-medium text-[#172033]">Manual</span>
            </button>
          </div>

          {/* Examples */}
          <div className="pt-6">
            <h3 className="text-sm font-semibold text-[#172033] mb-3">Try these examples</h3>
            <div className="flex flex-wrap gap-2">
              {EXAMPLES.map((example, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setQuery(example)}
                  className="text-left px-4 py-2.5 rounded-full bg-[#F7F8FC] text-sm text-[#667085] hover:bg-blue-50 hover:text-[#2563EB] transition-colors border border-transparent hover:border-blue-100"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4 pb-12">
            <button
              type="submit"
              disabled={!query.trim()}
              className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-white transition-all ${
                query.trim() 
                  ? 'bg-[#2563EB] hover:bg-blue-700 shadow-lg shadow-blue-500/30' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Find Products
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
