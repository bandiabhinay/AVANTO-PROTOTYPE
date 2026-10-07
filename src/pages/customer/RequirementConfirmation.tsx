import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Pencil, Check, X, AlertCircle } from 'lucide-react';
// import { mockRequirement } from '../../data/mockData';

const mockRequirement = {
  category: "Women's Kurti",
  quantity: "1",
  budget: "₹1,500",
  budgetType: "Total including delivery",
  size: "M",
  color: "Blue",
  occasion: "Wedding",
  pin: "500001",
  date: "15 October 2026",
  mustHave: ["Blue", "Size M"],
  optional: ["Printed", "Elegant style"]
};

interface EditableFieldProps {
  label: string;
  value: string;
  onSave: (val: string) => void;
}

const EditableField: React.FC<EditableFieldProps> = ({ label, value, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);

  const handleSave = () => {
    onSave(tempValue);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
      <span className="text-sm text-gray-500 w-1/3">{label}</span>
      <div className="w-2/3 flex items-center justify-between">
        {isEditing ? (
          <div className="flex items-center gap-2 w-full">
            <input 
              type="text" 
              value={tempValue} 
              onChange={(e) => setTempValue(e.target.value)}
              className="flex-1 text-sm border-gray-300 rounded px-2 py-1 outline-none ring-1 ring-blue-500"
              autoFocus
            />
            <button onClick={handleSave} className="p-1 text-green-600 hover:bg-green-50 rounded">
              <Check className="w-4 h-4" />
            </button>
            <button onClick={() => { setTempValue(value); setIsEditing(false); }} className="p-1 text-red-600 hover:bg-red-50 rounded">
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <>
            <span className="text-sm font-medium text-gray-900 truncate pr-2">{value}</span>
            <button onClick={() => setIsEditing(true)} className="p-1 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors flex-shrink-0">
              <Pencil className="w-4 h-4" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default function RequirementConfirmation() {
  const navigate = useNavigate();
  const [req, setReq] = useState(mockRequirement);

  const handleUpdate = (key: string, value: string) => {
    setReq({ ...req, [key]: value });
  };

  const removeTag = (type: 'mustHave' | 'optional', tagToRemove: string) => {
    setReq({
      ...req,
      [type]: req[type].filter((tag: string) => tag !== tagToRemove)
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 pb-24 md:p-6 md:pb-24 max-w-3xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">We understood your request</h1>
            <p className="text-sm text-gray-500">Please review and edit if needed</p>
          </div>
        </div>

        {/* Missing Info Banner */}
        {!req.date && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-medium text-yellow-800">One more detail needed</h3>
              <p className="text-sm text-yellow-700 mt-1">When do you need this delivered by?</p>
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 md:p-5 space-y-1">
            <EditableField label="Category" value={req.category} onSave={(v) => handleUpdate('category', v)} />
            <EditableField label="Quantity" value={req.quantity} onSave={(v) => handleUpdate('quantity', v)} />
            <EditableField label="Budget" value={req.budget} onSave={(v) => handleUpdate('budget', v)} />
            <EditableField label="Budget Type" value={req.budgetType} onSave={(v) => handleUpdate('budgetType', v)} />
            <EditableField label="Size" value={req.size} onSave={(v) => handleUpdate('size', v)} />
            <EditableField label="Color" value={req.color} onSave={(v) => handleUpdate('color', v)} />
            <EditableField label="Occasion" value={req.occasion} onSave={(v) => handleUpdate('occasion', v)} />
            <EditableField label="Delivery PIN" value={req.pin} onSave={(v) => handleUpdate('pin', v)} />
            <EditableField label="Required Date" value={req.date} onSave={(v) => handleUpdate('date', v)} />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 md:p-5">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Preferences</h3>
          
          <div className="mb-4">
            <span className="text-xs text-gray-500 mb-2 block">Must Have</span>
            <div className="flex flex-wrap gap-2">
              {req.mustHave.map((tag: string) => (
                <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {tag}
                  <button onClick={() => removeTag('mustHave', tag)} className="text-gray-400 hover:text-gray-600">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs text-gray-500 mb-2 block">Optional</span>
            <div className="flex flex-wrap gap-2">
              {req.optional.map((tag: string) => (
                <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                  {tag}
                  <button onClick={() => removeTag('optional', tag)} className="text-blue-400 hover:text-blue-600">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 flex gap-3 max-w-3xl mx-auto z-50">
        <button className="flex-1 py-3 px-4 rounded-xl border border-gray-200 text-gray-700 font-medium text-sm hover:bg-gray-50 transition-colors">
          Edit Requirements
        </button>
        <button 
          onClick={() => navigate('/ai-matching')}
          className="flex-[2] py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium text-sm hover:opacity-90 transition-opacity shadow-sm"
        >
          Confirm & Find Products
        </button>
      </div>
    </div>
  );
}
