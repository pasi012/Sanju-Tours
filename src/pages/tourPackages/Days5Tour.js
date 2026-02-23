import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useNavigate } from "react-router-dom";

import aboutHero from "../../assets/Negombo1.jpg";

import dhamma from "../../assets/Negombo2.jpg";
import sigiriya from "../../assets/Udawalawe1.jpg";
import kandy from "../../assets/Kandy1.jpg";
import temple from "../../assets/sigiriya3.jpg";

function Days5Tour() {

    const navigate = useNavigate();

    const images = [dhamma, sigiriya, kandy, temple];

    const [selectedImage, setSelectedImage] = useState(images[0]);

    const [day1, setDay1] = useState(true);
    const [day2, setDay2] = useState(false);
    const [day3, setDay3] = useState(false);
    const [day4, setDay4] = useState(false);
    const [day5, setDay5] = useState(false);

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
                        5 Days of Sri Lanka Tour
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
                        Discover the enchanting beauty and rich heritage of Sri Lanka on this 5-day adventure. Begin your journey in Kandy, where you will be greeted at Colombo Airport and transferred through picturesque landscapes. Visit the Temple of the Sacred Tooth Relic, a UNESCO World Heritage Site, and explore the stunning Peradeniya Botanical Gardens.

                        Experience the art of tea-making at a local tea factory and immerse yourself in the vibrant culture of Kandy with a traditional Kandyan Cultural Show. Travel to Sigiriya, where you’ll climb the iconic Sigiriya Rock Fortress and engage in a traditional village tour, including a bullock cart ride and cooking demonstration.

                        Embark on an exhilarating safari in Minneriya National Park, where you can observe elephants and diverse wildlife in their natural habitat. Finally, unwind at the beautiful beaches of Negombo before concluding your tour with a departure from Colombo Airport. This tour is perfect for those seeking a blend of cultural experiences, nature, and relaxation in the heart of Sri Lanka.
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
                                <p className="text-xl font-bold">5 Days</p>
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
                                <span>Day 1: Arrival in Colombo & Transfer to Kandy</span>
                                <span>{day1 ? "−" : "+"}</span>
                            </button>

                            {day1 && (
                                <div className="space-y-4 px-6 py-6 text-gray-700 leading-relaxed">
                                    <p>
                                        Arrival: Meet and greet at Colombo Airport.
                                    </p>

                                    <p>
                                        Transfer to Kandy: Approx. 3-hour drive.
                                    </p>

                                    <p className="font-semibold">Overnight stay in Kandy.</p>

                                </div>
                            )}
                        </div>

                        {/* ================= DAY 2 ================= */}
                        <div data-aos="fade-up" data-aos-delay="150" className="overflow-hidden rounded-lg border bg-white shadow">
                            <button
                                onClick={() => setDay2(!day2)}
                                className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]"
                            >
                                <span>Day 2: Explore Kandy and Surroundings</span>
                                <span>{day2 ? "−" : "+"}</span>
                            </button>

                            {day2 && (
                                <div className="space-y-4 px-6 py-6 text-gray-700 leading-relaxed">
                                    <p>
                                        Breakfast at Hotel.
                                    </p>

                                    <p>
                                        Temple of the Sacred Tooth Relic: Discover the history of this UNESCO World Heritage Site. (Visit duration: approx. 2 hours)
                                    </p>

                                    <p>
                                        Peradeniya Botanical Gardens: Enjoy a relaxing stroll through Sri Lanka’s largest botanical garden. (Visit duration: approx. 1.5 hours)
                                    </p>

                                    <p>
                                        Lunch at a local restaurant.
                                    </p>

                                    <p>
                                        Tea Factory Tour: Experience the tea-making process with tasting sessions. (Visit duration: approx. 1 hour)
                                    </p>

                                    <p>
                                        Kandyan Cultural Show: Traditional dances and drumming performances in the evening. (Show duration: approx. 1 hour)
                                    </p>

                                    <p className="font-semibold">Overnight stay in Kandy.</p>

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
                                <span>Day 3: Kandy to Sigiriya via Dambulla</span>
                                <span>{day3 ? "−" : "+"}</span>
                            </button>

                            {day3 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Breakfast and Check Out.
                                    </p>

                                    <p>
                                        Drive to Dambulla Cave Temple: Approx. 1.5-hour drive.
                                    </p>

                                    <p>
                                        Dambulla Cave Temple: Explore the ancient rock temple with intricate statues and murals. (Visit duration: approx. 1.5 hours)
                                    </p>

                                    <p>
                                        Lunch en route.
                                    </p>

                                    <p>
                                        Sigiriya Rock Fortress: Climb the Lion Rock for panoramic views. (Climb and explore duration: approx. 3 hours)
                                    </p>

                                    <p>
                                        Village Tour in Sigiriya: Experience traditional village life, including a bullock cart ride and cooking demonstration. (Tour duration: approx. 1.5 hours)
                                    </p>

                                    <p className="font-semibold text-[#0A3A5E]">
                                        Overnight stay in Sigiriya.
                                    </p>

                                </div>
                            )}
                        </div>

                        {/* ================= DAY 4 ================= */}
                        <div data-aos="fade-up" data-aos-delay="300" className="overflow-hidden rounded-lg border bg-white shadow">
                            <button onClick={() => setDay4(!day4)} className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]">
                                <span>Day 4: Minneriya Safari & Travel to Negombo</span>
                                <span>{day4 ? "−" : "+"}</span>
                            </button>
                            {day4 && <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                <p>
                                    Early Breakfast.
                                </p>

                                <p>
                                    Minneriya National Park Safari: Embark on a jeep safari to see elephants and other wildlife. (Safari duration: approx. 3 hours)
                                </p>

                                <p>
                                    Lunch near Minneriya.
                                </p>

                                <p>
                                    Drive to Negombo: Approx. 3.5-hour drive.
                                </p>

                                <p>
                                    Relax at Negombo Beach: Enjoy the peaceful beach setting and unwind.
                                </p>

                                <p className="font-semibold text-[#0A3A5E]">
                                    Overnight stay in Negombo.
                                </p>

                            </div>
                            }
                        </div>

                        {/* ================= DAY 5 ================= */}
                        <div data-aos="fade-up" data-aos-delay="300" className="overflow-hidden rounded-lg border bg-white shadow">
                            <button onClick={() => setDay5(!day5)} className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]">
                                <span>Day 5: Departure from Colombo</span>
                                <span>{day5 ? "−" : "+"}</span>
                            </button>
                            {day5 && <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                <p>
                                    Transfer to Colombo Airport for Departure.
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
                                    style={{ border: 0 }}  // ✅ style is an object
                                    loading="lazy"
                                    allowFullScreen        // notice the camelCase in React
                                    src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyBjUk_Sn0lthNO_cpZO9n5hI1lmZPRUB0E
                                    &origin=Colombo,Sri+Lanka
                                    &destination=Colombo,Sri+Lanka
                                    &waypoints=Kandy,Sri+Lanka|Dambulla,Sri+Lanka|Sigiriya,Sri+Lanka|Minneriya,Sri+Lanka|Negombo,Sri+Lanka
                                    &avoid=tolls|highways`}
                                />
                            </div>

                            {/* Route Info */}
                            <div className="route-info w-full h-[100px] lg:w-[300px] flex flex-col items-start gap-3 rounded-lg bg-gray-100 p-5 text-lg shadow">
                                <p><strong>Distance:</strong> 450 km</p>
                                <p><strong>Duration:</strong> 13 hr</p>
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
                                "Kandy",
                                "Dambulla",
                                "Sigiriya",
                                "Minneriya",
                                "Negombo"
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

export default Days5Tour;
