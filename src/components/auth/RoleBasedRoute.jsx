"use client";

import { useAuth } from "@/hooks/useAuth";
import { hasRole } from "@/utils/roles";

export function RoleBasedRoute({ children, requiredRole }) {
  const { user } = useAuth();

  if (!user || !hasRole(user.role, requiredRole)) {
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
