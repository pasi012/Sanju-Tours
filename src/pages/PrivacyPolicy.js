import React, { useEffect } from "react";

import aboutHero from "../assets/hero1.jpg";

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
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
                        Privacy Policy
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

            {/* Content */}
            <div className="max-w-5xl mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    PRIVACY POLICY
                </h2>

                <p className="text-gray-600 leading-relaxed mb-8">
                    At Sanju Tours, we are committed to protecting the privacy and
                    security of our clients’ personal information. This Privacy Policy
                    outlines how we collect, use, and safeguard your information when
                    you visit our website or make an inquiry. By using our website,
                    you consent to the practices described in this policy.
                </p>

                {/* Section 1 */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        1. Information We Collect
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        When you visit our website or make an inquiry, we may collect
                        certain information about you, including personal identification
                        information (such as your name, email address, phone number),
                        travel-related details, and browsing information such as IP
                        address, browser type, and device information collected using
                        cookies.
                    </p>
                </div>

                {/* Section 2 */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        2. Use of Information
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        We use the collected information to respond to inquiries,
                        process bookings, communicate travel details, improve our
                        services, enhance user experience, and detect or prevent
                        unauthorized activities.
                    </p>
                </div>

                {/* Section 3 */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        3. Information Sharing
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        We respect your privacy and do not sell or trade your personal
                        information without consent, except in specific circumstances.
                    </p>
                </div>

                {/* Section 4 */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        4. Trusted Service Providers
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        We may share information with trusted third-party service
                        providers involved in bookings, payments, and service delivery.
                        These providers are required to keep your data secure and
                        confidential.
                    </p>
                </div>

                {/* Section 5 */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        5. Legal Requirements
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        We may disclose your information when required by law or in
                        response to valid legal requests.
                    </p>
                </div>

                {/* Section 6 */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        6. Data Security
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        We implement industry-standard security measures to protect your
                        personal information. However, no method of online transmission
                        is completely secure.
                    </p>
                </div>

                {/* Section 7 */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        7. Cookies and Tracking Technologies
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        Cookies help us enhance browsing experience and analyze traffic.
                        You can disable cookies in your browser settings, but some
                        features may not function properly.
                    </p>
                </div>

                {/* Section 8 */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        8. Changes to the Privacy Policy
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        We may update this Privacy Policy from time to time. Changes
                        will be posted on this page with an updated date.
                    </p>
                </div>

                {/* Contact */}
                <div className="mt-12 p-6 bg-white rounded-xl shadow">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                        Contact Us
                    </h3>
                    <p className="text-gray-600 mb-3">
                        If you have any questions or concerns regarding this Privacy
                        Policy, please contact us.
                    </p>
                    <p className="text-blue-600 font-medium">
                        📧{" "}
                        <a
                            href="mailto:sanjutours01@gmail.com"
                            className="hover:underline"
                        >
                            sanjutours01@gmail.com
                        </a>
                    </p>
                </div>
            </div>

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
};

export default PrivacyPolicy;
