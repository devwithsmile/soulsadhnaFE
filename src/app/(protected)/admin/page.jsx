"use client";

import { AdminUserManagement } from "@/components/admin/AdminUserManagement";
import { AdminEventManagement } from "@/components/admin/AdminEventManagement";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 md:my-8">
        <div className="text-center md:text-left mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Admin Dashboard
          </h1>
          <p className="mt-2 text-sm md:text-base text-gray-600">
            Manage your users and monitor platform activity
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start space-y-8 md:space-y-0 space-x-8 w-full">
          <AdminUserManagement />
          <AdminEventManagement />
        </div>
      </div>
    </div>
  );
}
