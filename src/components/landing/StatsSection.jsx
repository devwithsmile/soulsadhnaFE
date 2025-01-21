export function StatsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-primary text-xl font-semibold mb-2 md:text-2xl">
          Welcome to Soulsadhna
        </h3>
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-text mb-6">
          Trusted by Members Worldwide
        </h2>
        <p className="text-center text-gray/50 mb-12 text-sm md:text-lg">
          We blend the best of old-school knowledge with modern tricks to help
          you form long-lasting healthy habits.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-accent-light py-7 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-text">95 Lakhs+</h3>
            <p className="text-secondary">Community Members</p>
          </div>
          <div className="text-center bg-accent-light py-7 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-text">12+</h3>
            <p className="text-secondary">Years of Experience</p>
          </div>
          <div className="text-center bg-accent-light py-7 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-text">4.9/5</h3>
            <p className="text-secondary">Rating Score</p>
          </div>
        </div>
      </div>
    </section>
  );
}
