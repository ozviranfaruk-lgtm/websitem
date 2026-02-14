import React from 'react';

const Hero = () => {
  const telNo = "05522820686";

  return (
    <div style={{
      position: 'relative',
      height: '80vh',
      minHeight: '550px',
      background: 'linear-gradient(rgba(10, 26, 47, 0.75), rgba(10, 26, 47, 0.75)), url("https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1500&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center',
      padding: '0 20px',
      overflow: 'hidden'
    }}>
      
      {/* ANA BAŞLIK - DAHA DOLGUN VE VURUCU */}
      <h1 style={{ 
        fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', 
        fontWeight: '900', 
        marginBottom: '15px',
        textShadow: '3px 3px 15px rgba(0,0,0,0.6)',
        lineHeight: '1.1'
      }}>
        PROFLASH <span style={{ color: '#ffb703' }}>NAKLİYAT</span>
      </h1>
      
      <p style={{ 
        fontSize: 'clamp(1.1rem, 2.8vw, 1.8rem)', 
        maxWidth: '900px', 
        marginBottom: '40px',
        fontWeight: '500',
        color: '#f0f0f0',
        textShadow: '1px 1px 5px rgba(0,0,0,0.5)'
      }}>
        Ankara Merkezli Güçlü Filo, Türkiye'nin 81 İline Güvenli Taşımacılık
      </p>

      {/* İKON GRUPLARI - TAM ÜÇLÜ VE DOLGUN YAPI */}
      <div style={{ 
        display: 'flex', 
        gap: '30px', 
        marginBottom: '50px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {/* GÜVENLİ (ESKİ SİGORTALI YERİNE) */}
        <div style={iconContainerStyle}>
          <div style={circleStyle}>
            <i className="fa-solid fa-user-shield"></i>
          </div>
          <span style={iconTextStyle}>Güvenli</span>
        </div>

        {/* ASANSÖRLÜ */}
        <div style={iconContainerStyle}>
          <div style={circleStyle}>
            <i className="fa-solid fa-truck-ramp-box"></i>
          </div>
          <span style={iconTextStyle}>Asansörlü</span>
        </div>

        {/* AMBALAJLI */}
        <div style={iconContainerStyle}>
          <div style={circleStyle}>
            <i className="fa-solid fa-box-open"></i>
          </div>
          <span style={iconTextStyle}>Ambalajlı</span>
        </div>
      </div>

      {/* AKSİYON BUTONU - BÜYÜK VE PARLAYAN */}
      <a href={`tel:${telNo}`} style={{
        background: '#d90429',
        color: 'white',
        padding: '22px 55px',
        borderRadius: '50px',
        fontSize: '1.5rem',
        fontWeight: '900',
        textDecoration: 'none',
        boxShadow: '0 12px 30px rgba(217, 4, 41, 0.5)',
        transition: 'all 0.3s ease',
        borderBottom: '4px solid #a8001d',
        display: 'flex',
        alignItems: 'center',
        gap: '15px'
      }}
      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <i className="fa-solid fa-phone-volume"></i> ÜCRETSİZ TEKLİF AL
      </a>

      {/* ALT BİLGİ */}
      <div style={{ marginTop: '25px', color: '#ffb703', fontWeight: 'bold', fontSize: '1.1rem' }}>
        <i className="fa-solid fa-check-double"></i> Şehir İçi & Şehirler Arası Uzman Kadro
      </div>
    </div>
  );
};

// --- ÖZEL STİLLER ---
const iconContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12px',
  minWidth: '100px'
};

const circleStyle = {
  width: '70px',
  height: '70px',
  background: 'rgba(255, 183, 3, 0.15)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2rem',
  color: '#ffb703',
  border: '2px solid rgba(255, 183, 3, 0.5)',
  backdropFilter: 'blur(5px)',
  boxShadow: '0 0 20px rgba(255, 183, 3, 0.2)'
};

const iconTextStyle = {
  fontWeight: '800',
  fontSize: '1.1rem',
  letterSpacing: '0.5px',
  textTransform: 'uppercase'
};

export default Hero;