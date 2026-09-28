const WhyWexora = ({
  eyebrow = "WHY WEXORA EXISTS",
  title = "Bridging the Gap Between Supply and Market Demand",
  description = "Wexora exists because having products available is only one part of building a successful market. Manufacturers and distributors can have the capacity to supply, yet still face challenges reaching the right business opportunities and understanding where demand exists.",
  secondParagraph = "We help close this gap by understanding market needs, identifying opportunities, and creating stronger connections between manufacturers and distributors.",
}) => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mx-auto max-w-4xl text-center">

          {/* Eyebrow */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-wexora-navy border-b-4 border-yellow-400 inline-block pb-1">
            {eyebrow}
          </p>

          {/* Heading */}
          <h2 className="text-3xl font-bold leading-tight text-wexora-navy md:text-4xl ">
            {title}
          </h2>

          {/* Description */}
          <div className="mt-8 space-y-5 text-base leading-8 text-wexora-gray">
            <p>{description}</p>

            <p>{secondParagraph}</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyWexora;