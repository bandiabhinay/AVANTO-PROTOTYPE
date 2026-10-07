import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Phone, User } from 'lucide-react';

const SignupScreen: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<'customer' | 'member'>('customer');
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/verify-otp');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col max-w-md mx-auto">
      <div className="flex-1 px-6 pt-10 pb-8 flex flex-col">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Create Account</h1>
          <p className="text-slate-500 text-sm">Join ATTNS AI Commerce today</p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 flex-1">
          {/* Role Selector */}
          <div className="flex p-1 bg-slate-100 rounded-lg mb-6">
            <button
              onClick={() => setRole('customer')}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${role === 'customer' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
            >
              Customer
            </button>
            <button
              onClick={() => setRole('member')}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${role === 'member' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
            >
              Seller Member
            </button>
          </div>

          <form onSubmit={handleSignup} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700 ml-1">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all text-sm"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700 ml-1">Mobile Number</label>
              <div className="relative flex">
                <div className="flex-shrink-0 flex items-center justify-center px-3 bg-slate-100 border border-slate-200 border-r-0 rounded-l-xl text-slate-600 text-sm font-medium">
                  +91
                </div>
                <input
                  type="tel"
                  placeholder="Enter mobile number"
                  className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-r-xl focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all text-sm"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700 ml-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all text-sm"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700 ml-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a password"
                  className="w-full pl-4 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all text-sm"
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
              <div className="flex space-x-1 mt-2">
                <div className="h-1 flex-1 bg-green-500 rounded-full"></div>
                <div className="h-1 flex-1 bg-green-500 rounded-full"></div>
                <div className="h-1 flex-1 bg-slate-200 rounded-full"></div>
                <div className="h-1 flex-1 bg-slate-200 rounded-full"></div>
              </div>
            </div>

            <div className="flex items-start pt-2">
              <input
                id="terms"
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-xs text-slate-500">
                I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md shadow-blue-600/20 active:scale-[0.98] transition-all mt-2"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 mb-4 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-white text-slate-400">or sign up with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center space-x-2 py-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-4 h-4" />
              <span className="text-sm font-medium text-slate-700">Google</span>
            </button>
            <button className="flex items-center justify-center space-x-2 py-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <img src="https://www.svgrepo.com/show/511330/apple-173.svg" alt="Apple" className="w-4 h-4" />
              <span className="text-sm font-medium text-slate-700">Apple</span>
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-slate-600">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-700">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupScreen;
