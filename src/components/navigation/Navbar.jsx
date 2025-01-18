"use client";

import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { usePathname } from "next/navigation";

export function Navbar() {
  const { user, logout, isAdmin } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const username = user?.email?.split("@")[0];

  // Close mobile menu on navigation
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl xl:max-w-full mx-auto xl:mx-20 2xl:mx-14 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              {/* <Image
                src="/images/logo.png"
                alt="Soulsadhna Logo"
                width={40}
                height={40}
                className="w-auto h-8 text-red-500"
              /> */}
              <MdOutlineSportsGymnastics className="w-8 h-8 text-indigo-500 hover:text-indigo-700 transition-colors" />
              <span className="text-xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
                Soulsadhna
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {user ? (
              <>
                <Link
                  href="/home"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                    ${
                      pathname === "/home"
                        ? "text-indigo-600 bg-indigo-50"
                        : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                    }`}
                >
                  Home
                </Link>
                {isAdmin && (
                  <Link
                    href="/admin"
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                      ${
                        pathname === "/admin"
                          ? "text-indigo-600 bg-indigo-50"
                          : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                      }`}
                  >
                    Admin Panel
                  </Link>
                )}
                <div className="flex items-center space-x-2 pl-4 border-l border-gray-200">
                  <span className="text-gray-700 text-sm capitalize">
                    {username}
                  </span>
                  <button
                    onClick={logout}
                    className="inline-flex items-center px-4 py-2 border border-indigo-600 rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/login"
                  className="inline-flex items-center px-4 py-2 border border-indigo-600 rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <HiX className="block h-6 w-6" />
              ) : (
                <HiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 text">
            {user ? (
              <>
                <Link
                  href="/home"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    pathname === "/home"
                      ? "text-indigo-600 bg-indigo-50"
                      : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                  }`}
                >
                  Home
                </Link>
                {isAdmin && (
                  <Link
                    href="/admin"
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      pathname === "/admin"
                        ? "text-indigo-600 bg-indigo-50"
                        : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                    }`}
                  >
                    Admin Panel
                  </Link>
                )}
                <div className="px-3 py-2">
                  <div className="text-sm text-gray-700 mb-2 capitalize">
                    {username}
                  </div>
                  <button
                    onClick={logout}
                    className="w-full text-left py-2 rounded-md text-base font-medium text-indigo-600 hover:bg-gray-50 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <div className="space-y-1">
                <Link
                  href="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
