import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import aboutHero from "../assets/hero1.jpg";
import aboutTaxi from "../assets/tour3.jpg";

import founderImg from "../assets/founder.jpg";

function About() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="w-full overflow-hidden">

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
                        About Us
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

            {/* ================= FOUNDER SECTION ================= */}
            <section className="w-full bg-gray-50 py-10">
                <div className="mx-auto max-w-7xl px-4">

                    {/* Title */}
                    <div className="mb-12 text-center" data-aos="fade-up">
                        <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
                            MEET OUR FOUNDER
                        </h2>
                        <div className="mt-2 h-1 w-20 bg-black mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">

                        {/* Founder Image */}
                        <div data-aos="fade-right" className="flex justify-center">
                            <img
                                src={founderImg}
                                alt="Founder"
                                className="w-72 h-72 object-cover rounded-full shadow-lg border-4 border-white"
                            />
                        </div>

                        {/* Founder Details */}
                        <div data-aos="fade-left" className="space-y-4 text-gray-700">

                            <h3 className="text-2xl font-bold text-black">
                                Mr. Sanju Perera
                            </h3>

                            <p className="text-sm text-gray-500 font-medium">
                                Founder & Managing Director
                            </p>

                            <p>
                                Sanju Tours was founded with a vision to provide safe, reliable,
                                and high-quality taxi and tour services across Sri Lanka.
                                With years of dedication and hands-on experience in the
                                transport industry, Mr. Sanju has built a trusted brand
                                focused on customer satisfaction.
                            </p>

                            <p>
                                His commitment to professionalism, punctuality, and comfort
                                has helped the company grow from a small cab service in
                                Katunayake into a nationwide travel and tour provider.
                            </p>

                            <p className="italic text-black font-medium">
                                "Our goal is not just to drive you — but to create memorable
                                journeys across Sri Lanka."
                            </p>

                        </div>
                    </div>

                </div>
            </section>

            {/* ================= ABOUT COMPANY SECTION ================= */}
            <section className="w-full bg-white py-10">
                <div className="mx-auto max-w-7xl px-4">

                    {/* Title */}
                    <div className="mb-12 text-left" data-aos="fade-up">
                        <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
                            ABOUT OUR COMPANY
                        </h2>
                        <div className="mt-2 h-1 w-20 bg-black" />
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

                        {/* LEFT IMAGE */}
                        <div data-aos="fade-right">
                            <img
                                src={aboutTaxi}
                                alt="Our Company"
                                className="w-full rounded-md object-cover shadow-md"
                            />
                        </div>

                        {/* RIGHT TEXT */}
                        <div data-aos="fade-left" className="text-gray-700 space-y-4">

                            <p>
                                Sanju Tours is a well-known company which has
                                established a leading standard in all around Sri Lanka for more than
                                3 years. Delivering a safe, comfortable and quick service to our
                                prestige customers is the purpose of our company.
                            </p>

                            <p>
                                We started our journey as a cab service company centralized mainly in
                                Katunayake and now have expanded our business to provide both travels
                                and tours all over the country with a great service.
                            </p>

                            <p className="font-semibold text-black">
                                We have a range of vehicles such as,
                            </p>

                            <ul className="list-disc pl-5 space-y-1">
                                <li>Luxury Cars</li>
                                <li>Luxury Vans</li>
                                <li>KDH Vans</li>
                                <li>AC Busses</li>
                                <li>Non AC Budget Vans</li>
                                <li>Small Cars</li>
                            </ul>

                            <p>
                                All of these vehicles are connected with the newest technology for a
                                low budget. There are several tour packages for you to choose.
                            </p>

                        </div>
                    </div>

                    {/* Reasons */}
                    <div className="mt-16" data-aos="fade-up">
                        <h3 className="mb-4 text-xl font-bold text-black">
                            REASONS FOR CHOOSING US…!!!
                        </h3>

                        <div className="space-y-2 text-gray-700">
                            <p>✔ More services from a single place</p>
                            <p>✔ Fleet of vehicles to choose</p>
                            <p>✔ Safe, comfortable and quality service</p>
                            <p>✔ Experienced & responsible drivers</p>
                        </div>
                    </div>

                    {/* Vision & Mission */}
                    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">

                        <div
                            data-aos="fade-up"
                            className="rounded border p-6 shadow-sm"
                        >
                            <h4 className="mb-2 font-bold text-black">OUR VISION</h4>
                            <p className="text-gray-700">
                                To be a great alternative for both local and international customers
                                when they need us the most.
                            </p>
                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-delay="150"
                            className="rounded border p-6 shadow-sm"
                        >
                            <h4 className="mb-2 font-bold text-black">OUR MISSION</h4>
                            <p className="text-gray-700">
                                To provide a safe, better quality experience to all our valuable
                                customers.
                            </p>
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

export default About;
