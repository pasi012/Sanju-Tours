import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useNavigate } from "react-router-dom";

import aboutHero from "../../assets/NuwaraEliya1.jpg";

import dhamma from "../../assets/Kithulgala1.jpg";
import sigiriya from "../../assets/Pinnawala2.jpg";
import kandy from "../../assets/kandy.jpg";
import temple from "../../assets/sigiriya.jpg";

function Days8Tour() {

    const navigate = useNavigate();

    const images = [dhamma, sigiriya, kandy, temple];

    const [selectedImage, setSelectedImage] = useState(images[0]);

    const [day1, setDay1] = useState(true);
    const [day2, setDay2] = useState(false);
    const [day3, setDay3] = useState(false);
    const [day4, setDay4] = useState(false);
    const [day5, setDay5] = useState(false);
    const [day6, setDay6] = useState(false);
    const [day7, setDay7] = useState(false);
    const [day8, setDay8] = useState(false);

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
                        8 Days of Sri Lanka Tour
                    </h1>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
                    >
                        Experience the heart of Sri Lanka through its culture and heritage.
                    </p>
                </div>
            </section>

            {/* ================= CULTURAL HIGHLIGHTS ================= */}
            <section className="bg-white -py-2">
                <div className="mx-auto max-w-7xl px-6 text-center">

                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mx-auto mt-6 max-w-4xl text-gray-600 leading-relaxed"
                    >
                        Embark on an unforgettable 8-day journey through the vibrant landscapes and rich cultural heritage of Sri Lanka. This tour begins in Negombo, where you’ll relax on beautiful beaches before heading to Pinnawala to witness the majestic elephants at the Elephant Orphanage. Explore the ancient Dambulla Cave Temple and climb the iconic Sigiriya Rock Fortress, where breathtaking views await you.

                        Immerse yourself in the charm of Kandy, home to the Temple of the Sacred Tooth Relic and stunning botanical gardens. Experience the lively Kandyan Cultural Show, showcasing traditional dances and drumming.

                        Travel through lush tea plantations to Nuwara Eliya, where you can enjoy the serenity of Gregory Lake. Adventure awaits in Kitulgala, known for its thrilling white-water rafting on the Kelani River. Finally, unwind on the sandy shores of Bentota, where you can relax or partake in water sports.

                        This tour is ideal for travelers seeking a perfect blend of culture, adventure, and relaxation, showcasing the best of Sri Lanka’s natural beauty and traditions.
                    </p>

                    {/* Duration Bar */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="250"
                        className="mx-auto mt-10 flex max-w-4xl items-center justify-center rounded-md bg-gradient-to-r from-[#0A3A5E] to-[#1C6EA4] py-5 text-white"
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-3xl">📅</span>
                            <div className="text-left">
                                <p className="text-sm uppercase tracking-widest">Duration</p>
                                <p className="text-xl font-bold">8 Days</p>
                            </div>
                        </div>
                    </div>

                    {/* Main Image */}
                    <div
                        data-aos="zoom-in"
                        data-aos-delay="300"
                        className="mx-auto mt-10 overflow-hidden rounded-xl shadow-xl"
                    >
                        <img
                            src={selectedImage}
                            alt="Selected Tour"
                            className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] xl:h-[720px] object-cover transition duration-500"
                        />
                    </div>

                    {/* Thumbnail Gallery */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4"
                    >
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                onClick={() => setSelectedImage(img)}
                                className={`h-28 w-full cursor-pointer rounded-lg object-cover transition-all duration-300 
                                hover:scale-105
                                ${selectedImage === img ? "ring-4 ring-[#0A3A5E]" : "opacity-70"}
                            `}
                            />
                        ))}
                    </div>

                </div>
            </section>

            {/* ================= TOUR ITINERARY ================= */}
            <section className="bg-gray-50 py-10">
                <div className="mx-auto max-w-6xl px-6">

                    <h2
                        data-aos="fade-up"
                        className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-extrabold leading-tight"
                    >
                        Tour Itinerary
                    </h2>

                    <div className="mt-12 space-y-6">

                        {/* ================= DAY 1 ================= */}
                        <div data-aos="fade-up" className="overflow-hidden rounded-lg border bg-white shadow">
                            <button
                                onClick={() => setDay1(!day1)}
                                className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]"
                            >
                                <span>Day 1: Arrival in Colombo & Transfer to Negombo</span>
                                <span>{day1 ? "−" : "+"}</span>
                            </button>

                            {day1 && (
                                <div className="space-y-4 px-6 py-6 text-gray-700 leading-relaxed">
                                    <p>
                                        Arrival: Meet and greet at Colombo Airport.
                                    </p>

                                    <p>
                                        Transfer to Negombo: Approx. 30-minute drive.
                                    </p>

                                    <p>
                                        Relax at Negombo Beach: Enjoy the beach and explore local markets.
                                    </p>

                                    <p className="font-semibold">Overnight stay in Negombo.</p>

                                </div>
                            )}
                        </div>

                        {/* ================= DAY 2 ================= */}
                        <div data-aos="fade-up" data-aos-delay="150" className="overflow-hidden rounded-lg border bg-white shadow">
                            <button
                                onClick={() => setDay2(!day2)}
                                className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]"
                            >
                                <span>Day 2: Negombo to Pinnawala & Dambulla</span>
                                <span>{day2 ? "−" : "+"}</span>
                            </button>

                            {day2 && (
                                <div className="space-y-4 px-6 py-6 text-gray-700 leading-relaxed">
                                    <p>
                                        Breakfast at Hotel.
                                    </p>

                                    <p>
                                        Transfer to Pinnawala: Approx. 1.5-hour drive.
                                    </p>

                                    <p>
                                        Pinnawala Elephant Orphanage: Visit the orphanage to see elephants and learn about their conservation. (Visit duration: approx. 2 hours)
                                    </p>

                                    <p>
                                        Lunch in Pinnawala.
                                    </p>

                                    <p>
                                        Transfer to Dambulla: Approx. 1-hour drive.
                                    </p>

                                    <p>
                                        Dambulla Cave Temple: Explore the ancient rock temple with stunning murals and statues. (Visit duration: approx. 1.5 hours)
                                    </p>

                                    <p className="font-semibold">Overnight stay in Dambulla / Sigiriya.</p>

                                </div>
                            )}
                        </div>

                        {/* ================= DAY 3 ================= */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className="overflow-hidden rounded-lg border bg-white shadow"
                        >
                            <button
                                onClick={() => setDay3(!day3)}
                                className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]"
                            >
                                <span>Day 3: Dambulla to Sigiriya & Transfer to Kandy</span>
                                <span>{day3 ? "−" : "+"}</span>
                            </button>

                            {day3 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Breakfast at Hotel.
                                    </p>

                                    <p>
                                        Sigiriya Rock Fortress: Climb the Lion Rock for breathtaking views and explore ancient frescoes. (Visit duration: approx. 3 hours)
                                    </p>

                                    <p>
                                        Lunch in Sigiriya.
                                    </p>

                                    <p>
                                        Transfer to Kandy: Approx. 2.5-hour drive.
                                    </p>

                                    <p className="font-semibold text-[#0A3A5E]">
                                        Overnight stay in Kandy.
                                    </p>

                                </div>
                            )}
                        </div>

                        {/* ================= DAY 4 ================= */}
                        <div data-aos="fade-up" data-aos-delay="300" className="overflow-hidden rounded-lg border bg-white shadow">
                            <button onClick={() => setDay4(!day4)} className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]">
                                <span>Day 4: Explore Kandy</span>
                                <span>{day4 ? "−" : "+"}</span>
                            </button>
                            {day4 && <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                <p>
                                    Breakfast at Hotel.
                                </p>

                                <p>
                                    Temple of the Sacred Tooth Relic: Visit this UNESCO World Heritage Site. (Visit duration: approx. 1.5 hours)
                                </p>

                                <p>
                                    Peradeniya Botanical Gardens: Enjoy a stroll through Sri Lanka’s largest botanical garden. (Visit duration: approx. 1.5 hours)
                                </p>

                                <p>
                                    Lunch in Kandy.
                                </p>

                                <p>
                                    Kandyan Cultural Show: Experience traditional dances and drumming performances in the evening. (Show duration: approx. 1 hour)
                                </p>

                                <p className="font-semibold text-[#0A3A5E]">
                                    Overnight stay in Kandy.
                                </p>

                            </div>
                            }
                        </div>

                        {/* ================= DAY 5 ================= */}
                        <div data-aos="fade-up" data-aos-delay="300" className="overflow-hidden rounded-lg border bg-white shadow">
                            <button onClick={() => setDay5(!day5)} className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]">
                                <span>Day 5: Kandy to Nuwara Eliya</span>
                                <span>{day5 ? "−" : "+"}</span>
                            </button>
                            {day5 && <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                <p>
                                    Breakfast and Check Out.
                                </p>

                                <p>
                                    Tea Plantation and Factory Tour: Learn about the tea-making process and enjoy a tasting session. (Visit duration: approx. 1 hour)
                                </p>

                                <p>
                                    Transfer to Nuwara Eliya: Approx. 2-hour scenic drive through the hill country.
                                </p>

                                <p>
                                    Gregory Lake: Relax by the lake or enjoy optional activities like boating. (Visit duration: approx. 1 hour)
                                </p>

                                <p className="font-semibold text-[#0A3A5E]">
                                    Overnight stay in Nuwara Eliya.
                                </p>

                            </div>
                            }
                        </div>

                        {/* ================= DAY 6 ================= */}
                        <div data-aos="fade-up" data-aos-delay="300" className="overflow-hidden rounded-lg border bg-white shadow">
                            <button onClick={() => setDay6(!day6)} className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]">
                                <span>Day 6: Nuwara Eliya to Kitulgala</span>
                                <span>{day6 ? "−" : "+"}</span>
                            </button>
                            {day6 && <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                <p>
                                    Breakfast at Hotel.
                                </p>

                                <p>
                                    Visit to a Tea Estate: Experience the beauty of lush tea gardens. (Visit duration: approx. 1 hour)
                                </p>

                                <p>
                                    Transfer to Kitulgala: Approx. 2-hour drive.
                                </p>

                                <p>
                                    Optional White Water Rafting: Experience the thrill of rafting on the Kelani River (subject to water levels). (Duration: approx. 2 hours).
                                </p>

                                <p className="font-semibold text-[#0A3A5E]">
                                    Overnight stay in Kithulgala.
                                </p>

                            </div>
                            }
                        </div>

                        {/* ================= DAY 7 ================= */}
                        <div data-aos="fade-up" data-aos-delay="300" className="overflow-hidden rounded-lg border bg-white shadow">
                            <button onClick={() => setDay7(!day7)} className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]">
                                <span>Day 7: Kitulgala to Bentota</span>
                                <span>{day7 ? "−" : "+"}</span>
                            </button>
                            {day7 && <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                <p>
                                    Breakfast and Check Out.
                                </p>

                                <p>
                                    Explore Kitulgala: Enjoy a morning nature walk or visit local attractions.
                                </p>

                                <p>
                                    Transfer to Bentota: Approx. 2.5-hour drive.
                                </p>

                                <p>
                                    Madu River Safari: Enjoy a boat ride along the Madu River, exploring mangroves and small islands. (Safari duration: approx. 1.5 hours)
                                </p>

                                <p>
                                    Relax at Bentota Beach: Spend the afternoon enjoying the beach or optional water sports. (Relaxation duration: flexible)
                                </p>

                                <p className="font-semibold text-[#0A3A5E]">
                                    Overnight stay in Bentota.
                                </p>

                            </div>
                            }
                        </div>

                        {/* ================= DAY 8 ================= */}
                        <div data-aos="fade-up" data-aos-delay="300" className="overflow-hidden rounded-lg border bg-white shadow">
                            <button onClick={() => setDay8(!day8)} className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]">
                                <span>Day 8: Departure from Colombo</span>
                                <span>{day8 ? "−" : "+"}</span>
                            </button>
                            {day8 && <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                <p>
                                    Transfer to Colombo Airport for Departure: Approx. 2-hour drive.
                                </p>

                            </div>
                            }
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= ROUTE MAP ================= */}
            <section className="bg-white -py-2">
                <div className="mx-auto max-w-7xl px-6">

                    <div
                        className="ch-left mx-auto max-w-5xl"
                        data-aos="fade-right"
                    >
                        <h1
                            data-aos="fade-up"
                            className="mb-6 text-center text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-extrabold leading-tight"
                        >
                            Route
                        </h1>

                        <div className="flex flex-col lg:flex-row gap-6">

                            {/* Map */}
                            <div className="map-container flex-1 overflow-hidden rounded-xl shadow-xl border">
                                <iframe
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    allowFullScreen
                                    src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyBjUk_Sn0lthNO_cpZO9n5hI1lmZPRUB0E
                                    &origin=Colombo,Sri+Lanka
                                    &destination=Colombo,Sri+Lanka
                                    &waypoints=Negombo,Sri+Lanka|Pinnawala,Sri+Lanka|Dambulla,Sri+Lanka|Sigiriya,Sri+Lanka|Kandy,Sri+Lanka|Nuwara+Eliya,Sri+Lanka|Kitulgala,Sri+Lanka|Bentota,Sri+Lanka
                                    &avoid=tolls|highways">
                                </iframe>
                            </div>

                            {/* Route Info */}
                            <div className="route-info w-full h-[100px] lg:w-[300px] flex flex-col items-start gap-3 rounded-lg bg-gray-100 p-5 text-lg shadow">
                                <p><strong>Distance:</strong> 635 km</p>
                                <p><strong>Duration:</strong> 19 hr</p>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* ================= IMPORTANT INFO + CTA ================= */}
            <section className="bg-white py-10">
                <div className="mx-auto max-w-7xl px-6">

                    {/* Important Points */}
                    <div data-aos="fade-up" className="mx-auto max-w-4xl">
                        <h3 className="mb-6 text-center text-2xl font-bold text-[#0A3A5E]">
                            Important points to note
                        </h3>

                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-[#0A3A5E]">◆</span>
                                <p>
                                    After making the payment, any booking cannot be cancelled.
                                    Hence, once the payment is made it will not be refunded.
                                </p>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-[#0A3A5E]">◆</span>
                                <p>
                                    Additional services and excursions that are optional may be provided,
                                    though for an additional charge.
                                </p>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-[#0A3A5E]">◆</span>
                                <p>
                                    The official check-in time at all hotels is at 12:00 pm.
                                </p>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-[#0A3A5E]">◆</span>
                                <p>
                                    The official check-out time at all hotels is at 11:00 am.
                                </p>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-[#0A3A5E]">◆</span>
                                <p>
                                    Visits to wildlife parks will be at one’s own risk. Jeeps and vehicles
                                    available here are without air conditioning and come with basic insurance
                                    covers (not comprehensive as in the case of vehicles used for our tours).
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* CTA Box */}
                    <div
                        data-aos="zoom-in"
                        className="mt-10 w-full rounded-lg bg-gray-100 px-6 py-10 text-center shadow"
                    >
                        <h2 className="mb-6 text-xl sm:text-2xl font-semibold text-gray-800">
                            Experience your dream holiday in Sri Lanka!
                        </h2>

                        <button
                            onClick={() => navigate(`/book-now`)}
                            className="rounded-full bg-[#00A9C7] px-10 py-3 text-white font-semibold transition hover:bg-[#008eaa]">
                            BEGIN YOUR JOURNEY
                        </button>
                    </div>

                    {/* Related Destinations */}
                    <div data-aos="fade-up" className="mt-10 text-left">
                        <h3 className="mb-6 text-xl font-bold text-gray-700">
                            RELATED DESTINATIONS
                        </h3>

                        <div className="flex flex-wrap justify-start gap-3">
                            {[
                                "Colombo",
                                "Negombo",
                                "Pinnawala",
                                "Dambulla",
                                "Sigiriya",
                                "Kandy",
                                "Nuwara Eliya",
                                "Kitulgala",
                                "Bentota"
                            ].map((place, i) => (
                                <span
                                    key={i}
                                    className="rounded-full bg-gray-200 px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-[#0A3A5E] hover:text-white cursor-pointer"
                                >
                                    {place}
                                </span>
                            ))}
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

export default Days8Tour;
