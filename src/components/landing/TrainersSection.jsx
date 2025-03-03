import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";

export function TrainersSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-semibold mb-12">
          Meet Your Trainers
        </h2>
        <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-16">
          {/* Trainer 1 */}
          <div className="flex flex-col md:flex-row justify-start items-center gap-6 w-full">
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
                <strong>8.8 million+</strong> people
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
          <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-6 w-full">
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
  );
}
