import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Package, Check, ArrowRight, X } from 'lucide-react';

const tabs = ['All', 'New', 'Accepted', 'Preparing', 'Ready', 'Dispatched', 'Delivered', 'Returns'];

const mockOrders = [
  { id: 'ORD-8923', product: 'Premium Cotton T-Shirt', variant: 'Blue / M', qty: 2, city: 'Mumbai', status: 'New', date: '2h ago', customer: 'Rahul K.' },
  { id: 'ORD-8922', product: 'Wireless Earbuds', variant: 'White', qty: 1, city: 'Delhi', status: 'Accepted', date: '4h ago', customer: 'Priya S.' },
  { id: 'ORD-8921', product: 'Smart Watch', variant: 'Silver', qty: 1, city: 'Bangalore', status: 'Preparing', date: '5h ago', customer: 'Amit P.' },
  { id: 'ORD-8920', product: 'Leather Wallet', variant: 'Brown', qty: 3, city: 'Pune', status: 'Ready', date: '1d ago', customer: 'Neha G.' },
  { id: 'ORD-8919', product: 'Premium Cotton T-Shirt', variant: 'Black / L', qty: 1, city: 'Chennai', status: 'Dispatched', date: '1d ago', customer: 'Vikram M.' },
];

const SupplierOrders: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [orders, setOrders] = useState(mockOrders);

  const filteredOrders = activeTab === 'All' ? orders : orders.filter(o => o.status === activeTab);

  const updateOrderStatus = (id: string, newStatus: string) => {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status: newStatus } : o));
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'New': return 'bg-blue-100 text-blue-700';
      case 'Accepted': return 'bg-violet-100 text-violet-700';
      case 'Preparing': return 'bg-orange-100 text-orange-700';
      case 'Ready': return 'bg-green-100 text-green-700';
      case 'Dispatched': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const renderActionButtons = (order: typeof mockOrders[0]) => {
    switch(order.status) {
      case 'New':
        return (
          <div className="flex gap-2 mt-4 md:mt-0">
            <button className="px-3 py-1.5 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors flex items-center gap-1">
              <X className="w-4 h-4" /> Reject
            </button>
            <button 
              onClick={() => updateOrderStatus(order.id, 'Accepted')}
              className="px-3 py-1.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center gap-1"
            >
              <Check className="w-4 h-4" /> Accept
            </button>
          </div>
        );
      case 'Accepted':
        return (
          <button 
            onClick={() => updateOrderStatus(order.id, 'Preparing')}
            className="px-4 py-1.5 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors mt-4 md:mt-0"
          >
            Start Preparing
          </button>
        );
      case 'Preparing':
        return (
          <button 
            onClick={() => updateOrderStatus(order.id, 'Ready')}
            className="px-4 py-1.5 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors mt-4 md:mt-0"
          >
            Mark Ready
          </button>
        );
      case 'Ready':
        return (
          <button 
            onClick={() => updateOrderStatus(order.id, 'Dispatched')}
            className="px-4 py-1.5 text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 rounded-lg transition-colors mt-4 md:mt-0 flex items-center gap-1"
          >
            Dispatch <ArrowRight className="w-4 h-4" />
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Orders</h1>
        <p className="text-sm text-gray-500">Manage fulfillment and track order status.</p>
      </div>

      <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100 overflow-x-auto hide-scrollbar">
        <div className="flex gap-1 min-w-max">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeTab === tab 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredOrders.map((order, i) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-4 flex-1">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                <Package className="w-6 h-6" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold text-gray-900">{order.id}</h3>
                  <span className={`px-2 py-0.5 text-[10px] uppercase font-bold rounded-full ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                  <span className="text-xs text-gray-400">• {order.date}</span>
                </div>
                <p className="text-sm text-gray-900 font-medium">
                  {order.product} <span className="text-gray-500 font-normal">({order.variant}) x{order.qty}</span>
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500 pt-1">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {order.city}</span>
                  <span>Customer: {order.customer}</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-end shrink-0">
              {renderActionButtons(order)}
            </div>
          </motion.div>
        ))}
        {filteredOrders.length === 0 && (
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <p className="text-gray-500">No orders found for this status.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SupplierOrders;
