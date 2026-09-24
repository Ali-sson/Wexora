const Services = () => {
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
        "Identifying and onboarding retailers, institutions and bulk buyers our distributor partners are not yet reaching.",
    },
    {
      number: "03",
      title: "Market Intelligence",
      description:
        "Reporting on customer preferences, price sensitivity, geographic demand and product availability gaps.",
    },
    {
      number: "04",
      title: "Digital Sales Channels",
      description:
        "WhatsApp Business, website and social platforms used alongside field sales and relationship building.",
    },
    {
      number: "05",
      title: "Sales Coordination",
      description:
        "Converting identified opportunities into confirmed, measurable orders for our distributor partners.",
    },
  ];

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl text-center mx-auto">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-wexora-primary border-b-4 border-wexora-navy pb-1 inline-block">
            What We Do
          </p>

           <h2 className="text-3xl font-semi-bold leading-tight text-slate-900 sm:text-4xl md:text-4xl">
          Creating Demand. Connecting Markets. Supporting Growth.
        </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            Wexora works alongside established distributors to reach
            customers they may not yet be fully serving. We generate
            qualified demand, develop buyer relationships and channel
            confirmed opportunities back to our distributor partners
            for fulfilment.
          </p>
        </div>

        {/* Services */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-2">

          {services.map((service, index) => (
            <div
              key={service.number}
              className={`group bg-wexora-navy p-8 transition-colors duration-300 lg:p-10 ${
                index === 4 ? "md:col-span-2" : ""
              }`}
            >
              {/* Number */}
              <p className="text-sm font-semibold text-white">
                {service.number}
              </p>

              {/* Title */}
              <h3 className="mt-7 text-2xl font-semibold text-white">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-4 max-w-2xl text-base leading-7 text-white">
                {service.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;