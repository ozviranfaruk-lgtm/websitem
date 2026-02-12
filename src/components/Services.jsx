import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  const services = [
    {
      id: 1,
      icon: "🚛",
      title: "Evden Eve Nakliyat",
      desc: "Eşyalarınızı kendi eşyamız gibi benimsiyor, özel ambalaj malzemeleriyle sarıp yeni yuvanıza hasarsız bir şekilde taşıyoruz."
    },
    {
      id: 2,
      icon: "🏙️",
      title: "Şehirler Arası Nakliyat",
      desc: "Türkiye'nin 81 iline, geniş araç filomuzla taşımacılık hizmeti sunuyoruz. Mesafe bizim için engel değil."
    },
    {
      id: 3,
      icon: "🏗️",
      title: "Asansörlü Taşıma",
      desc: "Yüksek katlar dert değil. Asansör sistemimizle eşyalarınızı bina merdivenlerine değdirmeden güvenle taşıyoruz."
    },
    {
      id: 4,
      icon: "🏢",
      title: "Ofis & Büro Taşıma",
      desc: "İş yerinizdeki mobilya, elektronik cihaz ve evrakları iş kaybı yaşatmadan, profesyonel ekibimizle hızlıca yeni ofisinize taşıyoruz."
    },
    {
      id: 5,
      icon: "📦",
      title: "Paketleme & Ambalaj",
      desc: "Kırılacak eşyalarınız, mobilyalarınız ve beyaz eşyalarınız özel patpat naylon ve kraft kağıtlarla profesyonelce paketlenir."
    },
  
  ];

  // --- STİLLER ---
  const containerStyle = {
    padding: '60px 20px',
    backgroundColor: '#f4f6f9',
    textAlign: 'center'
  };

  const headerStyle = {
    color: '#0a1a2f',
    fontSize: '2.5rem',
    fontWeight: '900',
    marginBottom: '10px',
    textTransform: 'uppercase'
  };

  const subHeaderStyle = {
    color: '#666',
    fontSize: '1.1rem',
    maxWidth: '700px',
    margin: '0 auto 50px auto'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const cardStyle = {
    backgroundColor: 'white',
    padding: '40px 20px',
    borderRadius: '15px',
    boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
    transition: '0.3s',
    borderBottom: '5px solid #d90429', // Alt Kırmızı Çizgi
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const iconBoxStyle = {
    fontSize: '3rem',
    marginBottom: '20px',
    backgroundColor: '#fef2f2',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 10px rgba(217, 4, 41, 0.1)'
  };

  const titleStyle = {
    color: '#0a1a2f',
    fontSize: '1.4rem',
    fontWeight: 'bold',
    marginBottom: '15px'
  };

  const descStyle = {
    color: '#555',
    lineHeight: '1.6',
    fontSize: '0.95rem'
  };

  // Alt Kısımdaki Mavi Çağrı Kutusu
  const ctaSectionStyle = {
    marginTop: '60px',
    background: 'linear-gradient(135deg, #0a1a2f, #162a47)',
    padding: '50px',
    borderRadius: '20px',
    color: 'white',
    maxWidth: '1200px',
    margin: '60px auto 0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 10px 30px rgba(10, 26, 47, 0.3)'
  };

  const btnStyle = {
    marginTop: '20px',
    padding: '15px 40px',
    background: '#ffb703',
    color: '#0a1a2f',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    borderRadius: '30px',
    boxShadow: '0 4px 15px rgba(255, 183, 3, 0.4)',
    display: 'inline-block'
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>HİZMETLERİMİZ</h2>
      <p style={subHeaderStyle}>
        Profesyonel ekip ve son teknoloji ekipmanlarımızla taşımacılık sektöründe standartları yükseltiyoruz.
      </p>

      <div style={gridStyle}>
        {services.map(service => (
          <div key={service.id} style={cardStyle}>
            <div style={iconBoxStyle}>{service.icon}</div>
            <h3 style={titleStyle}>{service.title}</h3>
            <p style={descStyle}>{service.desc}</p>
          </div>
        ))}
      </div>

      {/* ALT ÇAĞRI KUTUSU (CTA) */}
      <div style={ctaSectionStyle}>
        <h2 style={{fontSize: '2rem', marginBottom: '10px'}}>Taşınmak Hiç Bu Kadar Kolay Olmamıştı!</h2>
        <p style={{color: '#ddd', fontSize: '1.1rem'}}>Hemen fiyat teklifi alın, profesyonel hizmetin keyfini çıkarın.</p>
        <Link to="/iletisim" style={btnStyle}>HEMEN FİYAT AL ⚡</Link>
      </div>

    </div>
  );
}

export default Services;