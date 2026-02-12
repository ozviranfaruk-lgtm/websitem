import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  // --- KURUMSAL RENKLER ---
  const colors = {
    lacivert: '#0a1a2f',
    kirmizi: '#d90429',
    altin: '#ffb703',
    beyaz: '#ffffff',
    gri: '#b0b0b0'
  };

  const footerStyle = {
    backgroundColor: colors.lacivert,
    color: colors.beyaz,
    padding: '60px 20px 20px 20px',
    borderTop: `5px solid ${colors.kirmizi}`, // Üstteki kırmızı çizgi
    fontFamily: 'Arial, sans-serif'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '40px'
  };

  const columnStyle = {
    flex: '1',
    minWidth: '250px'
  };

  const titleStyle = {
    color: colors.altin,
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  };

  const textStyle = {
    lineHeight: '1.6',
    color: colors.gri,
    fontSize: '0.95rem'
  };

  const linkListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0
  };

  const linkItemStyle = {
    marginBottom: '10px'
  };

  const linkStyle = {
    color: colors.beyaz,
    textDecoration: 'none',
    transition: '0.3s'
  };

  const bottomBar = {
    borderTop: '1px solid rgba(255,255,255,0.1)',
    marginTop: '50px',
    paddingTop: '20px',
    textAlign: 'center',
    fontSize: '0.9rem',
    color: colors.gri
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        
        {/* 1. SÜTUN: LOGO VE HAKKIMIZDA */}
        <div style={columnStyle}>
          <h3 style={{...titleStyle, fontSize: '2rem', fontStyle: 'italic', color: 'white'}}>
            PROFLASH <span style={{color: colors.altin, fontSize:'1rem'}}>NAKLİYAT</span>
          </h3>
          <p style={textStyle}>
            Türkiye'nin 81 iline sigortalı, asansörlü ve güvenilir taşımacılık hizmeti sunuyoruz. Eşyalarınız bize emanet.
          </p>
        </div>

        {/* 2. SÜTUN: HIZLI MENÜ */}
        <div style={columnStyle}>
          <h4 style={titleStyle}>HIZLI MENÜ</h4>
          <ul style={linkListStyle}>
            <li style={linkItemStyle}><Link to="/" style={linkStyle}>❯ Ana Sayfa</Link></li>
            <li style={linkItemStyle}><Link to="/hizmetler" style={linkStyle}>❯ Hizmetlerimiz</Link></li>
            <li style={linkItemStyle}><Link to="/iletisim" style={linkStyle}>❯ Fiyat Teklifi Al</Link></li>
          </ul>
        </div>

        {/* 3. SÜTUN: İLETİŞİM */}
        <div style={columnStyle}>
          <h4 style={titleStyle}>BİZE ULAŞIN</h4>
          <p style={textStyle}>
            📍 <strong>Adres:</strong> Ankara, Türkiye <br />
            📞 <strong>Telefon:</strong> 0552 282 0686 <br />
            📧 <strong>E-Posta:</strong> ozviranfarukgmail.com
          </p>
          {/* Sosyal Medya Kutuları (Görsel) */}
          <div style={{marginTop: '20px', display:'flex', gap:'10px'}}>
             <div style={{width:'40px', height:'40px', background:colors.kirmizi, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center'}}>fb</div>
             <div style={{width:'40px', height:'40px', background:colors.kirmizi, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center'}}>ig</div>
             <div style={{width:'40px', height:'40px', background:colors.kirmizi, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center'}}>tw</div>
          </div>
        </div>

      </div>

      {/* EN ALT ŞERİT */}
      <div style={bottomBar}>
        &copy; {new Date().getFullYear()} <strong>Proflash Nakliyat</strong>. Tüm Hakları Saklıdır.
      </div>
    </footer>
  );
}

export default Footer;