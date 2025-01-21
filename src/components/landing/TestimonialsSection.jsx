import Image from "next/image";
import { FaStar } from "react-icons/fa";

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-accent/50 full-bleed">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-primary text-xl font-semibold mb-2 md:text-2xl">
          Testimonials
        </h3>
        <h2 className="text-center text-2xl font-semibold mb-12 text-text">
          Our User Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-accent p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <Image
                src="https://xsgames.co/randomusers/assets/avatars/female/1.jpg"
                alt="Smita Lath"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-4">
                <h3 className="font-semibold text-text">Smita Lath</h3>
                <p className="text-sm text-text">52 years | 365 Yoga Days</p>
                <p className="flex items-center font-semibold text-text">
                  <span className="text-sm">4.8</span>
                  <FaStar className="ml-1 text-primary" />
                </p>
              </div>
            </div>
            <p className="font-medium text-text">
              Yoga has become a natural part of my life. I've lost 2 kg and am
              aiming to lose 3 more, confident that I will achieve it with
              continued effort.
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-accent p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <Image
                src="https://xsgames.co/randomusers/assets/avatars/female/31.jpg"
                alt="Anuradha S"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-4">
                <h3 className="font-semibold text-text">Anuradha S</h3>
                <p className="text-sm text-text">59 years | 307 Yoga Days</p>
                <p className="flex items-center font-semibold text-text">
                  <span className="text-sm">4.5</span>
                  <FaStar className="ml-1 text-primary" />
                </p>
              </div>
            </div>
            <p className="font-medium text-text">
              I used to struggle with breathlessness on hikes. This year, after
              practicing yoga for about 300 days continuously, I hiked with ease
              and comfort.
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-accent p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <Image
                src="https://xsgames.co/randomusers/assets/avatars/male/3.jpg"
                alt="Deepak Jain"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-4">
                <h3 className="font-semibold text-text">Deepak Jain</h3>
                <p className="text-sm text-text">47 years | 281 Yoga Days</p>
                <p className="flex items-center font-semibold text-text">
                  <span className="text-sm">4.5</span>
                  <FaStar className="ml-1 text-primary" />
                </p>
              </div>
            </div>
            <p className="font-medium text-text">
              After a month of preparation, I completed the TCS World 10K
              marathon in 1 hour 18 minutes without any breathlessness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
