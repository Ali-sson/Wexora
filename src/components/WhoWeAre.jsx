const WhoWeAre = () => {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* Left */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-wexora-navy border-b-4 border-yellow-300 pb-1 inline-block ">
              Who We Are
            </p>

            <h2 className="mt-3 max-w-md text-3xl font-semibold leading-tight tracking-tight text-wexora-navy md:text-4xl">
              Building the connections that move markets forward.
            </h2>
          </div>

          {/* Right */}
          <div className="max-w-3xl">
            <p className="text-base leading-2 text-wexora-gray">
              Wexora Global Ltd is a market-development company focused on
              connecting manufacturers and distributors with new market
              opportunities.
            </p>

            <p className="mt-4 text-base leading-2 text-wexora-gray">
              We work by understanding market needs, identifying demand and
              creating stronger connections between product supply and
              distribution. Our role is to help businesses discover
              opportunities that may otherwise remain underserved or
              difficult to reach.
            </p>

            <p className="mt-4 text-base leading-2 text-wexora-gray">
              Founded in Kano, Wexora is building a scalable model designed
              to create market connections across Nigeria and, over time,
              beyond the Nigerian market.
            </p>
          </div>
        </div>

        {/* Principles */}
        <div className="mt-20 grid border-t border-slate-200 md:grid-cols-3">

          {/* Item 1 */}
          <div className="border-b border-slate-200 py-8 md:border-b-0 md:border-r md:pr-10">
            <p className="text-sm font-semibold text-wexora-primary">
              01
            </p>

            <h3 className="mt-4 text-xl font-semibold text-wexora-navy">
              Market Understanding
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              We study market needs and identify where meaningful
              opportunities exist.
            </p>
          </div>

          {/* Item 2 */}
          <div className="border-b border-slate-200 py-8 md:border-b-0 md:border-r md:px-10">
            <p className="text-sm font-semibold text-wexora-primary">
              02
            </p>

            <h3 className="mt-4 text-xl font-semibold text-slate-900">
              Strategic Connections
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              We connect the right manufacturers and distributors around
              genuine market opportunities.
            </p>
          </div>

          {/* Item 3 */}
          <div className="py-8 md:pl-10">
            <p className="text-sm font-semibold text-wexora-primary">
              03
            </p>

            <h3 className="mt-4 text-xl font-semibold text-slate-900">
              Market Development
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              We turn market information and relationships into practical
              opportunities for growth.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;