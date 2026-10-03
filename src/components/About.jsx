import { Link } from "react-router-dom";



const About = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

        {/* Small Label */}
        <p data-aos="fade-in" className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-wexora-navy border-b-4 border-yellow-400  pb-1 inline-block">
          Who We Are
        </p>

        {/* Heading */}
        <h2 data-aos="fade-up" className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl md:text-4xl">
          About Us
        </h2>

        {/* Description */}
        <div className="mx-auto mt-7 max-w-3xl space-y-1 text-base leading-7 text-slate-600">
          <p data-aos="fade-up" data-aos-delay="200" className="text-base">
            <strong className="text-slate-900">Wexora Global Ltd</strong> is
            a market-development company focused on connecting manufacturers and distributors with market opportunities across Nigeria and beyond.
          </p>

          <p data-aos="fade-up" data-aos-delay="200">
            Unlike a conventional distributor, Wexora does not primarily
            operate by stocking and reselling products. And unlike an
            online marketplace, we do not simply list products for buyers
            to purchase.
          </p>

          <p data-aos="fade-up" data-aos-delay="200">
            We work alongside distributors to identify market demand,
            understand what retailers, institutions, hospitality businesses
            and other buyers need, and turn that information into actionable
            market opportunities.
          </p>
        </div>

        {/* Button */}
        <div data-aos="fade-in" data-aos-delay="300" className="mt-8">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-lg bg-wexora-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-wexora-blue"
          >
            Learn More About Wexora
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default About;