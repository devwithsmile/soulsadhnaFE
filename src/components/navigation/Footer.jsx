"use client";

import Link from "next/link";
import { FaYoutube, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    Company: [
      { label: "About Us", href: "/#" },
      { label: "Contact", href: "/#" },
      { label: "Blog", href: "/#" },
    ],
    Classes: [
      { label: "Beginner Yoga", href: "/#" },
      { label: "Advanced Flows", href: "/#" },
      { label: "Meditation", href: "/#" },
      { label: "Workshop", href: "/#" },
    ],
    Support: [
      { label: "Help Center", href: "/#" },
      { label: "Privacy Policy", href: "/#" },
      { label: "Terms of Service", href: "/#" },
      { label: "FAQ", href: "/#" },
    ],
  };

  const socialLinks = [
    { icon: <FaYoutube />, href: "https://youtube.com", label: "YouTube" },
    {
      icon: <FaInstagram />,
      href: "https://instagram.com",
      label: "Instagram",
    },
    { icon: <FaFacebook />, href: "https://facebook.com", label: "Facebook" },
    { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <footer className="bg-gray-800 text-gray-100 border-t">
      <div className="max-w-7xl xl:max-w-full mx-auto xl:mx-14 px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold text-indigo-600">
              Soulsadhna
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              Transform your practice with expert-led classes for all levels.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-600 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                {title}
              </h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-indigo-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300">
              © {currentYear} Soulsadhna. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <Link
                href="/privacy"
                className="text-sm text-gray-300 hover:text-indigo-600"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-300 hover:text-indigo-600"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
