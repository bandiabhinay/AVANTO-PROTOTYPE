import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Square, X, Check, Edit2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type VoiceState = 'idle' | 'recording' | 'stopped';

export default function VoiceInput() {
  const [voiceState, setVoiceState] = useState<VoiceState>('idle');
  const [timer, setTimer] = useState(0);
  const [transcript, setTranscript] = useState('I am looking for a blue kurti under ₹1,500 for a wedding.');
  const navigate = useNavigate();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (voiceState === 'recording') {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    } else {
      setTimer(0);
    }
    return () => clearInterval(interval);
  }, [voiceState]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleStart = () => setVoiceState('recording');
  const handleStop = () => setVoiceState('stopped');
  const handleCancel = () => {
    setVoiceState('idle');
    setTimer(0);
  };
  const handleConfirm = () => {
    navigate('/ai-processing', { state: { query: transcript } });
  };

  return (
    <div className="min-h-screen bg-[#F7F8FC] flex flex-col p-6 relative max-w-md mx-auto">
      {/* Header Close */}
      <div className="flex justify-end pt-4">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 bg-white rounded-full text-[#667085] hover:text-[#172033] shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center -mt-10">
        <AnimatePresence mode="wait">
          {voiceState === 'idle' && (
            <motion.div
              key="idle"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center gap-6"
            >
              <h2 className="text-xl font-semibold text-[#172033]">Tap to start speaking</h2>
              <button
                onClick={handleStart}
                className="w-24 h-24 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] flex items-center justify-center text-white shadow-xl shadow-blue-500/30 hover:scale-105 transition-transform"
              >
                <Mic className="w-10 h-10" />
              </button>
            </motion.div>
          )}

          {voiceState === 'recording' && (
            <motion.div
              key="recording"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center w-full"
            >
              <div className="relative flex items-center justify-center w-32 h-32 mb-10">
                {/* Pulsing rings */}
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] opacity-20"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.8, 0.2, 0.8] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  className="absolute inset-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] opacity-40"
                />
                <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] flex items-center justify-center text-white shadow-lg">
                  <Mic className="w-8 h-8" />
                </div>
              </div>

              {/* Sound waves */}
              <div className="flex items-end justify-center gap-1.5 h-16 mb-6">
                {[...Array(7)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 bg-[#2563EB] rounded-full"
                    animate={{ height: ["20%", "100%", "20%"] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 0.8, 
                      delay: i * 0.1,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>

              <h2 className="text-xl font-bold text-[#172033] mb-2">Listening...</h2>
              <p className="text-[#667085] font-mono text-lg mb-12">{formatTime(timer)}</p>

              <div className="flex items-center gap-6 w-full justify-center">
                <button
                  onClick={handleCancel}
                  className="px-6 py-3 rounded-xl font-medium text-[#667085] bg-white shadow-sm border border-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleStop}
                  className="px-6 py-3 rounded-xl font-medium text-white bg-[#F97316] shadow-md shadow-orange-500/20 flex items-center gap-2"
                >
                  <Square className="w-4 h-4 fill-current" />
                  Stop
                </button>
              </div>
            </motion.div>
          )}

          {voiceState === 'stopped' && (
            <motion.div
              key="stopped"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full flex flex-col items-center"
            >
              <h2 className="text-xl font-bold text-[#172033] mb-6">Here's what we heard</h2>
              
              <div className="w-full bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-8 relative">
                <textarea
                  value={transcript}
                  onChange={(e) => setTranscript(e.target.value)}
                  className="w-full min-h-[120px] resize-none text-[#172033] bg-transparent outline-none text-lg leading-relaxed"
                />
                <div className="absolute bottom-3 right-3 text-[#667085]">
                  <Edit2 className="w-4 h-4" />
                </div>
              </div>

              <div className="flex flex-col gap-3 w-full">
                <button
                  onClick={handleConfirm}
                  className="w-full py-4 rounded-xl font-semibold text-white bg-[#2563EB] hover:bg-blue-700 shadow-md flex items-center justify-center gap-2 transition-colors"
                >
                  <Check className="w-5 h-5" />
                  Confirm & Search
                </button>
                <button
                  onClick={handleCancel}
                  className="w-full py-4 rounded-xl font-medium text-[#667085] bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  Try Again
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
