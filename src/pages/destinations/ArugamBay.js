import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import experienceHero from "../../assets/place22.jpg";

import aruga1 from "../../assets/Arugam Bay1.jpg";
import aruga2 from "../../assets/Arugam Bay2.jpg";
import aruga3 from "../../assets/place22.jpg";

function ArugamBay() {

    const [activeImage, setActiveImage] = useState(aruga1);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="w-full overflow-hidden">

            {/* ================= HERO ================= */}
            <section className="relative h-[40vh] w-full">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${experienceHero})` }}
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
                    <h1
                        data-aos="fade-up"
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-extrabold leading-tight"
                    >
                        Arugam Bay
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
                    >
                        Sri Lanka’s Surfing Paradise on the East Coast
                    </p>
                </div>
            </section>

            {/* ================= SECTION ================= */}
            <section className="bg-white py-16 px-4 sm:px-8 lg:px-20">
                <div className="max-w-7xl mx-auto">

                    <h2
                        data-aos="fade-up"
                        className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-900 tracking-wide"
                    >
                        Discover Arugam Bay
                    </h2>

                    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                        {/* Text */}
                        <div data-aos="fade-right" className="space-y-5 text-gray-700 text-sm sm:text-base leading-relaxed">

                            <p>
                                Arugam Bay is a world-famous surf destination known for its perfect waves,
                                golden beaches, and relaxed coastal vibe.
                            </p>

                            <p>
                                Visitors can enjoy surfing, beachside cafes, yoga retreats, and vibrant
                                nightlife along the east coast of Sri Lanka.
                            </p>

                            <p>
                                The area also offers lagoons, wildlife spotting, and scenic surroundings
                                ideal for nature lovers and adventure seekers.
                            </p>

                            <p>
                                With its stunning beaches, surf culture, and laid-back lifestyle, Arugam Bay
                                is a must-visit spot for beach enthusiasts and surfers alike.
                            </p>

                        </div>

                        {/* Image Section */}
                        <div data-aos="fade-left" className="relative">

                            <img
                                src={activeImage}
                                alt="Arugam Bay"
                                className="rounded-lg shadow-xl w-full h-[350px] object-cover transition duration-300"
                            />

                            <div className="flex gap-3 mt-4 justify-center">
                                {[aruga1, aruga2, aruga3].map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        onClick={() => setActiveImage(img)}
                                        className={`w-20 h-14 object-cover rounded-md shadow cursor-pointer transition
                                        ${activeImage === img
                                                ? "ring-2 ring-blue-600 scale-105"
                                                : "opacity-70 hover:opacity-100"
                                            }`}
                                        alt="thumbnail"
                                    />
                                ))}
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* ================= WHATSAPP ================= */}
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

export default ArugamBay;