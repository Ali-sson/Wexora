
const CoreValues = ({
  eyebrow = "OUR CORE VALUES",
  title = "What Guides How We Work",
  values = [
    {
      number: "01",
      title: "Partnership",
      description:
        "We grow distributors' markets, not around them. Our success is built around creating value for the partners we work with.",
    },
    {
      number: "02",
      title: "Intelligence",
      description:
        "Every recommendation is backed by real market information, helping our partners make informed commercial decisions.",
    },
    {
      number: "03",
      title: "Integrity",
      description:
        "We build transparent, performance-based commercial relationships grounded in trust and accountability.",
    },
    {
      number: "04",
      title: "Local Depth",
      description:
        "We are grounded in on-the-ground knowledge of the markets, businesses and commercial realities we work within.",
    },
    {
      number: "05",
      title: "Growth",
      description:
        "We focus on sustainable, measurable expansion that creates lasting value for every partner we work with.",
    },
  ],
}) => {
  return (
    <section className="bg-wexora-soft py-12 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p data-aos="fade-in" className="text-sm font-semibold uppercase tracking-[0.2em] text-wexora-navy border-b-4 inline-block border-yellow-400 pb-1">
            {eyebrow}
          </p>

          <h2 data-aos="fade-up" data-aos-delay="200" className="mt-4 text-3xl font-bold text-wexora-navy sm:text-3xl md:text-4xl">
            {title}
          </h2>
        </div>

        {/* Values */}
        <div data-aos="fade-in" className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {values.map((value) => (
            <div
              key={value.number}
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Number */}
              <span className="text-sm font-bold text-wexora-primary">
                {value.number}
              </span>

              {/* Title */}
              <h3 className="mt-8 text-xl font-bold text-wexora-navy">
                {value.title}
              </h3>

              {/* Description */}
              <p className="mt-4 leading-7 text-wexora-gray">
                {value.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default CoreValues;

