const MarketGap = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            The Market Gap
          </p>

          <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
            Strong Supply. Hidden Demand.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Distributors and manufacturers may have the products and capacity
            to grow, but reaching smaller and scattered buyers across the
            market can be difficult.
          </p>
        </div>

        {/* Gap Visual */}
        <div className="mt-16 grid items-center gap-6 md:grid-cols-3">

          {/* Supply */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
              01
            </div>

            <h3 className="text-xl font-semibold text-gray-900">
              Supply Capability
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Manufacturers and distributors have products, supply networks
              and the capacity to serve growing markets.
            </p>
          </div>

          {/* Gap */}
          <div className="relative rounded-2xl border-2 border-dashed border-gray-300 p-8 text-center">
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">
              GAP
            </div>

            <h3 className="text-xl font-semibold text-gray-900">
              Limited Market Visibility
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Smaller retailers, hospitality businesses, institutions and
              online buyers are often scattered across different commercial
              areas.
            </p>
          </div>

          {/* Demand */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
              02
            </div>

            <h3 className="text-xl font-semibold text-gray-900">
              Untapped Demand
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Real buying opportunities exist, but they may remain difficult
              for distributors to identify, qualify and reach efficiently.
            </p>
          </div>

        </div>

        {/* Wexora Bridge */}
        <div className="mt-10 rounded-3xl bg-gray-900 p-8 md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Where Wexora Comes In
              </p>

              <h3 className="mt-4 text-2xl font-bold text-white md:text-3xl">
                We turn market visibility into measurable opportunity.
              </h3>

              <p className="mt-4 max-w-3xl leading-7 text-gray-300">
                Wexora finds demand, qualifies it and connects it with the
                right supply — working alongside existing distributors rather
                than competing with them.
              </p>
            </div>

            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-bold text-white">
              W
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default MarketGap;