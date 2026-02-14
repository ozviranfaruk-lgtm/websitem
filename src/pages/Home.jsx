import React from 'react';
import Hero from '../components/Hero'; 

function Home() {
  const telNo = "05522820686"; 
  const telGosterim = "0552 282 06 86";

  return (
    <div style={{ fontFamily: '"Segoe UI", Arial, sans-serif', backgroundColor: '#fff' }}>
      
      {/* 📞 KURUMSAL ÜST BANT */}
      <div style={{
        background: '#0a1a2f',
        color: 'white',
        padding: '12px 0',
        textAlign: 'center',
        position: 'sticky',
        top: '0',
        zIndex: '2000',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        borderBottom: '3px solid #d90429'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
          <span style={{ fontWeight: 'bold', color: '#ffb703' }}>7/24 Ankara Merkezli Tüm Türkiye Hattı:</span>
          <a href={`tel:${telNo}`} style={{
            background: '#d90429',
            color: 'white',
            padding: '6px 25px',
            borderRadius: '50px',
            textDecoration: 'none',
            fontSize: '1.2rem',
            fontWeight: '900',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            animation: 'pulse 1.5s infinite' 
          }}>
            <i className="fa-solid fa-phone-volume"></i> {telGosterim}
          </a>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }
      `}</style>

      <Hero />

      {/* 📦 HİZMET DETAYLARI */}
      <div style={{ padding: '80px 20px', textAlign: 'center', background: '#f8f9fa' }}>
        <h2 style={{ color: '#0a1a2f', fontSize: '2.5rem', fontWeight: '900' }}>
          PROFESYONEL <span style={{ color: '#d90429' }}>ÇÖZÜMLER</span>
        </h2>
        <div style={{ width: '80px', height: '5px', background: '#ffb703', margin: '20px auto 50px auto' }}></div>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={serviceBoxStyle}>
            <i className="fa-solid fa-box-archive" style={iconStyle}></i>
            <h3 style={serviceTitle}>Kusursuz Ambalaj</h3>
            <p style={serviceText}>Mobilyalarınız ve hassas eşyalarınız darbe emici özel pıtptlar ile kat kat sarılarak taşınır.</p>
          </div>
          <div style={serviceBoxStyle}>
            <i className="fa-solid fa-truck-pickup" style={iconStyle}></i>
            <h3 style={serviceTitle}>Asansörlü Sistem</h3>
            <p style={serviceText}>Eşyalarınız bina içi dar merdivenlerden değil, balkondan modüler asansörle güvenle indirilir.</p>
          </div>
          <div style={serviceBoxStyle}>
            <i className="fa-solid fa-route" style={iconStyle}></i>
            <h3 style={serviceTitle}>81 İl Nakliyat</h3>
            <p style={serviceText}>Ankara merkezli olarak Türkiye'nin en ücra köşesine kadar anahtar teslim taşıma yapıyoruz.</p>
          </div>
        </div>
      </div>

      {/* 🚚 KURUMSAL AÇIKLAMA (SEO) */}
      <div style={{ padding: '80px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '50px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2 style={{ color: '#0a1a2f', marginBottom: '20px' }}>Güvenin Adresi: Proflash Nakliyat</h2>
            <p style={{ lineHeight: '1.8', color: '#444', fontSize: '1.1rem' }}>
              <strong>Ankara evden eve nakliyat</strong> arayışınızda Proflash olarak yanınızdayız. 
              Deneyimli kadromuz, ambalajlama standartlarımız ve geniş araç filomuzla hizmet veriyoruz. 
              Her taşıma işini kurumsal bir disiplinle ele alıyor, Ankara'dan tüm illerimize <strong>güvenli ve sözleşmeli</strong> taşımacılık yapıyoruz. 
              Eşyanızın miktarı ne olursa olsun, bizde her zaman bir çözüm var.
            </p>
          </div>
          <div style={whyUsBox}>
            <h3 style={{ color: '#ffb703', marginBottom: '20px' }}>Neden Biz?</h3>
            <ul style={listStyle}>
              <li><i className="fa-solid fa-check" style={checkStyle}></i> Sabit Fiyat Garantisi</li>
              <li><i className="fa-solid fa-check" style={checkStyle}></i> Profesyonel Marangoz Hizmeti</li>
              <li><i className="fa-solid fa-check" style={checkStyle}></i> Ücretsiz Ekspertiz</li>
              <li><i className="fa-solid fa-check" style={checkStyle}></i> Güvenli & Ambalajlı Taşıma</li>
              <li><i className="fa-solid fa-check" style={checkStyle}></i> 7/24 Kesintisiz Destek</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 📞 ALT ÇAĞRI */}
      <div style={{ 
        padding: '100px 20px', 
        textAlign: 'center', 
        background: '#0a1a2f',
        color: 'white',
        borderTop: '5px solid #ffb703'
      }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>ÜCRETSİZ BİLGİ ALIN</h2>
        <p style={{ margin: '20px 0 40px', fontSize: '1.2rem', opacity: '0.8' }}>Hemen arayın, eşyalarınız için en uygun fiyatı sunalım.</p>
        <a href={`tel:${telNo}`} style={{
          display: 'inline-block',
          background: '#ffb703',
          color: '#0a1a2f',
          padding: '22px 60px',
          borderRadius: '15px',
          fontSize: '1.6rem',
          fontWeight: '900',
          textDecoration: 'none'
        }}>
          <i className="fa-solid fa-phone-volume"></i> {telGosterim}
        </a>
      </div>
    </div>
  );
}

// STİLLER
const serviceBoxStyle = { background: 'white', padding: '40px 30px', borderRadius: '25px', width: '300px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', borderBottom: '6px solid #d90429' };
const iconStyle = { fontSize: '3rem', color: '#ffb703', marginBottom: '20px' };
const serviceTitle = { color: '#0a1a2f', marginBottom: '15px' };
const serviceText = { color: '#666', fontSize: '0.95rem', lineHeight: '1.6' };
const whyUsBox = { flex: '1', minWidth: '300px', background: '#0a1a2f', padding: '40px', borderRadius: '30px', color: 'white', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' };
const listStyle = { listStyle: 'none', padding: 0, lineHeight: '2.5' };
const checkStyle = { color: '#ffb703', marginRight: '10px' };

export default Home;