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

      {/* 📸 İCRAAT GALERİSİ (7 FOTOĞRAF) */}
      <section style={{ padding: '60px 20px', maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#0a1a2f' }}>
            PROFESYONEL <span style={{ color: '#d90429' }}>İŞ SÜREÇLERİMİZ</span>
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>Paketlemeden asansör kurulumuna, işimizi titizlikle yapıyoruz.</p>
          <div style={{ width: '80px', height: '5px', background: '#ffb703', margin: '15px auto' }}></div>
        </div>

        <div style={gridStyle}>
          
          {/* FOTO 1 */}
          <div style={mediaCardStyle}>
            <img src="/assets/galeri/foto1.jpg" alt="Ambalaj" style={mediaStyle} />
            <div style={captionStyle}>Hassas Mobilya Ambalajı</div>
          </div>

          {/* FOTO 2 */}
          <div style={mediaCardStyle}>
            <img src="/assets/galeri/foto2.jpg" alt="Kamyon İçi" style={mediaStyle} />
            <div style={captionStyle}>Sarsılmaz İstifleme Düzeni</div>
          </div>

          {/* FOTO 3 */}
          <div style={mediaCardStyle}>
            <img src="/assets/galeri/foto3.jpg" alt="Asansör" style={mediaStyle} />
            <div style={captionStyle}>Yüksek Katlara Asansörlü Çözüm</div>
          </div>

          {/* FOTO 4 */}
          <div style={mediaCardStyle}>
            <img src="/assets/galeri/foto4.jpg" alt="Taşıma" style={mediaStyle} />
            <div style={captionStyle}>Güvenli Nakliye Standartları</div>
          </div>

          {/* FOTO 5 */}
          <div style={mediaCardStyle}>
            <img src="/assets/galeri/foto5.jpg" alt="Ekipman" style={mediaStyle} />
            <div style={captionStyle}>Profesyonel Ekip ve Ekipman</div>
          </div>

          {/* FOTO 7 */}
          <div style={mediaCardStyle}>
            <img src="/assets/galeri/foto7.jpg" alt="Paketleme Detay" style={mediaStyle} />
            <div style={captionStyle}>Tam Korumalı Eşya Hazırlığı</div>
          </div>

        </div>
      </section>

      {/* 🚚 SEO BÖLÜMÜ */}
      <div style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto', background: '#f8f9fa', borderRadius: '20px' }}>
        <div style={{ display: 'flex', gap: '50px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2 style={{ color: '#0a1a2f', marginBottom: '20px', fontSize: '2rem' }}>Neden Proflash Nakliyat?</h2>
            <p style={{ lineHeight: '1.8', color: '#444', fontSize: '1.1rem' }}>
              <strong>Ankara evden eve nakliyat</strong> sektöründe, eşyalarınızı kendi eşyamız gibi benimsiyoruz. 
              Ambalaj kalitemizle hasarı sıfıra indirirken, asansörlü sistemimizle taşınma süresini kısaltıyoruz.
              Şehir içi veya şehirler arası fark etmeksizin, <strong></strong> taşımacılık hizmeti sunuyoruz.
            </p>
          </div>
          <div style={whyUsBox}>
            <ul style={listStyle}>
              <li><i className="fa-solid fa-check" style={checkStyle}></i> Ücretsiz Ekspertiz</li>
              <li><i className="fa-solid fa-check" style={checkStyle}></i> Asansörlü Taşıma</li>
              <li><i className="fa-solid fa-check" style={checkStyle}></i> Güvenli Nakliye</li>
              <li><i className="fa-solid fa-check" style={checkStyle}></i> Uzman Marangoz</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 📞 ALT ÇAĞRI */}
      <div style={footerCallStyle}>
        <h2 style={{ fontSize: '2.3rem', fontWeight: '800' }}>HEMEN FİYAT ALIN</h2>
        <p style={{ margin: '20px 0 40px', fontSize: '1.1rem', opacity: '0.9' }}>Eşyalarınız için en uygun fiyat teklifini sunalım.</p>
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
const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' };
const mediaCardStyle = { background: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 12px 30px rgba(0,0,0,0.1)', borderBottom: '5px solid #ffb703', transition: 'transform 0.3s' };
const mediaStyle = { width: '100%', height: '250px', objectFit: 'cover', display: 'block' };
const captionStyle = { padding: '15px', textAlign: 'center', fontWeight: 'bold', color: '#0a1a2f', fontSize: '1.1rem' };
const whyUsBox = { flex: '1', minWidth: '300px', background: '#fff', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' };
const listStyle = { listStyle: 'none', padding: 0, lineHeight: '3', fontSize: '1.1rem', fontWeight: '500' };
const checkStyle = { color: '#ffb703', marginRight: '15px', fontSize: '1.2rem' };
const footerCallStyle = { padding: '80px 20px', textAlign: 'center', background: '#0a1a2f', color: 'white', borderTop: '5px solid #ffb703' };
const bigCallBtn = { display: 'inline-block', background: '#ffb703', color: '#0a1a2f', padding: '22px 50px', borderRadius: '15px', fontSize: '1.6rem', fontWeight: '900', textDecoration: 'none' };

export default Home;