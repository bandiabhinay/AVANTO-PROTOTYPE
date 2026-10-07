import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home, Wand2, Compass, Package, Heart, User, LifeBuoy, Bot,
  MessageSquare, ShoppingBag, Store, IndianRupee,
  LayoutDashboard, Box, Archive, RotateCcw, CreditCard, Building2,
  Users, UserCheck, Percent, FileText, Settings, ShieldCheck,
  ChevronLeft, ChevronRight,
} from 'lucide-react';

type SidebarRole = 'CUSTOMER' | 'MEMBER' | 'SUPPLIER' | 'SOURCING' | 'OPERATIONS' | 'FINANCE' | 'ADMIN';

interface DesktopSidebarProps {
  role: SidebarRole;
}

const navItemsByRole: Record<string, { name: string; path: string; icon: React.ComponentType<{ className?: string }> }[]> = {
  CUSTOMER: [
    { name: 'Home', path: '/home', icon: Home },
    { name: 'Tell Us What You Need', path: '/need', icon: Wand2 },
    { name: 'Explore', path: '/home', icon: Compass },
    { name: 'Orders', path: '/orders', icon: Package },
    { name: 'Wishlist', path: '/wishlist', icon: Heart },
    { name: 'Profile', path: '/profile', icon: User },
    { name: 'Support', path: '/support', icon: LifeBuoy },
  ],
  MEMBER: [
    { name: 'Home', path: '/member', icon: Home },
    { name: 'Requests', path: '/member/requests', icon: MessageSquare },
    { name: 'My Store', path: '/member/store', icon: Store },
    { name: 'Orders', path: '/member/orders', icon: Package },
    { name: 'Earnings', path: '/member/earnings', icon: IndianRupee },
    { name: 'Profile', path: '/member/profile', icon: User },
  ],
  SUPPLIER: [
    { name: 'Dashboard', path: '/supplier', icon: LayoutDashboard },
    { name: 'Products', path: '/supplier/products', icon: Box },
    { name: 'Inventory', path: '/supplier/inventory', icon: Archive },
    { name: 'Orders', path: '/supplier/orders', icon: Package },
    { name: 'Returns', path: '/supplier', icon: RotateCcw },
    { name: 'Settlements', path: '/supplier', icon: CreditCard },
    { name: 'Business Profile', path: '/supplier', icon: Building2 },
  ],
  ADMIN: [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Users', path: '/admin/users', icon: Users },
    { name: 'Suppliers', path: '/admin/users', icon: UserCheck },
    { name: 'Catalog', path: '/admin/catalog', icon: ShoppingBag },
    { name: 'Orders', path: '/admin', icon: Package },
    { name: 'Commission', path: '/admin', icon: Percent },
    { name: 'Finance', path: '/admin', icon: CreditCard },
    { name: 'AI Control Center', path: '/admin/ai-control', icon: Bot },
    { name: 'Approvals', path: '/admin/catalog', icon: ShieldCheck },
    { name: 'Reports', path: '/admin', icon: FileText },
    { name: 'Settings', path: '/admin', icon: Settings },
  ],
};

export default function DesktopSidebar({ role }: DesktopSidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const items = navItemsByRole[role] || navItemsByRole.CUSTOMER;

  return (
    <aside className={`hidden lg:flex flex-col bg-white border-r border-border h-[calc(100vh-4rem)] sticky top-16 transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'}`}>
      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-6 w-6 h-6 bg-white border border-border rounded-full flex items-center justify-center shadow-sm hover:shadow-md z-10 transition-shadow"
      >
        {collapsed ? <ChevronRight className="w-3 h-3 text-text-secondary" /> : <ChevronLeft className="w-3 h-3 text-text-secondary" />}
      </button>

      {/* Logo */}
      <div className={`px-4 py-5 border-b border-border-light ${collapsed ? 'text-center' : ''}`}>
        {collapsed ? (
          <span className="text-lg font-bold gradient-ai-text">A</span>
        ) : (
          <span className="text-lg font-bold gradient-ai-text">ATTNS AI Commerce</span>
        )}
      </div>

      {/* Nav items */}
      <div className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === '/home' || item.path === '/member' || item.path === '/supplier' || item.path === '/admin'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-primary-50 text-primary font-medium'
                    : 'text-text-secondary hover:bg-surface hover:text-text-primary'
                }`
              }
              title={collapsed ? item.name : undefined}
            >
              <Icon className="w-5 h-5 shrink-0" />
              {!collapsed && <span className="text-sm whitespace-nowrap">{item.name}</span>}
            </NavLink>
          );
        })}
      </div>

      {/* User info */}
      <div className="p-4 border-t border-border-light flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
          <User className="w-5 h-5 text-primary" />
        </div>
        {!collapsed && (
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-text-primary truncate">User</p>
            <p className="text-xs text-text-secondary truncate capitalize">{role.toLowerCase()}</p>
          </div>
        )}
      </div>
    </aside>
  );
}
