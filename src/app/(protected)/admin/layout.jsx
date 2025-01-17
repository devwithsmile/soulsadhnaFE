import { RoleBasedRoute } from "@/components/auth/RoleBasedRoute";
import { ROLES } from "@/utils/roles";

const AdminLayout = ({ children }) => {
  return (
    <>
      <RoleBasedRoute requiredRole={ROLES.ADMIN}>{children}</RoleBasedRoute>
    </>
  );
};

export default AdminLayout;
