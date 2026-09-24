
const About = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

        {/* Small Label */}
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-wexora-primary border-b-4 border-wexora-navy  pb-1 inline-block">
          Who We Are
        </p>

        {/* Heading */}
        <h2 className="text-3xl font-semi-bold leading-tight text-slate-900 sm:text-4xl md:text-4xl">
          About Us
        </h2>

        {/* Description */}
        <div className="mx-auto mt-7 max-w-3xl space-y-1 text-base leading-7 text-slate-600">
          <p>
            <strong className="text-slate-900">Wexora Global Ltd</strong> is
            a Kano-based market-development company focused on connecting
            established distributors with emerging demand across Kano and
            Northern Nigeria.
          </p>

          <p>
            Unlike a conventional distributor, Wexora does not primarily
            operate by stocking and reselling products. And unlike an
            online marketplace, we do not simply list products for buyers
            to purchase.
          </p>

          <p>
            We work alongside distributors to identify market demand,
            understand what retailers, institutions, hospitality businesses
            and other buyers need, and turn that information into actionable
            market opportunities.
          </p>
        </div>

        {/* Button */}
        <div className="mt-8">
          <a
            href="/about"
            className="inline-flex items-center gap-2 rounded-lg bg-wexora-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-wexora-blue"
          >
            Learn More About Wexora
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;