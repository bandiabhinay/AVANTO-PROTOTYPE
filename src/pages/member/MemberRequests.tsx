import React, { useState } from 'react';
import { Search, Filter, ChevronRight, MoreHorizontal, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TABS = ['All', 'New', 'Needs Clarification', 'Ready to Match', 'Selection Prepared', 'Awaiting Review', 'Shared', 'Ordered', 'Closed'];

const MOCK_REQUESTS = [
  { id: 1, name: 'Priya S.', avatar: 'P', text: 'Need a blue silk saree for a wedding', date: 'Oct 12', budget: '₹5,000', status: 'New', color: 'bg-blue-100 text-blue-700', matches: 0 },
  { id: 2, name: 'Amit K.', avatar: 'A', text: 'Running shoes for daily use', date: 'Oct 11', budget: '₹3,000', status: 'Awaiting Review', color: 'bg-violet-100 text-violet-700', matches: 3 },
  { id: 3, name: 'Neha R.', avatar: 'N', text: 'Gift for 10 yr old boy', date: 'Oct 10', budget: '₹1,500', status: 'Ready to Match', color: 'bg-orange-100 text-orange-700', matches: 0 },
  { id: 4, name: 'Rahul V.', avatar: 'R', text: 'Smartwatch under 2k', date: 'Oct 09', budget: '₹2,000', status: 'Shared', color: 'bg-green-100 text-green-700', matches: 2 },
];

const MemberRequests = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRequests = MOCK_REQUESTS.filter(req => {
    if (activeTab !== 'All' && req.status !== activeTab) return false;
    if (searchQuery && !req.text.toLowerCase().includes(searchQuery.toLowerCase()) && !req.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="max-w-4xl mx-auto p-4 pb-24 min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Customer Requests</h1>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search requests..." 
          className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1 bg-gray-100 rounded-lg">
          <Filter className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      <div className="flex overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide mb-6 space-x-2">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeTab === tab 
                ? 'bg-gray-900 text-white' 
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <AnimatePresence>
          {filteredRequests.length > 0 ? (
            filteredRequests.map(req => (
              <motion.div 
                key={req.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                      {req.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{req.name}</p>
                      <p className="text-xs text-gray-500">{req.date}</p>
                    </div>
                  </div>
                  <div className={`px-2.5 py-1 rounded-md text-[10px] font-medium ${req.color}`}>
                    {req.status}
                  </div>
                </div>
                
                <p className="text-gray-800 text-sm mb-3 line-clamp-2">{req.text}</p>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
                  <div className="flex items-center space-x-4">
                    <div className="text-xs">
                      <span className="text-gray-500">Budget: </span>
                      <span className="font-semibold text-gray-900">{req.budget}</span>
                    </div>
                    {req.matches > 0 && (
                      <div className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded-md">
                        {req.matches} Matches
                      </div>
                    )}
                  </div>
                  <button className="text-blue-600 bg-blue-50 hover:bg-blue-100 p-2 rounded-xl transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 bg-white rounded-2xl border border-gray-100"
            >
              <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500 font-medium">No requests found</p>
              <p className="text-sm text-gray-400 mt-1">Try changing your filters or search term</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MemberRequests;
