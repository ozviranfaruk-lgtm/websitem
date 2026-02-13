import React from 'react';
import Hero from '../components/Hero'; 

function Home() {
  return (
    <div>
      <Hero />

      {/* ANA BÖLÜM: ANKARA & ANTALYA ODAKLI */}
      <div style={{ padding: '60px 20px', textAlign: 'center', background: 'white' }}>
        <h1 style={{ color: '#0a1a2f', fontSize: '2.2rem', marginBottom: '10px' }}>
          ANKARA - ANTALYA <span style={{ color: '#d90429' }}>EVDEN EVE NAKLİYAT</span>
        </h1>
        <p style={{ color: '#ffb703', fontWeight: 'bold', fontSize: '1.2rem', marginTop: '0' }}>
          Şehir İçi ve Şehirler Arası Güvenli Taşımacılık
        </p>
        <div style={{ width: '100px', height: '4px', background: '#ffb703', margin: '0 auto 30px auto' }}></div>
        
        <p style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.1rem', color: '#444', lineHeight: '1.8' }}>
          <strong>Proflash Nakliyat</strong> olarak, başta <strong>Ankara evden eve nakliyat</strong> ve 
          <strong> Antalya evden eve nakliyat</strong> olmak üzere, Türkiye'nin 81 ilinde profesyonel çözümler sunuyoruz. 
          Eşyalarınızı <strong>sigortalı, asansörlü ve ambalajlı</strong> sistemlerle, sanki kendi eşyamızmış gibi titizlikle taşıyoruz. 
          Ankara ve Antalya arası günlük seferlerimizle en uygun fiyatlı ve en hızlı taşınma deneyimini yaşayın.
        </p>

        {/* HİZMET DETAYLARI - GOOGLE BUNLARA BAYILIR */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '20px', 
          marginTop: '40px', 
          flexWrap: 'wrap' 
        }}>
          <div style={serviceBoxStyle}>
            <i className="fa-solid fa-truck-ramp-box" style={iconStyle}></i>
            <h4 style={{margin: '10px 0'}}>Asansörlü Nakliyat</h4>
            <p style={{fontSize: '0.9rem', color: '#666'}}>Yüksek katlarda bile eşyalarınız çizilmeden taşınır.</p>
          </div>
          <div style={serviceBoxStyle}>
            <i className="fa-solid fa-shield-halved" style={iconStyle}></i>
            <h4 style={{margin: '10px 0'}}>Sigortalı Taşıma</h4>
            <p style={{fontSize: '0.9rem', color: '#666'}}>Tüm eşyalarınız nakliye sigortasıyla güvence altındadır.</p>
          </div>
          <div style={serviceBoxStyle}>
            <i className="fa-solid fa-box-open" style={iconStyle}></i>
            <h4 style={{margin: '10px 0'}}>Profesyonel Paketleme</h4>
            <p style={{fontSize: '0.9rem', color: '#666'}}>Kırılacak her şey özel ambalaj malzemeleriyle korunur.</p>
          </div>
        </div>

        {/* İSTATİSTİKLER */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '30px', 
          marginTop: '60px', 
          flexWrap: 'wrap' 
        }}>
          <div style={{ minWidth: '150px' }}>
            <h3 style={{ fontSize: '2.5rem', color: '#d90429', margin: 0 }}>81</h3>
            <span style={{ fontWeight: 'bold', color: '#0a1a2f' }}>İlde Aktif Hizmet</span>
          </div>
          <div style={{ minWidth: '150px' }}>
            <h3 style={{ fontSize: '2.5rem', color: '#d90429', margin: 0 }}>1000+</h3>
            <span style={{ fontWeight: 'bold', color: '#0a1a2f' }}>Başarılı Nakliye</span>
          </div>
          <div style={{ minWidth: '150px' }}>
            <h3 style={{ fontSize: '2.5rem', color: '#d90429', margin: 0 }}>%100</h3>
            <span style={{ fontWeight: 'bold', color: '#0a1a2f' }}>Müşteri Memnuniyeti</span>
          </div>
        </div>
      </div>

      {/* ALT BÖLÜM: NEDEN BİZ? */}
      <div style={{ background: '#0a1a2f', color: 'white', padding: '50px 20px', textAlign: 'center' }}>
        <h3>Ankara'dan Antalya'ya, Türkiye'nin Her Yerine!</h3>
        <p style={{ maxWidth: '700px', margin: '20px auto', opacity: '0.8' }}>
          Şehirler arası taşınmak stresli olabilir. Proflash Nakliyat, Ankara ve Antalya merkezli 
          geniş araç filosuyla bu süreci sizin için kolaylaştırıyor. Ücretsiz ekspertiz için bize ulaşın!
        </p>
      </div>
    </div>
  );
}

// Tasarım için küçük yardımcı stiller
const serviceBoxStyle = {
  background: '#f8f9fa',
  padding: '20px',
  borderRadius: '15px',
  width: '250px',
  borderBottom: '4px solid #ffb703',
  boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
};

const iconStyle = {
  fontSize: '2rem',
  color: '#d90429'
};

export default Home;