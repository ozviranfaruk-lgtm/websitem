import React from 'react';
import { Link } from 'react-router-dom';
// ÖNEMLİ: assets klasöründeki şeffaf logonun adının logo-son.png olduğundan emin ol
import LogoGorseli from '../assets/logo-son.png';

function Navbar() {
  return (
    <nav style={{ 
      background: '#0a1a2f', 
      padding: '5px 0', 
      borderBottom: '3px solid #d90429', 
      boxShadow: '0 4px 15px rgba(0,0,0,0.3)', 
      position: 'sticky', 
      top: 0, 
      zIndex: 1000 
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        justify-content: space-between, 
        alignItems: 'center', 
        padding: '0 20px' 
      }}>
        
        {/* LOGO ALANI */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img 
            src={LogoGorseli} 
            alt="Proflash Nakliyat" 
            style={{ 
              height: '80px', // Logo boyutunu buradan ayarlayabilirsin
              width: 'auto', 
              display: 'block' 
            }} 
          />
        </Link>

        {/* MENÜ ALANI */}
        <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
          <Link to="/" style={{ 
            color: 'white', 
            textDecoration: 'none', 
            fontWeight: '600',
            fontSize: '1.1rem' 
          }}>Ana Sayfa</Link>
          
          <Link to="/hizmetler" style={{ 
            color: 'white', 
            textDecoration: 'none', 
            fontWeight: '600',
            fontSize: '1.1rem' 
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
      
      {/* Mobilde düzgün görünmesi için küçük bir ayar */}
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