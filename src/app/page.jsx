"use client";

import { useAuth } from "@/hooks/useAuth";
import { FaUserFriends, FaPlay } from "react-icons/fa";
import { GrYoga } from "react-icons/gr";
import { GiMeditation } from "react-icons/gi";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LandingPage() {
  const { user } = useAuth();

  const features = [
    {
      icon: <GrYoga className="h-6 w-6 text-indigo-600" />,
      title: "Expert-Led Classes",
      description:
        "Learn from certified yoga instructors with years of experience.",
    },
    {
      icon: <GiMeditation className="h-6 w-6 text-indigo-600" />,
      title: "All Levels Welcome",
      description:
        "From beginners to advanced practitioners, find your perfect class.",
    },
    {
      icon: <FaUserFriends className="h-6 w-6 text-indigo-600" />,
      title: "Community Support",
      description:
        "Join a supportive community of like-minded yoga enthusiasts.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      avatar: "https://xsgames.co/randomusers/assets/avatars/female/6.jpg",
      feedback:
        "This platform has transformed my yoga practice. The instructors are truly exceptional!",
    },
    {
      name: "Mark Thompson",
      avatar: "https://xsgames.co/randomusers/assets/avatars/male/0.jpg",
      feedback:
        "I love the variety of classes available. There's always something new to try!",
    },
    {
      name: "Emily Davis",
      avatar: "https://xsgames.co/randomusers/assets/avatars/female/0.jpg",
      feedback:
        "The community here is amazing. I've made so many friends who share my passion for yoga.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-indigo-700 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
            >
              Transform Your Practice
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 drop-shadow-lg"
            >
              Discover the perfect balance of mind, body, and spirit
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {!user ? (
                <Link
                  href="/register"
                  className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition transform hover:scale-105 shadow-lg"
                >
                  Start Your Journey
                </Link>
              ) : (
                <Link
                  href="/dashboard"
                  className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition transform hover:scale-105 shadow-lg"
                >
                  Go to Dashboard
                </Link>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Why Choose Our Platform
            </h2>
            <p className="mt-4 text-gray-600">
              We provide a holistic approach to yoga, ensuring you find the
              perfect class for your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-indigo-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              What Our Members Say
            </h2>
            <p className="mt-4 text-gray-600">
              Hear from some of our dedicated practitioners who have transformed
              their lives through yoga.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ scale: 1.05 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-extrabold mb-4"
          >
            Ready to Begin Your Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8"
          >
            Join thousands of practitioners worldwide and elevate your practice.
          </motion.p>
          {!user && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="/register"
                className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105 shadow-md"
              >
                Get Started Today
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
