import React, { useState, useEffect } from 'react';
import './Admin.css';

const API_URL = "https://proflashapi.onrender.com/api/Quotes";
const DOGRU_SIFRE = "Faruk.2005";

const Admin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("proflash_login") === "true");
    const [password, setPassword] = useState("");
    const [quotes, setQuotes] = useState([]);

    // Giriş yapılmışsa verileri çek
    useEffect(() => {
        if (isLoggedIn) {
            fetch(API_URL)
                .then(res => res.json())
                .then(data => setQuotes(data))
                .catch(err => console.error("Veri çekme hatası:", err));
        }
    }, [isLoggedIn]);

    const handleLogin = () => {
        if (password === DOGRU_SIFRE) {
            setIsLoggedIn(true);
            localStorage.setItem("proflash_login", "true");
        } else {
            alert("❌ Hatalı Şifre!");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("proflash_login");
        setIsLoggedIn(false);
    };

    if (!isLoggedIn) {
        return (
            <div id="login-screen">
                <div className="login-box">
                    <div className="login-logo"><i className="fa-solid fa-lock"></i></div>
                    <h2>YÖNETİCİ GİRİŞİ</h2>
                    <input 
                        type="password" 
                        className="login-input" 
                        placeholder="Şifrenizi Giriniz..." 
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                    />
                    <button className="login-btn" onClick={handleLogin}>GİRİŞ YAP 🚀</button>
                </div>
            </div>
        );
    }

    return (
        <div id="main-panel">
            <header className="header">
                <div className="header-content">
                    <div className="logo-area">
                        <div className="logo-icon"><i className="fa-solid fa-truck-fast"></i></div>
                        <div className="logo-text"><h1>PROFLASH ADMIN</h1></div>
                    </div>
                    <button onClick={handleLogout} className="logout-btn">Güvenli Çıkış</button>
                </div>
            </header>

            <div className="container">
                <h3 className="list-title"><i className="fa-solid fa-list-check"></i> Gelen Teklifler</h3>
                <ul>
                    {quotes.map((item) => (
                        <li key={item.id} className="admin-li">
                            <div className="quote-info">
                                <span className="client-name">{item.fullName}</span>
                                <span className="client-phone">{item.phoneNumber}</span>
                                <div className="route-detail">
                                    📍 {item.fromCity}/{item.fromDistrict} ➡ 🏁 {item.toCity}/{item.toDistrict}
                                </div>
                                <div className="badges">
                                    <span className="badge">🏠 Kat: {item.floorInfo || '-'}</span>
                                    <span className="badge">📦 Tip: {item.description || '-'}</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Admin;