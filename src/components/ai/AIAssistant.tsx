import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, Mic, Search, Package, RefreshCcw } from 'lucide-react';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Hi there! I\'m your ATTNS AI Assistant. How can I help you today?' }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { role: 'ai', content: `I can certainly help you with "${userMsg}". Here is some information based on your request...` }]);
    }, 1500);
  };

  const handleQuickAction = (action: string) => {
    setInput(action);
    setTimeout(() => handleSend(), 100);
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-24 right-4 z-50 w-14 h-14 rounded-full bg-gradient-to-tr from-primary to-secondary shadow-lg shadow-blue-500/30 flex items-center justify-center text-white"
          >
            <Sparkles size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 sm:inset-auto sm:bottom-4 sm:right-4 sm:w-[400px] sm:h-[600px] sm:rounded-2xl bg-gray-50 z-50 flex flex-col shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-white px-4 py-4 border-b border-gray-100 flex justify-between items-center shadow-sm z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h2 className="font-bold text-gray-900 flex items-center gap-2">
                    ATTNS AI Assistant
                    <span className="bg-blue-100 text-primary text-[10px] font-bold px-1.5 py-0.5 rounded">AI</span>
                  </h2>
                  <p className="text-xs text-gray-500">Always here to help</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} max-w-[85%] ${msg.role === 'user' ? 'ml-auto' : ''}`}>
                  {msg.role === 'ai' && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex-shrink-0 flex items-center justify-center text-white mr-2 mt-auto mb-1">
                      <Sparkles size={14} />
                    </div>
                  )}
                  <div className={`p-3.5 rounded-2xl text-sm shadow-sm
                    ${msg.role === 'user' 
                      ? 'bg-primary text-white rounded-br-sm' 
                      : 'bg-white text-gray-800 border border-gray-100 rounded-bl-sm'}`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start max-w-[85%]">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex-shrink-0 flex items-center justify-center text-white mr-2 mt-auto mb-1">
                    <Sparkles size={14} />
                  </div>
                  <div className="bg-white border border-gray-100 p-3.5 rounded-2xl rounded-bl-sm shadow-sm flex gap-1 items-center">
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length === 1 && (
              <div className="px-4 pb-2 flex gap-2 overflow-x-auto no-scrollbar">
                <button onClick={() => handleQuickAction('Search products')} className="flex items-center gap-1.5 whitespace-nowrap bg-white border border-gray-200 px-3 py-1.5 rounded-full text-xs font-medium text-gray-700 shadow-sm">
                  <Search size={14} /> Search products
                </button>
                <button onClick={() => handleQuickAction('Track my order')} className="flex items-center gap-1.5 whitespace-nowrap bg-white border border-gray-200 px-3 py-1.5 rounded-full text-xs font-medium text-gray-700 shadow-sm">
                  <Package size={14} /> Track my order
                </button>
                <button onClick={() => handleQuickAction('Return policy')} className="flex items-center gap-1.5 whitespace-nowrap bg-white border border-gray-200 px-3 py-1.5 rounded-full text-xs font-medium text-gray-700 shadow-sm">
                  <RefreshCcw size={14} /> Return policy
                </button>
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100 shadow-[0_-4px_10px_rgba(0,0,0,0.02)]">
              <div className="relative flex items-center">
                <button className="absolute left-3 text-gray-400 hover:text-primary transition-colors">
                  <Mic size={20} />
                </button>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-full py-3.5 pl-11 pr-14 text-sm text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-inner"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className={`absolute right-2 w-9 h-9 rounded-full flex items-center justify-center transition-colors
                    ${input.trim() ? 'bg-primary text-white' : 'bg-gray-200 text-gray-400'}`}
                >
                  <Send size={16} className={input.trim() ? 'ml-0.5' : ''} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
