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
                
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
