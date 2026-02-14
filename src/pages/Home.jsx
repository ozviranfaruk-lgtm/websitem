import React from 'react';
import Hero from '../components/Hero'; 

function Home() {
  const telNo = "05522820686"; 
  const telGosterim = "0552 282 06 86";

  return (
    <div style={{ fontFamily: '"Segoe UI", Arial, sans-serif', backgroundColor: '#fff', overflowX: 'hidden' }}>
      
      {/* 📞 ÜST BANT */}
      <div style={topBarStyle}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
          <span style={{ fontWeight: 'bold', color: '#ffb703' }}>7/24 Ankara Merkezli Tüm Türkiye Hattı:</span>
          <a href={`tel:${telNo}`} style={callButtonStyle}>
            <i className="fa-solid fa-phone-volume"></i> {telGosterim}
          </a>
        </div>
      </div>

      <Hero />

      {/* 📸 İCRAAT GALERİSİ */}
      <section style={{ padding: '60px 20px', maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#0a1a2f' }}>
            PROFESYONEL <span style={{ color: '#d90429' }}>İŞ SÜREÇLERİMİZ</span>
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>Eşyalarınızın nasıl taşındığını ve paketlendiğini canlı izleyin.</p>
          <div style={{ width: '80px', height: '5px', background: '#ffb703', margin: '15px auto' }}></div>
        </div>

        <div style={gridStyle}>
          
          {/* 1. SIRA: AMBALAJ VİDEOLARI */}
          <div style={mediaCardStyle}>
            <video width="100%" controls muted loop style={mediaStyle}>
              {/* Eski kırmızı ambalaj */}
              <source src="/assets/galeri/video1.mp4" type="video/mp4" />
            </video>
            <div style={captionStyle}>Hassas Mobilya Ambalajı (Bordo)</div>
          </div>

          <div style={mediaCardStyle}>
            <video width="100%" controls muted loop style={mediaStyle}>
              {/* Eski mavi ambalaj */}
              <source src="/assets/galeri/video2.mp4" type="video/mp4" />
            </video>
            <div style={captionStyle}>Tam Korumalı Eşya Hazırlığı (Mavi)</div>
          </div>

          {/* 2. SIRA: FOTOĞRAFLAR (YATAK VE ASANSÖR) */}
          <div style={mediaCardStyle}>
            {/* Eski kamyon arkası... */}
            <img src="/assets/galeri/foto1.jpg" alt="Ambalajlı Yatak" style={mediaStyle} />
            <div style={captionStyle}>Hijyenik Ambalaj Standartları</div>
          </div>

           <div style={mediaCardStyle}>
             {/* Eski kurmalı asansör... */}
            <img src="/assets/galeri/foto2.jpg" alt="Kurmalı Asansör" style={mediaStyle} />
            <div style={captionStyle}>Profesyonel Kurulum</div>
          </div>

          {/* 3. SIRA: ASANSÖR VİDEOLARI */}
          <div style={mediaCardStyle}>
            <video width="100%" controls muted loop style={mediaStyle}>
              {/* Eski asansörlü taşıma */}
              <source src="/assets/galeri/video3.mp4" type="video/mp4" />
            </video>
            <div style={captionStyle}>Dış Cephe Asansör Kurulumu</div>
          </div>

          <div style={mediaCardStyle}>
            <video width="100%" controls muted loop style={mediaStyle}>
              {/* Eski çaylı .mp4 */}
              <source src="/assets/galeri/video4.mp4" type="video/mp4" />
            </video>
            <div style={captionStyle}>Güvenli Balkon Kurulumu & Keyif Çayı</div>
          </div>

        </div>
      </section>

      {/* 📞 ALT ÇAĞRI */}
      <div style={footerCallStyle}>
        <h2 style={{ fontSize: '2.3rem', fontWeight: '800' }}>ÜCRETSİZ BİLGİ VE TEKLİF ALIN</h2>
        <p style={{ margin: '20px 0 40px', fontSize: '1.1rem', opacity: '0.9' }}>Daha detaylı bilgi için bize bir telefon kadar yakınsınız.</p>
        <a href={`tel:${telNo}`} style={bigCallBtn}>
          <i className="fa-solid fa-phone-volume"></i> {telGosterim}
        </a>
      </div>
    </div>
  );
}

// --- TASARIM STİLLERİ ---
const topBarStyle = { background: '#0a1a2f', color: 'white', padding: '12px 0', textAlign: 'center', position: 'sticky', top: '0', zIndex: '2000', borderBottom: '3px solid #d90429' };
const callButtonStyle = { background: '#d90429', color: 'white', padding: '8px 25px', borderRadius: '50px', textDecoration: 'none', fontSize: '1.1rem', fontWeight: '900' };
const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' };
const mediaCardStyle = { background: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 12px 30px rgba(0,0,0,0.1)', borderBottom: '5px solid #ffb703' };
const mediaStyle = { width: '100%', height: '300px', objectFit: 'cover', display: 'block' };
const captionStyle = { padding: '18px', textAlign: 'center', fontWeight: 'bold', color: '#0a1a2f', fontSize: '1.1rem' };
const footerCallStyle = { padding: '80px 20px', textAlign: 'center', background: '#0a1a2f', color: 'white', borderTop: '5px solid #ffb703' };
const bigCallBtn = { display: 'inline-block', background: '#ffb703', color: '#0a1a2f', padding: '22px 50px', borderRadius: '15px', fontSize: '1.6rem', fontWeight: '900', textDecoration: 'none' };

export default Home;