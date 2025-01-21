"use client";

import { createContext, useState, useEffect } from "react";
import { ROLES } from "@/utils/roles";
import { verifyAuth } from "@/utils/auth";
import { useRouter } from "next/navigation";
import axios from "axios";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Check auth state on mount and token changes
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }

    try {
      // Use the centralized verifyAuth function
      const decodedToken = verifyAuth(token);
      setUser(decodedToken);
    } catch (error) {
      console.error("Token verification failed:", error);
      localStorage.removeItem("token");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        credentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { token } = response.data;

      if (!token) {
        throw new Error("Login failed");
      }

      localStorage.setItem("token", token);

      // Use verifyAuth to set user data from token
      const userData = verifyAuth(token);
      setUser(userData);

      return {
        success: true,
        user: userData,
      };
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "An error occurred during login";

      return {
        success: false,
        error: errorMessage,
      };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    router.push("/");
  };

  const register = async (userData) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { token } = response.data;

      if (!token) {
        throw new Error("Registration failed");
      }

      localStorage.setItem("token", token);

      // Use verifyAuth to set user data from token
      const newUser = verifyAuth(token);
      setUser(newUser);

      return {
        success: true,
        user: newUser,
      };
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "An error occurred during registration";

      // Handle specific error cases
      if (error.response?.status === 409) {
        return {
          success: false,
          error: "Email already exists",
        };
      }

      return {
        success: false,
        error: errorMessage,
      };
    }
  };

  // New method specifically for Google OAuth
  const googleLogin = async ({ token }) => {
    try {
      if (!token) {
        throw new Error("Google Login failed");
      }

      localStorage.setItem("token", token);

      // Use verifyAuth to set user data from token
      const userData = verifyAuth(token);
      setUser(userData);

      return {
        success: true,
        user: userData,
      };
    } catch (error) {
      const errorMessage =
        error.message || "An error occurred during Google login";
      return {
        success: false,
        error: errorMessage,
      };
    }
  };

  const value = {
    user,
    loading,
    login,
    logout,
    register,
    googleLogin,
    isAdmin: user?.role === ROLES.ADMIN,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
