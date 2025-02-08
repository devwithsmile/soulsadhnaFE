"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const AuthLayout = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  if (isAuthenticated) {
    router.push("/home");
  }

  return <>{children}</>;
};

export default AuthLayout;
