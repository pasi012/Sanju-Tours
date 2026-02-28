import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

import aboutHero from "../assets/hero1.jpg";

import galleryBg from "../assets/galle.jpg";

import g1 from "../assets/gallery1.jpg";
import g2 from "../assets/gallery2.jpg";
import g3 from "../assets/gallery3.jpg";
import g4 from "../assets/gallery4.jpg";
import g5 from "../assets/gallery5.jpg";
import g6 from "../assets/gallery6.jpg";
import g7 from "../assets/gallery7.jpg";
import g8 from "../assets/gallery8.jpg";
import g9 from "../assets/gallery9.jpg";
import g10 from "../assets/gallery10.jpg";
import g11 from "../assets/gallery11.jpg";
import g12 from "../assets/gallery12.jpg";
import g13 from "../assets/gallery13.jpg";
import g14 from "../assets/gallery14.jpg";
import g15 from "../assets/gallery15.jpg";
import g16 from "../assets/gallery16.jpg";
import g17 from "../assets/gallery17.jpg";
import g18 from "../assets/gallery18.jpg";
import g19 from "../assets/gallery19.jpg";
import g20 from "../assets/gallery20.jpg";
import g21 from "../assets/gallery21.jpg";
import g22 from "../assets/gallery22.jpg";
import g23 from "../assets/gallery23.jpg";
import g24 from "../assets/gallery24.jpg";
import g25 from "../assets/gallery25.jpg";
import g26 from "../assets/gallery26.jpg";
import g27 from "../assets/gallery27.jpg";
import g28 from "../assets/gallery28.jpg";
import g29 from "../assets/gallery29.jpg";
import g30 from "../assets/gallery30.jpg";
import g31 from "../assets/gallery31.jpg";

function Gallery() {

    const navigate = useNavigate();

    const images = [
        g1, g2, g3, g4, g5, g6, g7, g8, g9, g10,
        g11, g12, g13, g14, g15, g16, g17, g18, g19, g20,
        g21, g22, g23, g24, g25, g26, g27, g28, g29, g30, g31
    ];

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="w-full overflow-hidden">

            {/* ================= HERO ================= */}
            <section className="relative h-[40vh] w-full">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${aboutHero})` }}
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
                    <h1
                        data-aos="fade-up"
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-extrabold leading-tight"
                    >
                        Gallery
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
                    >
                        Moments captured across Sri Lanka
                    </p>
                </div>
            </section>

            {/* ================= GALLERY GRID ================= */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">

                    {/* Title */}
                    <div className="text-center mb-12">
                        <h2
                            data-aos="fade-up"
                            className="text-3xl md:text-4xl font-bold"
                        >
                            Travel Memories
                        </h2>

                    </div>

                    {/* Grid */}
                    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                        {images.map((img, i) => (
                            <div
                                key={i}
                                data-aos="zoom-in"
                                className="overflow-hidden rounded-xl shadow-md group cursor-pointer"
                            >
                                <img
                                    src={img}
                                    alt="gallery"
                                    className="w-full object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ================= PROMO HERO SECTION ================= */}
            <section className="relative w-full py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="relative overflow-hidden rounded-2xl shadow-xl">

                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${galleryBg})` }} // You can replace with a new image if needed
                        />

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                        {/* Content */}
                        <div className="relative z-10 px-8 py-20 md:py-28 md:px-16 text-white max-w-2xl">
                            <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
                                Explore iconic destinations <br />
                                with expert insights
                            </h2>

                            <button
                                onClick={() => navigate("/contact")}
                                className="mt-8 bg-[#ff5a4e] hover:bg-[#e0483d] transition px-8 py-3 rounded-lg text-sm font-semibold tracking-wide"
                            >
                                BOOK YOUR ADVENTURE
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= WHATSAPP BUTTON ================= */}
            <a
                href="https://wa.me/94742723210"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-5 right-5 z-50"
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png"
                    alt="WhatsApp"
                    className="h-12 w-12 rounded-full shadow-lg transition hover:scale-110 sm:h-14 sm:w-14"
                />
            </a>

        </div>
    );
}

export default Gallery;
