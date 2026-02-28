import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import aboutHero from "../assets/hero1.jpg";

function Contact() {

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
                        Contact Us
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="mt-4 sm:mt-6 max-w-full sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
                    >
                        Contact our team and let us create the perfect Sri Lanka experience for you.
                    </p>
                </div>
            </section>

            {/* ================= MAP & OFFICE INFO ================= */}
            <section className="bg-white py-10 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

                    {/* Google Map */}
                    <div data-aos="fade-right" className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
                        <iframe
                            title="Sanju Tours Location"
                            src="https://www.google.com/maps?q=No%20585/3%20B%2C%20Sudarshana%20Mawatha%2C%20Katunayaka%2C%20Sri%20Lanka&output=embed"
                            className="w-full h-full border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    {/* Office Details */}
                    <div data-aos="fade-left" className="bg-gray-50 rounded-xl shadow-lg p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-[#0b4c7d] mb-6">
                            Sanju Tours (Pvt.) Ltd.
                        </h3>

                        <div className="space-y-6 text-gray-700">

                            {/* Address */}
                            <div>
                                <p className="text-sm font-semibold text-gray-500 mb-1">ADDRESS</p>
                                <p>
                                    No 585/3 B, Sudarshana Mawatha,<br />
                                    Katunayaka,<br />
                                    Sri Lanka.
                                </p>
                            </div>

                            {/* Phone */}
                            <div>
                                <p className="text-sm font-semibold text-gray-500 mb-1">PHONE</p>
                                <p>
                                    +94 74 272 3210 <br />
                                    +94 77 813 0616 <br/>
                                    +94 75 813 0616
                                </p>
                            </div>

                            {/* Email */}
                            <div>
                                <p className="text-sm font-semibold text-gray-500 mb-1">EMAIL</p>
                                <p className="text-[#0b4c7d] font-medium">
                                    sanjutours01@gmail.com
                                </p>
                            </div>

                            {/* Business Hours */}
                            <div>
                                <p className="text-sm font-semibold text-gray-500 mb-1">WORKING HOURS</p>
                                <p>
                                    Monday – Friday: 9.00 AM – 6.00 PM <br />
                                    Saturday: 9.00 AM – 1.00 PM
                                </p>
                            </div>

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

export default Contact;
