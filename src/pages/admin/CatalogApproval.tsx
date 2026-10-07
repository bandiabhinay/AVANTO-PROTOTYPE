import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, AlertTriangle, ExternalLink, ShieldCheck } from 'lucide-react';

const mockApprovals = [
  { 
    id: 'REQ-092', 
    name: 'Wireless Noise-Cancelling Headphones',
    supplier: 'Techtronics Inc',
    category: 'Electronics',
    price: '₹12,999 - ₹14,999',
    variants: 2,
    aiScore: 92,
    sourceUrl: 'https://example.com/source1',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300&h=300',
    status: 'Pending'
  },
  { 
    id: 'REQ-093', 
    name: 'Organic Cotton Summer Dress',
    supplier: 'Eco Wear Ltd',
    category: 'Apparel',
    price: '₹2,499',
    variants: 4,
    aiScore: 78,
    sourceUrl: 'https://example.com/source2',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=300&h=300',
    status: 'Pending'
  },
];

const CatalogApproval: React.FC = () => {
  const [approvals, setApprovals] = useState(mockApprovals);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const handleAction = (id: string, _action: 'Approve' | 'Reject' | 'Request Changes') => {
    setApprovals(prev => prev.filter(p => p.id !== id));
    if (selectedProduct === id) setSelectedProduct(null);
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto flex">
      <div className={`flex-1 transition-all ${selectedProduct ? 'hidden lg:block lg:pr-6 lg:border-r lg:border-gray-200' : ''}`}>
        <div className="flex items-center gap-3 mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Catalog Approval</h1>
          <span className="bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-full text-sm font-medium">
            {approvals.length} in queue
          </span>
        </div>

        <div className="space-y-4">
          <AnimatePresence>
            {approvals.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, height: 0, marginBottom: 0 }}
                className={`bg-white rounded-xl shadow-sm border p-4 md:p-6 flex flex-col md:flex-row gap-6 transition-colors ${
                  selectedProduct === product.id ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-100'
                }`}
                onClick={() => setSelectedProduct(product.id)}
              >
                <img src={product.image} alt={product.name} className="w-full md:w-32 h-48 md:h-32 object-cover rounded-lg cursor-pointer" />
                
                <div className="flex-1 space-y-2 cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{product.name}</h3>
                      <p className="text-sm text-gray-500">By {product.supplier} • {product.category}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-bold" title="AI Draft Quality Score">
                      <ShieldCheck className="w-3.5 h-3.5" /> {product.aiScore}
                    </div>
                  </div>
                  
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span>{product.price}</span>
                    <span>•</span>
                    <span>{product.variants} variants</span>
                    <span>•</span>
                    <a href={product.sourceUrl} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline flex items-center gap-1" onClick={e => e.stopPropagation()}>
                      Source <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex flex-row md:flex-col justify-end gap-2 shrink-0 border-t md:border-t-0 pt-4 md:pt-0">
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleAction(product.id, 'Approve'); }}
                    className="flex-1 md:flex-none px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <Check className="w-4 h-4" /> Approve
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleAction(product.id, 'Request Changes'); }}
                    className="flex-1 md:flex-none px-4 py-2 bg-orange-100 hover:bg-orange-200 text-orange-700 text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <AlertTriangle className="w-4 h-4" /> Changes
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleAction(product.id, 'Reject'); }}
                    className="flex-1 md:flex-none px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <X className="w-4 h-4" /> Reject
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {approvals.length === 0 && (
            <div className="bg-white p-12 rounded-xl border border-gray-100 text-center">
              <Check className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h2 className="text-xl font-medium text-gray-900">All caught up!</h2>
              <p className="text-gray-500 mt-2">The approval queue is empty.</p>
            </div>
          )}
        </div>
      </div>

      {/* Side Panel for details (Desktop only for brevity, or full screen mobile overlay ideally) */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className={`w-full lg:w-[400px] shrink-0 bg-white rounded-xl shadow-lg border border-gray-100 p-6 ${!selectedProduct ? 'hidden' : 'block lg:block fixed inset-0 z-50 lg:static'}`}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">Product Details</h2>
              <button onClick={() => setSelectedProduct(null)} className="p-2 hover:bg-gray-100 rounded-full">
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img src={approvals.find(a => a.id === selectedProduct)?.image} alt="Preview" className="w-full h-full object-cover" />
              </div>
              
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">AI Generated Title</p>
                <p className="font-semibold text-gray-900">{approvals.find(a => a.id === selectedProduct)?.name}</p>
              </div>
              
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">AI Match Confidence</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${approvals.find(a => a.id === selectedProduct)?.aiScore}%` }}></div>
                </div>
                <p className="text-sm text-right mt-1 font-medium">{approvals.find(a => a.id === selectedProduct)?.aiScore}%</p>
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-4">Review content and take action to list this product on the marketplace.</p>
                <div className="grid grid-cols-2 gap-2">
                  <button onClick={() => handleAction(selectedProduct, 'Approve')} className="col-span-2 py-2.5 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700">Approve & List</button>
                  <button onClick={() => handleAction(selectedProduct, 'Request Changes')} className="py-2 bg-orange-100 text-orange-700 rounded-lg font-medium hover:bg-orange-200">Request Fix</button>
                  <button onClick={() => handleAction(selectedProduct, 'Reject')} className="py-2 bg-red-50 text-red-600 rounded-lg font-medium hover:bg-red-100">Reject</button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CatalogApproval;
