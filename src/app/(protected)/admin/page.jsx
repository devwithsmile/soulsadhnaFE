"use client";

import { RoleBasedRoute } from "@/components/auth/RoleBasedRoute";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

export default function AdminDashboard() {
  return (
    <RoleBasedRoute requiredPermission="read:users">
      <AdminDashboardContent />
    </RoleBasedRoute>
  );
}

function AdminDashboardContent() {
  const { user } = useAuth();
  const [users, setUsers] = useState([
    { id: 1, name: "User 1", email: "user1@example.com", role: "user" },
    { id: 2, name: "User 2", email: "user2@example.com", role: "user" },
    // Add more mock users as needed
  ]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-2xl font-semibold mb-6">Admin Dashboard</h1>

          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {users.map((user) => (
                <li key={user.id}>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <p className="text-sm font-medium text-indigo-600 truncate">
                          {user.name}
                        </p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {user.role}
                        </span>
                        <button
                          className="text-red-600 hover:text-red-900 text-sm font-medium"
                          onClick={() => {
                            // Implement delete user functionality
                            if (
                              confirm(
                                "Are you sure you want to delete this user?"
                              )
                            ) {
                              setUsers(users.filter((u) => u.id !== user.id));
                            }
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
