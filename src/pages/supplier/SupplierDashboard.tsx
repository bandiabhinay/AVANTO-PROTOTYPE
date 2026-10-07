import { motion } from 'framer-motion';
import { Package, Clock, AlertTriangle, ShoppingCart, RotateCcw, IndianRupee, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Active Products', value: '42', icon: Package, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Pending Review', value: '3', icon: Clock, color: 'text-violet-600', bg: 'bg-violet-50' },
  { label: 'Low Stock', value: '7', icon: AlertTriangle, color: 'text-orange-500', bg: 'bg-orange-50' },
  { label: 'Orders', value: '12', icon: ShoppingCart, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Returns', value: '2', icon: RotateCcw, color: 'text-red-500', bg: 'bg-red-50' },
  { label: 'Settlement', value: '₹45,600', icon: IndianRupee, color: 'text-green-600', bg: 'bg-green-50' }
];

const quickLinks = [
  { label: 'Products', path: '/supplier/products', icon: Package },
  { label: 'Inventory', path: '/supplier/inventory', icon: AlertTriangle },
  { label: 'Orders', path: '/supplier/orders', icon: ShoppingCart },
  { label: 'Returns', path: '/supplier/returns', icon: RotateCcw },
  { label: 'Settlements', path: '/supplier/settlements', icon: IndianRupee }
];

const recentOrders = [
  { id: 'ORD-8923', product: 'Premium Cotton T-Shirt', qty: 2, status: 'New', time: '2h ago' },
  { id: 'ORD-8922', product: 'Wireless Earbuds', qty: 1, status: 'Preparing', time: '4h ago' },
  { id: 'ORD-8921', product: 'Smart Watch', qty: 1, status: 'Dispatched', time: '1d ago' },
];

const lowStockAlerts = [
  { id: 'PRD-101', name: 'Premium Cotton T-Shirt - Blue/M', stock: 3, threshold: 10 },
  { id: 'PRD-105', name: 'Running Shoes - 42', stock: 1, threshold: 5 },
];

const SupplierDashboard: React.FC = () => {
  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Supplier Dashboard</h1>
        <p className="text-sm text-gray-500">Welcome back! Here's an overview of your business.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col items-center justify-center text-center space-y-2"
          >
            <div className={`p-2 rounded-full ${stat.bg}`}>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <div>
              <p className="text-xs text-gray-500">{stat.label}</p>
              <p className="text-lg font-bold text-gray-900">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
              <Link to="/supplier/orders" className="text-sm text-blue-600 hover:text-blue-700 font-medium">View all</Link>
            </div>
            <div className="space-y-4">
              {recentOrders.map((order, i) => (
                <div key={i} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors border border-gray-50">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                      <ShoppingCart className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gray-900">{order.product} (x{order.qty})</p>
                      <p className="text-xs text-gray-500">{order.id} • {order.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">{order.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {quickLinks.map((link, i) => (
                <Link key={i} to={link.path} className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group">
                  <link.icon className="w-6 h-6 text-gray-400 group-hover:text-blue-600 mb-2" />
                  <span className="text-sm font-medium text-gray-600 group-hover:text-blue-700">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
                Low Stock Alerts
              </h2>
            </div>
            <div className="space-y-3">
              {lowStockAlerts.map((alert, i) => (
                <div key={i} className="p-3 bg-orange-50 rounded-lg border border-orange-100">
                  <p className="font-medium text-sm text-gray-900">{alert.name}</p>
                  <div className="flex items-center justify-between mt-1 text-xs">
                    <span className="text-gray-500">ID: {alert.id}</span>
                    <span className="text-orange-600 font-bold">Stock: {alert.stock} / {alert.threshold}</span>
                  </div>
                </div>
              ))}
              <Link to="/supplier/inventory" className="block text-center text-sm text-blue-600 font-medium pt-2 hover:underline">
                Manage Inventory
              </Link>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-violet-600 rounded-xl shadow-sm p-4 md:p-6 text-white">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold mb-1">Performance insights</h3>
                <p className="text-sm text-blue-100">+12% sales this week</p>
              </div>
              <TrendingUp className="w-6 h-6 text-blue-200" />
            </div>
            <button className="w-full py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors backdrop-blur-sm">
              View Detailed Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierDashboard;
