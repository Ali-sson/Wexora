
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-wexora-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="text-2xl font-bold tracking-tight"
            >
              WEXORA
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
              Connecting manufacturers with distributors through
              market insight, demand generation and new market
              opportunities across Kano and Northern Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              <Link
                to="/"
                className="text-sm text-slate-300 transition-colors hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-sm text-slate-300 transition-colors hover:text-white"
              >
                About
              </Link>

              <Link
                to="/how-it-works"
                className="text-sm text-slate-300 transition-colors hover:text-white"
              >
                How It Works
              </Link>

              <Link
                to="/become-a-distributor"
                className="text-sm text-slate-300 transition-colors hover:text-white"
              >
                Become a Distributor Partner
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h3>

            <div className="mt-6 space-y-4 text-sm">

              {/* Address */}
              <div>
                <p className="font-medium text-white">Address</p>
                <p className="mt-1 leading-6 text-slate-300">
                  Flat D4 S.K.Y Building, opposite Naibawa Police
                  Station, Zaria Road, Kumbotso L.G.A, Kano State,
                  Nigeria
                </p>
              </div>

              {/* Phone */}
              <div>
                <p className="font-medium text-white">Phone</p>
                <a
                  href="tel:08164320703"
                  className="mt-1 inline-block text-slate-300 transition-colors hover:text-white"
                >
                  +234 816 432 0703 
                </a>
              </div>

              {/* Email */}
              <div>
                <p className="font-medium text-white">Email</p>
                <a
                  href="mailto:info@wexoragroup.com.ng"
                  className="mt-1 inline-block text-slate-300 transition-colors hover:text-white"
                >
                  info@wexoragroup.com.ng
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} Wexora Global Ltd. All rights reserved.
          </p>

          <p>Kano, Nigeria</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

