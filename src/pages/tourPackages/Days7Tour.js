import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useNavigate } from "react-router-dom";

import aboutHero from "../../assets/ella1.jpg";

import dhamma from "../../assets/galle.jpg";
import sigiriya from "../../assets/yala-national-park1.jpg";
import kandy from "../../assets/kandy.jpg";
import temple from "../../assets/NuwaraEliya2.jpg";

function Days7Tour() {

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
                        7 Days of Sri Lanka Tour
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
                        This 7-day journey showcases the best of Sri Lanka’s cultural, scenic, and wildlife attractions. Begin your adventure in Sigiriya, where you’ll climb the Lion Rock for panoramic views. In Kandy, discover the sacred Temple of the Tooth and witness traditional Kandyan dances. Travel through the lush tea plantations of Nuwara Eliya and enjoy a scenic train ride to Ella, where breathtaking views and the iconic Nine Arches Bridge await. Explore Yala National Park on a thrilling safari, spotting elephants and leopards in their natural habitat. Finally, relax in the charming coastal town of Galle, exploring its historic fort and scenic views. This tour is perfect for travelers seeking a blend of culture, nature, and adventure in Sri Lanka.
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
                                <p className="text-xl font-bold">7 Days / 6 Nights</p>
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
                                <span>Day 1: Arrival in Colombo & Transfer to Sigiriya</span>
                                <span>{day1 ? "−" : "+"}</span>
                            </button>

                            {day1 && (
                                <div className="space-y-4 px-6 py-6 text-gray-700 leading-relaxed">
                                    <p>
                                        Arrival: Meet and greet at Colombo Airport.
                                    </p>

                                    <p>
                                        Transfer to Sigiriya: Approx. 4-hour drive.
                                    </p>

                                    <p className="font-semibold">Overnight stay in Sigiriya.</p>

                                </div>
                            )}
                        </div>

                        {/* ================= DAY 2 ================= */}
                        <div data-aos="fade-up" data-aos-delay="150" className="overflow-hidden rounded-lg border bg-white shadow">
                            <button
                                onClick={() => setDay2(!day2)}
                                className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]"
                            >
                                <span>Day 2: Explore Sigiriya & Transfer to Kandy</span>
                                <span>{day2 ? "−" : "+"}</span>
                            </button>

                            {day2 && (
                                <div className="space-y-4 px-6 py-6 text-gray-700 leading-relaxed">
                                    <p>
                                        Breakfast at Hotel.
                                    </p>

                                    <p>
                                        Sigiriya Rock Fortress: Climb the Lion Rock for stunning views and explore ancient frescoes. (Visit duration: approx. 3 hours)
                                    </p>

                                    <p>
                                        Lunch in Sigiriya.
                                    </p>

                                    <p>
                                        Transfer to Kandy: Approx. 2.5-hour drive.
                                    </p>

                                    <p>
                                        Kandyan Cultural Show: Experience traditional Kandyan dances and drumming performances. (Show duration: approx. 1 hour)
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
                                <span>Day 3: Explore Kandy and Transfer to Nuwara Eliya</span>
                                <span>{day3 ? "−" : "+"}</span>
                            </button>

                            {day3 && (
                                <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                    <p>
                                        Breakfast at Hotel.
                                    </p>

                                    <p>
                                        Temple of the Sacred Tooth Relic: Visit this UNESCO World Heritage Site. (Visit duration: approx. 1.5 hours)
                                    </p>

                                    <p>
                                        Peradeniya Botanical Gardens: Walk through Sri Lanka’s largest botanical garden. (Visit duration: approx. 1.5 hours)
                                    </p>

                                    <p>
                                        Lunch in Kandy.
                                    </p>

                                    <p>
                                        Scenic Drive to Nuwara Eliya: Approx. 2.5-hour drive.
                                    </p>

                                    <p className="font-semibold text-[#0A3A5E]">
                                        Overnight stay in Nuwara Eliya.
                                    </p>

                                </div>
                            )}
                        </div>

                        {/* ================= DAY 4 ================= */}
                        <div data-aos="fade-up" data-aos-delay="300" className="overflow-hidden rounded-lg border bg-white shadow">
                            <button onClick={() => setDay4(!day4)} className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]">
                                <span>Day 4: Train Ride from Nuwara Eliya to Ella</span>
                                <span>{day4 ? "−" : "+"}</span>
                            </button>
                            {day4 && <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                <p>
                                    Breakfast and Check Out.
                                </p>

                                <p>
                                    Scenic Train Ride to Ella: Board a train from Nuwara Eliya to Ella, enjoying stunning views of the lush hill country. (Journey duration: approx. 3 hours)
                                </p>

                                <p>
                                    Driver Pick-Up: Your driver will meet you at Ella Station with your luggage.
                                </p>

                                <p>
                                    Nine Arches Bridge: Visit the famous bridge for photos and scenic views. (Visit duration: approx. 1 hour)
                                </p>

                                <p className="font-semibold text-[#0A3A5E]">
                                    Overnight stay in Ella.
                                </p>

                            </div>
                            }
                        </div>

                        {/* ================= DAY 5 ================= */}
                        <div data-aos="fade-up" data-aos-delay="300" className="overflow-hidden rounded-lg border bg-white shadow">
                            <button onClick={() => setDay5(!day5)} className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]">
                                <span>Day 5: Ella to Yala</span>
                                <span>{day5 ? "−" : "+"}</span>
                            </button>
                            {day5 && <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                <p>
                                    Breakfast at Hotel.
                                </p>

                                <p>
                                    Little Adam’s Peak: Enjoy a light hike with scenic views of Ella’s lush landscapes. (Hike duration: approx. 1.5 hours)
                                </p>

                                <p>
                                    Lunch in Ella.
                                </p>

                                <p>
                                    Transfer to Yala: Approx. 2.5-hour drive.
                                </p>

                                <p className="font-semibold text-[#0A3A5E]">
                                    Overnight stay in Yala.
                                </p>

                            </div>
                            }
                        </div>

                        {/* ================= DAY 6 ================= */}
                        <div data-aos="fade-up" data-aos-delay="300" className="overflow-hidden rounded-lg border bg-white shadow">
                            <button onClick={() => setDay6(!day6)} className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]">
                                <span>Day 6: Yala Safari & Transfer to Galle</span>
                                <span>{day6 ? "−" : "+"}</span>
                            </button>
                            {day6 && <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

                                <p>
                                    Early Morning Safari: Embark on a jeep safari in Yala National Park to spot elephants, leopards, and other wildlife. (Safari duration: approx. 3 hours)
                                </p>

                                <p>
                                    Return to Hotel for Breakfast and Check Out.
                                </p>

                                <p>
                                    Drive to Galle: Approx. 3-hour drive.
                                </p>

                                <p>
                                    Lunch en route.
                                </p>

                                <p>
                                    Galle Fort: Explore this UNESCO World Heritage Site with colonial architecture, shops, and coastal views. (Visit duration: approx. 1.5 hours)
                                </p>

                                <p className="font-semibold text-[#0A3A5E]">
                                    Overnight stay in Galle.
                                </p>

                            </div>
                            }
                        </div>

                        {/* ================= DAY 7 ================= */}
                        <div data-aos="fade-up" data-aos-delay="300" className="overflow-hidden rounded-lg border bg-white shadow">
                            <button onClick={() => setDay7(!day7)} className="flex w-full items-center justify-between bg-gray-100 px-6 py-5 text-left font-semibold text-[#0A3A5E]">
                                <span>Day 7: Departure from Colombo</span>
                                <span>{day7 ? "−" : "+"}</span>
                            </button>
                            {day7 && <div className="space-y-5 px-6 py-6 text-gray-700 leading-relaxed">

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
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    allowFullScreen
                                    src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyBjUk_Sn0lthNO_cpZO9n5hI1lmZPRUB0E
                                    &origin=Colombo,Sri+Lanka
                                    &destination=Colombo,Sri+Lanka
                                    &waypoints=Sigiriya,Sri+Lanka|Kandy,Sri+Lanka|Nuwara+Eliya,Sri+Lanka|Ella,Sri+Lanka|Yala,Sri+Lanka|Galle,Sri+Lanka
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
                                "Sigiriya",
                                "Kandy",
                                "Nuwara Eliya",
                                "Ella",
                                "Yala",
                                "Galle"
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

export default Days7Tour;
