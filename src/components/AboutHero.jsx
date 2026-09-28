const AboutHero = ({
  eyebrow = "ABOUT WEXORA",
  title = "Connecting Supply With Market Opportunity",
  description = "Wexora Global Ltd connects manufacturers and distributors with market opportunities by understanding demand, identifying supply needs, and creating stronger business connections.",
}) => {
  return (
    <section className="bg-wexora-light py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

        {/* Eyebrow */}
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-wexora-blue">
          {eyebrow}
        </p>

        {/* Main Heading */}
        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-wexora-navy sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        {/* Description */}
        <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-wexora-gray">
          {description}
        </p>

      </div>
    </section>
  );
};

export default AboutHero;