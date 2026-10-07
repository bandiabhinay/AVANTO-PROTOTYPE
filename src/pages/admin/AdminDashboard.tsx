import React from 'react';
import { motion } from 'framer-motion';
import { Users, UserCheck, Truck, Package, ShoppingBag, IndianRupee, Activity, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const kpis = [
  { label: 'Total Customers', value: '1,234', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Active Members', value: '156', icon: UserCheck, color: 'text-violet-600', bg: 'bg-violet-50' },
  { label: 'Suppliers', value: '42', icon: Truck, color: 'text-orange-500', bg: 'bg-orange-50' },
  { label: 'Products', value: '2,456', icon: Package, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Total Orders', value: '3,891', icon: ShoppingBag, color: 'text-green-600', bg: 'bg-green-50' },
  { label: 'Total GMV', value: '₹24.5L', icon: IndianRupee, color: 'text-emerald-600', bg: 'bg-emerald-50' }
];

const quickLinks = [
  { label: 'User Management', path: '/admin/users', icon: Users },
  { label: 'Catalog Approval', path: '/admin/catalog-approval', icon: CheckSquare },
  { label: 'AI Control Center', path: '/admin/ai-control', icon: Activity },
];

// Reusable simple icon component for the link
function CheckSquare(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 11 12 14 22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  );
}

const AdminDashboard: React.FC = () => {
  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Super Admin Dashboard</h1>
        <p className="text-sm text-gray-500">Executive overview of ATTNS AI Commerce platform.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {kpis.map((kpi, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col items-center justify-center text-center space-y-2"
          >
            <div className={`p-2 rounded-full ${kpi.bg}`}>
              <kpi.icon className={`w-5 h-5 ${kpi.color}`} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">{kpi.label}</p>
              <p className="text-lg font-bold text-gray-900">{kpi.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Revenue & Orders Trend</h2>
              <select className="text-sm border border-gray-200 rounded-md px-2 py-1 focus:outline-none focus:border-blue-500">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>This Year</option>
              </select>
            </div>
            
            {/* Simple Bar Chart Visualization with divs */}
            <div className="h-48 flex items-end justify-between gap-2 mt-4 px-2">
              {[40, 60, 45, 80, 55, 90, 75].map((height, i) => (
                <div key={i} className="w-full max-w-[40px] flex flex-col justify-end group">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="bg-blue-100 group-hover:bg-blue-200 rounded-t-sm w-full relative"
                  >
                    <div 
                      className="absolute bottom-0 left-0 w-full bg-blue-600 rounded-t-sm" 
                      style={{ height: `${height * 0.6}%` }}
                    />
                  </motion.div>
                  <span className="text-[10px] text-gray-400 text-center mt-2">Day {i+1}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Navigation</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {quickLinks.map((link, i) => (
                <Link key={i} to={link.path} className="flex items-center p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group">
                  <div className="bg-gray-50 group-hover:bg-white p-2 rounded-lg mr-3">
                    <link.icon className="w-5 h-5 text-gray-500 group-hover:text-blue-600" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-800 group-hover:text-blue-700 block">{link.label}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6 h-full">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-600" />
              Recent Activity
            </h2>
            <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
              {[
                { title: 'New Supplier Onboarded', time: '10 mins ago', type: 'success' },
                { title: 'AI Matching Model Updated', time: '1 hour ago', type: 'info' },
                { title: 'Large Order Placed (₹50k+)', time: '2 hours ago', type: 'warning' },
                { title: 'System Backup Completed', time: '5 hours ago', type: 'default' },
              ].map((activity, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-50 text-gray-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <div className={`w-3 h-3 rounded-full ${
                      activity.type === 'success' ? 'bg-green-500' :
                      activity.type === 'info' ? 'bg-blue-500' :
                      activity.type === 'warning' ? 'bg-orange-500' : 'bg-gray-400'
                    }`} />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-3 rounded-lg border border-gray-100 bg-white shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-medium text-sm text-gray-900">{activity.title}</h3>
                    </div>
                    <time className="text-xs text-gray-500">{activity.time}</time>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2 text-sm text-blue-600 font-medium hover:bg-blue-50 rounded-lg transition-colors flex items-center justify-center gap-1">
              View All Logs <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
