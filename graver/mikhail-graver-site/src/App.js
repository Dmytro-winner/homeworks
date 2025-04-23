import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import FAQ from './pages/FAQ';
import BuyNow from './pages/BuyNow';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ToS from './pages/ToS';

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/buynow" element={<BuyNow />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/tos" element={<ToS />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;


