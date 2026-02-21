import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

import aboutHero from "../assets/hero1.jpg";

import galleryBg from "../assets/galle.jpg";

function Gallery() {

    const navigate = useNavigate();

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
                        Tour Packages
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
                    >
                        Explore the best of Sri Lanka
                    </p>
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
