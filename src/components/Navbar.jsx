import React from 'react';
import { Link } from 'react-router-dom';
// YENİ LOGOYU BURADA İÇERİ ALIYORUZ
import LogoGorseli from '../assets/yeni-logo.png.jpg';

function Navbar() {
  return (
    <>
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

          @media (max-width: 768px) {
            .nav-container {
              flex-direction: column;
              gap: 15px;
              padding: 15px 10px;
            }
            .nav-menu {
              width: 100%;
              justify-content: center;
              gap: 15px;
              flex-wrap: wrap;
            }
            .site-logo {
              height: 50px !important; /* Telefonda logoyu biraz küçültür */
            }
          }
        `}
      </style>

      <nav style={{ background: '#0a1a2f', padding: '10px 0', borderBottom: '4px solid #d90429', boxShadow: '0 4px 15px rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div className="nav-container">
          
          {/* LOGO ALANI - ARTIK GERÇEK LOGO VAR */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img 
              src={LogoGorseli} 
              alt="Proflash Nakliyat" 
              className="site-logo"
              style={{ height: '70px', width: 'auto', objectFit: 'contain' }} 
            />
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