import { PiFlowerLotus } from "react-icons/pi";
import { GrYoga } from "react-icons/gr";
import { LiaBurnSolid } from "react-icons/lia";
import { FiCheck } from "react-icons/fi";

export function ReasonsSection() {
  return (
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
                <FiCheck className="text-green-600 mr-2" /> Improve Joint pains
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
                <FiCheck className="text-green-600 mr-2" /> Burn extra calories
              </li>
              <li className="flex items-center">
                <FiCheck className="text-green-600 mr-2" /> Learn techniques to
                maintain weight
              </li>
              <li className="flex items-center">
                <FiCheck className="text-green-600 mr-2" /> Get Stronger
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
