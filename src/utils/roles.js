export const ROLES = {
  USER: "user",
  ADMIN: "admin",
};

export const ROLE_PERMISSIONS = {
  [ROLES.USER]: ["read:profile", "edit:profile"],
  [ROLES.ADMIN]: [
    "read:profile",
    "edit:profile",
    "read:users",
    "edit:users",
    "delete:users",
  ],
};

export const hasPermission = (userRole, permission) => {
  return ROLE_PERMISSIONS[userRole]?.includes(permission) || false;
};
