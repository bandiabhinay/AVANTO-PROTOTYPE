import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Filter, LayoutGrid, List, MoreVertical } from 'lucide-react';

const mockProducts = [
  { id: 'PRD-101', name: 'Premium Cotton T-Shirt', category: 'Apparel', variants: 4, price: 999, status: 'Active', stock: 'In Stock', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 'PRD-102', name: 'Wireless Earbuds', category: 'Electronics', variants: 2, price: 2499, status: 'Pending', stock: 'Out of Stock', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 'PRD-103', name: 'Smart Watch', category: 'Electronics', variants: 3, price: 4999, status: 'Active', stock: 'Low Stock', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 'PRD-104', name: 'Leather Wallet', category: 'Accessories', variants: 1, price: 1299, status: 'Rejected', stock: 'In Stock', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=200&h=200' },
];

const SupplierProducts: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [search, setSearch] = useState('');

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Active': return 'bg-green-100 text-green-700';
      case 'Pending': return 'bg-orange-100 text-orange-700';
      case 'Rejected': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStockColor = (stock: string) => {
    switch(stock) {
      case 'In Stock': return 'text-green-600';
      case 'Low Stock': return 'text-orange-500';
      case 'Out of Stock': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Products</h1>
          <p className="text-sm text-gray-500">Manage your catalog, variants, and pricing.</p>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
          <Plus className="w-4 h-4" />
          Add Product
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex gap-2 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search products..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>
          <button className="px-4 py-2 border border-gray-200 rounded-lg flex items-center gap-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" />
            <span className="hidden sm:inline">Filters</span>
          </button>
        </div>
        <div className="flex items-center gap-2 self-end sm:self-auto bg-gray-50 p-1 rounded-lg border border-gray-200">
          <button 
            onClick={() => setViewMode('grid')}
            className={`p-1.5 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setViewMode('list')}
            className={`p-1.5 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockProducts.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group"
            >
              <div className="aspect-square bg-gray-100 relative">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2">
                  <span className={`px-2 py-1 text-[10px] uppercase font-bold rounded-full ${getStatusColor(product.status)}`}>
                    {product.status}
                  </span>
                </div>
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-1">{product.category}</p>
                  <h3 className="font-semibold text-gray-900 text-sm line-clamp-1">{product.name}</h3>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">{product.variants} variants</p>
                    <p className="font-bold text-gray-900">₹{product.price}</p>
                  </div>
                  <p className={`text-xs font-medium ${getStockColor(product.stock)}`}>{product.stock}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-500 font-medium">
                <tr>
                  <th className="px-4 py-3">Product</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Variants</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Stock</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {mockProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 flex items-center gap-3">
                      <img src={product.image} alt={product.name} className="w-10 h-10 rounded-lg object-cover" />
                      <div>
                        <p className="font-medium text-gray-900">{product.name}</p>
                        <p className="text-xs text-gray-500">{product.id}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{product.category}</td>
                    <td className="px-4 py-3 font-medium text-gray-900">₹{product.price}</td>
                    <td className="px-4 py-3 text-gray-600">{product.variants}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 text-[10px] uppercase font-bold rounded-full ${getStatusColor(product.status)}`}>
                        {product.status}
                      </span>
                    </td>
                    <td className={`px-4 py-3 text-xs font-medium ${getStockColor(product.stock)}`}>{product.stock}</td>
                    <td className="px-4 py-3 text-right">
                      <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-100 transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupplierProducts;
