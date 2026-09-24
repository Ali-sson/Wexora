const WhoWeWorkWith = () => {
  return (
    <section className="bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em]  text-wexora-primary border-b-4 border-wexora-navy  pb-1 inline-block">
            Who We Work With
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Connecting Supply With Distribution
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            Wexora connects manufacturers with distributors by understanding
            market needs and creating stronger supply opportunities.
          </p>
        </div>

        {/* Connection Diagram */}
        <div className="mx-auto mt-16 max-w-5xl">

          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr]">

            {/* Manufacturer */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                01
              </p>

              <h3 className="mt-3 text-xl font-semibold text-slate-900">
                Manufacturers
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Product supply and manufacturing capacity.
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden text-2xl text-blue-700 md:block">
              →
            </div>

            {/* Wexora */}
            <div className="rounded-2xl bg-[#124B87] p-8 text-center shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">
                02
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-white">
                Wexora
              </h3>

              <p className="mt-3 text-sm leading-6 text-blue-100">
                Market understanding, opportunity identification
                and partner connection.
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden text-2xl text-blue-700 md:block">
              →
            </div>

            {/* Distributor */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                03
              </p>

              <h3 className="mt-3 text-xl font-semibold text-slate-900">
                Distributors
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Distribution networks and market reach.
              </p>
            </div>

          </div>

          {/* Supporting Message */}
          <div className="mt-12 border-t border-slate-200 pt-10 text-center">
            <p className="mx-auto max-w-3xl text-base leading-7 text-slate-600">
              Wexora sits between supply and distribution, helping identify
              market needs, connect the right partners and create opportunities
              for stronger market access.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;