import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import aboutHero from "../assets/hero1.jpg";

function Contact() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        nationality: "",
        country: "",
        adults: "",
        children: "",
        infants: "",
        arrival: "",
        departure: "",
        package: "",
        pickup: "",
        drop: "",
        source: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const whatsappNumber = "94742723210"; // Your Sanju Tours WhatsApp

        const text = `
            New Tour Inquiry 🌴

            Name: ${formData.name}
            Phone: ${formData.phone}
            Email: ${formData.email}
            Nationality: ${formData.nationality}
            Country: ${formData.country}

            Adults: ${formData.adults}
            Children: ${formData.children}
            Infants: ${formData.infants}

            Arrival Date: ${formData.arrival}
            Departure Date: ${formData.departure}

            Tour Package: ${formData.package}
            Pick Up: ${formData.pickup}
            Drop: ${formData.drop}

            Found via: ${formData.source}

            Subject: ${formData.subject}
            Message: ${formData.message}
            `;

        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

        window.open(url, "_blank");
    };


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

            {/* ================= CONTACT FORM SECTION ================= */}
            <section className="bg-gray-100 py-10 px-4">
                <div className="max-w-5xl mx-auto">

                    {/* Title */}
                    <div className="text-center mb-12">
                        <p
                            data-aos="fade-up"
                            data-aos-delay="150"
                            className="mt-4 text-gray-600 max-w-2xl mx-auto"
                        >
                            Come join Sanju Tours and discover the wonders of Sri Lanka — an enchanting island that offers something new with every visit. With our local expertise and personalized service, we create tour experiences tailored to your interests while showcasing the very best the island has to offer.
                        </p>
                    </div>

                    {/* Form Card */}
                    <div
                        data-aos="fade-up"
                        className="bg-white rounded-xl shadow-xl p-8 md:p-12"
                    >
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Name */}
                            <div>
                                <label className="text-sm font-medium">Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full mt-2 p-3 rounded-full border"
                                    placeholder="Enter your name"
                                />
                            </div>

                            {/* Contact */}
                            <div>
                                <label className="text-sm font-medium">Contact Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full mt-2 p-3 rounded-full border"
                                    placeholder="+94..."
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="text-sm font-medium">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full mt-2 p-3 rounded-full border"
                                    placeholder="example@email.com"
                                />
                            </div>

                            {/* Nationality */}
                            <div>
                                <label className="text-sm font-medium">Nationality *</label>
                                <select
                                    required
                                    name="nationality"
                                    value={formData.nationality}
                                    onChange={handleChange}
                                    className="w-full mt-2 p-3 rounded-full border"
                                >
                                    <option value="">Select</option>
                                    <option>Local</option>
                                    <option>Foreign</option>
                                </select>
                            </div>

                            {/* Country */}
                            <div className="md:col-span-2">
                                <label className="text-sm font-medium">Country *</label>
                                <select
                                    required
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className="w-full mt-2 p-3 rounded-full border"
                                >
                                    <option>Select country</option>
                                    <option>Afghanistan</option>
                                    <option>Albania</option>
                                    <option>Algeria</option>
                                    <option>Andorra</option>
                                    <option>Angola</option>
                                    <option>Antigua and Barbuda</option>
                                    <option>Argentina</option>
                                    <option>Armenia</option>
                                    <option>Australia</option>
                                    <option>Austria</option>
                                    <option>Azerbaijan</option>
                                    <option>Bahamas</option>
                                    <option>Bahrain</option>
                                    <option>Bangladesh</option>
                                    <option>Barbados</option>
                                    <option>Belarus</option>
                                    <option>Belgium</option>
                                    <option>Belize</option>
                                    <option>Benin</option>
                                    <option>Bhutan</option>
                                    <option>Bolivia</option>
                                    <option>Bosnia and Herzegovina</option>
                                    <option>Botswana</option>
                                    <option>Brazil</option>
                                    <option>Brunei</option>
                                    <option>Bulgaria</option>
                                    <option>Burkina Faso</option>
                                    <option>Burundi</option>
                                    <option>Cambodia</option>
                                    <option>Cameroon</option>
                                    <option>Canada</option>
                                    <option>Cape Verde</option>
                                    <option>Central African Republic</option>
                                    <option>Chad</option>
                                    <option>Chile</option>
                                    <option>China</option>
                                    <option>Colombia</option>
                                    <option>Comoros</option>
                                    <option>Congo</option>
                                    <option>Costa Rica</option>
                                    <option>Croatia</option>
                                    <option>Cuba</option>
                                    <option>Cyprus</option>
                                    <option>Czech Republic</option>
                                    <option>Denmark</option>
                                    <option>Djibouti</option>
                                    <option>Dominica</option>
                                    <option>Dominican Republic</option>
                                    <option>Ecuador</option>
                                    <option>Egypt</option>
                                    <option>El Salvador</option>
                                    <option>Equatorial Guinea</option>
                                    <option>Eritrea</option>
                                    <option>Estonia</option>
                                    <option>Eswatini</option>
                                    <option>Ethiopia</option>
                                    <option>Fiji</option>
                                    <option>Finland</option>
                                    <option>France</option>
                                    <option>Gabon</option>
                                    <option>Gambia</option>
                                    <option>Georgia</option>
                                    <option>Germany</option>
                                    <option>Ghana</option>
                                    <option>Greece</option>
                                    <option>Grenada</option>
                                    <option>Guatemala</option>
                                    <option>Guinea</option>
                                    <option>Guinea-Bissau</option>
                                    <option>Guyana</option>
                                    <option>Haiti</option>
                                    <option>Honduras</option>
                                    <option>Hungary</option>
                                    <option>Iceland</option>
                                    <option>India</option>
                                    <option>Indonesia</option>
                                    <option>Iran</option>
                                    <option>Iraq</option>
                                    <option>Ireland</option>
                                    <option>Israel</option>
                                    <option>Italy</option>
                                    <option>Jamaica</option>
                                    <option>Japan</option>
                                    <option>Jordan</option>
                                    <option>Kazakhstan</option>
                                    <option>Kenya</option>
                                    <option>Kiribati</option>
                                    <option>Kuwait</option>
                                    <option>Kyrgyzstan</option>
                                    <option>Laos</option>
                                    <option>Latvia</option>
                                    <option>Lebanon</option>
                                    <option>Lesotho</option>
                                    <option>Liberia</option>
                                    <option>Libya</option>
                                    <option>Liechtenstein</option>
                                    <option>Lithuania</option>
                                    <option>Luxembourg</option>
                                    <option>Madagascar</option>
                                    <option>Malawi</option>
                                    <option>Malaysia</option>
                                    <option>Maldives</option>
                                    <option>Mali</option>
                                    <option>Malta</option>
                                    <option>Marshall Islands</option>
                                    <option>Mauritania</option>
                                    <option>Mauritius</option>
                                    <option>Mexico</option>
                                    <option>Micronesia</option>
                                    <option>Moldova</option>
                                    <option>Monaco</option>
                                    <option>Mongolia</option>
                                    <option>Montenegro</option>
                                    <option>Morocco</option>
                                    <option>Mozambique</option>
                                    <option>Myanmar</option>
                                    <option>Namibia</option>
                                    <option>Nauru</option>
                                    <option>Nepal</option>
                                    <option>Netherlands</option>
                                    <option>New Zealand</option>
                                    <option>Nicaragua</option>
                                    <option>Niger</option>
                                    <option>Nigeria</option>
                                    <option>North Korea</option>
                                    <option>North Macedonia</option>
                                    <option>Norway</option>
                                    <option>Oman</option>
                                    <option>Pakistan</option>
                                    <option>Palau</option>
                                    <option>Panama</option>
                                    <option>Papua New Guinea</option>
                                    <option>Paraguay</option>
                                    <option>Peru</option>
                                    <option>Philippines</option>
                                    <option>Poland</option>
                                    <option>Portugal</option>
                                    <option>Qatar</option>
                                    <option>Romania</option>
                                    <option>Russia</option>
                                    <option>Rwanda</option>
                                    <option>Saint Kitts and Nevis</option>
                                    <option>Saint Lucia</option>
                                    <option>Saint Vincent and the Grenadines</option>
                                    <option>Samoa</option>
                                    <option>San Marino</option>
                                    <option>Sao Tome and Principe</option>
                                    <option>Saudi Arabia</option>
                                    <option>Senegal</option>
                                    <option>Serbia</option>
                                    <option>Seychelles</option>
                                    <option>Sierra Leone</option>
                                    <option>Singapore</option>
                                    <option>Slovakia</option>
                                    <option>Slovenia</option>
                                    <option>Solomon Islands</option>
                                    <option>Somalia</option>
                                    <option>South Africa</option>
                                    <option>South Korea</option>
                                    <option>South Sudan</option>
                                    <option>Spain</option>
                                    <option>Sri Lanka</option>
                                    <option>Sudan</option>
                                    <option>Suriname</option>
                                    <option>Sweden</option>
                                    <option>Switzerland</option>
                                    <option>Syria</option>
                                    <option>Taiwan</option>
                                    <option>Tajikistan</option>
                                    <option>Tanzania</option>
                                    <option>Thailand</option>
                                    <option>Togo</option>
                                    <option>Tonga</option>
                                    <option>Trinidad and Tobago</option>
                                    <option>Tunisia</option>
                                    <option>Turkey</option>
                                    <option>Turkmenistan</option>
                                    <option>Tuvalu</option>
                                    <option>Uganda</option>
                                    <option>Ukraine</option>
                                    <option>United Arab Emirates</option>
                                    <option>United Kingdom</option>
                                    <option>United States</option>
                                    <option>Uruguay</option>
                                    <option>Uzbekistan</option>
                                    <option>Vanuatu</option>
                                    <option>Vatican City</option>
                                    <option>Venezuela</option>
                                    <option>Vietnam</option>
                                    <option>Yemen</option>
                                    <option>Zambia</option>
                                    <option>Zimbabwe</option>
                                </select>
                            </div>

                            {/* Adults */}
                            <div>
                                <label className="text-sm font-medium">Adults *</label>
                                <select
                                    name="adults"
                                    value={formData.adults}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 p-3 rounded-full border"
                                >
                                    <option>Please select</option>
                                    {[...Array(10)].map((_, i) => (
                                        <option key={i}>{i + 1}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Children */}
                            <div>
                                <label className="text-sm font-medium">Children (3–11)</label>
                                <select
                                    name="children"
                                    required
                                    value={formData.children}
                                    onChange={handleChange}
                                    className="w-full mt-2 p-3 rounded-full border"
                                >
                                    <option>Please select</option>
                                    {[...Array(11)].map((_, i) => (
                                        <option key={i}>{i}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Infants */}
                            <div>
                                <label className="text-sm font-medium">Infants (0–3)</label>
                                <select
                                    name="infants"
                                    required
                                    value={formData.infants}
                                    onChange={handleChange}
                                    className="w-full mt-2 p-3 rounded-full border"
                                >
                                    <option>Please select</option>
                                    {[...Array(11)].map((_, i) => (
                                        <option key={i}>{i}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Arrival */}
                            <div>
                                <label className="text-sm font-medium">Arrival Date *</label>
                                <input
                                    type="date"
                                    required
                                    name="arrival"
                                    value={formData.arrival}
                                    onChange={handleChange}
                                    className="w-full mt-2 p-3 rounded-full border"
                                />
                            </div>

                            {/* Departure Date */}
                            <div>
                                <label className="text-sm font-medium">Departure Date *</label>
                                <input
                                    type="date"
                                    required
                                    name="departure"
                                    value={formData.departure}
                                    onChange={handleChange}
                                    className="w-full mt-2 p-3 rounded-full border"
                                />
                            </div>

                            {/* Tour Package */}
                            <div className="md:col-span-2">
                                <label className="text-sm font-medium">Select Tour Package *</label>
                                <select
                                    required
                                    name="package"
                                    value={formData.package}
                                    onChange={handleChange}
                                    className="w-full mt-2 p-3 rounded-full border"
                                >
                                    <option value="">Select package</option>
                                    <option>21-Days Sri Lanka Grand Tour</option>
                                    <option>15-Days Sri Lanka Tour</option>
                                    <option>8-Days Sri Lanka Tour</option>
                                    <option>5-Days Sri Lanka Tour</option>
                                    <option>7-Days Sri Lanka Tour</option>
                                    <option>10-Days Sri Lanka Tour</option>
                                </select>
                            </div>

                            {/* Pick up place */}
                            <div>
                                <label className="text-sm font-medium">Pick Up Place *</label>
                                <input
                                    type="text"
                                    required
                                    name="pickup"
                                    value={formData.pickup}
                                    onChange={handleChange}
                                    className="w-full mt-2 p-3 rounded-full border"
                                    placeholder="Airport / Hotel"
                                />
                            </div>

                            {/* Drop place */}
                            <div>
                                <label className="text-sm font-medium">Drop Place *</label>
                                <input
                                    type="text"
                                    required
                                    name="drop"
                                    value={formData.drop}
                                    onChange={handleChange}
                                    className="w-full mt-2 p-3 rounded-full border"
                                    placeholder="Airport / Hotel"
                                />
                            </div>

                            {/* How did you find us */}
                            <div className="md:col-span-2">
                                <label className="text-sm font-medium">How did you find us *</label>
                                <select
                                    name="source"
                                    required
                                    value={formData.source}
                                    onChange={handleChange}
                                    className="w-full mt-2 p-3 rounded-full border"
                                >
                                    <option>Please select</option>
                                    <option>Google</option>
                                    <option>Facebook</option>
                                    <option>Instagram</option>
                                    <option>Friend</option>
                                </select>
                            </div>

                            {/* Subject */}
                            <div className="md:col-span-2">
                                <label className="text-sm font-medium">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full mt-2 p-3 rounded-full border"
                                />
                            </div>

                            {/* Message */}
                            <div className="md:col-span-2">
                                <label className="text-sm font-medium">Comments / Inquiries</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="w-full mt-2 p-4 rounded-xl border"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>

                            {/* Buttons */}
                            <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 justify-center mt-6">
                                <button
                                    type="submit"
                                    className="bg-[#0b4c7d] text-white px-10 py-3 rounded-full hover:bg-blue-800 transition"
                                >
                                    Submit
                                </button>

                                <button
                                    type="reset"
                                    className="bg-gray-700 text-white px-10 py-3 rounded-full hover:bg-gray-900 transition"
                                >
                                    Reset
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </section>

            {/* ================= MAP & OFFICE INFO ================= */}
            <section className="bg-white py-10 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

                    {/* Google Map */}
                    <div data-aos="fade-right" className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
                        <iframe
                            title="Sanju Tours Location"
                            src="https://www.google.com/maps?q=384/121%20Wakwella%20Road%2C%20Galle%2080000%2C%20Sri%20Lanka&output=embed"
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
                                    No. 384/121, Wakwella Road,<br />
                                    Galle,<br />
                                    Sri Lanka.
                                </p>
                            </div>

                            {/* Phone */}
                            <div>
                                <p className="text-sm font-semibold text-gray-500 mb-1">PHONE</p>
                                <p>
                                    +94 74 272 3210 <br />
                                    +94 77 062 4272
                                </p>
                            </div>

                            {/* Email */}
                            <div>
                                <p className="text-sm font-semibold text-gray-500 mb-1">EMAIL</p>
                                <p className="text-[#0b4c7d] font-medium">
                                    sudeshperera666@gmail.com
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
