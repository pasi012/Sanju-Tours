import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import aboutHero from "../assets/hero1.jpg";

function VehicleRent() {

    const [formData, setFormData] = useState({
        pickup: "",
        drop: "",
        pickupDate: "",
        pickupTime: "",
        returnDate: "",
        returnTime: "",
        vehicle: "",
        passengers: "",
        message: "",
    });

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleWhatsAppBooking = () => {
        const {
            pickup,
            drop,
            pickupDate,
            pickupTime,
            returnDate,
            returnTime,
            vehicle,
            passengers,
            message,
        } = formData;

        const whatsappMessage = `
        🚗 Vehicle Rent Booking Request

        📍 Pickup Location: ${pickup}
        📍 Drop Location: ${drop}

        📅 Pickup Date: ${pickupDate}
        ⏰ Pickup Time: ${pickupTime}

        📅 Return Date: ${returnDate}
        ⏰ Return Time: ${returnTime}

        🚘 Vehicle Type: ${vehicle}
        👥 Passengers: ${passengers}

        📝 Notes: ${message}
        `;

        const encodedMessage = encodeURIComponent(whatsappMessage);
        window.open(`https://wa.me/94742723210?text=${encodedMessage}`, "_blank");
    };

    return (
        <div className="w-full overflow-hidden">

            {/* ================= HERO SECTION ================= */}
            <section className="relative h-[40vh] w-full">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${aboutHero})` }}
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
                    <h1
                        data-aos="fade-up"
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-extrabold leading-tight"
                    >
                        Vehicle Rent
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
                    >
                        Book Your Vehicle Easily
                    </p>
                </div>
            </section>

            {/* ================= VEHICLE RENT FORM ================= */}
            <section className="bg-gray-100 py-16 px-4">
                <div
                    data-aos="fade-up"
                    className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-xl"
                >
                    <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
                        Book a Vehicle
                    </h2>

                    <div className="grid gap-6 md:grid-cols-2">

                        {/* Pickup Location */}
                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                Pickup Location
                            </label>
                            <input
                                type="text"
                                name="pickup"
                                placeholder="Enter pickup location"
                                className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                onChange={handleChange}
                            />
                        </div>

                        {/* Drop Location */}
                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                Drop Location
                            </label>
                            <input
                                type="text"
                                name="drop"
                                placeholder="Enter drop location"
                                className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                onChange={handleChange}
                            />
                        </div>

                        {/* Pickup Date */}
                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                Pickup Date
                            </label>
                            <input
                                type="date"
                                name="pickupDate"
                                className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                onChange={handleChange}
                            />
                        </div>

                        {/* Pickup Time */}
                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                Pickup Time
                            </label>
                            <input
                                type="time"
                                name="pickupTime"
                                className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                onChange={handleChange}
                            />
                        </div>

                        {/* Return Date */}
                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                Return Date
                            </label>
                            <input
                                type="date"
                                name="returnDate"
                                className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                onChange={handleChange}
                            />
                        </div>

                        {/* Return Time */}
                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                Return Time
                            </label>
                            <input
                                type="time"
                                name="returnTime"
                                className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                onChange={handleChange}
                            />
                        </div>

                        {/* Vehicle Type */}
                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                Select Vehicle
                            </label>
                            <select
                                name="vehicle"
                                className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                onChange={handleChange}
                            >
                                <option value="">Choose a vehicle</option>
                                <option>Sedan Car</option>
                                <option>SUV</option>
                                <option>Van (6-10 Pax)</option>
                                <option>Mini Bus</option>
                                <option>Luxury Car</option>
                            </select>
                        </div>

                        {/* Passengers */}
                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                Number of Passengers
                            </label>
                            <input
                                type="number"
                                name="passengers"
                                placeholder="Enter passenger count"
                                className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                onChange={handleChange}
                            />
                        </div>

                    </div>

                    {/* Additional Notes */}
                    <div className="mt-6">
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Additional Notes
                        </label>
                        <textarea
                            name="message"
                            placeholder="Enter special requests or notes"
                            rows="4"
                            className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            onChange={handleChange}
                        />
                    </div>

                    {/* Button */}
                    <div className="mt-8 text-center">
                        <button
                            onClick={handleWhatsAppBooking}
                            className="rounded-full bg-green-500 px-8 py-3 text-lg font-semibold text-white shadow-lg transition hover:bg-green-600"
                        >
                            Book via WhatsApp
                        </button>
                    </div>
                </div>
            </section>

            {/* ================= FLOATING WHATSAPP BUTTON ================= */}
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

export default VehicleRent;