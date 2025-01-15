export const ROLES = {
  USER: "user",
  ADMIN: "admin",
};

// Simple role check function
export const hasRole = (userRole, requiredRole) => {
  if (requiredRole === ROLES.ADMIN) {
    return userRole === ROLES.ADMIN;
  }
  // If required role is USER, both USER and ADMIN can access
  return userRole === ROLES.USER || userRole === ROLES.ADMIN;
};
