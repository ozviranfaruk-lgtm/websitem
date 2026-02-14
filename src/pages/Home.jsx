import React from 'react';
import Hero from '../components/Hero'; 

function Home() {
  const telNo = "05522820686"; 
  const telGosterim = "0552 282 06 86";

  return (
    <div style={{ fontFamily: '"Segoe UI", Arial, sans-serif', backgroundColor: '#fff' }}>
      
      {/* 📞 SABİT İLETİŞİM BANDI */}
      <div style={{
        background: '#d90429',
        color: 'white',
        padding: '12px 0',
        textAlign: 'center',
        position: 'sticky',
        top: '0',
        zIndex: '2000',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        borderBottom: '3px solid #ffb703'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <span style={{ fontWeight: 'bold' }}>7/24 Ankara & 81 İl Nakliye Hattı:</span>
          <a href={`tel:${telNo}`} style={{
            background: 'white',
            color: '#d90429',
            padding: '6px 20px',
            borderRadius: '50px',
            textDecoration: 'none',
            fontSize: '1.2rem',
            fontWeight: '900',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
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

      {/* 📦 PROFESYONEL HİZMETLER BÖLÜMÜ */}
      <div style={{ padding: '70px 20px', textAlign: 'center', background: '#f8f9fa' }}>
        <h2 style={{ color: '#0a1a2f', fontSize: '2.2rem', fontWeight: '900' }}>
          HER EŞYA BİZİM İÇİN <span style={{ color: '#d90429' }}>DEĞERLİDİR</span>
        </h2>
        <div style={{ width: '80px', height: '5px', background: '#ffb703', margin: '15px auto 40px auto' }}></div>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={serviceBox}>
            <i className="fa-solid fa-box-open" style={iconStyle}></i>
            <h3 style={{fontSize: '1.2rem', color: '#0a1a2f'}}>Özel Ambalajlama</h3>
            <p style={{fontSize: '0.95rem', color: '#666'}}>Mobilyalarınız ve beyaz eşyalarınız çift katlı havalı pıtptlar ve darbe emici köşeliklerle sarılır.</p>
          </div>
          <div style={serviceBox}>
            <i className="fa-solid fa-truck-ramp-box" style={iconStyle}></i>
            <h3 style={{fontSize: '1.2rem', color: '#0a1a2f'}}>Asansörlü Taşıma</h3>
            <p style={{fontSize: '0.95rem', color: '#666'}}>Eşyalarınızın bina içi dar merdivenlerde zarar görmemesi için modüler asansör sistemleri kullanılır.</p>
          </div>
          <div style={serviceBox}>
            <i className="fa-solid fa-handshake-angle" style={iconStyle}></i>
            <h3 style={{fontSize: '1.2rem', color: '#0a1a2f'}}>Kurumsal Güven</h3>
            <p style={{fontSize: '0.95rem', color: '#666'}}>Yılların verdiği tecrübe ile eşyalarınız profesyonel ekibimiz tarafından sıfır riskle taşınır.</p>
          </div>
        </div>
      </div>

      {/* 🚚 AÇIKLAYICI KURUMSAL YAZI */}
      <div style={{ padding: '80px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '50px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2 style={{ color: '#0a1a2f', marginBottom: '20px' }}>Ankara'nın Güvenilir Nakliye Firması</h2>
            <p style={{ lineHeight: '1.8', color: '#444', fontSize: '1.1rem' }}>
              <strong>Proflash Nakliyat</strong>, Ankara merkezli olarak profesyonel evden eve taşımacılık hizmetlerini tüm Türkiye'ye sunar. 
              Deneyimli personelimiz, geniş araç filomuz ve modern taşıma ekipmanlarımızla taşınma sürecinizi bir yük olmaktan çıkarıyoruz. 
              Müşteri memnuniyeti odaklı çalışma prensibimizle, Ankara içi semt taşımacılığından, 81 ile şehirler arası sevkiyatlarımıza kadar 
              her adımda şeffaf ve kaliteli hizmet sağlıyoruz.
            </p>
          </div>
          <div style={{ 
            flex: '1', 
            minWidth: '300px', 
            background: '#0a1a2f', 
            padding: '40px', 
            borderRadius: '25px', 
            color: 'white',
            boxShadow: '0 20px 40px rgba(10,26,47,0.2)'
          }}>
            <h3 style={{ color: '#ffb703', marginBottom: '20px' }}>Neden Bizi Seçmelisiniz?</h3>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.2', fontSize: '1.05rem' }}>
              <li><i className="fa-solid fa-circle-check" style={{color:'#ffb703', marginRight:'10px'}}></i> Ücretsiz Ekspertiz Hizmeti</li>
              <li><i className="fa-solid fa-circle-check" style={{color:'#ffb703', marginRight:'10px'}}></i> Profesyonel Marangoz Hizmeti</li>
              <li><i className="fa-solid fa-circle-check" style={{color:'#ffb703', marginRight:'10px'}}></i> Sabit Fiyat Garantisi</li>
              <li><i className="fa-solid fa-circle-check" style={{color:'#ffb703', marginRight:'10px'}}></i> 7/24 Kesintisiz İletişim</li>
              <li><i className="fa-solid fa-circle-check" style={{color:'#ffb703', marginRight:'10px'}}></i> Modern Asansörlü Araçlar</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 📞 FİNAL ÇAĞRI BUTONU */}
      <div style={{ 
        padding: '100px 20px', 
        textAlign: 'center', 
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        borderTop: '1px solid #dee2e6'
      }}>
        <h2 style={{ fontSize: '2.5rem', color: '#0a1a2f', fontWeight: '800' }}>ŞİMDİ FİYAT TEKLİFİ ALIN</h2>
        <p style={{ margin: '20px 0 40px', fontSize: '1.2rem', color: '#666' }}>Eşyalarınızın detaylarını paylaşın, en uygun fiyatı hemen verelim.</p>
        <a href={`tel:${telNo}`} style={{
          display: 'inline-block',
          background: '#d90429',
          color: 'white',
          padding: '22px 55px',
          borderRadius: '15px',
          fontSize: '1.6rem',
          fontWeight: '900',
          textDecoration: 'none',
          boxShadow: '0 12px 25px rgba(217, 4, 41, 0.4)',
          transition: '0.3s'
        }}>
          <i className="fa-solid fa-phone-volume" style={{marginRight: '10px'}}></i> {telGosterim}
        </a>
      </div>

    </div>
  );
}

const serviceBox = {
  background: 'white',
  padding: '40px 25px',
  borderRadius: '20px',
  width: '300px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
  borderBottom: '5px solid #d90429'
};

const iconStyle = {
  fontSize: '3rem',
  color: '#ffb703',
  marginBottom: '20px'
};

export default Home;