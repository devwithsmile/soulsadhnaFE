"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "@/hooks/useAuth";

export function OAuthButtons({ variant = "login" }) {
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      // Google OAuth2 configuration
      const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
      const redirectUri = `${window.location.origin}/api/auth/google/callback`;
      
      // Generate random state for security
      const state = Math.random().toString(36).substring(7);
      localStorage.setItem('oauth_state', state);

      // Construct Google OAuth URL
      const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
        `client_id=${clientId}&` +
        `redirect_uri=${encodeURIComponent(redirectUri)}&` +
        `response_type=code&` +
        `scope=${encodeURIComponent('email profile')}&` +
        `state=${state}`;

      // Redirect to Google sign-in
      window.location.href = googleAuthUrl;
    } catch (error) {
      console.error('Google sign-in error:', error);
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
        onClick={handleGoogleSignIn}
        disabled={isLoading}
        className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition duration-200 ease-in-out"
      >
        <FcGoogle className="w-5 h-5" />
        {isLoading ? "Connecting..." : getButtonText()}
      </button>
    </div>
  );
}
