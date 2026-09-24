const GrowthRoadmap = () => {
  const steps = [
    {
      number: "01",
      title: "Market Development Partner",
      description:
        "Wexora begins by partnering with distributors already active in Kano focusing on identifying underserved retailers, institutions and bulk buyers...",
    },
    {
      number: "02",
      title: "B2B Commerce Network",
      description: 
        "As relationships mature, Wexora formalises a structured network of retailers, wholesalers and institutional buyers...",
    },
    {
      number: "03",
      title: "Market Intelligence Platform",
      description:
        "In its most developed stage, Wexora provides manufactures and distributors with market intelligence...",
    },
  ];

  return (
    <section className="bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-wexora-primary border-b-4 border-wexora-navy pb-1 inline-block">
            How We Work
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            The Growth Roadmap
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
           Wexora's model evolves from market development,
           to a connected B2B commerce network, and ultimately
           to a market intelligence platform.
          </p>
        </div>

        {/* Roadmap */}
        <div className="relative mt-20">

          {/* Connecting Line - Desktop */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-slate-300 lg:block" />

          <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative">

                {/* Number / Node */}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-blue-700 bg-slate-50 text-sm font-bold text-blue-700">
                  {step.number}
                </div>

                {/* Content */}
                <div className="mt-7">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GrowthRoadmap;