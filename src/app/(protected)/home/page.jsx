"use client";

import { useAuth } from "@/hooks/useAuth";
import { WelcomeMessage } from "@/components/home/WelcomeMessage";
import { PaymentSuccessMessage } from "@/components/home/PaymentSuccessMessage";
import { useState } from "react";

export default function HomePage() {
  const { user } = useAuth();
  const username = user?.email?.split("@")[0];
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(true); // State to control visibility

  return (
    <>
      <section className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0 space-y-8">
          {showPaymentSuccess && (
            <PaymentSuccessMessage
              onClose={() => setShowPaymentSuccess(false)}
              customerName={username}
              showAutoClose={false}
            />
          )}
          <WelcomeMessage />
        </div>
      </section>
    </>
  );
}
