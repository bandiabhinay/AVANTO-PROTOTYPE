import React, { useState } from 'react';
import { Package, Truck, CheckCircle2, Clock, XCircle, ChevronRight } from 'lucide-react';
import { mockOrders } from '../../data/mockData';

const OrdersPage = () => {
  const [activeTab, setActiveTab] = useState('active');

  const tabs = [
    { id: 'active', label: 'Active' },
    { id: 'completed', label: 'Completed' },
    { id: 'cancelled', label: 'Cancelled' }
  ];

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case 'in-transit': return <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1"><Truck size={12}/> In Transit</span>;
      case 'delivered': return <span className="bg-green-50 text-success px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1"><CheckCircle2 size={12}/> Delivered</span>;
      case 'processing': return <span className="bg-amber-50 text-amber-600 px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1"><Clock size={12}/> Processing</span>;
      case 'cancelled': return <span className="bg-red-50 text-error px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1"><XCircle size={12}/> Cancelled</span>;
      default: return null;
    }
  };

  // Mock filtering
  const filteredOrders = mockOrders?.filter(o => {
    if (activeTab === 'active') return ['processing', 'in-transit'].includes(o.status.toLowerCase());
    if (activeTab === 'completed') return o.status.toLowerCase() === 'delivered';
    if (activeTab === 'cancelled') return o.status.toLowerCase() === 'cancelled';
    return true;
  }) || [];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-white px-4 pt-12 pb-4 shadow-sm sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">My Orders</h1>
        <div className="flex gap-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === tab.id ? 'bg-primary text-white shadow-sm' : 'bg-gray-100 text-gray-600'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 flex flex-col gap-4">
        {filteredOrders.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 text-center flex flex-col items-center border border-gray-100">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-gray-400">
              <Package size={32} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">No {activeTab} orders</h3>
            <p className="text-sm text-gray-500">You don't have any {activeTab} orders right now.</p>
          </div>
        ) : (
          filteredOrders.map((order, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-4 border-b border-gray-50 pb-3">
                <div>
                  <span className="text-xs text-gray-500 font-medium">#{order.id}</span>
                  <p className="text-sm text-gray-900">{order.date}</p>
                </div>
                {getStatusBadge(order.status)}
              </div>
              
              <div className="flex gap-4 mb-4">
                <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={order.items[0]?.image || "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=150&h=150"} alt="Product" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-medium text-gray-900 text-sm line-clamp-2">{order.items[0]?.name || 'Nike Air Max 270'}</h3>
                  <p className="text-xs text-gray-500 mt-1">{order.items[0]?.variant || 'Size: US 10 • Black/White'}</p>
                  <p className="font-semibold text-gray-900 mt-2">₹{order.total}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-50">
                <button className="w-full flex items-center justify-between text-sm font-medium text-primary py-1">
                  View Details
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
