import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndCondition from "./pages/TermsAndCondition";
import TourPackages from "./pages/TourPackages";
import Gallery from "./pages/Gallery";
import Destinations from "./pages/Destinations";
import Colombo from "./pages/destinations/Colombo";
import Sigiriya from "./pages/destinations/Sigiriya";
import Ella from "./pages/destinations/Ella";
import Kithulgala from "./pages/destinations/Kithulgala";
import Battalangunduwa from "./pages/destinations/Battalangunduwa";
import DamroTeaEstate from "./pages/destinations/DamroTeaState";
import Ambuluwawa from "./pages/destinations/Ambuluwawa";
import Pasikuda from "./pages/destinations/Pasikuda";
import NuwaraEliya from "./pages/destinations/NuwaraEliya";
import AdamsPeak from "./pages/destinations/AdamsPeak";
import Kalmunai from "./pages/destinations/Kalmunai";
import Negombo from "./pages/destinations/Negombo";
import Tangalle from "./pages/destinations/Tangalle";
import Pinnawala from "./pages/destinations/Pinnawala";
import Jaffna from "./pages/destinations/Jaffna";
import DiyalumaFalls from "./pages/destinations/DiyalumaFalls";
import Trincomalee from "./pages/destinations/Trincomalee";
import Mirissa from "./pages/destinations/Mirissa";
import Anuradhapura from "./pages/destinations/Anuradhapura";
import Hikkaduwa from "./pages/destinations/Hikkaduwa";
import Yala from "./pages/destinations/Yala";
import Galle from "./pages/destinations/Galle";
import Udawalawe from "./pages/destinations/Udawalawe";
import ArugamBay from "./pages/destinations/ArugamBay";
import Kandy from "./pages/destinations/Kandy";
import Polonnaruwa from "./pages/destinations/Polonnaruwa";
import Katharagama from "./pages/destinations/Katharagama";
import Days21Tour from "./pages/tourPackages/Days21Tour";
import BookNow from "./pages/BookNow";
import Days15Tour from "./pages/tourPackages/Days15Tour";
import Days8Tour from "./pages/tourPackages/Days8Tour";
import Days5Tour from "./pages/tourPackages/Days5Tour";
import Days7Tour from "./pages/tourPackages/Days7Tour";
import Days10Tour from "./pages/tourPackages/Days10Tour";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/book-now" element={<BookNow />} />
                <Route path="/terms-condition" element={<TermsAndCondition />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />

                <Route path="/tour-packages" element={<TourPackages />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/destinations" element={<Destinations />} />

                {/* Tour Packages */}
                <Route path="/tour-packages/21-days-grand-tour" element={<Days21Tour />} />
                <Route path="/tour-packages/15-days-tour" element={<Days15Tour />} />
                <Route path="/tour-packages/8-days-tour" element={<Days8Tour />} />
                <Route path="/tour-packages/5-days-tour" element={<Days5Tour />} />
                <Route path="/tour-packages/7-days-tour" element={<Days7Tour />} />
                <Route path="/tour-packages/10-days-tour" element={<Days10Tour />} />

                {/* destinations */}
                <Route path="/destinations/colombo" element={<Colombo />} />
                <Route path="/destinations/sigiriya" element={<Sigiriya />} />
                <Route path="/destinations/ella" element={<Ella />} />
                <Route path="/destinations/kithulgala" element={<Kithulgala />} />
                <Route path="/destinations/battalangunduwa" element={<Battalangunduwa />} />
                <Route path="/destinations/damro-tea" element={<DamroTeaEstate />} />
                <Route path="/destinations/ambuluwawa" element={<Ambuluwawa />} />
                <Route path="/destinations/pasikuda" element={<Pasikuda />} />
                <Route path="/destinations/nuwara-eliya" element={<NuwaraEliya />} />
                <Route path="/destinations/adam’s-peak" element={<AdamsPeak />} />
                <Route path="/destinations/kalmunai" element={<Kalmunai />} />
                <Route path="/destinations/negombo" element={<Negombo />} />
                <Route path="/destinations/tangalle" element={<Tangalle />} />
                <Route path="/destinations/pinnawala" element={<Pinnawala />} />
                <Route path="/destinations/jaffna" element={<Jaffna />} />
                <Route path="/destinations/diyaluma-falls" element={<DiyalumaFalls />} />
                <Route path="/destinations/trincomalee" element={<Trincomalee />} />
                <Route path="/destinations/mirissa" element={<Mirissa />} />
                <Route path="/destinations/anuradhapura" element={<Anuradhapura />} />
                <Route path="/destinations/hikkaduwa" element={<Hikkaduwa />} />
                <Route path="/destinations/yala" element={<Yala />} />
                <Route path="/destinations/galle" element={<Galle />} />
                <Route path="/destinations/udawalawe" element={<Udawalawe />} />
                <Route path="/destinations/arugam-bay" element={<ArugamBay/>} />
                <Route path="/destinations/kandy" element={<Kandy/>} />
                <Route path="/destinations/polonnaruwa" element={<Polonnaruwa/>} />
                <Route path="/destinations/katharagama" element={<Katharagama/>} />
                
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
