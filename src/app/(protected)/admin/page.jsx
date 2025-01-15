"use client";

import { AdminUserManagement } from "@/components/admin/AdminUserManagement";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold mb-6">Admin Dashboard</h1>
          <AdminUserManagement />
      </div>
    </div>
  );
}
