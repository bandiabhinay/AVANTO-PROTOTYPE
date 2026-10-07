import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MoreVertical, Shield, UserX, Edit2 } from 'lucide-react';

const roles = ['All', 'Customer', 'Member', 'Supplier', 'Sourcing', 'Operations', 'Finance', 'Admin'];

const mockUsers = [
  { id: 'USR-001', name: 'Alice Cooper', email: 'alice@example.com', role: 'Admin', status: 'Active', lastActive: '2 mins ago', avatar: 'https://i.pravatar.cc/150?u=1' },
  { id: 'USR-002', name: 'Bob Smith', email: 'bob@example.com', role: 'Supplier', status: 'Active', lastActive: '1 hour ago', avatar: 'https://i.pravatar.cc/150?u=2' },
  { id: 'USR-003', name: 'Charlie Brown', email: 'charlie@example.com', role: 'Member', status: 'Suspended', lastActive: '2 days ago', avatar: 'https://i.pravatar.cc/150?u=3' },
  { id: 'USR-004', name: 'Diana Prince', email: 'diana@example.com', role: 'Customer', status: 'Active', lastActive: '5 mins ago', avatar: 'https://i.pravatar.cc/150?u=4' },
  { id: 'USR-005', name: 'Evan Wright', email: 'evan@example.com', role: 'Sourcing', status: 'Active', lastActive: '1 day ago', avatar: 'https://i.pravatar.cc/150?u=5' },
];

const UserManagement: React.FC = () => {
  const [activeRole, setActiveRole] = useState('All');
  const [search, setSearch] = useState('');

  const filteredUsers = mockUsers.filter(user => {
    const matchesRole = activeRole === 'All' || user.role === activeRole;
    const matchesSearch = user.name.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase());
    return matchesRole && matchesSearch;
  });

  const getRoleColor = (role: string) => {
    switch(role) {
      case 'Admin': return 'bg-red-100 text-red-700';
      case 'Supplier': return 'bg-orange-100 text-orange-700';
      case 'Member': return 'bg-violet-100 text-violet-700';
      case 'Customer': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">User Management</h1>
          <p className="text-sm text-gray-500">Manage all platform users, roles, and permissions.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 text-center min-w-[100px]">
            <p className="text-xs text-gray-500 font-medium">Total Users</p>
            <p className="text-xl font-bold text-gray-900">1,432</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 space-y-4">
          <div className="relative max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search by name or email..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
            {roles.map(role => (
              <button
                key={role}
                onClick={() => setActiveRole(role)}
                className={`px-4 py-1.5 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
                  activeRole === role 
                    ? 'bg-blue-900 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-500 font-medium">
              <tr>
                <th className="px-4 py-3">User</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Last Active</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredUsers.map((user, i) => (
                <motion.tr 
                  key={user.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-3 flex items-center gap-3">
                    <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                    <div>
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${getRoleColor(user.role)}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center gap-1.5 ${user.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-green-600' : 'bg-red-600'}`}></span>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{user.lastActive}</td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 text-gray-400 hover:text-blue-600 rounded-md hover:bg-blue-50 transition-colors" title="Edit">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-red-600 rounded-md hover:bg-red-50 transition-colors" title={user.status === 'Active' ? 'Suspend' : 'Activate'}>
                        {user.status === 'Active' ? <UserX className="w-4 h-4" /> : <Shield className="w-4 h-4" />}
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-100 transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-gray-500">
                    No users found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
