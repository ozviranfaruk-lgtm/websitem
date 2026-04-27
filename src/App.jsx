import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Bileşenleri (Components) Çağırıyoruz
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Sayfaları (Pages) Çağırıyoruz
import Home from './pages/Home';         
import Services from './components/Services'; 
import Contact from './pages/Contact';  
import Admin from './pages/Admin'; // Admin sayfası burada

function App() {
  return (
    <div className="App">
      {/* Üst Menü Her Sayfada Görünsün */}
      <Navbar />

      {/* Sayfa İçeriği Burada Değişecek */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hizmetler" element={<Services />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/teklif-al" element={<Contact />} /> 
          <Route path="/ozviran-panel" element={<Admin />} />
        </Routes>
      </main>

      {/* Alt Footer Her Sayfada Görünsün */}
      <Footer />

      {/* WhatsApp Sabit Buton */}
      <a 
        href="https://wa.me/905522820686" 
        className="whatsapp-buton" 
        target="_blank" 
        rel="noreferrer" 
        title="WhatsApp'tan Bize Ulaşın"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
      </a>
    </div>
  );
}

export default App;