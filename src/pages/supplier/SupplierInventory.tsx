import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Download, Save, AlertCircle } from 'lucide-react';

const mockInventory = [
  { sku: 'TSH-BLU-M', product: 'Premium Cotton T-Shirt', variant: 'Blue / M', stock: 124, basePrice: 999, status: 'In Stock', lastUpdated: '2h ago' },
  { sku: 'TSH-BLU-L', product: 'Premium Cotton T-Shirt', variant: 'Blue / L', stock: 56, basePrice: 999, status: 'In Stock', lastUpdated: '2h ago' },
  { sku: 'EAR-WHT', product: 'Wireless Earbuds', variant: 'White', stock: 0, basePrice: 2499, status: 'Out of Stock', lastUpdated: '1d ago' },
  { sku: 'EAR-BLK', product: 'Wireless Earbuds', variant: 'Black', stock: 5, basePrice: 2499, status: 'Low Stock', lastUpdated: '5h ago' },
  { sku: 'WAT-SIL', product: 'Smart Watch', variant: 'Silver', stock: 12, basePrice: 4999, status: 'Low Stock', lastUpdated: '1w ago' },
  { sku: 'WAL-BRN', product: 'Leather Wallet', variant: 'Brown', stock: 45, basePrice: 1299, status: 'In Stock', lastUpdated: '2w ago' },
];

const SupplierInventory: React.FC = () => {
  const [inventory, setInventory] = useState(mockInventory);
  const [editingSku, setEditingSku] = useState<string | null>(null);
  const [editValue, setEditValue] = useState<string>('');

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'In Stock': return 'text-green-600 bg-green-50';
      case 'Low Stock': return 'text-orange-600 bg-orange-50';
      case 'Out of Stock': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const handleStockClick = (sku: string, currentStock: number) => {
    setEditingSku(sku);
    setEditValue(currentStock.toString());
  };

  const handleStockSave = (sku: string) => {
    const newStock = parseInt(editValue, 10);
    if (!isNaN(newStock)) {
      setInventory(prev => prev.map(item => {
        if (item.sku === sku) {
          let status = 'In Stock';
          if (newStock === 0) status = 'Out of Stock';
          else if (newStock < 10) status = 'Low Stock';
          return { ...item, stock: newStock, status, lastUpdated: 'Just now' };
        }
        return item;
      }));
    }
    setEditingSku(null);
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Inventory Management</h1>
          <p className="text-sm text-gray-500">Update stock levels and manage variant availability.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-200 rounded-lg flex items-center gap-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors">
            <Save className="w-4 h-4" />
            Bulk Update
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search SKU or product..." 
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>
          <button className="px-4 py-2 border border-gray-200 rounded-lg flex items-center justify-center gap-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-500 font-medium">
              <tr>
                <th className="px-4 py-3">SKU</th>
                <th className="px-4 py-3">Product</th>
                <th className="px-4 py-3">Variant</th>
                <th className="px-4 py-3">Stock</th>
                <th className="px-4 py-3">Base Price</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Last Updated</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {inventory.map((item, i) => (
                <motion.tr 
                  key={item.sku}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className={`transition-colors ${item.status === 'Low Stock' || item.status === 'Out of Stock' ? 'bg-orange-50/30' : 'hover:bg-gray-50'}`}
                >
                  <td className="px-4 py-3 font-medium text-gray-900">{item.sku}</td>
                  <td className="px-4 py-3 text-gray-900">{item.product}</td>
                  <td className="px-4 py-3 text-gray-600">{item.variant}</td>
                  <td className="px-4 py-3">
                    {editingSku === item.sku ? (
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          onBlur={() => handleStockSave(item.sku)}
                          onKeyDown={(e) => e.key === 'Enter' && handleStockSave(item.sku)}
                          className="w-20 px-2 py-1 border border-blue-500 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                          autoFocus
                        />
                      </div>
                    ) : (
                      <div 
                        onClick={() => handleStockClick(item.sku, item.stock)}
                        className={`cursor-pointer inline-flex items-center gap-1 font-semibold border-b border-dashed border-gray-300 hover:border-blue-500 transition-colors ${item.stock < 10 ? 'text-orange-600' : 'text-gray-900'}`}
                        title="Click to edit"
                      >
                        {item.stock}
                        {item.stock < 10 && <AlertCircle className="w-3 h-3 text-orange-500" />}
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-3 text-gray-600">₹{item.basePrice}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-500">{item.lastUpdated}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SupplierInventory;
