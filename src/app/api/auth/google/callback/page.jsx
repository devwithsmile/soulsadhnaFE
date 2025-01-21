"use client";

import { Suspense } from "react";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import axios from "axios";

function GoogleCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { googleLogin } = useAuth();

  useEffect(() => {
    const handleGoogleCallback = async () => {
      try {
        // console.log("Count ");
        const code = searchParams.get("code");
        const state = searchParams.get("state");
        const savedState = localStorage.getItem("oauth_state");

        // Verify state to prevent CSRF attacks
        if (state !== savedState) {
          console.log(state, savedState);
          throw new Error(
            "Security verification failed: Invalid state parameter"
          );
        }

        // Send the authorization code to your backend
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/google`,
          { code },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // Axios response.data already contains the parsed JSON
        const { token } = response.data;
        // console.log("token from google callback", token);

        const { success, user, error } = await googleLogin({ token });

        if (success) {
          // console.log("user from google callback", user);
          router.push("/home");
        } else {
          throw new Error(error);
        }
      } catch (error) {
        console.error("Google callback error:", error.message || error);
        const errorMessage = error.response?.data?.message || error.message;
        router.push(`/login?error=${encodeURIComponent(errorMessage)}`);
      }
    };

    if (searchParams.get("code")) {
      handleGoogleCallback();
    } else {
      router.push("/login?error=No code found");
    }
  }, []);

  return <LoadingSpinner size="large" fullScreen={true} />;
}

export default function GoogleCallback() {
  return (
    <Suspense fallback={<LoadingSpinner size="large" fullScreen={true} />}>
      <GoogleCallbackContent />
    </Suspense>
  );
}
