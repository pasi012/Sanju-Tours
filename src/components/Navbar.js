import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [moreOpen, setMoreOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const mainLinks = [
    ["HOME", "/"],
    ["TOUR PACKAGES", "/tour-packages"],
    ["DESTINATIONS", "/destinations"],
    ["ABOUT US", "/about"],
    ["CONTACT US", "/contact"],
  ];

  return (
    <header className="fixed top-0 z-[999] w-full">
      {/* Top Glass Bar */}
      <div
        className={`transition-all duration-500
        ${scrolled
            ? "bg-black/70 backdrop-blur-xl shadow-lg"
            : "bg-gradient-to-b from-black/70 via-black/40 to-transparent"
          }`}
      >
        <div className="mx-auto grid h-[90px] max-w-[1400px] grid-cols-[auto_1fr_auto] items-center px-4 md:px-10">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-16 w-auto object-contain" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex justify-center items-center gap-10">

            {mainLinks.map(([label, path]) => (
              <NavLink
                key={label}
                to={path}
                className={({ isActive }) =>
                  `relative text-sm font-semibold uppercase tracking-[2px] transition
        ${isActive ? "text-[#00c8ff]" : "text-white hover:text-[#00c8ff]"}`
                }
              >
                {label}
              </NavLink>
            ))}

          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center justify-end">
            <Link
              to="/book-now"
              className="rounded-full bg-[#00c8ff] px-6 py-2 text-sm font-semibold text-black hover:bg-white transition"
            >
              BOOK NOW
            </Link>
          </div>

          {/* Mobile Toggle – Always Right */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white ml-auto"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-xl">
          <ul className="flex flex-col text-white">
            {[
              ["HOME", "/"],
              ["TOUR PACKAGES", "/tour-packages"],
              ["DESTINATIONS", "/destinations"],
              ["ABOUT US", "/about"],
              ["CONTACT US", "/contact"],
              ["BOOK NOW", "/book-now"],
            ].map(([label, path]) => (
              <li key={label}>
                <Link
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-white/10 px-6 py-4 text-sm font-semibold uppercase tracking-wider hover:text-[#00c8ff]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

        </div>
      )}
    </header>
  );
}
