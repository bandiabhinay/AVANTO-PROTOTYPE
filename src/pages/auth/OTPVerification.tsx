import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const OTPVerification: React.FC = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(30);
  const [status, setStatus] = useState<'entering' | 'verifying' | 'verified' | 'error'>('entering');
  const inputRefs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft > 0 && status === 'entering') {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    }
  }, [timeLeft, status]);

  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next
    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }

    if (newOtp.every(digit => digit !== '')) {
      verifyOtp(newOtp.join(''));
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const verifyOtp = (code: string) => {
    setStatus('verifying');
    // Mock API call
    setTimeout(() => {
      if (code === '1234') { // Mock success code
        setStatus('verified');
        setTimeout(() => navigate('/member-registration'), 1500); // Route to next step
      } else {
        setStatus('error');
        setOtp(['', '', '', '']);
        inputRefs[0].current?.focus();
      }
    }, 1500);
  };

  const resendOtp = () => {
    setTimeLeft(30);
    setStatus('entering');
    setOtp(['', '', '', '']);
    inputRefs[0].current?.focus();
  };

  return (
    <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto relative">
      <div className="p-4 flex items-center">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-slate-100 transition-colors">
          <ArrowLeft size={24} className="text-slate-700" />
        </button>
      </div>

      <div className="flex-1 px-8 pt-8 flex flex-col items-center">
        <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-8">
          <span className="text-3xl font-bold bg-gradient-to-br from-blue-600 to-violet-600 bg-clip-text text-transparent">A</span>
        </div>

        <h1 className="text-2xl font-bold text-slate-900 mb-2 text-center">Verify it's you</h1>
        <p className="text-slate-500 text-sm text-center mb-8">
          We've sent a 4-digit verification code to<br />
          <span className="font-semibold text-slate-700 mt-1 block">+91 98765 43210</span>
        </p>

        {status === 'verified' ? (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center justify-center py-8"
          >
            <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 size={32} />
            </div>
            <p className="font-medium text-slate-800">Verification Successful!</p>
          </motion.div>
        ) : (
          <motion.div 
            animate={status === 'error' ? { x: [-10, 10, -10, 10, 0] } : {}}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            <div className="flex justify-center space-x-4 mb-8">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={inputRefs[index]}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  disabled={status === 'verifying'}
                  className={`w-14 h-14 text-center text-2xl font-bold rounded-2xl border-2 outline-none transition-all ${
                    status === 'error' 
                      ? 'border-red-400 bg-red-50 text-red-600'
                      : digit
                        ? 'border-blue-600 bg-blue-50 text-blue-700'
                        : 'border-slate-200 bg-slate-50 text-slate-800 focus:border-blue-500 focus:bg-white'
                  }`}
                />
              ))}
            </div>
            
            {status === 'error' && (
              <p className="text-red-500 text-sm text-center mb-4 font-medium">Invalid code. Try 1234.</p>
            )}

            {status === 'verifying' ? (
              <div className="flex justify-center items-center space-x-2 text-blue-600">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
              </div>
            ) : (
              <div className="flex flex-col items-center mt-6">
                <p className="text-sm text-slate-500 mb-2">
                  Didn't receive the code?
                </p>
                <button
                  onClick={resendOtp}
                  disabled={timeLeft > 0}
                  className={`text-sm font-semibold ${timeLeft > 0 ? 'text-slate-400' : 'text-blue-600 hover:text-blue-700'}`}
                >
                  {timeLeft > 0 ? `Resend OTP in ${timeLeft}s` : 'Resend OTP'}
                </button>
              </div>
            )}
          </motion.div>
        )}
      </div>

      <div className="p-6 text-center">
        <button onClick={() => navigate(-1)} className="text-sm text-slate-500 font-medium hover:text-slate-700">
          Change mobile number
        </button>
      </div>
    </div>
  );
};

export default OTPVerification;
