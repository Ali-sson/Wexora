import { Link } from "react-router-dom";

const DistributorCTA = () => {
  return (
    <section className="px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-wexora-navy px-6 py-20 text-center sm:px-12 lg:px-20">

          {/* Decorative Circle */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />

          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border border-white/10" />

          {/* Content */}
          <div className="relative mx-auto max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
              Partner With Wexora
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Become a Distributor Partner
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Work with Wexora to identify new market opportunities,
              reach underserved customers and expand your distribution
              opportunities across Kano and Northern Nigeria.
            </p>

            <div className="mt-10">
              <Link
                to="/become-a-distributor"
                className="inline-flex items-center gap-3 rounded-lg bg-white px-7 py-4 text-sm font-semibold text-[#124B87] transition-all duration-300 hover:bg-blue-50"
              >
                Become a Distributor Partner
                <span className="text-lg">→</span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DistributorCTA;