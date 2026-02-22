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

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/terms-condition" element={<TermsAndCondition />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />

                <Route path="/tour-packages" element={<TourPackages />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/destinations" element={<Destinations />} />

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
                
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
