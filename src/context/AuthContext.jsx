"use client";

import { createContext, useState, useEffect } from "react";
import { ROLES } from "@/utils/roles";
import { verifyAuth } from "@/utils/auth";
import { useRouter } from "next/navigation";
import axios from 'axios';

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
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.status !== 200) {
        const error = await response.data;
        throw new Error(error.message || "Login failed");
      }

      const { token } = await response.data;
      localStorage.setItem("token", token);

      // Use verifyAuth to set user data from token
      const userData = verifyAuth(token);
      setUser(userData);
      return userData;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    router.push("/");
  };

  const register = async (userData) => {
    console.log(userData);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        userData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      console.log("response : ", response);

      if (response.status !== 201) {
        const error = await response.data;
        throw new Error(error.message || "Registration failed");
      }

      
      const { token } = await response.data;
      localStorage.setItem("token", token);

      // Use verifyAuth to set user data from token
      const newUser = verifyAuth(token);
      setUser(newUser);
      return newUser;
    } catch (error) {
      console.log("error : ", error);
      throw error;
    }
  };

  const value = {
    user,
    loading,
    login,
    logout,
    register,
    isAdmin: user?.role === ROLES.ADMIN,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
