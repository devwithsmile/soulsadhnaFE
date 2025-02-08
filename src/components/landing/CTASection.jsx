import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export function CTASection() {
  const { isAuthenticated } = useAuth();

  return (
    <section className="pt-32 pb-28 bg-sky-950 text-white md:rounded-3xl">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm mb-3">Start Your Journey</p>
        <h2 className="text-3xl font-bold mb-8">
          Ready for a Change? Begin Your Wellness Journey!
        </h2>
        {/* <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
          Register Now for FREE
        </button> */}
        {isAuthenticated ? (
          <Link
            href="/home"
            className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Go to Home
          </Link>
        ) : (
          <Link
            href="/register"
            className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Try Free Sessions
          </Link>
        )}
        <p className="mt-8 text-sm text-teal-500">
          87 Lakhs + already attended
        </p>
      </div>
    </section>
  );
}
