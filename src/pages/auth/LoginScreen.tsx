import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Phone } from 'lucide-react';

const LoginScreen: React.FC = () => {
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, handle authentication here
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col max-w-md mx-auto">
      <div className="flex-1 px-6 pt-12 pb-8 flex flex-col">
        {/* Header Logo */}
        <div className="flex justify-center mb-10">
          <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center">
            <span className="text-xl font-bold bg-gradient-to-br from-blue-600 to-violet-600 bg-clip-text text-transparent">A</span>
          </div>
        </div>

        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Welcome Back</h1>
          <p className="text-slate-500 text-sm">Sign in to continue to ATTNS AI Commerce</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 flex-1">
          {/* Tabs */}
          <div className="flex p-1 bg-slate-100 rounded-lg mb-6">
            <button
              onClick={() => setLoginMethod('email')}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${loginMethod === 'email' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
            >
              Email
            </button>
            <button
              onClick={() => setLoginMethod('phone')}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${loginMethod === 'phone' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
            >
              Mobile Number
            </button>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {loginMethod === 'email' ? (
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700 ml-1">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail size={18} />
                  </div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all text-sm"
                    required
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700 ml-1">Mobile Number</label>
                <div className="relative flex">
                  <div className="flex-shrink-0 flex items-center justify-center px-4 bg-slate-100 border border-slate-200 border-r-0 rounded-l-xl text-slate-600 text-sm font-medium">
                    +91
                  </div>
                  <input
                    type="tel"
                    placeholder="Enter mobile number"
                    className="flex-1 px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-r-xl focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all text-sm"
                    required
                  />
                </div>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700 ml-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="w-full pl-4 pr-10 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all text-sm"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <div className="flex justify-end pt-1">
                <button type="button" className="text-sm font-medium text-blue-600 hover:text-blue-700">
                  Forgot Password?
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md shadow-blue-600/20 active:scale-[0.98] transition-all mt-4"
            >
              Continue
            </button>
          </form>

          <div className="mt-8 mb-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-white text-slate-400">or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center space-x-2 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
              <span className="text-sm font-medium text-slate-700">Google</span>
            </button>
            <button className="flex items-center justify-center space-x-2 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <img src="https://www.svgrepo.com/show/511330/apple-173.svg" alt="Apple" className="w-5 h-5" />
              <span className="text-sm font-medium text-slate-700">Apple</span>
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-slate-600">
            Don't have an account?{' '}
            <Link to="/signup" className="font-semibold text-blue-600 hover:text-blue-700">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
