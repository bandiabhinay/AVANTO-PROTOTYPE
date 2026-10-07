import { Link } from 'react-router-dom';
import { Bell, Search, User, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TopBar() {
  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-border h-16">
      <div className="flex items-center justify-between h-full px-4 lg:px-8">
        <Link to="/home" className="flex items-center gap-2">
          <span className="text-xl font-bold gradient-ai-text">
            ATTNS AI
          </span>
        </Link>

        {/* Desktop Search */}
        <div className="hidden lg:flex items-center flex-1 max-w-2xl px-8">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-text-secondary" />
            <input
              type="text"
              placeholder="Search products, orders, or members..."
              className="w-full pl-10 pr-4 py-2.5 bg-surface border border-border rounded-full text-sm focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link to="/cart">
            <motion.div whileTap={{ scale: 0.95 }} className="relative p-2.5 text-text-secondary hover:bg-surface rounded-full transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-accent text-white text-[10px] font-bold rounded-full flex items-center justify-center">1</span>
            </motion.div>
          </Link>

          <Link to="/notifications">
            <motion.div whileTap={{ scale: 0.95 }} className="relative p-2.5 text-text-secondary hover:bg-surface rounded-full transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
            </motion.div>
          </Link>

          <Link to="/profile">
            <motion.div whileTap={{ scale: 0.95 }} className="w-9 h-9 rounded-full bg-primary-100 text-primary flex items-center justify-center overflow-hidden border border-primary-200">
              <User className="w-4.5 h-4.5" />
            </motion.div>
          </Link>
        </div>
      </div>
    </header>
  );
}
