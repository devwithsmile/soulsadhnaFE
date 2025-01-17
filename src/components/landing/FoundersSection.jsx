import Image from "next/image";

export function FoundersSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-semibold mb-12">
          Meet Your Habit-Building Founders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Founder 1 */}
          <div className="text-center">
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
            <p className="text-xs text-gray-500">IIT BHU '14 | TedX Speaker</p>
          </div>

          {/* Founder 2 */}
          <div className="text-center">
            <div className="p-4 w-full inline-block mb-4">
              <Image
                src="/images/founder-2.jpg"
                alt="Trishala Bothra"
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
          <div className="text-center">
            <div className="p-4 w-full inline-block mb-4">
              <Image
                src="/images/founder-3.jpg"
                alt="Anshul Agrawal"
                width={300}
                height={300}
                className="mx-auto grayscale rounded-3xl"
              />
            </div>
            <h3 className="font-semibold mb-1">Anshul Agrawal</h3>
            <p className="text-sm text-gray-600">CPTO and Co-Founder</p>
            <p className="text-xs text-gray-500">
              IIM Calcutta '18 | IIT BHU '14
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
