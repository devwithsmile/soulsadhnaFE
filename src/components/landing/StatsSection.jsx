export function StatsSection() {
  return (
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
  );
}
