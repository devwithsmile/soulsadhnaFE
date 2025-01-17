"use client";
import { useState } from "react";

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

export function FAQSection() {
  return (
    <section className="py-16 bg-gray-50 full-bleed">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-semibold mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_DATA.map((item, i) => {
            const [isOpen, setIsOpen] = useState(false);

            return (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <h3 className="font-semibold">{item.question}</h3>
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
                {isOpen && <p className="text-gray-600 mt-2">{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
