import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useNavigate } from "react-router-dom";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import hero1 from "../assets/Kithulgala1.jpg";
import hero2 from "../assets/yala-national-park2.jpg";
import hero3 from "../assets/train-sri-lanka.jpg";
import hero4 from "../assets/Pasikuda.jpg";

import pkg1 from "../assets/kalpitiya1.jpg";
import pkg2 from "../assets/Beaches & Sunsets.jpg";
import pkg3 from "../assets/Gal-oya-national-park1.jpg";

import galleryBg from "../assets/galle.jpg";

import g1 from "../assets/gallery1.jpg";
import g2 from "../assets/gallery2.jpg";
import g3 from "../assets/gallery3.jpg";
import g4 from "../assets/gallery4.jpg";
import g5 from "../assets/gallery8.jpg";
import g6 from "../assets/gallery6.jpg";
import g7 from "../assets/gallery9.jpg";
import g8 from "../assets/gallery11.jpg";

import discoverImg from "../assets/Arugam Bay2.jpg";

import destination1 from "../assets/colombo.jpg";
import destination2 from "../assets/sigiriya.jpg";
import destination3 from "../assets/ella.jpg";

import luxuryCar from "../assets/Toyota Axio.jpg";
import van from "../assets/toyota-kdh-highroof.jpg";
import bus from "../assets/rosa bus.jpg";

