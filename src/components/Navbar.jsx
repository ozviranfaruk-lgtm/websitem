import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      {/* --- TELEFON VE BİLGİSAYAR İÇİN AKILLI CSS (SİHİRLİ KISIM BURASI) --- */}
      <style>
        {`
          .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
          }
          
          .nav-menu {
            display: flex;
            gap: 30px;
            list-style: none;
            margin: 0;
            padding: 0;
            align-items: center;
          }

          .nav-link {
            color: #e0e0e0;
            text-decoration: none;
            font-size: 1.1rem;
            font-weight: 600;
            transition: 0.3s;
          }

          .nav-btn {
            background: linear-gradient(135deg, #ffb703, #e0a100);
            color: #0a1a2f;
            padding: 10px 25px;
            border-radius: 30px;
            text-decoration: none;
            font-weight: bold;
            box-shadow: 0 4px 10px rgba(255, 183, 3, 0.4);
            display: inline-block;
          }

          /* TELEFON EKRANLARI İÇİN ÖZEL GÖRÜNÜM */
          @media (max-width: 768px) {
            .nav-container {
              flex-direction: column; /* Logoyu üste, menüyü alta alır */
              gap: 15px;
              padding: 15px 10px;
            }
            .nav-menu {
              width: 100%;
              justify-content: center;
              gap: 15px;
              flex-wrap: wrap; /* Ekrana sığmazsa alt alta dizer */
            }
            .nav-link {
              font-size: 1rem;
            }
            .nav-btn {
              padding: 8px 18px;
              font-size: 0.95rem;
            }
            .logo-title {
              font-size: 1.5rem !important; /* Logoyu telefonda biraz küçültür */
            }
            .kamyon-icon {
              width: 40px !important;
              height: 40px !important;
              font-size: 1.5rem !important;
            }
          }
        `}
      </style>

      {/* --- GÖRÜNEN KISIM --- */}
      <nav style={{ background: '#0a1a2f', padding: '15px 0', borderBottom: '4px solid #d90429', boxShadow: '0 4px 15px rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div className="nav-container">
          
          {/* LOGO ALANI */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div className="kamyon-icon" style={{ fontSize: '2rem', color: '#ffb703', background: '#d90429', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', border: '3px solid white', boxShadow: '0 0 15px rgba(255, 183, 3, 0.6)' }}>🚚</div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h1 className="logo-title" style={{ margin: 0, fontSize: '1.8rem', fontWeight: '900', color: 'white', letterSpacing: '1px', fontStyle: 'italic', textTransform: 'uppercase' }}>PROFLASH</h1>
              <span style={{ color: '#ffb703', fontWeight: '600', fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase', marginTop: '2px' }}>NAKLİYAT & LOJİSTİK</span>
            </div>
          </Link>

          {/* MENÜ ALANI */}
          <ul className="nav-menu">
            <li><Link to="/" className="nav-link">Ana Sayfa</Link></li>
            <li><Link to="/hizmetler" className="nav-link">Hizmetler</Link></li>
            <li><Link to="/iletisim" className="nav-btn">TEKLİF AL ⚡</Link></li>
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;