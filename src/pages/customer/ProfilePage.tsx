import React from 'react';
import { Camera, Package, MapPin, Heart, HeadphonesIcon, Settings, LogOut, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-3xl mx-auto space-y-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6">
        <div className="relative group cursor-pointer">
          <div className="w-24 h-24 rounded-full bg-blue-100 border-4 border-white shadow-md overflow-hidden">
            <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 bg-white p-1.5 rounded-full shadow border border-gray-100 text-blue-600 hover:text-blue-700 transition-colors">
            <Camera className="w-4 h-4" />
          </div>
        </div>
        
        <div className="text-center sm:text-left flex-1">
          <h1 className="text-2xl font-bold text-gray-900">Abhinay Bandi</h1>
          <div className="text-sm text-gray-500 mt-1 space-y-1">
            <p>abhinay@example.com</p>
            <p className="flex items-center justify-center sm:justify-start gap-2">
              +91 98765 43210
              <button className="text-blue-600 hover:underline text-xs">Edit</button>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="divide-y divide-gray-100">
          {[
            { icon: Package, label: 'My Orders', desc: 'Track, return, or buy things again', path: '/orders' },
            { icon: MapPin, label: 'My Addresses', desc: 'Manage shipping addresses', path: '/addresses' },
            { icon: Heart, label: 'My Wishlist', desc: 'View your saved items', path: '/wishlist' },
          ].map((item, i) => (
            <Link key={i} to={item.path} className="flex items-center p-4 md:p-5 hover:bg-gray-50 transition-colors group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5" />
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-medium text-gray-900">{item.label}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-blue-500 transition-colors" />
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="divide-y divide-gray-100">
          {[
            { icon: HeadphonesIcon, label: 'Support & Help', path: '/support' },
            { icon: Settings, label: 'Settings', path: '/settings' },
          ].map((item, i) => (
            <Link key={i} to={item.path} className="flex items-center p-4 hover:bg-gray-50 transition-colors group">
              <item.icon className="w-5 h-5 text-gray-400 group-hover:text-gray-600 mr-3" />
              <span className="font-medium text-gray-700 flex-1">{item.label}</span>
              <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500" />
            </Link>
          ))}
          <button className="w-full flex items-center p-4 hover:bg-red-50 transition-colors text-red-600 group">
            <LogOut className="w-5 h-5 mr-3" />
            <span className="font-medium flex-1 text-left">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
