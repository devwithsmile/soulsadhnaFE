import { FaUsers, FaVideo } from "react-icons/fa";
import { GrYoga } from "react-icons/gr";
import { useState, useEffect } from "react";

export function WelcomeMessage() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const subscriptionStatus = localStorage.getItem("isSubscribed");
    if (subscriptionStatus === "true") {
      setIsSubscribed(true);
    }
  }, []);

  const handleSubscribe = () => {
    setIsSubscribed(true);
    localStorage.setItem("isSubscribed", "true");
  };

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-6 bg-white rounded-xl md:rounded-2xl shadow-lg">
      {/* Welcome Header */}
      <h1 className="text-2xl md:text-4xl font-bold text-center text-indigo-600 mb-3 md:mb-4">
        Welcome to SoulSadhna!
      </h1>

      {/* Welcome Message */}
      <p className="text-gray-700 text-center mb-4 md:mb-6 text-base md:text-lg">
        We're thrilled to have you as part of our community! You've just taken
        the first step toward enhancing your well-being and connecting with your
        inner self.
      </p>

      {/* Upcoming Features Section */}
      <div className="bg-indigo-50 p-4 md:p-6 rounded-lg md:rounded-xl mb-6 md:mb-8 shadow-md">
        <h2 className="text-xl md:text-2xl font-semibold text-indigo-800 mb-3 md:mb-4">
          Here's a sneak peek of what's coming soon:
        </h2>

        <div className="space-y-3 md:space-y-4">
          <div className="flex items-center space-x-3">
            <GrYoga className="text-indigo-600 text-xl md:text-2xl flex-shrink-0" />
            <p className="text-gray-700 text-sm md:text-base">
              <span className="font-semibold">Personalized yoga classes</span>{" "}
              tailored to your goals.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <FaVideo className="text-indigo-600 text-xl md:text-2xl flex-shrink-0" />
            <p className="text-gray-700 text-sm md:text-base">
              <span className="font-semibold">Live sessions</span> with expert
              instructors.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <FaUsers className="text-indigo-600 text-xl md:text-2xl flex-shrink-0" />
            <p className="text-gray-700 text-sm md:text-base">
              <span className="font-semibold">Community support</span> to keep
              you motivated and inspired.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <p className="text-gray-600 text-center mb-6 md:mb-8 text-sm md:text-lg">
        Until then, we invite you to stay tuned for updates—we're working hard
        to bring you the best yoga experience. Rest assured, SoulSadhna will
        soon be ready to guide you on a transformative journey to better health
        and mindfulness.
      </p>

      {/* Thank You Message */}
      <div className="text-center mb-6 md:mb-8">
        <p className="text-gray-700 font-medium mb-2 text-base md:text-lg">
          Thank you for your patience and support! 🙏
        </p>
        <p className="text-indigo-600 font-medium text-base md:text-lg">
          We can't wait to share more with you soon.
        </p>
      </div>

      {/* Notify Me Button */}
      {!isSubscribed ? (
        <div className="text-center">
          <button
            onClick={handleSubscribe}
            className="px-5 py-2.5 md:px-6 md:py-3 bg-indigo-600 text-white text-sm md:text-base rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-md"
          >
            Notify Me
          </button>
        </div>
      ) : (
        <div className="text-center text-green-600 font-medium text-sm md:text-base">
          Thanks for subscribing! We'll keep you posted.
        </div>
      )}
    </div>
  );
}
