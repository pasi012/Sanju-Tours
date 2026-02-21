import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import aboutHero from "../assets/hero1.jpg";

function TermsAndCondition() {
    useEffect(() => {
        AOS.init({ duration: 900, once: true });
    }, []);

    const items = [
        { id: 1, title: "General Terms & Conditions", desc: `Welcome to Balasooriya Travels provides services...` },
        { id: 2, title: "General Reminder", desc: `The programme is based on the availability...` },
        { id: 3, title: "Hotel Rules and Regulations", desc: `The official check-in time at all hotels...` },
        { id: 4, title: "Booking Your Holiday", desc: `All bookings must be made through...` },
        { id: 5, title: "Payment Policy", desc: `“Services” refers to any one or more...` },
        { id: 6, title: "Amendments to the Itinerary by the Passenger", desc: `After confirmation, if the Client wishes...` },
        { id: 7, title: "General Terms and Conditions", desc: `The rates are net and include all government taxes...` },
        { id: 8, title: "Cancellation Charges", desc: `21 days or less – 100% cancellation charge...` },
        { id: 9, title: "Copyright and Restrictions on Use", desc: `All trademarks, copyright, and other intellectual property...` },
        { id: 10, title: "Privacy Policy", desc: `At Balasooriya Travels, we are committed to protecting the privacy...` }
    ];

    const [active, setActive] = useState(1);
    const activeItem = items.find(i => i.id === active);

    return (
        <div className="w-full bg-gray-50">

            {/* ================= HERO SECTION ================= */}
            <section className="relative h-[40vh] w-full">
                {/* Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${aboutHero})` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
                    <h1
                        data-aos="fade-up"
                        className="mb-4 text-4xl font-extrabold sm:text-5xl md:text-6xl"
                    >
                        Terms And Condition
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="max-w-2xl text-sm text-gray-200 sm:text-base"
                    >
                        Reliable Taxi & Tour Services Across Sri Lanka
                    </p>
                </div>
            </section>

            {/* MAIN */}
            <section className="max-w-7xl mx-auto px-4 py-12" data-aos="fade-up">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* SIDEBAR */}
                    <div className="md:col-span-1 bg-white rounded-xl shadow p-4 space-y-2">
                        {items.map(item => (
                            <button
                                key={item.id}
                                onClick={() => setActive(item.id)}
                                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition
                  ${active === item.id
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-blue-100"
                                    }`}
                            >
                                {item.title}
                            </button>
                        ))}
                    </div>

                    {/* CONTENT */}
                    <div className="md:col-span-3 bg-white rounded-xl shadow p-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">
                            {activeItem?.title}
                        </h2>
                        <h3 className="text-lg font-semibold text-gray-600 mb-4">
                            Description:
                        </h3>

                        <div
                            className="prose max-w-none prose-gray"
                            dangerouslySetInnerHTML={{ __html: activeItem?.desc || "" }}
                        />
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

export default TermsAndCondition;
