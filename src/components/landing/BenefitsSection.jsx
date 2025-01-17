import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { CiTimer, CiMobile1 } from "react-icons/ci";
import { GrGroup, GrTask } from "react-icons/gr";
import { TbPhysotherapist } from "react-icons/tb";

export function BenefitsSection() {
  return (
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
              <h3 className="text-lg font-semibold mb-2">Accountability Support</h3>
              <p className="text-gray-600">
                Stay on track with regular check-ins and guidance to ensure you meet your wellness goals.
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
                Choose from various time slots to fit yoga seamlessly into your schedule.
              </p>
            </div>
          </div>

          {/* Easy Accessibility */}
          <div className="p-4 md:p-6 flex items-start">
            <div className="w-12 h-11 bg-green-200 rounded-md pt-2 flex items-start justify-center mr-4">
              <CiMobile1 className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Easy Accessibility</h3>
              <p className="text-gray-600">
                Join sessions anytime, anywhere, with simple access across devices.
              </p>
            </div>
          </div>

          {/* Community Health Programs */}
          <div className="p-4 md:p-6 flex items-start">
            <div className="w-12 h-11 bg-pink-200 rounded-md pt-2 flex items-start justify-center mr-4">
              <GrGroup className="w-6 h-6 text-pink-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Community Health Programs</h3>
              <p className="text-gray-600">
                Engage with others in group programs that boost collective well-being.
              </p>
            </div>
          </div>

          {/* Habit Tracking Reminders */}
          <div className="p-4 md:p-6 flex items-start">
            <div className="w-12 h-11 bg-purple-200 rounded-md pt-2 flex items-start justify-center mr-4">
              <GrTask className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Habit Tracking Reminders</h3>
              <p className="text-gray-600">
                Receive gentle nudges to build and maintain your healthy habits effortlessly.
              </p>
            </div>
          </div>

          {/* Physiotherapy Support */}
          <div className="p-4 md:p-6 flex items-start">
            <div className="w-12 h-12 bg-red-200 rounded-md pt-2 flex items-start justify-center mr-4">
              <TbPhysotherapist className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Physiotherapy Support</h3>
              <p className="text-gray-600">
                Personalized guidance from experts to aid in physical recovery and care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 