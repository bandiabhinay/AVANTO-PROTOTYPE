import { useState } from 'react';
import { ChevronLeft, Info, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const WithdrawalScreen = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  
  const availableBalance = 2850;

  const handleWithdraw = () => {
    if (!amount || Number(amount) <= 0 || Number(amount) > availableBalance) return;
    setIsSuccess(true);
    setTimeout(() => {
      navigate('/member/earnings');
    }, 3000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600"
        >
          <CheckCircle2 className="w-10 h-10" />
        </motion.div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Withdrawal Requested</h2>
        <p className="text-gray-500 mb-8 max-w-sm">
          Your request for <span className="font-bold text-gray-900">₹{amount}</span> is being processed. It should reflect in your account within 2-3 business days.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-4 min-h-screen bg-gray-50">
      <header className="flex items-center mb-8 space-x-4 pt-2">
        <button onClick={() => navigate(-1)} className="p-2 bg-white rounded-full shadow-sm">
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <h1 className="text-xl font-bold text-gray-900">Withdraw Funds</h1>
      </header>

      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-6 text-center">
        <p className="text-sm font-medium text-gray-500 mb-2">Available Balance</p>
        <p className="text-3xl font-bold text-gray-900 mb-8">₹{availableBalance.toLocaleString()}</p>

        <div className="relative mb-6">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-gray-400">₹</span>
          <input 
            type="number" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0"
            className="w-full text-center text-4xl font-bold text-gray-900 bg-gray-50 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
          />
        </div>

        <div className="grid grid-cols-4 gap-2">
          {[500, 1000, 2000, availableBalance].map((amt, i) => (
            <button
              key={i}
              onClick={() => setAmount(amt.toString())}
              className="py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              {i === 3 ? 'Max' : `₹${amt}`}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm mb-6">
        <h3 className="text-sm font-bold text-gray-900 mb-3">Transfer Details</h3>
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
          <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <span className="font-bold text-blue-800">HDFC</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">HDFC Bank</p>
            <p className="text-xs text-gray-500">•••• •••• 4590</p>
          </div>
        </div>
      </div>

      <div className="flex items-start space-x-3 bg-blue-50 p-4 rounded-xl mb-8">
        <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <p className="text-xs text-blue-800 leading-relaxed">
          No withdrawal fees. Transfers are typically processed within 2-3 business days depending on your bank.
        </p>
      </div>

      <button 
        onClick={handleWithdraw}
        disabled={!amount || Number(amount) <= 0 || Number(amount) > availableBalance}
        className="w-full bg-orange-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-200 hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:shadow-none"
      >
        Confirm Withdrawal
      </button>
    </div>
  );
};

export default WithdrawalScreen;
