import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Contact = () => {
  return (

    <>

    <Navbar/>
    <main className="bg-white">

      {/* Contact Hero
      <section className="bg-wexora-light py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-wexora-blue">
            Contact Wexora
          </p>

          <h1 className="text-4xl font-bold leading-tight text-wexora-navy md:text-5xl">
            Let's Start a Conversation
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-wexora-gray md:text-lg">
            Have a business opportunity, distribution need, or market
            question? We would like to hear from you.
          </p>

        </div>
      </section> */}


       <section className="relative overflow-hidden sm:h-[40vh] md:h-[60vh] bg-gradient-to-br from-[#071A33] via-[#08264A] to-[#0B3D78]">
      
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

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24">

        {/* Left Content */}
        <div className="max-w-3xl">

          <span data-aos="fade-in" className="mb-6 inline-flex rounded-full border border-blue-300/20 bg-wexora-primary px-4 py-2 text-sm font-medium tracking-wide text-white">
             Contact Wexora
          </span>

          <h1 data-aos="fade-in" className="text-3xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl">
               Let's Start a Conversation         
          </h1>

           <p data-aos="fade-in" className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white">
            Have a business opportunity, distribution need, or market
            question? <br/> We would like to hear from you.
          </p>
        

        </div>

      </div>
    </section>


      {/* Contact Section */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Contact Information */}
            <div>

              <p data-aos="fade-in" className="text-sm font-semibold uppercase tracking-wider text-wexora-blue">
                Get in Touch
              </p>

              <h2 data-aos="fade-up" className="mt-3 text-3xl font-bold text-wexora-navy md:text-4xl">
                We'd Like to Hear From You
              </h2>

              <p data-aos="fade-up" data-aos-delay="200" className="mt-5 max-w-xl leading-7 text-wexora-gray">
                Whether you are looking to explore a distribution opportunity,
                discuss a market need, or connect with our team, reach out to
                Wexora and let's explore what is possible.
              </p>


              {/* Contact Details */}
              <div className="mt-10 space-y-7">

                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-wexora-light text-wexora-blue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="font-semibold text-wexora-navy">
                      Office
                    </h3>

                    <p className="mt-1 max-w-md text-sm leading-6 text-wexora-gray">
                      Flat D4 S.K.Y Building, opposite Naibawa Police Station,
                      Zaria Road, Kumbotso L.G.A, Kano State, Nigeria.
                    </p>
                  </div>
                </div>


                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-wexora-light text-wexora-blue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293a1.125 1.125 0 0 1-1.21.38 12.035 12.035 0 0 1-7.328-7.328 1.125 1.125 0 0 1 .38-1.21l1.293-.97c.363-.272.527-.739.417-1.173L6.828 3.102A1.125 1.125 0 0 0 5.737 2.25H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="font-semibold text-wexora-navy">
                      Phone
                    </h3>

                    <p className="mt-1 text-sm text-wexora-gray">
                      0816 432 0703
                    </p>
                  </div>
                </div>


                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-wexora-light text-wexora-blue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0l-7.5-4.615A2.25 2.25 0 0 1 2.25 6.993V6.75"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="font-semibold text-wexora-navy">
                      Email
                    </h3>

                    <p className="mt-1 text-sm text-wexora-gray">
                      info@wexoragroup.com.ng
                    </p>
                  </div>
                </div>

              </div>

            </div>


            {/* Contact Form */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">

              <h2 className="text-2xl font-bold text-wexora-navy">
                Send Us a Message
              </h2>

              <p className="mt-2 text-sm leading-6 text-wexora-gray">
                Tell us a little about what you would like to discuss.
              </p>


              <form className="mt-8 space-y-5">

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-wexora-navy"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-wexora-blue focus:ring-2 focus:ring-wexora-blue/10"
                  />
                </div>


                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-wexora-navy"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-wexora-blue focus:ring-2 focus:ring-wexora-blue/10"
                  />
                </div>


                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-wexora-navy"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-wexora-blue focus:ring-2 focus:ring-wexora-blue/10"
                  />
                </div>


                {/* Inquiry Type */}
                <div>
                  <label
                    htmlFor="inquiry"
                    className="mb-2 block text-sm font-medium text-wexora-navy"
                  >
                    What are you contacting us about?
                  </label>

                  <select
                    id="inquiry"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-600 outline-none transition focus:border-wexora-blue focus:ring-2 focus:ring-wexora-blue/10"
                  >
                    <option value="">
                      Select an option
                    </option>

                    <option value="distribution">
                      Distribution Opportunity
                    </option>

                    <option value="market">
                      Market Opportunity
                    </option>

                    <option value="partnership">
                      Business Partnership
                    </option>

                    <option value="product">
                      Product / Market Inquiry
                    </option>

                    <option value="general">
                      General Inquiry
                    </option>
                  </select>
                </div>


                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-wexora-navy"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Tell us how we can help..."
                    className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-wexora-blue focus:ring-2 focus:ring-wexora-blue/10"
                  />
                </div>


                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-wexora-orange px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-wexora-blue hover:text-white"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>

    </main>

    <Footer/>
    </>
  );
};

export default Contact;