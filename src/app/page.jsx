"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";
import { CiTimer, CiMobile1 } from "react-icons/ci";
import { GrGroup, GrTask, GrYoga } from "react-icons/gr";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { TbPhysotherapist } from "react-icons/tb";
import { PiFlowerLotus } from "react-icons/pi";
import { LiaBurnSolid } from "react-icons/lia";
import { FiCheck } from "react-icons/fi";

// Constant data for FAQ
const FAQ_DATA = [
  {
    question: "What are the available slots for Yoga Everyday?",
    answer:
      "We offer various slots throughout the day to accommodate different schedules. You can select from morning, afternoon, and evening sessions based on your availability.",
  },
  {
    question: "Does the Yoga membership include Dance and Strength sessions?",
    answer:
      "Yes, the membership includes access to all our classes, including Dance and Strength. This gives you a well-rounded fitness experience with no extra charge.",
  },
  {
    question: "Are the online yoga classes beginner-friendly?",
    answer:
      "Absolutely! We have classes tailored for beginners, ensuring you start at a comfortable pace and progress steadily.",
  },
  {
    question: "Does the Dance and Strength session include cardio exercises?",
    answer:
      "Yes, our Dance and Strength sessions incorporate cardio elements, helping improve both strength and cardiovascular fitness.",
  },
  {
    question: "How will I cultivate new healthy habits?",
    answer:
      "Our program includes personalized guidance, support from instructors, and easy-to-follow routines that help you build and maintain healthy habits.",
  },
  {
    question: "How do I join the classes? Is the process straightforward?",
    answer:
      "Joining is easy! Simply sign up on our website, pick your classes from our schedule, and start right away with just a few clicks. It's quick and user-friendly.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen md:px-16">
      {/* Hero Section */}
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
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center">
                Try Free Sessions
                <FaArrowRight className="ml-2" />
              </button>
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

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-indigo-600 text-xl font-semibold mb-2 md:text-2xl">
            Welcome to Soulsadhna
          </h3>
          <h2 className="text-center text-2xl md:text-3xl font-semibold mb-6">
            Trusted by Members Worldwide
          </h2>
          <p className="text-center text-gray-600 mb-12 text-sm md:text-lg">
            We blend the best of old-school knowledge with modern tricks to help
            you form long-lasting healthy habits.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gray-50 py-7 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-gray-900">95 Lakhs+</h3>
              <p className="text-gray-600">Community Members</p>
            </div>
            <div className="text-center bg-gray-50 py-7 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-gray-900">12+</h3>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div className="text-center bg-gray-50 py-7 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-gray-900">4.9/5</h3>
              <p className="text-gray-600">Rating Score</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons to Join Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-indigo-600 text-xl font-semibold mb-2 md:text-2xl">
            Benefits
          </h3>
          <h2 className="text-center text-2xl font-semibold mb-12 md:text-3xl">
            Reasons to Join Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-orange-100/20 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <PiFlowerLotus className="w-10 h-10 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Be Calm</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <FiCheck className="text-green-600 mr-2" /> Reduce Stress
                </li>
                <li className="flex items-center">
                  <FiCheck className="text-green-600 mr-2" /> Improve sleep
                  quality
                </li>
                <li className="flex items-center">
                  <FiCheck className="text-green-600 mr-2" /> Learn Powerful
                  breathing techniques
                </li>
              </ul>
            </div>
            <div className="p-6 bg-blue-100/20 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <GrYoga className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Become Flexible</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <FiCheck className="text-green-600 mr-2" /> Increase the
                  flexibility of muscles
                </li>
                <li className="flex items-center">
                  <FiCheck className="text-green-600 mr-2" /> Heal stiffness &
                  tightness in the body
                </li>
                <li className="flex items-center">
                  <FiCheck className="text-green-600 mr-2" /> Improve Joint
                  pains
                </li>
              </ul>
            </div>
            <div className="p-6 bg-green-100/20 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <LiaBurnSolid className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Burn Fat</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <FiCheck className="text-green-600 mr-2" /> Burn extra
                  calories
                </li>
                <li className="flex items-center">
                  <FiCheck className="text-green-600 mr-2" /> Learn techniques
                  to maintain weight
                </li>
                <li className="flex items-center">
                  <FiCheck className="text-green-600 mr-2" /> Get Stronger
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50 full-bleed">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-indigo-600 text-xl font-semibold mb-2 md:text-2xl">
            Membership Features
          </h3>
          <h2 className="text-center text-2xl font-semibold mb-12">
            Unlock Your Exclusive Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Accountability Support */}
            <div className="p-4 md:p-6 flex items-start">
              <div className="w-12 h-11 bg-blue-200 rounded-md pt-2 flex items-start justify-center mr-4">
                <IoShieldCheckmarkOutline className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Accountability Support
                </h3>
                <p className="text-gray-600">
                  Stay on track with regular check-ins and guidance to ensure
                  you meet your wellness goals.
                </p>
              </div>
            </div>

            {/* Flexible Timings */}
            <div className="p-4 md:p-6 flex items-start">
              <div className="w-12 h-11 bg-yellow-200 rounded-md pt-2 flex items-start justify-center mr-4">
                <CiTimer className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Flexible Timings</h3>
                <p className="text-gray-600">
                  Choose from various time slots to fit yoga seamlessly into
                  your schedule.
                </p>
              </div>
            </div>

            {/* Easy Accessibility */}
            <div className="p-4 md:p-6 flex items-start">
              <div className="w-12 h-11 bg-green-200 rounded-md pt-2 flex items-start justify-center mr-4">
                <CiMobile1 className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Easy Accessibility
                </h3>
                <p className="text-gray-600">
                  Join sessions anytime, anywhere, with simple access across
                  devices.
                </p>
              </div>
            </div>

            {/* Community Health Programs */}
            <div className="p-4 md:p-6 flex items-start">
              <div className="w-12 h-11 bg-pink-200 rounded-md pt-2 flex items-start justify-center mr-4">
                <GrGroup className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Community Health Programs
                </h3>
                <p className="text-gray-600">
                  Engage with others in group programs that boost collective
                  well-being.
                </p>
              </div>
            </div>

            {/* Habit Tracking Reminders */}
            <div className="p-4 md:p-6 flex items-start">
              <div className="w-12 h-11 bg-purple-200 rounded-md pt-2 flex items-start justify-center mr-4">
                <GrTask className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Habit Tracking Reminders
                </h3>
                <p className="text-gray-600">
                  Receive gentle nudges to build and maintain your healthy
                  habits effortlessly.
                </p>
              </div>
            </div>

            {/* Physiotherapy Support */}
            <div className="p-4 md:p-6 flex items-start">
              <div className="w-12 h-12 bg-red-200 rounded-md pt-2 flex items-start justify-center mr-4">
                <TbPhysotherapist className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Physiotherapy Support
                </h3>
                <p className="text-gray-600">
                  Personalized guidance from experts to aid in physical recovery
                  and care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-32 pb-28 bg-sky-950 text-white md:rounded-3xl">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm mb-3">Start Your Journey</p>
          <h2 className="text-3xl font-bold mb-8">
            Ready for a Change? Begin Your Wellness Journey!
          </h2>
          <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity ">
            Register Now for FREE
          </button>
          <p className="mt-4 text-sm text-teal-500">
            87 Lakhs + already attended
          </p>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-semibold mb-12">
            Meet Your Trainers
          </h2>
          <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-16">
            {/* Trainer 1 */}
            <div className="flex flex-col md:flex-row justify-start items-center gap-2 w-full">
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src="/images/trainer-1.jpg"
                  alt="Ravi Sharma"
                  width={450}
                  height={300}
                  className="w-full max-w-md rounded-xl object-cover"
                />
              </div>
              <div className="md:w-1/2 max-w-md text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-2">
                  Yoga Everyday with <strong>Ravi Sharma</strong>
                </h3>
                <p className="text-gray-600 mb-3 font-medium">
                  <strong>12+ yrs</strong> of Yoga teaching to{" "}
                  <strong>8.8 million+</strong>
                  people
                </p>
                <p className="text-gray-600 mb-4">
                  Practical, impactful daily exercises and asanas create a
                  thoughtful program for a healthy body and mind.
                </p>
                <div className="flex justify-center md:justify-start gap-6">
                  <Link
                    href="https://www.facebook.com"
                    target="_blank"
                    className="text-blue-900 hover:text-blue-950"
                  >
                    <FaFacebookSquare size={26} />
                  </Link>
                  <Link
                    href="https://www.instagram.com"
                    target="_blank"
                    className="text-pink-600 hover:text-pink-900"
                  >
                    <FaInstagram size={26} />
                  </Link>
                  <Link
                    href="https://www.youtube.com"
                    target="_blank"
                    className="text-red-600 hover:text-red-900"
                  >
                    <FaYoutube size={26} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Trainer 2 */}
            <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-2 w-full">
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src="/images/trainer-2.jpg"
                  alt="Meera Patel"
                  width={450}
                  height={300}
                  className="w-full max-w-md rounded-xl object-cover"
                />
              </div>
              <div className="md:w-1/2 max-w-md text-center md:text-right">
                <h3 className="text-2xl font-semibold mb-2">
                  Dance & Strength with <strong>Meera Patel</strong>
                </h3>
                <p className="text-gray-600 mb-4">
                  Experience Zumba: a fun, high-energy dance fitness class
                  designed for joyful cardio. Stay excited to exercise and come
                  back for more.
                </p>
                <div className="flex justify-center md:justify-end gap-6">
                  <Link
                    href="https://www.facebook.com"
                    target="_blank"
                    className="text-blue-900 hover:text-blue-950"
                  >
                    <FaFacebookSquare size={26} />
                  </Link>
                  <Link
                    href="https://www.instagram.com"
                    target="_blank"
                    className="text-pink-600 hover:text-pink-900"
                  >
                    <FaInstagram size={26} />
                  </Link>
                  <Link
                    href="https://www.youtube.com"
                    target="_blank"
                    className="text-red-600 hover:text-red-900"
                  >
                    <FaYoutube size={26} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 full-bleed">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-indigo-600 text-xl font-semibold mb-2 md:text-2xl">
            Testimonials
          </h3>
          <h2 className="text-center text-2xl font-semibold mb-12">
            Our User Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src="https://xsgames.co/randomusers/assets/avatars/female/1.jpg"
                  alt="Smita Lath"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="font-semibold">Smita Lath</h3>
                  <p className="text-sm text-gray-600">
                    53 years | 93 Yoga Days
                  </p>
                  <p className="flex items-center font-semibold text-gray-900">
                    <span className="text-sm">4.5</span>{" "}
                    <FaStar className="ml-1 text-yellow-300" />
                  </p>
                </div>
              </div>
              <p className="font-medium text-gray-900">
                Yoga has become a natural part of my life. I've lost 2 kg and am
                aiming to lose 3 more, confident that I will achieve it with
                continued effort. The changes in my nutrition have also been
                significant. Habuild has helped me change my lifestyle, which
                seemed difficult earlier.
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src="https://xsgames.co/randomusers/assets/avatars/female/31.jpg"
                  alt="Anuradha S"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="font-semibold">Anuradha S</h3>
                  <p className="text-sm text-gray-600">
                    59 years | 307 Yoga Days
                  </p>
                  <p className="flex items-center font-semibold text-gray-900">
                    <span className="text-sm">4.5</span>{" "}
                    <FaStar className="ml-1 text-yellow-300" />
                  </p>
                </div>
              </div>
              <p className="font-medium text-gray-900">
                I used to struggle with breathlessness on hikes, needing to stop
                halfway, or use a stick for support. This year, after practicing
                yoga for about 300 days continuously, I hiked with ease and
                comfort. Happy to inform you that continuous Yoga can do
                wonders! Thank you.
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src="https://xsgames.co/randomusers/assets/avatars/male/3.jpg"
                  alt="Deepak Jain"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="font-semibold">Deepak Jain</h3>
                  <p className="text-sm text-gray-600">
                    47 years | 281 Yoga Days
                  </p>
                  <p className="flex items-center font-semibold text-gray-900">
                    <span className="text-sm">4.5</span>{" "}
                    <FaStar className="ml-1 text-yellow-300" />
                  </p>
                </div>
              </div>
              <p className="font-medium text-gray-900">
                After a month of preparation, I completed the TCS World 10K
                marathon in 1 hour 18 minutes without any breathlessness. My
                stamina & strength have greatly improved due to daily yoga
                practice. After the marathon, my breath and body became normal
                within a few minutes without any signs of fatigue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-semibold mb-12">
            Meet Your Habit-Building Founders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Founder 1 */}
            <div className="text-center 6">
              <div className="p-4 w-full inline-block mb-4">
                <Image
                  src="/images/founder-1.jpg"
                  alt="Saurabh Bothra"
                  width={300}
                  height={300}
                  className="mx-auto grayscale rounded-3xl"
                />
              </div>
              <h3 className="font-semibold mb-1">Saurabh Bothra</h3>
              <p className="text-sm text-gray-600">Co-Founder / CEO</p>
              <p className="text-xs text-gray-500">
                IIT BHU '14 | TedX Speaker
              </p>
            </div>

            {/* Founder 2 */}
            <div className="text-center 6">
              <div className="p-4 w-full inline-block mb-4">
                <Image
                  src="/images/founder-2.jpg"
                  alt="Saurabh Bothra"
                  width={300}
                  height={300}
                  className="mx-auto grayscale rounded-3xl"
                />
              </div>
              <h3 className="font-semibold mb-1">Trishala Bothra</h3>
              <p className="text-sm text-gray-600">COO and Co-Founder</p>
              <p className="text-xs text-gray-500">
                London Business School '20 | IIT Bombay '18
              </p>
            </div>

            {/* Founder 3 */}
            <div className="text-center 6">
              <div className="p-4 w-full inline-block mb-4">
                <Image
                  src="/images/founder-3.jpg"
                  alt="Saurabh Bothra"
                  width={300}
                  height={300}
                  className="mx-auto grayscale rounded-3xl"
                />
              </div>
              <h3 className="font-semibold mb-1">Anshul Agrawal</h3>
              <p className="text-sm text-gray-600">CPT0 and Co-Founder</p>
              <p className="text-xs text-gray-500">
                IIM Calcutta '18 | IIT BHU '14
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 full-bleed">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-semibold mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQ_DATA.map((item, i) => {
              const [isOpen, setIsOpen] = useState(false); // For FAQ

              return (
                <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                  <div
                    className="flex justify-between items-center"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <h3 className="font-semibold cursor-pointer">
                      {item.question}
                    </h3>
                    <button className="text-gray-600 focus:outline-none">
                      {isOpen ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 16V8m0 0l4 4m-4-4l-4 4"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v8m0 0l4-4m-4 4l-4-4"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                  {isOpen && (
                    <p className="text-gray-600 mt-2">{item.answer}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
