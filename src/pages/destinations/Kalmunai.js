import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import experienceHero from "../../assets/Kalmunai2.jpg";

import kalmunai1 from "../../assets/Kalmunai1.jpg";
import kalmunai2 from "../../assets/Kalmunai2.jpg";
import kalmunai3 from "../../assets/place7.jpg";

function Kalmunai() {

    const [activeImage, setActiveImage] = useState(kalmunai1);

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
                        Kalmunai
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
                    >
                        A Peaceful East Coast Coastal Town Experience
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
                        Discover Kalmunai
                    </h2>

                    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                        {/* Text */}
                        <div data-aos="fade-right" className="space-y-5 text-gray-700 text-sm sm:text-base leading-relaxed">

                            <p>
                                Kalmunai is a charming coastal town on Sri Lanka’s east coast known for its serene
                                beaches, cultural diversity, and relaxed local atmosphere.
                            </p>

                            <p>
                                Visitors can enjoy peaceful seaside walks, experience traditional fishing life,
                                and explore vibrant local markets reflecting the town’s rich heritage.
                            </p>

                            <p>
                                The destination also offers opportunities to taste authentic eastern Sri Lankan cuisine
                                and discover nearby lagoons and natural landscapes.
                            </p>

                            <p>
                                With quiet coastal beauty and warm hospitality, Kalmunai provides a calm escape
                                for travelers seeking an authentic east-coast experience.
                            </p>

                        </div>

                        {/* Image Section */}
                        <div data-aos="fade-left" className="relative">

                            <img
                                src={activeImage}
                                alt="Kalmunai"
                                className="rounded-lg shadow-xl w-full h-[350px] object-cover transition duration-300"
                            />

                            <div className="flex gap-3 mt-4 justify-center">
                                {[kalmunai1, kalmunai2, kalmunai3].map((img, index) => (
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

export default Kalmunai;