import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Clock, IndianRupee, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const AIControlCenter: React.FC = () => {
  const [toggles, setToggles] = useState({
    matching: true,
    voice: true,
    image: true,
    suggestions: false
  });

  const toggleFeature = (feature: keyof typeof toggles) => {
    setToggles(prev => ({ ...prev, [feature]: !prev[feature] }));
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-1">AI Control Center</h1>
        <p className="text-sm text-gray-500">Monitor and manage AI model performance and operations.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-blue-600">
            <Zap className="w-5 h-5" /> <span className="text-sm font-medium">Requests</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">12,456</span>
          <span className="text-xs text-green-600">+14% vs yesterday</span>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle className="w-5 h-5" /> <span className="text-sm font-medium">Success Rate</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">94.2%</span>
          <span className="text-xs text-gray-500">Target: 95.0%</span>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-violet-600">
            <Clock className="w-5 h-5" /> <span className="text-sm font-medium">Avg Latency</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">1.2s</span>
          <span className="text-xs text-green-600">-0.3s vs last week</span>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-orange-500">
            <IndianRupee className="w-5 h-5" /> <span className="text-sm font-medium">Daily Cost</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">₹2,340</span>
          <span className="text-xs text-gray-500">Est. Monthly: ₹70,200</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Token Usage</h2>
            {/* Placeholder for chart */}
            <div className="h-48 bg-gray-50 rounded-lg border border-gray-100 flex items-end justify-between p-4 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">Token Usage Chart Placeholder</div>
              {/* Dummy bars for aesthetic */}
              {[30, 50, 40, 70, 60, 90, 80].map((h, i) => (
                <div key={i} className="w-[10%] bg-blue-200/50 rounded-t-sm" style={{ height: `${h}%` }}></div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Error Logs</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 text-gray-500">
                  <tr>
                    <th className="px-4 py-2 font-medium">Time</th>
                    <th className="px-4 py-2 font-medium">Type</th>
                    <th className="px-4 py-2 font-medium">Message</th>
                    <th className="px-4 py-2 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="text-gray-600">
                    <td className="px-4 py-3">10:42 AM</td>
                    <td className="px-4 py-3"><span className="text-orange-600 font-medium">Timeout</span></td>
                    <td className="px-4 py-3 truncate max-w-[200px]">Vision API failed to respond</td>
                    <td className="px-4 py-3"><span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs">Retrying</span></td>
                  </tr>
                  <tr className="text-gray-600">
                    <td className="px-4 py-3">09:15 AM</td>
                    <td className="px-4 py-3"><span className="text-red-600 font-medium">API Error</span></td>
                    <td className="px-4 py-3 truncate max-w-[200px]">Context length exceeded</td>
                    <td className="px-4 py-3"><span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs">Failed</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5 text-violet-600" />
              Feature Toggles
            </h2>
            <div className="space-y-4">
              {Object.entries(toggles).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <span className="font-medium text-gray-900 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <button 
                    onClick={() => toggleFeature(key as keyof typeof toggles)}
                    className={`relative w-11 h-6 rounded-full transition-colors ${value ? 'bg-blue-600' : 'bg-gray-300'}`}
                  >
                    <motion.div 
                      layout
                      className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 shadow-sm"
                      animate={{ x: value ? 20 : 0 }}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-sm p-6 text-white border border-gray-700">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              Model Information
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">Primary Model</span>
                <span className="font-mono">gpt-4o</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">Vision Model</span>
                <span className="font-mono">gpt-4o-vision</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">Embeddings</span>
                <span className="font-mono">text-embedding-3</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-gray-400">System Status</span>
                <span className="text-green-400 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIControlCenter;
