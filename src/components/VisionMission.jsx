const VisionMission = ({
  eyebrow = "OUR VISION & MISSION",

  visionTitle = "Our Vision",
  visionText =
    "To build a more connected commercial ecosystem where businesses can access the supply, market opportunities and relationships they need to grow.",

  missionTitle = "Our Mission",
  missionText =
    "To connect manufacturers and distributors with market opportunities by understanding demand, identifying supply needs and creating stronger business connections.",
}) => {
  return (
    <section className="bg-wexora-soft py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-wexora-navy border-b-4 border-yellow-400 inline-block pb-1">
            {eyebrow}
          </p>

          {/* <h2 className="mt-4 text-3xl font-bold text-wexora-navy sm:text-4xl">
            Where We Are Going. How We Get There.
          </h2> */}
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">

          {/* Vision Card */}
          <div className="rounded-3xl bg-wexora-navy p-8 shadow-sm lg:p-10">

            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-white">
                01
              </span>

              <span className="text-sm font-medium uppercase tracking-wider text-white">
                Vision
              </span>
            </div>

            <h3 className="mt-12 text-3xl font-bold text-white">
              {visionTitle}
            </h3>

            <p className="mt-5 max-w-xl text-base leading-8 text-white">
              {visionText}
            </p>

          </div>

          {/* Mission Card */}
          <div className="rounded-3xl bg-wexora-navy p-8 shadow-sm lg:p-10">

            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-white">
                02
              </span>

              <span className="text-sm font-medium uppercase tracking-wider text-white">
                Mission
              </span>
            </div>

            <h3 className="mt-12 text-3xl font-bold text-white">
              {missionTitle}
            </h3>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-200">
              {missionText}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default VisionMission;