const WhatWeDo = () => {
  const services = [
    {
      number: "01",
      title: "Demand Generation",
      description:
        "Digital and direct-market outreach that creates awareness and qualified buyer interest.",
    },
    {
      number: "02",
      title: "Customer Acquisition",
      description:
        "Identifying and onboarding retailers, institutions, and bulk buyers our distributor partners are not yet reaching.",
    },
    {
      number: "03",
      title: "Market Intelligence",
      description:
        "Insights into customer preferences, price sensitivity, geographic demand, and product availability gaps.",
    },
    {
      number: "04",
      title: "Digital Sales Channels",
      description:
        "Using WhatsApp Business, our website, and social platforms alongside field sales and relationship building.",
    },
    {
      number: "05",
      title: "Sales Coordination",
      description:
        "Converting identified opportunities into confirmed, measurable orders for our distributor partners.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-wexora-primary border-b-4 border-wexora-navy pb-1 inline-block">
            What We Do   
          </p>

          <h2 className="text-4xl font-bold leading-tight text-wexora-navy md:text-4xl">
            Expanding Distributor Reach.

          </h2>

          <p className="mt-6 text-base leading-8">
            Wexora partners with existing distributors operating in Kano and
            Northern Nigeria to expand their reach into market segments they
            are not yet fully serving.
          </p>

          <p className="mt-4 text-base leading-7">
            From small supermarkets and provision stores to restaurants,
            hotels, schools, offices, caterers, institutions, and online
            sellers, we help create demand and channel it back to our
            distributor partners for fulfilment.
          </p>
        </div>

        {/* Services */}
        <div className="mt-20">

          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Our Core Services
            </p>

            <h3 className="mt-3 text-3xl font-bold text-slate-900">
              Turning market opportunities into measurable demand.
            </h3>
          </div>

          {/* First three */}
          <div className="grid gap-5 md:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <div
                key={service.number}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <span className="text-sm font-bold text-blue-600">
                  {service.number}
                </span>

                <h4 className="mt-8 text-xl font-semibold text-slate-900">
                  {service.title}
                </h4>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {service.description}
                </p>

                <div className="mt-8 h-px w-10 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>

          {/* Last two */}
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {services.slice(3).map((service) => (
              <div
                key={service.number}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <span className="text-sm font-bold text-blue-600">
                  {service.number}
                </span>

                <h4 className="mt-8 text-xl font-semibold text-slate-900">
                  {service.title}
                </h4>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
                  {service.description}
                </p>

                <div className="mt-8 h-px w-10 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>

        </div>
{/* 
        {/* Bottom CTA *
        <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-3xl bg-slate-900 p-8 md:flex-row md:items-center md:p-10">

          <div>
            <h3 className="text-2xl font-bold text-white">
              We help distributors reach more of the market.
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              We generate demand and channel qualified opportunities back to
              our distributor partners.
            </p>
          </div>

          <a
            href="/partner"
            className="inline-flex shrink-0 items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-blue-50"
          >
            Become a Distributor Partner
            <span className="ml-2">→</span>
          </a>

        </div> */}

      </div>
    </section>
  );
};

export default WhatWeDo;