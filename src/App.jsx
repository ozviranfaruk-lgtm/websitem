import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Sayfaları Çağırıyoruz
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';        // Ana Sayfa
import Services from './components/Services'; // Hizmetler (Bunun components içinde olduğunu varsayıyorum)
import Contact from './pages/Contact';  // İletişim

function App() {
  return (
    <div>
      {/* Üst Menü Her Sayfada Görünsün */}
      <Navbar />

      {/* Sayfa İçeriği Burada Değişecek */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hizmetler" element={<Services />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/teklif-al" element={<Contact />} /> {/* Teklif Al butonu da iletişime gitsin */}
      </Routes>

      {/* Alt Footer Her Sayfada Görünsün */}
      <Footer />
    </div>
  );
}

export default App;