import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { useAuth } from "@/hooks/useAuth";

export function HeroSection() {
  const { isAuthenticated } = useAuth();

  return (
    <section className="relative bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center place-items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              India's First Habit Building Program
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Start your journey to a better life with mindful practices
            </p>
            {isAuthenticated ? (
              <Link
                href="/home"
                className="w-48 bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center"
              >
                Go to Home
                <FaArrowRight className="ml-2" />
              </Link> 
            ) : (
              <Link
              href="/register"
              className="w-60 bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center"
            >
              Try Free Sessions
              <FaArrowRight className="ml-2" />
            </Link>
            )}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[10, 11, 12, 13].map((i) => (
                  <Image
                    key={i}
                    src={`https://xsgames.co/randomusers/assets/avatars/female/${i}.jpg`}
                    alt={`Members ${i + 1}`}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <span className="text-sm ml-4 lg:ml-0 text-gray-600">
                Joined by 95,000+ members
              </span>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/hero-yoga.jpg"
              alt="Yoga Practice"
              width={600}
              height={600}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
