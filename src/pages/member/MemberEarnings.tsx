import { useState } from 'react';
import { Clock, CheckCircle2, Lock, ArrowDownToLine } from 'lucide-react';
import { Link } from 'react-router-dom';

const MemberEarnings = () => {
  const [filter, setFilter] = useState('All');

  const stats = [
    { label: 'Available', value: '₹2,850', icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Pending', value: '₹3,450', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Reserved', value: '₹500', icon: Lock, color: 'text-gray-500', bg: 'bg-gray-100' },
  ];

  const history = [
    { id: 1, type: 'earning', desc: 'Margin - Nike Shoes', ref: '#ORD-885', date: 'Oct 14, 2023', amount: '+₹300', status: 'Available' },
    { id: 2, type: 'withdrawal', desc: 'Bank Transfer', ref: 'TRX-9923', date: 'Oct 12, 2023', amount: '-₹1,500', status: 'Completed' },
    { id: 3, type: 'earning', desc: 'Margin - Silk Saree', ref: '#ORD-902', date: 'Oct 10, 2023', amount: '+₹450', status: 'Pending' },
    { id: 4, type: 'earning', desc: 'Margin - Smartwatch', ref: '#ORD-771', date: 'Oct 05, 2023', amount: '+₹200', status: 'Available' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 pb-24 min-h-screen bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Earnings</h1>
        <Link 
          to="/member/withdraw"
          className="bg-orange-500 text-white px-4 py-2 rounded-xl font-medium shadow-sm hover:bg-orange-600 transition-colors flex items-center space-x-2"
        >
          <ArrowDownToLine className="w-4 h-4" />
          <span>Withdraw</span>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="flex overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide space-x-4 mb-6">
        {stats.map((stat, i) => (
          <div key={i} className="min-w-[160px] flex-1 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <div className={`${stat.bg} w-10 h-10 rounded-xl flex items-center justify-center mb-3`}>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <p className="text-sm font-medium text-gray-500 mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
        <div className="min-w-[160px] flex-1 bg-gray-900 p-5 rounded-2xl shadow-sm text-white">
          <div className="bg-gray-800 w-10 h-10 rounded-xl flex items-center justify-center mb-3">
            <CheckCircle2 className="w-5 h-5 text-gray-300" />
          </div>
          <p className="text-sm font-medium text-gray-400 mb-1">Total Paid</p>
          <p className="text-2xl font-bold">₹12,400</p>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-lg font-bold text-gray-900">Transaction History</h2>
          <div className="flex space-x-2">
            {['All', 'Earnings', 'Withdrawals'].map(f => (
              <button 
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  filter === f ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="divide-y divide-gray-50">
          {history.map((item) => (
            <div key={item.id} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  item.type === 'earning' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'
                }`}>
                  {item.type === 'earning' ? '+' : '-'}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{item.desc}</p>
                  <div className="flex items-center space-x-2 mt-0.5">
                    <span className="text-xs text-gray-500">{item.date}</span>
                    <span className="text-xs text-gray-300">•</span>
                    <span className="text-xs text-gray-500">{item.ref}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-sm font-bold ${
                  item.type === 'earning' ? 'text-green-600' : 'text-gray-900'
                }`}>{item.amount}</p>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full mt-1 inline-block ${
                  item.status === 'Available' ? 'bg-green-100 text-green-700' :
                  item.status === 'Pending' ? 'bg-amber-100 text-amber-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberEarnings;
