"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import { PiCurrencyInrFill } from "react-icons/pi";
import { FiCalendar, FiClock } from "react-icons/fi";
import { GrYoga } from "react-icons/gr";
import { IoLeaf } from "react-icons/io5";
import { useAuth } from "@/hooks/useAuth";
import { TbGymnastics } from "react-icons/tb";
import { MdOutlineDiversity2 } from "react-icons/md";

export default function HomePage() {
  const { user } = useAuth();
  const router = useRouter();
  const [event, setEvent] = useState(null);
  const [isFirstTime, setIsFirstTime] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const isFirstLogin = localStorage.getItem("isFirstLogin") !== "false";
    setIsFirstTime(isFirstLogin);

    fetchEventDetails();
  }, []);

  // Countdown timer effect
  useEffect(() => {
    if (event) {
      const convertedDate = convertDateFormat(event.date);
      console.log(event.date, convertedDate);
      const timer = setInterval(() => {
        const eventDate = new Date(convertedDate).getTime();
        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        setTimeLeft({ days, hours, minutes });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [event]);

  const fetchEventDetails = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/events/${process.env.NEXT_PUBLIC_EVENT_ID}`
      );
      setEvent(response.data);
    } catch (error) {
      setError(
        "Failed to fetch event details. Please check your internet connection or try again later."
      );
      console.error("Error fetching event details:", error);
    } finally {
      setLoading(false);
    }
  };

  const convertDateFormat = (date) => {
    const [day, month, year] = date.split("-");
    return `${month}-${day}-${year}`;
  };

  const handleBookEvent = async () => {
    try {
      // TODO: Once Payment integrated, Call Book the event api
      // const response = await axios.post(
      //   `${process.env.NEXT_PUBLIC_API_URL}/events/${event._id}/book`,
      //   {
      //     eventId: event._id,
      //     userEmail: user.email,
      //   }
      // );
      const response = false;

      if (response || true) {
        localStorage.setItem("isFirstLogin", "false");
        router.push("/mock-payment");
      }
    } catch (error) {
      setError("Failed to book event");
      console.error("Error booking event:", error);
    }
  };

  if (loading) return <LoadingSpinner fullScreen />;

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="text-center p-8 bg-white rounded-2xl shadow-2xl max-w-md w-full">
          <GrYoga className="mx-auto mb-4 text-indigo-600" size={48} />
          <h2 className="text-2xl text-red-600 font-semibold mb-4">Error</h2>
          <p className="text-gray-700">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`py-20 bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center p-4 relative ${
        event ? "min-h-fit" : "min-h-screen"
      }`}
    >
      {/* Background leaf decorations */}
      <IoLeaf
        className="absolute top-10 left-10 text-indigo-200 opacity-50 rotate-45"
        size={100}
      />
      <TbGymnastics
        className="absolute bottom-20 right-10 md:right-15 text-indigo-200 opacity-50 rotate-45"
        size={100}
      />
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-2xl overflow-hidden">
        {event ? (
          <div className="relative">
            {/* Yoga icon watermark */}
            <div className="absolute top-14 right-4">
              <GrYoga className="text-indigo-600 opacity-10" size={64} />
            </div>

            {/* Event Title */}
            <div className="px-6 py-5 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
              <h2 className="text-xl font-bold text-center">{event.title}</h2>
            </div>

            <div className="p-6 space-y-6">
              {/* Event Description */}
              <p className="text-sm text-gray-600 text-center italic">
                {event.description}
              </p>

              {/* Countdown Timer */}
              <div className="bg-indigo-50 rounded-lg p-4 text-center">
                <h3 className="text-sm font-semibold text-indigo-700 mb-2">
                  Event Starts In
                </h3>
                <div className="flex justify-center space-x-2">
                  {Object.entries(timeLeft).map(([unit, value]) => (
                    <div
                      key={unit}
                      className="bg-white shadow rounded-lg p-2 w-16"
                    >
                      <span className="block text-xl font-bold text-indigo-600">
                        {value}
                      </span>
                      <span className="text-xs text-gray-500">{unit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Event Details */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <FiCalendar className="text-indigo-600" size={20} />
                  <span className="text-xs sm:text-sm font-medium text-gray-900">
                    {event.date}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <FiClock className="text-indigo-600" size={20} />
                  <span className="text-xs sm:text-sm font-medium text-gray-900">
                    {event.startTime} - {event.endTime}
                  </span>
                </div>

                {isFirstTime && (
                  <div className="flex items-center gap-2">
                    <PiCurrencyInrFill className="text-indigo-600" size={24} />
                    <span className="text-xs sm:text-sm font-medium text-gray-900">
                      {event.price}
                    </span>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="mt-6">
                {isFirstTime ? (
                  <button
                    onClick={handleBookEvent}
                    className="w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-indigo-600 text-white rounded-lg hover:from-indigo-700 hover:to-indigo-700 shadow-lg hover:shadow-xl"
                  >
                    Book Event
                  </button>
                ) : (
                  <a
                    href={event.meetLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex justify-center items-center px-4 py-3 border-2 border-indigo-600 rounded-lg text-indigo-600 hover:bg-indigo-600 hover:text-white shadow-md hover:shadow-lg"
                  >
                    Join Now
                  </a>
                )}
              </div>

              {/* Testimonial */}
              <div className="mt-4 text-center bg-indigo-50 p-4 rounded-lg">
                <p className="text-xs italic text-gray-600">
                  "An incredible experience that renewed my spirit and energy!"
                </p>
                <p className="text-xs font-semibold text-indigo-700 mt-2">
                  - Yoga Enthusiast
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="min-h-52 flex flex-col justify-center items-center text-gray-500 p-6 text-center">
            <GrYoga className="text-indigo-600 mb-4" size={48} />
            <p>No event found</p>
          </div>
        )}
      </div>
    </div>
  );
}
