import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

// Gallery images
import g1 from "../assets/gallery1.jpg";
import g2 from "../assets/gallery7.jpg";
import g3 from "../assets/gallery12.jpg";
import g4 from "../assets/gallery15.jpg";
import g5 from "../assets/gallery8.jpg";
import g6 from "../assets/gallery25.jpg";

import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

function Footer() {
  const [selectedImage, setSelectedImage] = useState(null);
  const gallery = [g1, g2, g3, g4, g5, g6];

  return (
    <footer className="bg-black/80 text-white font-poppins">
      <div className="mx-auto max-w-[1536px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-14 pb-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 items-start">

          {/* ABOUT */}
          <div className="text-center lg:text-left">
            <img
              src={logo}
              alt="Sanju Tours Logo"
              className="mx-auto mb-5 w-[160px] sm:w-[180px] lg:mx-0 lg:w-[200px]"
            />

            <div className="space-y-3 text-sm sm:text-[15px]">
              <div className="flex items-start justify-center gap-3 lg:justify-start">
                <Mail size={16} className="mt-[2px]" />
                <span>sanjutours01@gmail.com</span>
              </div>

              <div className="flex items-start justify-center gap-3 lg:justify-start">
                <Phone size={16} className="mt-[2px]" />
                <span>+94 74 272 3210</span>
              </div>

              <div className="flex items-start justify-center gap-3 lg:justify-start">
                <MapPin size={16} className="mt-[2px]" />
                <span>
                  No 585/3 B, Sudarshana Mawatha, Katunayaka, Sri Lanka
                </span>
              </div>
            </div>
          </div>

          {/* CONTACT INFO ABOVE LINKS */}
          <div className="text-center lg:text-left">
            <p className="mb-5 text-sm sm:text-[15px] leading-relaxed opacity-90">
              Explore Sri Lanka’s diverse landscapes, rich culture &
              unforgettable experiences with our expert travel services.
            </p>

            {/* LINKS */}
            <h3 className="mt-6 mb-4 text-base sm:text-lg font-semibold uppercase">
              Services Req
            </h3>
            <ul className="space-y-3 text-sm sm:text-[15px]">
              {[
                ["About Us", "/about"],
                ["Terms & Conditions", "/terms-condition"],
                ["Privacy Policy", "/privacy-policy"],
                ["Contact", "/contact"],
              ].map(([label, link]) => (
                <li key={label}>
                  <Link
                    to={link}
                    className="inline-block transition duration-200 hover:text-[#1fa2ff]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* GALLERY */}
          <div className="text-center">
            <h3 className="mb-4 text-base sm:text-lg font-semibold uppercase">
              Gallery
            </h3>
            <div className="mx-auto grid w-full max-w-[260px] grid-cols-3 gap-3 place-items-center">
              {gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Gallery"
                  onClick={() => setSelectedImage(img)}
                  className="aspect-square w-full cursor-pointer rounded-md object-cover transition hover:scale-105"
                />
              ))}
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="text-center lg:text-left">
            <h3 className="mb-4 text-base sm:text-lg font-semibold uppercase">
              Contact Us on WhatsApp
            </h3>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/94742723210?text=Hello%20I%20would%20like%20to%20book%20a%20vehicle"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 flex h-[44px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-semibold text-white transition hover:bg-[#1ebe5d]"
            >
              <span>💬</span>
              <span>Chat on WhatsApp</span>
            </a>

            <p className="mb-4 text-xs sm:text-sm text-gray-300">
              Fast response • Easy booking • 24/7 support
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-5 text-lg lg:justify-start">
              <a
                href="https://web.facebook.com/sanju.tours"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="cursor-pointer transition hover:text-[#1fa2ff]" />
              </a>

              <FaYoutube className="cursor-pointer transition hover:text-[#1fa2ff]" />
              <FaInstagram className="cursor-pointer transition hover:text-[#1fa2ff]" />
              <FaPinterestP className="cursor-pointer transition hover:text-[#1fa2ff]" />
            </div>

          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 border-t border-white/10 pt-4 text-center text-xs sm:text-sm opacity-80">
          Copyright © 2026 | Designed & Developed by SLTechnology (Pvt) LTD
        </div>
      </div>

      {/* IMAGE MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[90%] max-w-[90%]"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage} alt="Preview" className="rounded-lg" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-2xl font-bold text-black"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
