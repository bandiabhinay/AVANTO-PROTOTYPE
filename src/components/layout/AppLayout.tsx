import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import DesktopSidebar from './DesktopSidebar';
import MobileBottomNav from './MobileBottomNav';
import AIAssistant from '../ai/AIAssistant';

interface AppLayoutProps {
  role: 'customer' | 'member' | 'supplier' | 'sourcing' | 'operations' | 'finance' | 'admin';
  onRoleChange?: (role: AppLayoutProps['role']) => void;
}

// Map our role names to the nav component's expected format
const roleMap: Record<AppLayoutProps['role'], 'CUSTOMER' | 'MEMBER' | 'SUPPLIER' | 'SOURCING' | 'OPERATIONS' | 'FINANCE' | 'ADMIN'> = {
  customer: 'CUSTOMER',
  member: 'MEMBER',
  supplier: 'SUPPLIER',
  sourcing: 'SOURCING',
  operations: 'OPERATIONS',
  finance: 'FINANCE',
  admin: 'ADMIN',
};

export default function AppLayout({ role, onRoleChange: _onRoleChange }: AppLayoutProps) {
  const mappedRole = roleMap[role] || 'CUSTOMER';
  const showBottomNav = role === 'customer' || role === 'member';

  return (
    <div className="min-h-screen bg-surface font-sans text-text-primary">
      <TopBar />

      <div className="flex">
        <DesktopSidebar role={mappedRole} />

        <main className={`flex-1 min-w-0 transition-all duration-300 ${showBottomNav ? 'pb-24' : 'pb-8'} p-4 lg:p-8`}>
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>

      {showBottomNav && (
        <MobileBottomNav role={mappedRole as 'CUSTOMER' | 'MEMBER'} />
      )}

      <AIAssistant />
    </div>
  );
}
