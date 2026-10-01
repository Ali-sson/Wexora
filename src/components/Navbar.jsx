import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/Wexora_logo1.png";

const Navbar = () => {

    const navigate = useNavigate();

  const handleWhatWeDo = () => {
    navigate("/");

    setTimeout(() => {
      document.getElementById("what-we-do")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };
  // Controls whether the mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-4 md:px-6 lg:px-8">

        {/* Top Navbar */}
        <div className="flex items-center justify-between ">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-end gap-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src={Logo}
              alt="Wexora Logo"
              className="h-12 w-12"
            />

            <span className="hidden text-[24px] font-bold text-wexora-primary md:block">
              Wexora
            </span>
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

          <button
  onClick={handleWhatWeDo}
  className="text-sm font-medium text-slate-700 transition hover:text-[#0B5CAD]"
>
  What We Do
</button>

            <Link
              to="/contact"
              className="text-sm font-medium text-slate-700 transition hover:text-[#0B5CAD]"
            >
              Contact Us
            </Link>

            {/* CTA */}
            <Link
              to="/contact"
              className="rounded-lg bg-wexora-orange px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#0B5CAD]"
            >
              Become a Distributor Partner
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#071A33] md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >

            {isMenuOpen ? (

              /* X Icon */
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>

            ) : (

              /* Hamburger Icon */
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

            )}

          </button>

        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-slate-100 pt-4 md:hidden">

            <div className="flex flex-col gap-2">

              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#0B5CAD]"
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#0B5CAD]"
              >
                About
              </Link>

                            <button
                onClick={() => {
                  setIsMenuOpen(false);
                  handleWhatWeDo();
                }}
                className="rounded-lg px-3 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#0B5CAD]"
              >
                What We Do
              </button>

              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#0B5CAD]"
              >
                Contact Us
              </Link>

              {/* Mobile CTA */}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 rounded-lg bg-wexora-orange px-5 py-3 text-center text-sm font-semibold text-black transition hover:bg-[#0B5CAD]"
              >
                Become a Distributor Partner
              </Link>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
