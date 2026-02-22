import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import experienceHero from "../../assets/ella.jpg";

import ella1 from "../../assets/ella1.jpg";
import ella2 from "../../assets/ella.jpg";
import ella3 from "../../assets/ella2.jpg";

function Ella() {

    const [activeImage, setActiveImage] = useState(ella1);

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
                        Ella
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
                    >
                        A Scenic Mountain Escape in Sri Lanka
                    </p>
                </div>
            </section>

            {/* ================= ELLA SECTION ================= */}
            <section className="bg-white py-16 px-4 sm:px-8 lg:px-20">
                <div className="max-w-7xl mx-auto">

                    <h2
                        data-aos="fade-up"
                        className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-900 tracking-wide"
                    >
                        Discover Ella
                    </h2>

                    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                        {/* Text */}
                        <div data-aos="fade-right" className="space-y-5 text-gray-700 text-sm sm:text-base leading-relaxed">

                            <p>
                                Ella is a charming hill country town surrounded by lush tea plantations,
                                misty mountains, and breathtaking viewpoints. It is one of Sri Lanka’s most
                                popular destinations for nature lovers and adventure seekers.
                            </p>

                            <p>
                                Visitors can explore iconic attractions such as Nine Arches Bridge, Ella Rock,
                                Little Adam’s Peak, and the scenic Ravana Falls, each offering stunning views
                                and memorable hiking experiences.
                            </p>

                            <p>
                                The town also provides a relaxed atmosphere with cozy cafés, boutique stays,
                                and panoramic train journeys through Sri Lanka’s hill country landscapes.
                            </p>

                            <p>
                                With its cool climate, vibrant greenery, and peaceful charm, Ella is a perfect
                                getaway for travelers seeking relaxation and adventure.
                            </p>

                        </div>

                        {/* Image Section */}
                        <div data-aos="fade-left" className="relative">

                            <img
                                src={activeImage}
                                alt="Ella"
                                className="rounded-lg shadow-xl w-full h-[350px] object-cover transition duration-300"
                            />

                            <div className="flex gap-3 mt-4 justify-center">
                                {[ella1, ella2, ella3].map((img, index) => (
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
                href="https://wa.me/94743412910"
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

export default Ella;