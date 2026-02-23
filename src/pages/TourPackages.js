import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

import aboutHero from "../assets/hero1.jpg";

import pkg1 from "../assets/kalpitiya1.jpg";
import pkg2 from "../assets/Beaches & Sunsets.jpg";
import pkg3 from "../assets/Gal-oya-national-park1.jpg";
import pkg4 from "../assets/kandy.jpg";
import pkg5 from "../assets/colombo.jpg";
import pkg6 from "../assets/WilpattuNationalPark1.jpg";

import galleryBg from "../assets/galle.jpg";

function TourPackages() {

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

            {/* ================= TOUR PACKAGES SECTION ================= */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                        {[
                            {
                                title: "21 Days of Sri Lanka Grand Tour",
                                desc: "This 21-Day Sri Lanka Grand Tour immerses you in the island’s stunning landscapes, rich history, and vibrant culture.",
                                img: pkg1,
                                slug: "21-days-grand-tour",
                            },
                            {
                                title: "15 Days of Sri Lanka Tour",
                                desc: "Embark on a captivating 15-day journey across Sri Lanka’s most iconic destinations.",
                                img: pkg2,
                                slug: "15-days-tour",
                            },
                            {
                                title: "8 Days of Sri Lanka Tour",
                                desc: "Embark on an unforgettable 8-day journey through the vibrant landscapes and rich cultural heritage of Sri Lanka.",
                                img: pkg3,
                                slug: "8-days-tour",
                            },
                            {
                                title: "5 Days of Sri Lanka Tour",
                                desc: "Discover the enchanting beauty and rich heritage of Sri Lanka on this 5-day adventure.",
                                img: pkg4,
                                slug: "5-days-tour",
                            },
                            {
                                title: "7 Days of Sri Lanka Tour",
                                desc: "This 7-day journey showcases the best of Sri Lanka’s cultural, scenic, and wildlife attractions.",
                                img: pkg5,
                                slug: "7-days-tour",
                            },
                            {
                                title: "10 Days of Sri Lanka Tour",
                                desc: "Embark on a captivating 10-day journey through the heart of Sri Lanka.",
                                img: pkg6,
                                slug: "10-days-tour",
                            },
                        ].map((tour, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-xl"
                            >
                                {/* Image */}
                                <div className="overflow-hidden">
                                    <img
                                        src={tour.img}
                                        alt={tour.title}
                                        className="w-full h-56 object-cover transition duration-500 hover:scale-105"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {tour.title}
                                    </h3>

                                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                                        {tour.desc}
                                    </p>

                                    <button
                                        onClick={() => navigate(`/tour-packages/${tour.slug}`)}
                                        className="mt-4 text-teal-600 font-medium hover:underline"
                                    >
                                        Read More »
                                    </button>
                                </div>
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
                                onClick={() => navigate("/book-now")}
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

export default TourPackages;
