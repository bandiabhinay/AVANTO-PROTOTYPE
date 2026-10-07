import { motion } from 'framer-motion';
import { MessageSquare, ClipboardCheck, Clock, IndianRupee, Sparkles, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MemberDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6 pb-24">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, Rahul</h1>
          <p className="text-gray-500">Here's what's happening with your store today.</p>
        </div>
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
          R
        </div>
      </header>

      {/* Main CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl p-6 text-white shadow-lg"
      >
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Sparkles className="w-5 h-5 text-blue-200" />
              <h2 className="text-xl font-bold">Find Products for a Customer</h2>
            </div>
            <p className="text-blue-100 mb-6 max-w-sm">Use AI to match products to customer needs instantly.</p>
            <button className="bg-white text-blue-600 px-6 py-2.5 rounded-xl font-medium flex items-center space-x-2 hover:bg-blue-50 transition-colors">
              <span>Start Matching</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <div className="hidden sm:block opacity-50">
            <MessageSquare className="w-24 h-24" />
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'New Requests', value: '5', icon: MessageSquare, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Awaiting Review', value: '3', icon: ClipboardCheck, color: 'text-violet-600', bg: 'bg-violet-50' },
          { label: 'Pending Earnings', value: '₹3,450', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
          { label: 'Available', value: '₹2,850', icon: IndianRupee, color: 'text-green-600', bg: 'bg-green-50' },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm"
          >
            <div className={`${stat.bg} w-10 h-10 rounded-xl flex items-center justify-center mb-3`}>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <p className="text-gray-500 text-sm font-medium mb-1">{stat.label}</p>
            <p className="text-xl font-bold text-gray-900">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Requests */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-900">Recent Requests</h3>
            <Link to="/requests" className="text-blue-600 text-sm font-medium flex items-center">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {[
              { name: 'Priya S.', req: 'Need a blue silk saree for a wedding', budget: '₹5,000', status: 'New', time: '2h ago', color: 'bg-blue-100 text-blue-700' },
              { name: 'Amit K.', req: 'Running shoes for daily use', budget: '₹3,000', status: 'Review', time: '5h ago', color: 'bg-violet-100 text-violet-700' },
              { name: 'Neha R.', req: 'Gift for 10 yr old boy', budget: '₹1,500', status: 'Match Ready', time: '1d ago', color: 'bg-orange-100 text-orange-700' },
            ].map((req, i) => (
              <div key={i} className="flex items-start space-x-3 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-medium shrink-0">
                  {req.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{req.req}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs text-gray-500">Budget: {req.budget}</span>
                    <span className="text-xs text-gray-300">•</span>
                    <span className="text-xs text-gray-500">{req.time}</span>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded-md text-[10px] font-medium ${req.color}`}>
                  {req.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Sales & Earnings Chart */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Earnings (Last 7 Days)</h3>
            <div className="h-32 flex items-end justify-between space-x-2">
              {[40, 70, 45, 90, 65, 85, 100].map((height, i) => (
                <div key={i} className="w-full bg-blue-50 rounded-t-sm relative group">
                  <div 
                    className="absolute bottom-0 w-full bg-blue-500 rounded-t-sm transition-all duration-500" 
                    style={{ height: `${height}%` }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-900">Recent Sales</h3>
            </div>
            <div className="space-y-4">
              {[
                { order: '#ORD-902', product: 'Blue Silk Saree', earn: '₹450', status: 'Paid' },
                { order: '#ORD-885', product: 'Nike Running Shoes', earn: '₹300', status: 'Pending' },
              ].map((sale, i) => (
                <div key={i} className="flex justify-between items-center pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{sale.product}</p>
                    <p className="text-xs text-gray-500">{sale.order}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-green-600">{sale.earn}</p>
                    <p className="text-[10px] text-gray-500">{sale.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* AI Assistant FAB */}
      <button className="fixed bottom-20 right-4 md:bottom-8 md:right-8 w-14 h-14 bg-blue-600 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors z-50">
        <Sparkles className="w-6 h-6" />
      </button>
    </div>
  );
};

export default MemberDashboard;
