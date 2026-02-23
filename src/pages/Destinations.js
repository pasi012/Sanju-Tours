import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Images
import place1 from "../assets/place1.jpg";
import place2 from "../assets/place2.jpg";
import place3 from "../assets/place3.jpg";
import place4 from "../assets/place4.jpg";
import place5 from "../assets/place5.jpg";
import place6 from "../assets/place6.jpg";
import place7 from "../assets/place7.jpg";
import place8 from "../assets/place8.jpg";
import place9 from "../assets/place9.jpg";
import place10 from "../assets/place10.jpg";
import place11 from "../assets/place11.jpg";
import place12 from "../assets/place12.jpg";
import place13 from "../assets/place13.jpg";
import place14 from "../assets/place14.jpg";
import place15 from "../assets/place15.jpg";
import place16 from "../assets/place16.jpg";
import place17 from "../assets/place17.jpg";
import place18 from "../assets/place18.jpg";
import place19 from "../assets/place19.jpg";
import place20 from "../assets/place20.jpg";
import place21 from "../assets/place21.jpg";
import place22 from "../assets/place22.jpg";
import place23 from "../assets/place23.jpg";
import place24 from "../assets/place24.jpg";

import place25 from "../assets/colombo.jpg";
import place26 from "../assets/sigiriya.jpg";
import place27 from "../assets/Kithulgala1.jpg";

import aboutHero from "../assets/hero1.jpg";

