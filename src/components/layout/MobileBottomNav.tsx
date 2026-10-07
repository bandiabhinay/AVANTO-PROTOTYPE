import { NavLink } from 'react-router-dom';
import { Home, Wand2, Package, Heart, User, MessageSquare, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

export type Role = 'CUSTOMER' | 'MEMBER' | 'SUPPLIER' | 'ADMIN';

interface MobileBottomNavProps {
  role: Role;
}

const customerTabs = [
  { name: 'Home', path: '/home', icon: Home },
  { name: 'Need', path: '/need', icon: Wand2 },
  { name: 'Orders', path: '/orders', icon: Package },
  { name: 'Wishlist', path: '/wishlist', icon: Heart },
  { name: 'Profile', path: '/profile', icon: User },
];

const memberTabs = [
  { name: 'Home', path: '/member', icon: Home },
  { name: 'Requests', path: '/member/requests', icon: MessageSquare },
  { name: 'Catalog', path: '/member/store', icon: ShoppingBag },
  { name: 'Orders', path: '/member/orders', icon: Package },
  { name: 'Profile', path: '/member/profile', icon: User },
];

export default function MobileBottomNav({ role }: MobileBottomNavProps) {
  // Suppliers and Admins typically use desktop, but if mobile, we can provide a subset
  const tabs = role === 'MEMBER' ? memberTabs : customerTabs;

  return (
    <nav className="fixed bottom-0 w-full z-50 bg-white/80 backdrop-blur-md border-t border-gray-200 lg:hidden pb-safe">
      <div className="flex justify-around items-center h-16">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <NavLink
              key={tab.name}
              to={tab.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
                  isActive ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'
                }`
              }
            >
              {({ isActive }) => (
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="flex flex-col items-center"
                >
                  <Icon className={`w-6 h-6 ${isActive ? 'fill-blue-50' : ''}`} strokeWidth={isActive ? 2.5 : 2} />
                  <span className="text-[10px] font-medium">{tab.name}</span>
                </motion.div>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