function Home() {

  const navigate = useNavigate();

  const [reviewIndex, setReviewIndex] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState(0);

  const heroSlides = [hero1, hero2, hero3, hero4];
  const galleryImages = [g1, g2, g3, g4, g5, g6, g7, g8];

  const places = [
    {
      id: 1,
      name: "Negombo",
      position: [7.2083, 79.8358],
      description:
        "Negombo is a charming coastal town famous for its golden beaches, traditional fishing villages and peaceful lagoon. Located just minutes from Sri Lanka’s international airport, Negombo is the perfect place to relax after a long flight or to begin your Sri Lankan adventure. Enjoy fresh seafood, boat rides, and beautiful sunsets over the Indian Ocean.",
      image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/be/ac/b8.jpg",
    },
    {
      id: 2,
      name: "Kalpitiya",
      position: [8.2297, 79.7182],
      description:
        "Kalpitiya is a tropical paradise on Sri Lanka’s northwest coast, famous for dolphin and whale watching, pristine beaches and exciting kitesurfing experiences. The calm lagoons and untouched shores make it ideal for nature lovers and adventure seekers alike.",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/23/d9/ca/nearly-1600-km-os-beaches.jpg?w=1000&h=1000&s=1",
    },
    {
      id: 3,
      name: "Wilpattu National Park",
      position: [8.4500, 80.0167],
      description:
        "Wilpattu is Sri Lanka’s largest national park, renowned for its natural lakes and rich wildlife. This untouched wilderness offers visitors the chance to see leopards, elephants, sloth bears and rare birds in a peaceful, unspoiled environment.",
      image: "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=center,quality=60,width=400,height=265,dpr=2/tour_img/f991184bc0391eab0a7c5c376b21eb09ae20aef3077bdedf9d62bfe19256aa4a.jpg",
    },
    {
      id: 4,
      name: "Anuradhapura",
      position: [8.3114, 80.4037],
      description:
        "Anuradhapura is one of Sri Lanka’s most sacred ancient cities, home to towering stupas, sacred Bodhi trees and ancient monasteries. Walking through this UNESCO World Heritage site is like stepping back more than 2,000 years into the island’s rich spiritual history.",
      image: "https://d31t1a4b1z64ez.cloudfront.net/2023/05/ruwanveli-seya-pagoda-m.webp",
    },
    {
      id: 5,
      name: "Dambulla",
      position: [7.8567, 80.6492],
      description:
        "Dambulla is famous for its ancient cave temples filled with beautiful Buddha statues and vibrant murals. It is one of the best preserved cave temple complexes in Asia and a spiritual highlight of Sri Lanka.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Golden_Buddha_and_Buddhist_Museum_at_Dambulla.jpg/1280px-Golden_Buddha_and_Buddhist_Museum_at_Dambulla.jpg",
    },
    {
      id: 6,
      name: "Sigiriya Rock Fortress",
      position: [7.9570, 80.7603],
      description:
        "Sigiriya is Sri Lanka’s most iconic landmark. Rising dramatically from the jungle, this ancient rock fortress offers breathtaking views, royal gardens, frescoes and a mirror wall dating back over 1,500 years.",
      image: "https://media.istockphoto.com/id/1146786448/photo/aerial-view-from-above-of-sigiriya-or-the-lion-rock-an-ancient-fortress-and-a-palace-with.jpg?s=612x612&w=0&k=20&c=KiwLmEYVBKNqKfycjBH414u4b6O3IrrE6_C-IKkKAOI=",
    },
    {
      id: 7,
      name: "Minneriya National Park",
      position: [8.0375, 80.9039],
      description:
        "Minneriya National Park is world famous for the ‘Gathering’, where hundreds of wild elephants come together around the reservoir. It is one of the best wildlife experiences in Sri Lanka.",
      image: "https://lh4.googleusercontent.com/proxy/6k9KZ-ubX_78pp3vO8gAq5HELZ2yS_2PPfzQxlqgMYIVNZjyycxmuEbhGv7fCzwlNleYCBL0g9paIMb48xfSMkfCS59GjXHs0f5_jq_fWHnkxvMrB9Os1hzdgb8_qEZlJBHYxPRwVR902oRTqQ",
    },
    {
      id: 8,
      name: "Polonnaruwa",
      position: [7.9403, 81.0188],
      description:
        "Polonnaruwa is an ancient royal city with stunning ruins, statues and palaces. It offers a fascinating glimpse into Sri Lanka’s medieval history and engineering excellence.",
      image: "https://therestlessbeans.com/wp-content/uploads/2025/04/ancient-city-of-polonnaruwa-sri-lanka-statue-reclining-budha.webp",
    },
    {
      id: 9,
      name: "Pasikuda",
      position: [7.9250, 81.5670],
      description:
        "Pasikuda is famous for its calm, shallow waters and beautiful white sandy beaches. It is one of the safest and most relaxing beaches on Sri Lanka’s east coast.",
      image: "https://overatours.com/wp-content/uploads/2020/09/DSC_9714-1.jpg",
    },
    {
      id: 10,
      name: "Knuckles Mountain Range",
      position: [7.4667, 80.7833],
      description:
        "The Knuckles Mountain Range offers breathtaking landscapes, misty peaks, waterfalls and hiking trails. It is perfect for adventure lovers and nature explorers.",
      image: "https://admin.myceylonadventures.com/uploads/Trekking_Tour_in_Kandy_Knuckles_Feachured_60b26beeb3.jpg",
    },
    {
      id: 11,
      name: "Kandy",
      position: [7.2906, 80.6337],
      description:
        "Kandy is the cultural heart of Sri Lanka and home to the sacred Temple of the Tooth Relic. Surrounded by hills and tea plantations, it is rich in tradition, beauty and heritage.",
      image: "https://thatswhatshehad.com/wp-content/uploads/2018/07/chathura-anuradha-subasinghe-40uQmE9Zq8g-unsplash-1024x683.jpg",
    },
    {
      id: 12,
      name: "Kitulgala",
      position: [6.9890, 80.4167],
      description:
        "Kitulgala is Sri Lanka’s adventure capital, famous for white water rafting, jungle trekking and bird watching along the Kelani River.",
      image: "https://gobeyond.asia/var/site/storage/images/media/images/country-pages/sri-lanka/kandy-and-nearby/kandy-and-nearby-trips/kithulgala-adventure/kithulgala-adventure-1/3940508-1-eng-GB/kithulgala-adventure-1_gallery_full.png",
    },
    {
      id: 13,
      name: "Horton Plains",
      position: [6.8094, 80.8031],
      description:
        "Horton Plains is a beautiful highland national park known for its rolling grasslands, cloud forests and the dramatic World’s End cliff.",
      image: "https://images.ctfassets.net/2ctencdtf9g8/3zGSabBcz2kChEMGzsoDlU/ff1bdcace659a4d80ed0586f8fd7e86f/horton8-min.jpg",
    },
    {
      id: 14,
      name: "Gal Oya National Park",
      position: [7.2917, 81.4833],
      description:
        "Gal Oya is famous for its unique boat safaris where visitors can see elephants swimming between islands in the reservoir.",
      image: "https://images.squarespace-cdn.com/content/v1/6090e44108fff025fb6cf10a/ea9a3477-8a3e-46d3-8c77-5646f62bb12b/Gal+Oya+watering+hole+-+Small.jpg",
    },
    {
      id: 15,
      name: "Arugam Bay",
      position: [6.8428, 81.8369],
      description:
        "Arugam Bay is Sri Lanka’s top surfing destination, offering world-class waves, relaxed beach vibes and stunning sunrises.",
      image: "https://overatours.com/wp-content/uploads/2021/10/Surfing-in-Arugam-Bay.jpg",
    },
    {
      id: 16,
      name: "Kalutara",
      position: [6.5831, 79.9607],
      description:
        "Kalutara is a peaceful beach town famous for its sacred Kalutara Bodhiya and palm-lined coastline.",
      image: "https://www.boutiquecollectionbyamaya.com/villas-wadduwa/wp-content/uploads/sites/12/2022/10/kalutara-gall-feat.jpg",
    },
    {
      id: 17,
      name: "Bentota",
      position: [6.4211, 79.9989],
      description:
        "Bentota is a luxury beach destination offering water sports, river safaris and elegant resorts.",
      image: "https://live.staticflickr.com/65535/50009234931_1a80fb78d1_b.jpg",
    },
    {
      id: 18,
      name: "Sinharaja Forest Reserve",
      position: [6.4050, 80.4600],
      description:
        "Sinharaja is a UNESCO-listed rainforest and biodiversity hotspot filled with rare birds, butterflies and ancient trees.",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/24/04/bb/caption.jpg?w=1200&h=-1&s=1",
    },
    {
      id: 19,
      name: "Udawalawe National Park",
      position: [6.4630, 80.8917],
      description:
        "Udawalawe is the best place in Sri Lanka to see wild elephants in their natural habitat.",
      image: "https://overatours.com/wp-content/uploads/2017/11/156-1024x683.jpg",
    },
    {
      id: 20,
      name: "Yala National Park",
      position: [6.3667, 81.5167],
      description:
        "Yala is Sri Lanka’s most famous wildlife park, known for having one of the highest leopard populations in the world.",
      image: "https://overatours.com/wp-content/uploads/2021/09/25.jpg",
    },
    {
      id: 21,
      name: "Bundala National Park",
      position: [6.2000, 81.2000],
      description:
        "Bundala is a bird lover’s paradise, home to thousands of migratory birds and peaceful wetlands.",
      image: "https://nexttravelsrilanka.com/wp-content/uploads/2021/05/White-Greater-flamingos-in-a-swamp-by-a-lawn-at-Bundala-National-Park-the-Wonderful-Land-of-Birds-in-Sri-Lanka.jpg",
    },
    {
      id: 22,
      name: "Tangalle",
      position: [6.0240, 80.7968],
      description:
        "Tangalle offers long golden beaches, turquoise waters and a peaceful tropical atmosphere.",
      image: "https://static.horizonguides.com/images/_matrixImage/Sri-Lanka_Tangalle.jpg",
    },
    {
      id: 23,
      name: "Mirissa",
      position: [5.9483, 80.4716],
      description:
        "Mirissa is famous for whale watching, beach cafes and relaxed island vibes.",
      image: "https://www.srilankalocaltours.com/wp-content/uploads/MIRISSA.jpg",
    },
    {
      id: 24,
      name: "Koggala",
      position: [5.9883, 80.3270],
      description:
        "Koggala is known for its beautiful beaches, lagoon and traditional stilt fishermen.",
      image: "https://www.worldbeachguide.com/photos/large/koggala-fishermen.jpg",
    },
    {
      id: 25,
      name: "Unawatuna",
      position: [6.0212, 80.2503],
      description:
        "Unawatuna is one of Sri Lanka’s most popular beaches, perfect for swimming, snorkeling and beach life.",
      image: "https://nexttravelsrilanka.com/wp-content/uploads/2023/02/Unawatuna.jpg",
    },
    {
      id: 26,
      name: "Galle",
      position: [6.0535, 80.2210],
      description:
        "Galle Fort is a UNESCO World Heritage Site filled with colonial architecture, boutique shops and ocean views.",
      image: "https://do6raq9h04ex.cloudfront.net/sites/8/2021/07/galle-fort-1050x700-1.jpg",
    },
    {
      id: 27,
      name: "Hikkaduwa",
      position: [6.1400, 80.1000],
      description:
        "Hikkaduwa is famous for coral reefs, snorkeling, surfing and lively beach culture.",
      image: "https://lakpura.com/cdn/shop/products/LK58110100-05-E-1280-720.jpg?v=1625585412&width=1445",
    },
  ];

  const [selectedPlace, setSelectedPlace] = useState(places[0]);
  const [current, setCurrent] = useState(0);
  const [time, setTime] = useState(new Date());

  const blueIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [22, 22],
    iconAnchor: [11, 22],
  });

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const reviews = [
    {
      name: "Priya Malik",
      role: "Traveler",
      rating: 5,
      title: "An Unforgettable Experience!",
      text:
        "Booking our trip through Sanju Tours was the best decision we made! The team curated a beautiful itinerary for us in Kerala, and every detail was handled professionally. Can’t wait to travel with them again!",
    },
    {
      name: "Rajesh Kumar",
      role: "Bangalore",
      rating: 5,
      title: "Perfectly Organized, Memorable Trip",
      text:
        "Sanju Tours truly made our dream vacation come true. From exploring ancient sites to scenic train rides, everything was flawless and stress-free.",
    },
    {
      name: "Sneha & Vivek",
      role: "France",
      rating: 5,
      title: "Exceptional Service and Great Value",
      text:
        "We wanted an affordable, well-organized trip, and that’s exactly what we got. Transparent pricing and excellent customer support made our honeymoon unforgettable.",
    },
  ];

  const faqs = [
    {
      question: "What’s included in the tour package?",
      answer:
        "Packages typically include accommodations, transportation, guided tours, and entrance fees. Some also include meals. Check package details for specifics.",
    },
    {
      question: "Can I customize my itinerary?",
      answer:
        "Yes! We offer fully customizable tour packages based on your preferences, travel dates, and interests.",
    },
    {
      question: "Are group discounts available?",
      answer:
        "Yes, we provide special pricing for group bookings. Contact us for detailed group offers.",
    },
    {
      question: "What safety measures are in place?",
      answer:
        "Your safety is our priority. We follow strict safety standards, use licensed guides, and maintain well-serviced vehicles.",
    },
    {
      question: "How do I book and pay?",
      answer:
        "You can book via our website, WhatsApp, or email. We accept bank transfers and other secure payment options.",
    },
  ];

  return (
    <div className="w-full overflow-hidden">

      {/* ================= HERO SLIDER ================= */}
      <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:min-h-screen overflow-hidden">

        {/* Background Slider */}
        {heroSlides.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ${current === index ? "opacity-100" : "opacity-0"
              }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

        {/* Content */}
        <div className="relative z-10 flex h-full w-full flex-col justify-between px-6 py-8 text-white">

          {/* Center Content */}
          <div
            data-aos="fade-up"
            className="flex flex-col items-center justify-center flex-grow text-center"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.3em] uppercase">
              Discover the Treasure of
            </h1>

            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-semibold tracking-wide">
              Sri Lanka
            </h2>

            {/* Buttons Row */}
            <div className="mt-8 flex flex-row gap-4">
              <a
                data-aos="zoom-in"
                data-aos-delay="400"
                href="/tour-packages"
                className="rounded-full bg-[#0ea5a4] px-10 py-3 text-sm font-semibold tracking-wider text-white transition hover:bg-[#0f766e]"
              >
                View All Trip
              </a>

              <a
                data-aos="zoom-in"
                data-aos-delay="500"
                href="/book-now"
                className="rounded-full border border-white px-10 py-3 text-sm font-semibold tracking-wider text-white transition hover:bg-white hover:text-black"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Bottom Left Time */}
          <div data-aos="fade-right" className="text-sm text-white/80">
            <div className="font-semibold">
              {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </div>
            <div className="text-xs uppercase tracking-widest">
              {time.toLocaleDateString("en-US", { month: "numeric", day: "numeric" })}
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-widest text-white/60">
              Local Time
            </div>
          </div>

        </div>
      </section>

      {/* ================= ABOUT INTRO SECTION ================= */}
      <section className="relative bg-white py-10 px-6">
        <div className="max-w-5xl mx-auto text-center">

          {/* Small Tagline */}
          <p
            data-aos="fade-up"
            className="text-xs tracking-[0.35em] text-gray-500 uppercase mb-6"
          >
            An inspiring journey of discovery
          </p>

          {/* Main Title */}
          <h2
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-[#0f172a]"
          >
            Sanju Tours
          </h2>

          {/* Blue underline */}
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="mx-auto mt-6 h-[2px] w-28 bg-[#0ea5a4]"
          />

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="mt-10 text-sm sm:text-base leading-relaxed text-gray-600 max-w-3xl mx-auto"
          >
            Travel around Sri Lanka to be mesmerised by the endless miles of golden sandy
            beaches and warm blue waters to either catch a wave or bask in the sun. Enjoy
            the diverse spices and the rice and curry with coconut or sip a warm cup of
            Ceylon Tea. Sri Lanka is a country that has diversity from its people from
            different ethnicities. It's a land rich with culture, nature, adventure,
            wellness, and wildlife. Be adventurous and explore the country through a
            walking tour, cycling tour, seat in coach tour, private vehicle, train ride or
            an Air taxi. Feel right at home among the welcoming warmth of our people. At
            Sanju Tours, the leading tour operator in the island, our specially
            designed packages offer you the chance to travel in Sri Lanka and satisfy your
            wanderlust!
          </p>

        </div>
      </section>

      {/* MAP SECTION */}
      <section className="py-10 px-6">
        <div className="flex flex-col lg:flex-row shadow-lg rounded-xl overflow-hidden max-w-7xl mx-auto">
          <div className="w-full lg:w-[45%] h-[300px] sm:h-[400px] lg:h-[600px]">
            <MapContainer center={[7.8731, 80.7718]} zoom={7} className="h-full w-full">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {places.map((p) => (
                <Marker key={p.id} position={p.position} icon={blueIcon} eventHandlers={{ click: () => setSelectedPlace(p) }}>
                  <Popup>{p.name}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
          <div className="flex-1 p-6 sm:p-10">
            <h3 className="text-2xl font-semibold text-[#0ea5a4]">
              {selectedPlace.name}
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {selectedPlace.description}
            </p>

            {/* Image */}
            <div className="mt-6">
              <img
                src={selectedPlace.image}
                alt={selectedPlace.name}
                className="w-full max-w-md rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= BESTSELLING PACKAGES ================= */}
      <section className="bg-[#f8f8f8] py-16 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14">
            Explore Our Bestselling Packages
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Card 1 */}
            <div className="group">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={pkg1}
                  className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <h3 className="text-xl font-semibold mt-5">
                21 Days of Sri Lanka Grand Tour
              </h3>

              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                This 21-Day Sri Lanka Grand Tour immerses you in the island’s stunning
                landscapes, rich history, and vibrant culture.
              </p>

              <button
                onClick={() => navigate("/tour-packages/21-days-grand-tour")}
                className="mt-4 bg-[#1d4ed8] text-white px-5 py-2 rounded-md text-sm hover:bg-[#1e40af] transition">
                Read More →
              </button>
            </div>

            {/* Card 2 */}
            <div className="group">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={pkg2}
                  className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <h3 className="text-xl font-semibold mt-5">
                15 Days of Sri Lanka Tour
              </h3>

              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                Embark on a captivating 15-day journey across Sri Lanka’s most iconic
                destinations.
              </p>

              <button
                onClick={() => navigate("/tour-packages/15-days-tour")}
                className="mt-4 bg-[#1d4ed8] text-white px-5 py-2 rounded-md text-sm hover:bg-[#1e40af] transition">
                Read More →
              </button>
            </div>

            {/* Card 3 */}
            <div className="group">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={pkg3}
                  className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <h3 className="text-xl font-semibold mt-5">
                8 Days of Sri Lanka Tour
              </h3>

              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                Embark on an unforgettable 8-day journey through Sri Lanka’s vibrant
                landscapes and rich cultural heritage.
              </p>

              <button
                onClick={() => navigate("/tour-packages/8-days-tour")}
                className="mt-4 bg-[#1d4ed8] text-white px-5 py-2 rounded-md text-sm hover:bg-[#1e40af] transition">
                Read More →
              </button>
            </div>

          </div>

          {/* Bottom Button */}
          <div className="flex justify-center mt-14">
            <button
              onClick={() => navigate("/tour-packages")}
              className="bg-[#0ea5a4] text-white px-8 py-3 rounded-full hover:bg-[#0f766e] transition">
              View All Packages
            </button>
          </div>

        </div>
      </section>

      {/* ================= GALLERY SECTION ================= */}
      <section className="relative py-20 px-6 overflow-hidden">

        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: `url(${galleryBg})` }}
        />

        {/* Blur + dark overlay */}
        <div className="absolute inset-0 backdrop-blur-md bg-[#0b3b47]/20" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto">

          {/* Title */}
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl text-white font-semibold text-center mb-14"
          >
            Our Gallery
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 80}
                className="overflow-hidden rounded-2xl shadow-lg group"
              >
                <img
                  src={img}
                  className="w-full h-[200px] object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="flex justify-center mt-14">
            <button
              onClick={() => navigate("/gallery")}
              className="bg-[#0ea5a4] text-white px-8 py-3 rounded-full hover:bg-[#0f766e] transition">
              View Gallery
            </button>
          </div>

        </div>
      </section>

      {/* ================= DISCOVER SECTION ================= */}
      <section className="bg-white py-14 lg:py-20 overflow-hidden">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[55%_45%] items-center">

          {/* LEFT IMAGE */}
          <div data-aos="fade-right" className="w-full">
            <img
              src={discoverImg}
              alt="Discover Adventures"
              className="
          w-full
          h-[300px] sm:h-[420px] md:h-[500px] lg:h-[620px]
          object-cover
          lg:rounded-r-2xl
          shadow-lg
        "
            />
          </div>

          {/* RIGHT CONTENT */}
          <div
            data-aos="fade-left"
            className="px-6 sm:px-10 lg:px-16 mt-10 lg:mt-0 max-w-xl"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
              Discover Organized Adventures, The Ultimate Travel Hack
            </h2>

            <div className="mt-3 w-20 sm:w-24 h-[3px] bg-[#0ea5a4] rounded-full" />

            <p className="mt-5 text-gray-600 leading-relaxed text-sm sm:text-base">
              At Sanju Tours, we see travel as more than a journey—it’s a
              chance to explore, learn, and make lasting memories. From tailored tour
              packages to dependable cab services, we’re committed to delivering
              seamless travel experiences.
            </p>

            <button
              onClick={() => navigate("/about")}
              className="mt-7 bg-[#0ea5a4] text-white px-6 sm:px-7 py-3 rounded-lg hover:bg-[#0f766e] transition shadow-md">
              About Us
            </button>
          </div>

        </div>
      </section>

      {/* ================= CUSTOMER REVIEWS ================= */}
      <section className="bg-[#f9fafb] py-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Customer Reviews
            </h2>

            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="text-2xl font-semibold">4.8 / 5</span>
              <div className="flex text-yellow-400 text-xl">
                ★★★★★
              </div>
              <span className="text-sm text-gray-500">
                Based on 26K+ reviews
              </span>
            </div>
          </div>

          {/* Slider */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700"
              style={{ transform: `translateX(-${reviewIndex * 100}%)` }}
            >
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className="min-w-full md:min-w-[33.333%] px-4"
                >
                  <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col">

                    {/* Name */}
                    <h3 className="font-semibold text-lg">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {review.role}
                    </p>

                    {/* Stars */}
                    <div className="flex text-yellow-400 mt-2">
                      {"★".repeat(review.rating)}
                    </div>

                    {/* Title */}
                    <h4 className="mt-4 font-semibold">
                      "{review.title}"
                    </h4>

                    {/* Review */}
                    <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                      {review.text}
                    </p>

                  </div>
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="flex justify-center gap-4 mt-10">
              <button
                onClick={() =>
                  setReviewIndex(prev =>
                    prev === 0 ? reviews.length - 1 : prev - 1
                  )
                }
                className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-900 transition"
              >
                ‹
              </button>

              <button
                onClick={() =>
                  setReviewIndex(prev =>
                    prev === reviews.length - 1 ? 0 : prev + 1
                  )
                }
                className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-900 transition"
              >
                ›
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ================= POPULAR DESTINATIONS ================= */}
      <section className="bg-[#eef5fb] py-16 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Popular Destinations
            </h2>
            <p className="text-gray-500 mt-2">
              Destinations That Speak to You
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">

            {[
              {
                id: "colombo",
                img: destination1,
                title: "Colombo",
                desc: "**Colombo** is Sri Lanka’s commercial capital, known for its vibrant city life, coastal views, and mix of colonial charm and modern development...",
              },
              {
                id: "sigiriya",
                img: destination2,
                title: "Sigiriya",
                desc: "Sigiriya is an ancient rock fortress famous for its stunning frescoes, landscaped gardens, and breathtaking panoramic views from the summit...",
              },
              {
                id: "ella",
                img: destination3,
                title: "Ella",
                desc: "Ella is a scenic hill-country village known for its lush tea plantations, cool climate, waterfalls, and iconic viewpoints like Ella Rock and Nine Arches Bridge...",
              },
            ].map((place, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="overflow-hidden rounded-xl border border-gray-200 shadow-sm transition hover:shadow-lg"
              >
                {/* Image */}
                <img
                  src={place.img}
                  alt={place.title}
                  className="h-56 w-full object-cover"
                />

                {/* Content */}
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

          {/* See More Button */}
          <div className="mt-16 text-center">
            <button
              onClick={() => navigate("/destinations")}
              className="rounded-lg bg-black px-8 py-3 text-sm font-semibold text-red-500 transition hover:bg-gray-900"
            >
              See More Places
            </button>
          </div>

        </div>
      </section>

      {/* ================= VEHICLE FLEET ================= */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Sanju Tours
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 text-sm md:text-base mb-16">
            Sanju Tours offers a range of comfortable, reliable vehicles for all your
            travel needs across Sri Lanka, ensuring a smooth and enjoyable journey through
            vibrant cities, scenic landscapes, and hidden gems.
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

            {/* Luxury Cars */}
            <div
              data-aos="fade-up"
              className="flex flex-col items-center text-center"
            >
              <h3 className="text-xl font-semibold mb-6">Luxury Cars</h3>

              <img
                src={luxuryCar}
                alt="Luxury Cars"
                className="w-full h-80 object-fill mb-6"
              />

              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                Travel in style and comfort with our premium vehicles for a more exclusive
                experience.
              </p>
            </div>

            {/* Vans */}
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="flex flex-col items-center text-center"
            >
              <h3 className="text-xl font-semibold mb-6">Vans</h3>

              <img
                src={van}
                alt="Vans"
                className="w-full h-80 object-fill mb-6"
              />

              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                Great for larger groups, our spacious vans allow everyone to travel together
                comfortably.
              </p>
            </div>

            {/* Buses */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-col items-center text-center"
            >
              <h3 className="text-xl font-semibold mb-6">Buses</h3>

              <img
                src={bus}
                alt="Buses"
                className="w-full h-80 object-fill mb-6"
              />

              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                Our mini-buses offer spacious and comfortable seating, ideal for larger groups
                to enjoy a relaxed and seamless travel experience together.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14">
            FAQs on Tours
          </h2>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-300 pb-4"
              >
                {/* Question */}
                <button
                  onClick={() =>
                    setActiveFAQ(activeFAQ === index ? null : index)
                  }
                  className="w-full flex justify-between items-center text-left text-[#0b5c87] font-medium text-lg"
                >
                  {faq.question}
                  <span className="text-xl">
                    {activeFAQ === index ? "▴" : "▾"}
                  </span>
                </button>

                {/* Answer */}
                {activeFAQ === index && (
                  <div className="mt-4 bg-gray-200 rounded-lg p-6 text-gray-700 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= PROMO HERO SECTION ================= */}
      <section className="relative w-full py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-xl">

            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${galleryBg})` }} // You can replace with a new image if needed
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

            {/* Content */}
            <div className="relative z-10 px-8 py-20 md:py-28 md:px-16 text-white max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
                Explore iconic destinations <br />
                with expert insights
              </h2>

              <button
                onClick={() => navigate("/book-now")}
                className="mt-8 bg-[#ff5a4e] hover:bg-[#e0483d] transition px-8 py-3 rounded-lg text-sm font-semibold tracking-wide"
              >
                BOOK YOUR ADVENTURE
              </button>
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

export default Home;
