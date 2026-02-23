import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import experienceHero from "../../assets/colombo.jpg";

import colombo1 from "../../assets/colombo1.jpg";
import colombo2 from "../../assets/colombo.jpg";
import colombo3 from "../../assets/colombo3.jpg";

function Colombo() {

    const [activeImage, setActiveImage] = useState(colombo1);

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
                        Colombo
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
                    >
                        Sri Lanka’s Vibrant Commercial Capital
                    </p>
                </div>
            </section>

            {/* ================= COLOMBO SECTION ================= */}
            <section className="bg-white py-16 px-4 sm:px-8 lg:px-20">
                <div className="max-w-7xl mx-auto">

                    {/* Title */}
                    <h2
                        data-aos="fade-up"
                        className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-900 tracking-wide"
                    >
                        Discover Colombo
                    </h2>

                    {/* Content */}
                    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                        {/* Text */}
                        <div data-aos="fade-right" className="space-y-5 text-gray-700 text-sm sm:text-base leading-relaxed">

                            <p>
                                Colombo is Sri Lanka’s bustling commercial capital, blending colonial heritage,
                                modern skyscrapers, and vibrant street life. The city offers a unique mix of culture,
                                shopping, and coastal charm.
                            </p>

                            <p>
                                Visitors can explore iconic landmarks such as Galle Face Green, Gangaramaya Temple,
                                Independence Square, and the historic Fort area, each showcasing Colombo’s rich past.
                            </p>

                            <p>
                                Colombo is also famous for its shopping malls, street markets like Pettah, and a
                                diverse food scene ranging from local Sri Lankan cuisine to international dining.
                            </p>

                            <p>
                                With its lively atmosphere, oceanfront sunsets, and cultural diversity, Colombo
                                provides an exciting introduction to Sri Lanka.
                            </p>

                        </div>

                        {/* Image Section */}
                        <div data-aos="fade-left" className="relative">

                            <img
                                src={activeImage}
                                alt="Colombo"
                                className="rounded-lg shadow-xl w-full h-[350px] object-cover transition duration-300"
                            />

                            <div className="flex gap-3 mt-4 justify-center">
                                {[colombo1, colombo2, colombo3].map((img, index) => (
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

export default Colombo;