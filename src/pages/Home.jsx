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

      {/* 📦 GRUP 1: PROFESYONEL AMBALAJ & PAKETLEME */}
      <section style={{ padding: '80px 20px', maxWidth: '1300px', margin: '0 auto' }}>
        <div style={sectionTitleStyle}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#0a1a2f' }}>
            PROFESYONEL <span style={{ color: '#d90429' }}>AMBALAJ</span> & PAKETLEME
          </h2>
          <div style={dividerStyle}></div>
          <p style={subTextStyle}>Eşyalarınızın yolculuğu, darbe emici özel pıt pıt malzemelerle başlar.</p>
        </div>

        <div style={gridStyle}>
          {/* VİDEO 1: BORDO PAKETLEME */}
          <div style={mediaCardStyle}>
            <video width="100%" controls muted loop style={mediaStyle}>
              <source src="/assets/ambalaj/video_bordo.mp4" type="video/mp4" />
            </video>
            <div style={captionStyle}>Hassas Mobilya Paketleme Sistemi</div>
          </div>

          {/* VİDEO 2: MAVİ PAKETLEME ODA TURU */}
          <div style={mediaCardStyle}>
            <video width="100%" controls muted loop style={mediaStyle}>
              <source src="/assets/ambalaj/video_mavi.mp4" type="video/mp4" />
            </video>
            <div style={captionStyle}>Tam Korumalı Eşya Hazırlığı</div>
          </div>

          {/* FOTO 1: YATAK PAKETİ */}
          <div style={mediaCardStyle}>
            <img src="/assets/ambalaj/foto_yatak.jpg" alt="Ambalajlı Yatak" style={mediaStyle} />
            <div style={captionStyle}>Hijyenik ve Güvenli Sarım</div>
          </div>

          {/* FOTO 2: KAMYON İÇİ YERLEŞİM */}
          <div style={mediaCardStyle}>
            <img src="/assets/ambalaj/foto_kamyon_ic.jpg" alt="Kamyon Düzeni" style={mediaStyle} />
            <div style={captionStyle}>Sarsılmaz İstifleme Düzeni</div>
          </div>
        </div>
      </section>

      {/* 🏗️ GRUP 2: ASANSÖRLÜ PROFESYONEL TAŞIMA */}
      <section style={{ padding: '80px 20px', background: '#f8f9fa' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div style={sectionTitleStyle}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#0a1a2f' }}>
              ASANSÖRLÜ <span style={{ color: '#d90429' }}>PROFESYONEL</span> TAŞIMA
            </h2>
            <div style={dividerStyle}></div>
            <p style={subTextStyle}>Yüksek katlara sarsıntısız, hızlı ve hasarsız erişim sağlıyoruz.</p>
          </div>

          {/* ASANSÖR VİDEOLARI GELECEK */}
          <div style={{...gridStyle, opacity: '0.6'}}>
            <div style={mediaCardStyle}>
               <div style={{...mediaStyle, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', background:'#eee', gap:'15px'}}>
                  <i className="fa-solid fa-truck-loading" style={{fontSize:'4rem', color:'#ccc'}}></i>
                  <span style={{color:'#999', fontWeight:'bold', fontSize:'1.2rem'}}>Asansör Videoları Yükleniyor...</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🚚 SEO AÇIKLAMALARI VE NEDEN BİZ? */}
      <div style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '50px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2 style={{ color: '#0a1a2f', marginBottom: '20px', fontSize: '2rem' }}>Güvenin Adresi: Proflash Nakliyat</h2>
            <p style={{ lineHeight: '1.8', color: '#444', fontSize: '1.1rem' }}>
              <strong>Ankara evden eve nakliyat</strong> sektöründe öncü firmalardan biri olarak, eşyalarınızı kendi eşyamız gibi benimsiyoruz. 
              Modern araç filomuz ve uzman kadromuzla, Ankara'dan Türkiye'nin her noktasına <strong>sözleşmeli ve güvenli</strong> hizmet sunuyoruz. 
              Ambalaj kalitemizle hasarı sıfıra indirirken, asansörlü sistemimizle hızı artırıyoruz.
            </p>
          </div>
          <div style={whyUsBox}>
            <h3 style={{ color: '#ffb703', marginBottom: '20px', fontSize: '1.5rem' }}>Neden Bizi Seçmelisiniz?</h3>
            <ul style={listStyle}>
              <li><i className="fa-solid fa-check" style={checkStyle}></i> Sabit Fiyat Garantisi</li>
              <li><i className="fa-solid fa-check" style={checkStyle}></i> Profesyonel Paketleme Ekibi</li>
              <li><i className="fa-solid fa-check" style={checkStyle}></i> Ücretsiz Ekspertiz Desteği</li>
              <li><i className="fa-solid fa-check" style={checkStyle}></i> 81 İle Güvenli Taşımacılık</li>
              <li><i className="fa-solid fa-check" style={checkStyle}></i> 7/24 Müşteri Destek Hattı</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 📞 ALT ÇAĞRI */}
      <div style={footerCallStyle}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>ÜCRETSİZ BİLGİ VE TEKLİF</h2>
        <p style={{ margin: '20px 0 40px', fontSize: '1.2rem', opacity: '0.9' }}>Hemen arayın, eşyalarınız için en avantajlı fiyatı hazırlayalım.</p>
        <a href={`tel:${telNo}`} style={bigCallBtn}>
          <i className="fa-solid fa-phone-volume"></i> {telGosterim}
        </a>
      </div>
    </div>
  );
}

// --- TASARIM STİLLERİ ---
const topBarStyle = { background: '#0a1a2f', color: 'white', padding: '15px 0', textAlign: 'center', position: 'sticky', top: '0', zIndex: '2000', borderBottom: '3px solid #d90429' };
const callButtonStyle = { background: '#d90429', color: 'white', padding: '8px 30px', borderRadius: '50px', textDecoration: 'none', fontSize: '1.2rem', fontWeight: '900', boxShadow: '0 4px 15px rgba(217, 4, 41, 0.3)' };
const sectionTitleStyle = { textAlign: 'center', marginBottom: '50px' };
const dividerStyle = { width: '80px', height: '5px', background: '#ffb703', margin: '20px auto' };
const subTextStyle = { fontSize: '1.2rem', color: '#666' };
const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' };
const mediaCardStyle = { background: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.1)', borderBottom: '6px solid #d90429' };
const mediaStyle = { width: '100%', height: '350px', objectFit: 'cover', display: 'block' };
const captionStyle = { padding: '20px', textAlign: 'center', fontWeight: 'bold', color: '#0a1a2f', fontSize: '1.1rem' };
const whyUsBox = { flex: '1', minWidth: '320px', background: '#0a1a2f', padding: '50px', borderRadius: '30px', color: 'white', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' };
const listStyle = { listStyle: 'none', padding: 0, lineHeight: '3' };
const checkStyle = { color: '#ffb703', marginRight: '15px', fontSize: '1.2rem' };
const footerCallStyle = { padding: '100px 20px', textAlign: 'center', background: '#0a1a2f', color: 'white', borderTop: '5px solid #ffb703' };
const bigCallBtn = { display: 'inline-block', background: '#ffb703', color: '#0a1a2f', padding: '25px 60px', borderRadius: '20px', fontSize: '1.8rem', fontWeight: '900', textDecoration: 'none', boxShadow: '0 10px 30px rgba(255, 183, 3, 0.3)' };

export default Home;