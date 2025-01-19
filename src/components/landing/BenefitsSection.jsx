import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { CiTimer, CiMobile1 } from "react-icons/ci";
import { GrGroup, GrTask } from "react-icons/gr";
import { TbPhysotherapist } from "react-icons/tb";

const benefits = [
  {
    icon: <IoShieldCheckmarkOutline className="w-6 h-6 text-blue-600" />,
    title: "Accountability Support",
    description:
      "Stay on track with regular check-ins and guidance to ensure you meet your wellness goals.",
    bgColor: "bg-blue-200",
  },
  {
    icon: <CiTimer className="w-6 h-6 text-yellow-600" />,
    title: "Flexible Timings",
    description:
      "Choose from various time slots to fit yoga seamlessly into your schedule.",
    bgColor: "bg-yellow-200",
  },
  {
    icon: <CiMobile1 className="w-6 h-6 text-green-600" />,
    title: "Easy Accessibility",
    description:
      "Join sessions anytime, anywhere, with simple access across devices.",
    bgColor: "bg-green-200",
  },
  {
    icon: <GrGroup className="w-6 h-6 text-pink-600" />,
    title: "Community Health Programs",
    description:
      "Engage with others in group programs that boost collective well-being.",
    bgColor: "bg-pink-200",
  },
  {
    icon: <GrTask className="w-6 h-6 text-purple-600" />,
    title: "Habit Tracking Reminders",
    description:
      "Receive gentle nudges to build and maintain your healthy habits effortlessly.",
    bgColor: "bg-purple-200",
  },
  {
    icon: <TbPhysotherapist className="w-6 h-6 text-red-600" />,
    title: "Physiotherapy Support",
    description:
      "Personalized guidance from experts to aid in physical recovery and care.",
    bgColor: "bg-red-200",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-16 bg-gray-50 full-bleed">
      <div className="container mx-auto px-4 max-w-6xl">
        <h3 className="text-center text-indigo-600 text-xl font-semibold mb-2 md:text-2xl">
          Membership Features
        </h3>
        <h2 className="text-center text-2xl font-semibold mb-12 md:text-3xl">
          Unlock Your Exclusive Benefits
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-start space-x-4">
                <div
                  className={`w-12 h-12 ${benefit.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}
                >
                  {benefit.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
