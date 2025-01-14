"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export function OAuthButtons({ variant = "login" }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleOAuthSignIn = async (provider) => {
    setIsLoading(true);
    try {
      window.location.href = `/api/auth/${provider}`;
    } catch (error) {
      console.error(`Error signing in with ${provider}:`, error);
      setIsLoading(false);
    }
  };

  // Determine button text based on variant
  const getButtonText = () => {
    switch (variant) {
      case "signup":
        return "Sign Up with Google";
      case "login":
      default:
        return "Continue with Google";
    }
  };

  return (
    <div className="space-y-3">
      <button
        onClick={() => handleOAuthSignIn("google")}
        disabled={isLoading}
        className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition duration-200 ease-in-out"
      >
        <FcGoogle className="w-5 h-5" />
        {isLoading ? "Connecting..." : getButtonText()}
      </button>
    </div>
  );
}
