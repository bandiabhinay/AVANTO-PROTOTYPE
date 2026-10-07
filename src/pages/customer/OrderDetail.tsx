import { motion } from 'framer-motion';
import { Copy, MapPin, CreditCard, RefreshCcw, HelpCircle, Truck } from 'lucide-react';

const OrderDetail = () => {
  const timeline = [
    { label: 'Order Confirmed', time: 'Oct 1, 10:30 AM', desc: 'Your order has been placed successfully.', status: 'completed' },
    { label: 'Processing', time: 'Oct 1, 02:15 PM', desc: 'Seller is preparing your item.', status: 'completed' },
    { label: 'Dispatched', time: 'Oct 2, 09:00 AM', desc: 'Item handed over to delivery partner.', status: 'current' },
    { label: 'Out for Delivery', time: 'Pending', desc: 'Package is on its way to you.', status: 'future' },
    { label: 'Delivered', time: 'Pending', desc: 'Package dropped off at location.', status: 'future' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-white px-4 pt-12 pb-4 shadow-sm sticky top-0 z-10 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Order Details</h1>
          <p className="text-sm text-gray-500">ATTN-2026-00142 • Oct 1, 2026</p>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-4">
        {/* Tracking ID */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-500 mb-1">Tracking ID (BlueDart)</p>
            <p className="font-semibold text-gray-900 tracking-wide">BD987654321IN</p>
          </div>
          <button className="p-2 text-primary bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <Copy size={18} />
          </button>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-4">Tracking History</h3>
          <div className="relative pl-3">
            {timeline.map((step, i) => (
              <div key={i} className="mb-6 last:mb-0 relative pl-6">
                {/* Line */}
                {i !== timeline.length - 1 && (
                  <div className={`absolute left-[5px] top-6 bottom-[-24px] w-0.5 ${step.status === 'completed' ? 'bg-primary' : 'bg-gray-200'}`} />
                )}
                
                {/* Node */}
                <div className={`absolute left-0 top-1 w-3 h-3 rounded-full border-2 bg-white flex items-center justify-center
                  ${step.status === 'completed' ? 'border-primary' : step.status === 'current' ? 'border-primary' : 'border-gray-300'}`}
                >
                  {step.status === 'current' && (
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }} 
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute w-full h-full bg-primary rounded-full opacity-50"
                    />
                  )}
                  {step.status === 'completed' && <div className="w-1.5 h-1.5 bg-primary rounded-full" />}
                </div>

                <div className="flex flex-col">
                  <span className={`font-medium ${step.status === 'future' ? 'text-gray-400' : 'text-gray-900'}`}>{step.label}</span>
                  <span className="text-xs text-gray-500 mt-0.5">{step.time}</span>
                  <span className="text-sm text-gray-600 mt-1">{step.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="flex gap-4">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=150&h=150" alt="Product" className="w-20 h-20 bg-gray-100 rounded-lg object-cover" />
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">Nike Air Max 270</h3>
              <p className="text-sm text-gray-500">Size: US 10 • Black/White</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-gray-600">Qty: 1</span>
                <span className="font-semibold text-gray-900">₹1,417</span>
              </div>
            </div>
          </div>
        </div>

        {/* Address & Payment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-start gap-3">
            <MapPin className="text-gray-400 mt-0.5" size={20} />
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-1">Shipping Address</h4>
              <p className="text-sm text-gray-600">John Doe<br/>123 React Street, App Building<br/>Bengaluru, KA 560001</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-start gap-3">
            <CreditCard className="text-gray-400 mt-0.5" size={20} />
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-1">Payment Method</h4>
              <p className="text-sm text-gray-600">UPI (PhonePe)<br/><span className="text-success font-medium text-xs">Payment Successful</span></p>
            </div>
          </div>
        </div>

        {/* Return Notice */}
        <div className="bg-green-50 rounded-xl p-4 border border-green-100 flex items-center gap-3">
          <RefreshCcw className="text-success" size={20} />
          <p className="text-sm text-green-800 flex-1">Eligible for return until Oct 15, 2026</p>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-1 gap-3 mt-2">
          <button className="w-full bg-primary text-white py-3.5 rounded-xl font-medium shadow-sm flex items-center justify-center gap-2">
            <Truck size={18} /> Track Shipment
          </button>
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-white text-gray-700 py-3 rounded-xl font-medium border border-gray-200 flex items-center justify-center gap-2">
              <RefreshCcw size={18} /> Request Return
            </button>
            <button className="bg-white text-gray-700 py-3 rounded-xl font-medium border border-gray-200 flex items-center justify-center gap-2">
              <HelpCircle size={18} /> Need Help
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
