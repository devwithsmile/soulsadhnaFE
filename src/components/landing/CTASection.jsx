export function CTASection() {
  return (
    <section className="pt-32 pb-28 bg-accent-dark text-white md:rounded-3xl">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm mb-3 text-accent-light">Start Your Journey</p>
        <h2 className="text-3xl font-bold mb-8 text-white">
          Ready for a Change? Begin Your Wellness Journey!
        </h2>
        <button className="bg-accent text-primary-dark px-8 py-3 rounded-full font-medium hover:bg-accent-light transition-opacity">
          Register Now for FREE
        </button>
        <p className="mt-4 text-sm text-secondary-light">
          87 Lakhs + already attended
        </p>
      </div>
    </section>
  );
}
