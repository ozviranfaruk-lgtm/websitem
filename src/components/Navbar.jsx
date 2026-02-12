import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  // --- KURUMSAL TEMA STİLLERİ ---
  const navStyle = {
    background: '#0a1a2f', // Paneldeki Lacivert
    padding: '15px 0',
    borderBottom: '4px solid #d90429', // Paneldeki Kırmızı Çizgi
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
    color: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px'
  };

  const logoBoxStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    textDecoration: 'none'
  };

  // Paneldeki Kamyon İkonu (CSS ile yapılmış hali)
  const iconBoxStyle = {
    fontSize: '2rem',
    color: '#ffb703', // Altın Sarısı
    background: '#d90429', // Kırmızı
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    border: '3px solid white',
    boxShadow: '0 0 15px rgba(255, 183, 3, 0.6)'
  };

  const logoTextStyle = {
    display: 'flex',
    flexDirection: 'column'
  };

  const titleStyle = {
    margin: 0,
    fontSize: '1.8rem',
    fontWeight: '900',
    color: 'white',
    letterSpacing: '1px',
    fontStyle: 'italic', // Hız hissi için italik
    textTransform: 'uppercase'
  };

  const subTitleStyle = {
    color: '#ffb703', // Altın
    fontWeight: '600',
    fontSize: '0.8rem',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    marginTop: '2px'
  };

  const menuStyle = {
    display: 'flex',
    gap: '30px',
    listStyle: 'none',
    margin: 0,
    padding: 0
  };

  const linkStyle = {
    color: '#e0e0e0',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: '600',
    transition: '0.3s'
  };

  const btnStyle = {
    background: 'linear-gradient(135deg, #ffb703, #e0a100)',
    color: '#0a1a2f',
    padding: '10px 25px',
    borderRadius: '30px',
    textDecoration: 'none',
    fontWeight: 'bold',
    boxShadow: '0 4px 10px rgba(255, 183, 3, 0.4)'
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        {/* LOGO ALANI */}
        <Link to="/" style={logoBoxStyle}>
          <div style={iconBoxStyle}>🚚</div> {/* Buraya kamyon emojisi koyduk, istersen ikon kütüphanesi bağlarız */}
          <div style={logoTextStyle}>
            <h1 style={titleStyle}>PROFLASH</h1>
            <span style={subTitleStyle}>NAKLİYAT & LOJİSTİK</span>
          </div>
        </Link>

        {/* MENÜ ALANI */}
        <ul style={menuStyle}>
          <li><Link to="/" style={linkStyle}>Ana Sayfa</Link></li>
          <li><Link to="/hizmetler" style={linkStyle}>Hizmetler</Link></li>
          <li><Link to="/iletisim" style={btnStyle}>TEKLİF AL ⚡</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;