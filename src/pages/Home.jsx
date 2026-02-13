import React from 'react';
import Hero from '../components/Hero'; 

function Home() {
  // SENİN NUMARAN - SİSTEME İŞLENDİ
  const telNo = "05522820686"; 
  const telGosterim = "0552 282 06 86";

  return (
    <div>
      {/* 📞 REKLAM CANAVARI: SABİT ÜST BAND */}
      <div style={{
        background: '#d90429',
        color: 'white',
        padding: '10px 0',
        textAlign: 'center',
        position: 'sticky',
        top: '0',
        zIndex: '2000',
        boxShadow: '0 5px 15px rgba(217, 4, 41, 0.4)',
        borderBottom: '3px solid #ffb703'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>Ankara & Antalya Nakliye Hattı:</span>
          <a href={`tel:${telNo}`} style={{
            background: '#ffffff',
            color: '#d90429',
            padding: '8px 20px',
            borderRadius: '50px',
            textDecoration: 'none',
            fontSize: '1.2rem',
            fontWeight: '900',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            animation: 'pulse 1.5s infinite' 
          }}>
            <i className="fa-solid fa-phone-flip"></i> {telGosterim}
          </a>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>

      <Hero />

      {/* 🚀 SEO VE İKNA BÖLÜMÜ */}
      <div style={{ padding: '60px 20px', textAlign: 'center', background: 'white' }}>
        <h1 style={{ color: '#0a1a2f', fontSize: '2.5rem', marginBottom: '10px', fontWeight: '900' }}>
          ANKARA VE ANTALYA <span style={{ color: '#d90429' }}>EVDEN EVE NAKLİYAT</span>
        </h1>
        <p style={{ color: '#ffb703', fontWeight: 'bold', fontSize: '1.3rem', marginTop: '0' }}>
          Kurumsal, Sigortalı ve Asansörlü Çözümler
        </p>
        <div style={{ width: '80px', height: '5px', background: '#d90429', margin: '20px auto 40px auto' }}></div>
        
        <p style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.2rem', color: '#444', lineHeight: '1.8' }}>
          <strong>Proflash Nakliyat</strong> olarak, <strong>Ankara evden eve nakliyat</strong> ve 
          <strong> Antalya nakliyat</strong> rotasında uzmanlaştık. Eşyalarınızı 
          profesyonel paketleme sistemleriyle koruyor, 81 ile <strong>sigortalı nakliye</strong> hizmeti sunuyoruz. 
          Ankara ve Antalya arası günlük seferlerimizle eşyalarınızı en güvenli şekilde teslim ediyoruz.
        </p>

        {/* HİZMET KARTLARI */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '50px', flexWrap: 'wrap' }}>
          <div style={serviceCardStyle}>
            <i className="fa-solid fa-truck-fast" style={iconStyle}></i>
            <h4 style={serviceTitleStyle}>Hızlı Sevkiyat</h4>
            <p style={serviceTextStyle}>Ankara - Antalya arası 24 saatte anahtar teslim taşıma.</p>
          </div>
          <div style={serviceCardStyle}>
            <i className="fa-solid fa-house-chimney-window" style={iconStyle}></i>
            <h4 style={serviceTitleStyle}>Asansörlü Sistem</h4>
            <p style={serviceTextStyle}>Dar merdivenlere son! Balkondan güvenli asansörlü taşıma.</p>
          </div>
          <div style={serviceCardStyle}>
            <i className="fa-solid fa-file-contract" style={iconStyle}></i>
            <h4 style={serviceTitleStyle}>Kaskolu Nakliye</h4>
            <p style={serviceTextStyle}>Tüm sürecimiz yasal sözleşme ve nakliye sigortası kapsamındadır.</p>
          </div>
        </div>
      </div>

      {/* REKLAM SONU: BÜYÜK ARAMA BUTONU */}
      <div style={{ 
        background: '#0a1a2f', 
        color: 'white', 
        padding: '80px 20px', 
        textAlign: 'center',
        borderTop: '5px solid #ffb703'
      }}>
        <h2 style={{fontSize: '2.2rem', marginBottom: '20px'}}>Saniyeler İçinde Fiyat Alın!</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 40px auto', fontSize: '1.1rem', opacity: '0.8' }}>
          Ankara veya Antalya'da taşınacak eviniz mi var? Beklemeyin, uzmanımızla hemen görüşün.
        </p>
        <a href={`tel:${telNo}`} style={{
          display: 'inline-block',
          background: '#ffb703',
          color: '#0a1a2f',
          padding: '20px 50px',
          borderRadius: '15px',
          fontSize: '1.5rem',
          fontWeight: '900',
          textDecoration: 'none',
          boxShadow: '0 10px 25px rgba(255, 183, 3, 0.4)'
        }}>
          <i className="fa-solid fa-phone-volume"></i> {telGosterim}
        </a>
        <div style={{marginTop: '15px', color: '#ffb703', fontWeight: 'bold'}}>
          <i className="fa-solid fa-clock"></i> 7/24 Kesintisiz Hizmet
        </div>
      </div>
    </div>
  );
}

const serviceCardStyle = {
  background: '#fff',
  padding: '35px 25px',
  borderRadius: '25px',
  width: '280px',
  boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
  borderBottom: '6px solid #d90429'
};
const serviceTitleStyle = { margin: '15px 0', color: '#0a1a2f', fontSize: '1.2rem', fontWeight: 'bold' };
const serviceTextStyle = { fontSize: '0.95rem', color: '#777', lineHeight: '1.6' };
const iconStyle = { fontSize: '2.8rem', color: '#d90429' };

export default Home;