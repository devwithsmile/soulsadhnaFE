"use client";

import { useAuth } from "@/hooks/useAuth";
import { hasPermission } from "@/utils/roles";

export function RoleBasedRoute({ children, requiredPermission }) {
  const { user } = useAuth();

  if (!user || !hasPermission(user.role, requiredPermission)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Access Denied</h1>
          <p className="mt-2 text-gray-600">
            You don't have permission to view this page.
          </p>
        </div>
      </div>
    );
  }

  return children;
}
