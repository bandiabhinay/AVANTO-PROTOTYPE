import { useState } from 'react';
import { Bell, Package, CheckCircle, AlertTriangle, Tag, CheckCheck } from 'lucide-react';

const mockNotifications = [
  { id: 'NOT-1', type: 'order_status', title: 'Order Dispatched', message: 'Your order ORD-8923 has been dispatched and is on its way.', time: '2 hours ago', read: false, date: 'Today' },
  { id: 'NOT-2', type: 'promo', title: 'Exclusive Offer for You!', message: 'Get 20% off on your next purchase of Electronics. Use code TECH20.', time: '5 hours ago', read: false, date: 'Today' },
  { id: 'NOT-3', type: 'system', title: 'Profile Updated', message: 'Your shipping address was successfully updated.', time: 'Yesterday', read: true, date: 'Yesterday' },
  { id: 'NOT-4', type: 'alert', title: 'Price Drop Alert', message: 'An item in your wishlist just dropped in price.', time: '2 days ago', read: true, date: 'Earlier' },
];

const NotificationCenter: React.FC = () => {
  const [notifications, setNotifications] = useState(mockNotifications);

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const markAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const getIcon = (type: string) => {
    switch(type) {
      case 'order_status': return <Package className="w-5 h-5 text-blue-600" />;
      case 'promo': return <Tag className="w-5 h-5 text-violet-600" />;
      case 'alert': return <AlertTriangle className="w-5 h-5 text-orange-500" />;
      case 'system': return <CheckCircle className="w-5 h-5 text-green-500" />;
      default: return <Bell className="w-5 h-5 text-gray-500" />;
    }
  };

  const getIconBg = (type: string) => {
    switch(type) {
      case 'order_status': return 'bg-blue-50';
      case 'promo': return 'bg-violet-50';
      case 'alert': return 'bg-orange-50';
      case 'system': return 'bg-green-50';
      default: return 'bg-gray-50';
    }
  };

  const groupedNotifications = notifications.reduce((acc, curr) => {
    if (!acc[curr.date]) acc[curr.date] = [];
    acc[curr.date].push(curr);
    return acc;
  }, {} as Record<string, typeof mockNotifications>);

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-3xl mx-auto space-y-6 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
          {unreadCount > 0 && (
            <span className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs font-bold">
              {unreadCount} New
            </span>
          )}
        </div>
        {unreadCount > 0 && (
          <button 
            onClick={markAllAsRead}
            className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            <CheckCheck className="w-4 h-4" /> Mark all read
          </button>
        )}
      </div>

      {notifications.length === 0 ? (
        <div className="text-center py-12">
          <Bell className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">You have no notifications.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {Object.entries(groupedNotifications).map(([date, items]) => (
            <div key={date} className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider pl-1">{date}</h3>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-100">
                {items.map((notification) => (
                  <div 
                    key={notification.id}
                    onClick={() => markAsRead(notification.id)}
                    className={`p-4 md:p-5 flex gap-4 cursor-pointer transition-colors hover:bg-gray-50 ${!notification.read ? 'bg-blue-50/30' : ''}`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${getIconBg(notification.type)}`}>
                      {getIcon(notification.type)}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className={`text-sm md:text-base font-semibold ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`}>
                          {notification.title}
                        </h4>
                        {!notification.read && <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0 mt-1.5 shadow-sm shadow-blue-200"></span>}
                      </div>
                      <p className="text-sm text-gray-600">{notification.message}</p>
                      <p className="text-xs text-gray-400 pt-1">{notification.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationCenter;