function Destinations() {

    const navigate = useNavigate();
    const [visible, setVisible] = useState(6);

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const places = [
        {
            id: "colombo",
            img: place25,
            title: "Colombo",
            desc:
                "Colombo is Sri Lanka’s commercial capital, known for its vibrant city life, coastal views, and mix of colonial charm and modern development...",
        },
        {
            id: "sigiriya",
            img: place26,
            title: "Sigiriya",
            desc:
                "Sigiriya is an ancient rock fortress famous for its stunning frescoes, landscaped gardens, and breathtaking panoramic views from the summit...",
        },
        {
            id: "ella",
            img: place14,
            title: "Ella",
            desc:
                "Ella is a scenic hill-country village known for its lush tea plantations, cool climate, waterfalls, and iconic viewpoints like Ella Rock and Nine Arches Bridge...",
        },
        {
            id: "kithulgala",
            img: place27,
            title: "Kithulgala",
            desc:
                "Kitulgala is a lush rainforest destination famous for white-water rafting, jungle trekking, and its role as the filming location of *The Bridge on the River Kwai*...",
        },
        {
            id: "battalangunduwa",
            img: place1,
            title: "Battalangunduwa Island",
            desc:
                "A small island off Kalpitiya, perfect for beach camping and nature lovers.",
        },
        {
            id: "damro-tea",
            img: place2,
            title: "Damro Tea State",
            desc:
                "Vast lush tea plantations with breathtaking hill country scenery.",
        },
        {
            id: "ambuluwawa",
            img: place3,
            title: "Ambuluwawa",
            desc:
                "A unique mountain tower offering panoramic views of Sri Lanka.",
        },
        {
            id: "pasikuda",
            img: place4,
            title: "Pasikuda",
            desc:
                "Famous for shallow crystal-clear waters and white sandy beaches.",
        },
        {
            id: "nuwara-eliya",
            img: place5,
            title: "Nuwara Eliya",
            desc:
                "Little England of Sri Lanka with cool climate and scenic train rides.",
        },
        {
            id: "adam’s-peak",
            img: place6,
            title: "Adam’s Peak",
            desc:
                "A sacred mountain offering a spiritual and adventurous experience.",
        },
        {
            id: "kalmunai",
            img: place7,
            title: "Kalmunai",
            desc:
                "Sri Lanka is a beautiful destination and offers amazing experiences that will make you fall in love with it.",
        },
        {
            id: "negombo",
            img: place8,
            title: "Negombo",
            desc:
                "Negombo is a modest beach town located just 10km from Bandaranaike International Airport.",
        },
        {
            id: "tangalle",
            img: place9,
            title: "Tangalle",
            desc:
                "Strung out along one of the South’s most stunning stretches of coastline, TANGALLE (or Tangalla) is among the region’s more...",
        },
        {
            id: "pinnawala",
            img: place10,
            title: "Pinnawala",
            desc:
                "Over 15 national parks in Sri Lanka host wild elephants. Pinnawala Elephant Orphanage claims they take care of the orphanages...",
        },
        {
            id: "jaffna",
            img: place11,
            title: "Jaffna",
            desc:
                "Jaffna is a city located on the northern tip of Sri Lanka. It opened its doors to tourism in 2009....",
        },
        {
            id: "diyaluma-falls",
            img: place12,
            title: "Diyaluma Falls",
            desc:
                "The foot of the Diyaluma Falls is located 1-hour away from Ella. This 220-meter high waterfall is the 2nd highest...",
        },
        {
            id: "trincomalee",
            img: place13,
            title: "Trincomalee",
            desc:
                "Trincomalee is a great little town on the east coast of Sri Lanka. Trincomalee offers beautiful white sand and has...",
        },
        {
            id: "mirissa",
            img: place15,
            title: "Mirissa",
            desc:
                "Mirissa is one of the most popular beach destinations in southern Sri Lanka and for a good reason! The area...",
        },
        {
            id: "kandy",
            img: place16,
            title: "Kandy",
            desc:
                "Kandy is a scenic city in central Sri Lanka, famous for the Temple of the Tooth, lush hills, and vibrant cultural festivals...",
        },
        {
            id: "anuradhapura",
            img: place17,
            title: "Anuradhapura",
            desc:
                "A visit to Anuradhapura, one of the country’s ancient capitals, rewards visitors with a glimpse into the past. The area...",
        },
        {
            id: "hikkaduwa",
            img: place18,
            title: "Hikkaduwa",
            desc:
                "Only 90 minutes from Colombo, this beach is all about water sports, surfing, bodyboarding, snorkeling, and scuba diving. All the...",
        },
        {
            id: "yala",
            img: place19,
            title: "Yala",
            desc:
                "Located on the island’s southeast coast, this national park is known for leopard safaris. Leopards are very rare, but the...",
        },
        {
            id: "galle",
            img: place20,
            title: "Galle",
            desc:
                "The city of Galle is about a two-hour drive from Colombo via one of the country’s first modern superhighways. This...",
        },
        {
            id: "udawalawe",
            img: place21,
            title: "Udawalawe",
            desc:
                "This large wildlife park is in the southern part of the country, about an hour’s drive from the city of...",
        },
        {
            id: "arugam-bay",
            img: place22,
            title: "Arugam Bay",
            desc:
                "Arugam Bay is a small coastal town located on the eastern coast of Sri Lanka, facing the Indian Ocean. It...",
        },
        {
            id: "polonnaruwa",
            img: place23,
            title: "Polonnaruwa",
            desc:
                "Polonnaruwa is an ancient city in north-central Sri Lanka, famous for its well-preserved ruins, sacred temples, and impressive stone sculptures...",
        },
        {
            id: "katharagama",
            img: place24,
            title: "Katharagama",
            desc:
                "Kataragama is a popular spiritual and cultural destination in southeastern Sri Lanka, known for its sacred temples and vibrant religious atmosphere...",
        },

    ];

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
                        Destinations
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="max-w-2xl text-sm text-gray-200 sm:text-base"
                    >
                        Best Places to Visit in Sri Lanka
                    </p>
                </div>
            </section>

            {/* ================= PLACES GRID SECTION ================= */}
            <section className="w-full bg-white py-16">
                <div className="mx-auto max-w-7xl px-4">

                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {places.slice(0, visible).map((place, index) => (
                            <div
                                key={place.id}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="overflow-hidden rounded-xl border border-gray-200 shadow-sm transition hover:shadow-lg"
                            >
                                <img
                                    src={place.img}
                                    alt={place.title}
                                    className="h-56 w-full object-cover"
                                />

                                <div className="p-6">
                                    <h3 className="mb-2 text-lg font-bold text-black">
                                        {place.title}
                                    </h3>

                                    <p className="mb-4 text-sm text-gray-600">
                                        {place.desc}
                                    </p>

                                    <button
                                        onClick={() => navigate(`/destinations/${place.id}`)}
                                        className="rounded bg-yellow-400 px-5 py-2 text-sm font-semibold text-black transition hover:bg-yellow-500"
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load More */}
                    {visible < places.length && (
                        <div className="mt-16 text-center">
                            <button
                                onClick={() => setVisible(visible + 6)}
                                className="rounded-lg bg-black px-8 py-3 text-sm font-semibold text-yellow-400 transition hover:bg-gray-900"
                            >
                                Load More
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* ================= WHATSAPP BUTTON ================= */}
            <a
                href="https://wa.me/94705152858"
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

export default Destinations;
