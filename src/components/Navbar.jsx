import React from 'react';
import { Link } from 'react-router-dom';
// Assets içine attığımız şeffaf logoyu çağırıyoruz
import LogoGorseli from '../assets/logo-son.png';

function Navbar() {
  return (
    <nav style={{ 
      background: '#0a1a2f', 
      padding: '5px 0', 
      borderBottom: '3px solid #d90429', 
      position: 'sticky', 
      top: 0, 
      zIndex: 1000,
      boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '0 20px' 
      }}>
        
        {/* LOGO ALANI - Şeffaf ve Profesyonel */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src={LogoGorseli} 
            alt="Proflash Nakliyat" 
            style={{ height: '85px', width: 'auto', display: 'block' }} 
          />
        </Link>

        {/* MENÜ ALANI - Linkler ve Buton */}
        <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
          <Link to="/" style={{ 
            color: 'white', 
            textDecoration: 'none', 
            fontWeight: '600',
            fontSize: '1.05rem' 
          }}>Ana Sayfa</Link>
          
          <Link to="/hizmetler" style={{ 
            color: 'white', 
            textDecoration: 'none', 
            fontWeight: '600',
            fontSize: '1.05rem' 
          }}>Hizmetler</Link>
          
          <Link to="/iletisim" style={{ 
            background: 'linear-gradient(135deg, #ffb703, #e0a100)', 
            color: '#0a1a2f', 
            padding: '10px 25px', 
            borderRadius: '30px', 
            fontWeight: 'bold', 
            textDecoration: 'none',
            boxShadow: '0 4px 10px rgba(255, 183, 3, 0.4)'
          }}>TEKLİF AL ⚡</Link>
        </div>

      </div>

      {/* MOBİL TASARIM AYARI */}
      <style>{`
        @media (max-width: 768px) {
          div[style*="justify-content: space-between"] {
            flex-direction: column !important;
            gap: 15px;
            padding: 15px 10px !important;
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;