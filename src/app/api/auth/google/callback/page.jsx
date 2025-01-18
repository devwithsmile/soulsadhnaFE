"use client";

import { Suspense } from "react";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

function GoogleCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login } = useAuth();

  useEffect(() => {
    const handleGoogleCallback = async () => {
      try {
        const code = searchParams.get("code");
        const state = searchParams.get("state");
        const savedState = localStorage.getItem("oauth_state");

        // Verify state to prevent CSRF attacks
        if (state !== savedState) {
          console.log(state, savedState);
          throw new Error("Invalid state parameter");
        }

        // Clear the stored state
        // localStorage.removeItem("oauth_state");

        // Send the authorization code to your backend
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/google`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ code }),
          }
        );

        if (!response.ok) {
          console.log(response);
          throw new Error("Failed to authenticate with Google");
        }

        // Get the JWT token from your backend
        const { token } = await response.json();

        // Use the existing login mechanism to set the token and user state
        await login({ token });

        // Redirect to Home page
        router.push("/home");
      } catch (error) {
        console.error("Google callback error:", error);
        // console.log(error);
        router.push("/login?error=google-auth-failed");
      }
    };

    if (searchParams.get("code")) {
      handleGoogleCallback();
    }
  }, [searchParams, router, login]);

  return <LoadingSpinner size="large" fullScreen={true} />;
}

export default function GoogleCallback() {
  return (
    <Suspense fallback={<LoadingSpinner size="large" fullScreen={true} />}>
      <GoogleCallbackContent />
    </Suspense>
  );
}
