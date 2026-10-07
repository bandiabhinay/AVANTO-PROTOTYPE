import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Plus, Edit2, Trash2, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockAddresses } from '../../data/mockData';

export default function AddressScreen() {
  const navigate = useNavigate();
  const [selectedAddressId, setSelectedAddressId] = useState(mockAddresses[0]?.id);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <header className="sticky top-0 z-40 bg-white shadow-sm flex items-center px-4 py-4">
        <button onClick={() => navigate(-1)} className="mr-3 p-1 hover:bg-gray-100 rounded-full">
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-lg font-bold text-gray-900">Select Delivery Address</h1>
      </header>

      <div className="p-4 space-y-4">
        <button onClick={() => setShowForm(true)} className="w-full flex items-center gap-2 justify-center py-3.5 bg-indigo-50 text-indigo-700 rounded-xl font-medium border border-indigo-100 hover:bg-indigo-100 transition-colors">
          <Plus className="w-5 h-5" />
          Add New Address
        </button>

        {mockAddresses.map((addr) => (
          <motion.div key={addr.id} className={`bg-white p-4 rounded-2xl border-2 transition-colors cursor-pointer ${selectedAddressId === addr.id ? 'border-primary-600 shadow-sm' : 'border-transparent shadow-sm'}`} onClick={() => setSelectedAddressId(addr.id)}>
            <div className="flex gap-3">
              <div className="mt-1">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedAddressId === addr.id ? 'border-primary-600' : 'border-gray-300'}`}>
                  {selectedAddressId === addr.id && <div className="w-2.5 h-2.5 bg-primary-600 rounded-full" />}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-900">{addr.fullName}</h3>
                    {addr.isDefault && <span className="bg-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded uppercase font-bold">Default</span>}
                  </div>
                  <div className="flex gap-2">
                    <button className="text-gray-400 hover:text-gray-700"><Edit2 className="w-4 h-4" /></button>
                    <button className="text-gray-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-1">{addr.addressLine1}, {addr.city}, {addr.state} - {addr.pincode}</p>
                <p className="text-sm text-gray-600 mt-1 flex items-center gap-1">
                  Mobile: <span className="font-medium text-gray-900">{addr.phone}</span>
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {showForm && (
          <div className="fixed inset-0 z-50 flex flex-col bg-gray-50">
            <header className="bg-white shadow-sm flex items-center px-4 py-4">
              <button onClick={() => setShowForm(false)} className="mr-3 p-1 hover:bg-gray-100 rounded-full">
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <h1 className="text-lg font-bold text-gray-900">Add New Address</h1>
            </header>
            <div className="flex-1 overflow-y-auto p-4">
              <form className="bg-white rounded-2xl p-4 shadow-sm space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500" placeholder="e.g. Rahul Kumar" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                  <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500" placeholder="10-digit mobile number" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">PIN Code</label>
                    <div className="relative">
                      <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500" placeholder="6 digits" />
                      <Check className="absolute right-3 top-2.5 w-4 h-4 text-green-500" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500" placeholder="e.g. Maharashtra" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 1</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500" placeholder="House/Flat No., Building Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Locality/Street</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500" placeholder="Street name, Area" />
                </div>
                <button type="button" className="w-full bg-primary-600 text-white font-semibold py-3.5 rounded-xl shadow-sm text-center mt-6" onClick={() => setShowForm(false)}>
                  Save Address
                </button>
              </form>
            </div>
          </div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 pb-safe z-40">
        <button onClick={() => navigate('/checkout')} className="w-full bg-primary-600 text-white font-semibold py-3.5 rounded-xl shadow-sm text-center">
          Deliver Here
        </button>
      </div>
    </div>
  );
}
