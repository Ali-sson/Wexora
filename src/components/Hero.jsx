const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#071A33] via-[#08264A] to-[#0B3D78]">
      
      {/* Background glow */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl"></div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8">

        {/* Left Content */}
        <div className="max-w-2xl">

          <span className="mb-6 inline-flex rounded-full border border-blue-300/20 bg-wexora-primary px-4 py-2 text-sm font-medium tracking-wide text-black">
            MARKET DEVELOPMENT PARTNER
          </span>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Connecting Commerce
            <span className="mt-2 block text-wexora-primary">
              To opportunity.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
           Wexora bridges manufacturers and distributors by understanding market needs, sourcing reliable products, and creating stronger supply opportunities across Kano and Northern Nigeria.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">

            <a
              href="/partner"
              className="inline-flex items-center justify-center rounded-lg bg-wexora-orange px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-wexora-blue"
            >
              Become a Distributor Partner
              <span className="ml-2 text-lg">→</span>
            </a>

            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              How It Works
            </a>

          </div>

          {/* Trust statement */}
          <div className="mt-12 flex items-center gap-3 text-sm text-slate-400">
            <span className="h-2 w-2 rounded-full bg-blue-300"></span>
            Partnering with distributors to unlock new market opportunities
          </div>

        </div>

        {/* Right Visual */}
        <div className="relative hidden h-[480px] lg:block">

          {/* Main circle */}
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/20 bg-white/[0.03] backdrop-blur-sm"></div>

          {/* Inner circle */}
          <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/20 bg-blue-400/5"></div>

          {/* Center */}
          <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-blue-200/20 bg-white/10 shadow-2xl backdrop-blur-md">
            <span className="text-2xl font-bold tracking-wider text-white">
              WEXORA
            </span>
          </div>

          {/* Connection lines */}
          <div className="absolute left-[15%] top-[25%] h-px w-[32%] rotate-[25deg] bg-blue-300/30"></div>

          {/* <div className="absolute right-[15%] top-[25%] h-px w-[32%] -rotate-[25deg] bg-blue-300/30"></div>

          <div className="absolute bottom-[25%] left-[15%] h-px w-[32%] -rotate-[25deg] bg-blue-300/30"></div> */}

          <div className="absolute bottom-[25%] right-[15%] h-px w-[32%] rotate-[25deg] bg-blue-300/30"></div>

          {/* Market nodes */}
          <div className="absolute left-[8%] top-[17%] flex h-20 w-20 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-center text-xs font-medium text-slate-300 backdrop-blur">
            Manufacturers
          </div>

          {/* <div className="absolute right-[8%] top-[17%] flex h-20 w-20 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-center text-xs font-medium text-slate-300 backdrop-blur">
            Retailers
          </div>

          <div className="absolute bottom-[17%] left-[8%] flex h-20 w-20 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-center text-xs font-medium text-slate-300 backdrop-blur">
            Institutions
          </div> */}

          <div className="absolute bottom-[17%] right-[8%] flex h-20 w-20 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-center text-xs font-medium text-slate-300 backdrop-blur">
            Distributors
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;