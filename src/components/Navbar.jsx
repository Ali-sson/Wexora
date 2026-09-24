import { Link } from "react-router-dom";
import Logo from "../assets/Wexora_logo.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-2 md:px-6 py-4 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-1"
        >
          <img src={Logo} alt="Wexora Logo" className="h-10 w-24" />
          <span className="text-[24px] hidden md:block font-bold text-wexora-navy">Wexora</span>
        </Link>


        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm font-medium text-slate-700 transition hover:text-[#0B5CAD]"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-sm font-medium text-slate-700 transition hover:text-[#0B5CAD]"
          >
            About
          </Link>

          <a
            href="/#how-it-works"
            className="text-sm font-medium text-slate-700 transition hover:text-[#0B5CAD]"
          >
            How It Works
          </a>

          
          <Link
            to="/contact"
            className="text-sm font-medium text-slate-700 transition hover:text-[#0B5CAD]"
          >
            Contact Us
          </Link>

          {/* CTA */}
          <Link
            to="/partner"
            className="rounded-lg bg-wexora-orange px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#0B5CAD]"
          >
            Become a Distributor Partner
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-[#071A33] md:hidden"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-7 w-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;