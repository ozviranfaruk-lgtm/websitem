import React, { useState, useEffect } from 'react';
import './Admin.css';

// SENİN GERÇEK VERİTABANIN VE ŞİFREN (Koruma Altına Alındı)
const API_URL = "https://proflashapi.onrender.com/api/Quotes";
const DOGRU_SIFRE = "Faruk.2005";

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("proflash_login") === "true");
  const [password, setPassword] = useState("");
  const [hataMesaji, setHataMesaji] = useState(false);
  const [quotes, setQuotes] = useState([]);
  
  // Form Verileri (React State ile kontrol ediliyor)
  const [formData, setFormData] = useState({
    id: "", fullName: "", phoneNumber: "", fromCity: "", fromDistrict: "",
    fromNeighborhood: "", toCity: "", toDistrict: "", toNeighborhood: "",
    floorInfo: "", description: ""
  });

  // Şehir Verileri
  const turkeyData = { "Adana": ["Aladağ", "Ceyhan", "Çukurova", "Feke", "İmamoğlu", "Karaisalı", "Karataş", "Kozan", "Pozantı", "Saimbeyli", "Sarıçam", "Seyhan", "Tufanbeyli", "Yumurtalık", "Yüreğir"], "Adıyaman": ["Besni", "Çelikhan", "Gerger", "Gölbaşı", "Kahta", "Merkez", "Samsat", "Sincik", "Tut"], "Afyonkarahisar": ["Başmakçı", "Bayat", "Bolvadin", "Çay", "Çobanlar", "Dazkırı", "Dinar", "Emirdağ", "Evciler", "Hocalar", "İhsaniye", "İscehisar", "Kızılören", "Merkez", "Sandıklı", "Sinanpaşa", "Sultandağı", "Şuhut"], "Ağrı": ["Diyadin", "Doğubayazıt", "Eleşkirt", "Hamur", "Merkez", "Patnos", "Taşlıçay", "Tutak"], "Aksaray": ["Ağaçören", "Eskil", "Gülağaç", "Güzelyurt", "Merkez", "Ortaköy", "Sarıyahşi", "Sultanhanı"], "Amasya": ["Göynücek", "Gümüşhacıköy", "Hamamözü", "Merkez", "Merzifon", "Suluova", "Taşova"], "Ankara": ["Akyurt", "Altındağ", "Ayaş", "Bala", "Beypazarı", "Çamlıdere", "Çankaya", "Çubuk", "Elmadağ", "Etimesgut", "Evren", "Gölbaşı", "Güdül", "Haymana", "Kahramankazan", "Kalecik", "Keçiören", "Kızılcahamam", "Mamak", "Nallıhan", "Polatlı", "Pursaklar", "Sincan", "Şereflikoçhisar", "Yenimahalle"], "Antalya": ["Akseki", "Aksu", "Alanya", "Demre", "Döşemealtı", "Elmalı", "Finike", "Gazipaşa", "Gündoğmuş", "İbradı", "Kaş", "Kemer", "Kepez", "Konyaaltı", "Korkuteli", "Kumluca", "Manavgat", "Muratpaşa", "Serik"], "Bursa": ["Büyükorhan", "Gemlik", "Gürsu", "Harmancık", "İnegöl", "İznik", "Karacabey", "Keles", "Kestel", "Mudanya", "Mustafakemalpaşa", "Nilüfer", "Orhaneli", "Orhangazi", "Osmangazi", "Yenişehir", "Yıldırım"], "İstanbul": ["Adalar", "Arnavutköy", "Ataşehir", "Avcılar", "Bağcılar", "Bahçelievler", "Bakırköy", "Başakşehir", "Bayrampaşa", "Beşiktaş", "Beykoz", "Beylikdüzü", "Beyoğlu", "Büyükçekmece", "Çatalca", "Çekmeköy", "Esenler", "Esenyurt", "Eyüpsultan", "Fatih", "Gaziosmanpaşa", "Güngören", "Kadıköy", "Kağıthane", "Kartal", "Küçükçekmece", "Maltepe", "Pendik", "Sancaktepe", "Sarıyer", "Silivri", "Sultanbeyli", "Sultangazi", "Şile", "Şişli", "Tuzla", "Ümraniye", "Üsküdar", "Zeytinburnu"], "İzmir": ["Aliağa", "Balçova", "Bayındır", "Bayraklı", "Bergama", "Beydağ", "Bornova", "Buca", "Çeşme", "Çiğli", "Dikili", "Foça", "Gaziemir", "Güzelbahçe", "Karabağlar", "Karaburun", "Karşıyaka", "Kemalpaşa", "Kınık", "Kiraz", "Konak", "Menderes", "Menemen", "Narlıdere", "Ödemiş", "Seferihisar", "Selçuk", "Tire", "Torbalı", "Urla"], "Kocaeli": ["Başiskele", "Çayırova", "Darıca", "Derince", "Dilovası", "Gebze", "Gölcük", "İzmit", "Kandıra", "Karamürsel", "Kartepe", "Körfez"], "Mersin": ["Akdeniz", "Anamur", "Aydıncık", "Bozyazı", "Çamlıyayla", "Erdemli", "Gülnar", "Mezitli", "Mut", "Silifke", "Tarsus", "Toroslar", "Yenişehir"], "Trabzon": ["Akçaabat", "Araklı", "Arsin", "Beşikdüzü", "Çarşıbaşı", "Çaykara", "Dernekpazarı", "Düzköy", "Hayrat", "Köprübaşı", "Maçka", "Of", "Ortahisar", "Sürmene", "Şalpazarı", "Tonya", "Vakfıkebir", "Yomra"] }; 

  useEffect(() => {
    if (isLoggedIn) {
      verileriGetir();
    }
  }, [isLoggedIn]);

  const handleLogin = () => {
    if (password === DOGRU_SIFRE) {
      setIsLoggedIn(true);
      setHataMesaji(false);
      localStorage.setItem("proflash_login", "true");
    } else {
      setHataMesaji(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("proflash_login");
    setIsLoggedIn(false);
  };

  const verileriGetir = async () => {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setQuotes(data);
    } catch (e) {
        console.log("Veri çekme hatası:", e);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCityChange = (e, field) => {
    const city = e.target.value;
    setFormData({ 
      ...formData, 
      [field]: city, 
      [field === 'fromCity' ? 'fromDistrict' : 'toDistrict']: "" // İl değişince ilçeyi sıfırla
    });
  };

  const teklifKaydet = async () => {
    if(!formData.fromCity || !formData.toCity) { alert("Lütfen en azından şehirleri seçiniz!"); return; }

    const method = formData.id ? "PUT" : "POST";
    const url = formData.id ? `${API_URL}/${formData.id}` : API_URL;

    // Backend'e id "0" gitmeli (eğer yeni ekleniyorsa)
    const gonderilecekVeri = { ...formData, id: formData.id ? parseInt(formData.id) : 0 };

    try {
        const res = await fetch(url, { 
          method: method, 
          headers:{"Content-Type":"application/json"}, 
          body: JSON.stringify(gonderilecekVeri) 
        });

        if(res.ok) { 
            alert(formData.id ? "Teklif Başarıyla Güncellendi!" : "Yeni Teklif Eklendi!"); 
            duzenlemeIptal(); 
            verileriGetir(); 
        } else {
            alert("Kaydedilirken bir sorun oluştu.");
        }
    } catch(e) { alert("Hata! (Veritabanı bağlantınızı kontrol edin)"); }
  };

  const teklifSil = async (id) => {
      if(window.confirm("Bu teklifi silmek istediğinize emin misiniz?")) {
          await fetch(`${API_URL}/${id}`, { method: "DELETE" });
          verileriGetir();
      }
  };

  const duzenleModunuAc = (item) => {
    setFormData({
      id: item.id,
      fullName: item.fullName || "",
      phoneNumber: item.phoneNumber || "",
      fromCity: item.fromCity || "",
      fromDistrict: item.fromDistrict || "",
      fromNeighborhood: item.fromNeighborhood || "",
      toCity: item.toCity || "",
      toDistrict: item.toDistrict || "",
      toNeighborhood: item.toNeighborhood || "",
      floorInfo: item.floorInfo || "",
      description: item.description || ""
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const duzenlemeIptal = () => {
    setFormData({
      id: "", fullName: "", phoneNumber: "", fromCity: "", fromDistrict: "",
      fromNeighborhood: "", toCity: "", toDistrict: "", toNeighborhood: "",
      floorInfo: "", description: ""
    });
  };

  const rotayiGoster = () => {
    if(!formData.fromCity || !formData.toCity) { alert("Lütfen en azından İLLERİ seçin!"); return; }
    // Google Haritalar'ın düzgün açılması için URL düzeltildi
    const url = `https://www.google.com/maps/dir/${formData.fromCity}+${formData.fromDistrict}/${formData.toCity}+${formData.toDistrict}`;
    window.open(url, '_blank');
  };

  // Seçili illere göre ilçeleri belirle
  const fromDistricts = turkeyData[formData.fromCity] || [];
  const toDistricts = turkeyData[formData.toCity] || [];

  return (
    <>
      {/* SENİN ÖZEL "SARI KAMYON" TASARIMIN (CSS) */}
      <style>{`
        :root { --lacivert: #0a1a2f; --kirmizi: #d90429; --altin: #ffb703; --acik-gri: #f4f6f9; --beyaz: #ffffff; }
        body { background-color: var(--acik-gri); font-family: 'Segoe UI', Arial, sans-serif; }
        .login-box { background: var(--beyaz); padding: 40px; border-radius: 20px; text-align: center; width: 350px; box-shadow: 0 15px 40px rgba(0,0,0,0.3); border-top: 6px solid var(--kirmizi); margin: 100px auto; }
        .login-logo { font-size: 3em; color: var(--altin); margin-bottom: 10px; background: var(--kirmizi); width: 80px; height: 80px; display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; border: 4px solid var(--beyaz); box-shadow: 0 5px 15px rgba(217, 4, 41, 0.4); }
        .login-input { width: 85%; padding: 15px; margin-top: 20px; border: 2px solid #ddd; border-radius: 10px; font-size: 16px; outline: none; transition: 0.3s; }
        .login-btn { width: 95%; padding: 15px; margin-top: 15px; background: linear-gradient(135deg, var(--kirmizi), #b0021e); color: white; border: none; border-radius: 10px; font-size: 18px; font-weight: bold; cursor: pointer; transition: 0.3s; }
        
        .header { background: var(--lacivert); color: var(--beyaz); padding: 15px 0; box-shadow: 0 4px 15px rgba(0,0,0,0.3); border-bottom: 4px solid var(--kirmizi); }
        .header-content { max-width: 1100px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; padding: 0 20px; }
        .logo-area { display: flex; align-items: center; gap: 15px; }
        .logo-icon { font-size: 2.2em; color: var(--altin); background: var(--kirmizi); width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; border-radius: 50%; border: 3px solid var(--beyaz); box-shadow: 0 0 15px rgba(255, 183, 3, 0.6); }
        .logo-text h1 { margin: 0; font-size: 2em; font-weight: 900; color: var(--beyaz); letter-spacing: 1px; font-style: italic; }
        .logo-text span { color: var(--altin); font-weight: 600; font-size: 0.85em; letter-spacing: 4px; margin-top: 2px; text-transform: uppercase; }
        .menu a { color: #ccc; text-decoration: none; font-weight: bold; cursor: pointer;}
        
        .container { max-width: 850px; margin: 30px auto; background: var(--beyaz); padding: 35px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); border-top: 5px solid var(--lacivert); }
        .section-header { background: linear-gradient(to right, var(--lacivert), #1e3a5f); color: var(--beyaz); padding: 12px 20px; border-radius: 8px; font-weight: bold; margin-top: 25px; margin-bottom: 15px; border-left: 5px solid var(--kirmizi); display: flex; align-items: center; gap: 10px; }
        .row { display: flex; gap: 20px; margin-bottom: 20px; flex-wrap: wrap; }
        .col { flex: 1; min-width: 300px; }
        label { display: block; margin-bottom: 6px; font-weight: 700; color: var(--lacivert); font-size: 13px; }
        input, select { width: 100%; padding: 14px; border: 2px solid #ddd; border-radius: 10px; font-size: 15px; background-color: #fcfcfc; box-sizing: border-box;}
        
        .btn-save { background: linear-gradient(135deg, var(--kirmizi), #a8001d); color: var(--beyaz); width: 100%; margin-top: 25px; padding: 16px; font-size: 18px; border-bottom: 4px solid #8a0018; cursor: pointer; border:none; border-radius: 10px; font-weight:bold;}
        .btn-map { background: linear-gradient(135deg, #198754, #146c43); color: white; width: 100%; margin-top: 10px; padding: 12px; font-size: 16px; border-bottom: 4px solid #0f5132; cursor: pointer; border:none; border-radius: 10px; font-weight:bold;}
        .btn-update { background: linear-gradient(135deg, var(--altin), #e0a100) !important; color: var(--lacivert) !important; border-bottom: 4px solid #b8860b !important; }
        
        .action-buttons { display: flex; flex-direction: column; gap: 8px; margin-left: 15px; }
        .btn-delete { background-color: var(--lacivert); color: var(--beyaz); padding: 8px 15px; border-radius: 5px; cursor:pointer; border:none; font-weight: bold;}
        .btn-edit { background-color: var(--altin); color: var(--lacivert); padding: 8px 15px; border-radius: 5px; cursor:pointer; font-weight: bold; border:none; }
        ul { list-style: none; padding: 0; margin-top: 30px; }
        li { background: var(--beyaz); margin: 20px 0; padding: 25px; border-radius: 15px; border-left: 6px solid var(--altin); box-shadow: 0 5px 20px rgba(0,0,0,0.06); }
        .badge { background: linear-gradient(to right, var(--lacivert), #1e3a5f); color: var(--beyaz); padding: 5px 12px; border-radius: 20px; font-size: 0.85em; font-weight: bold; margin-right: 8px; border: 1px solid var(--altin); display: inline-block; margin-top: 5px;}
      `}</style>

      {!isLoggedIn ? (
        <div id="login-screen">
            <div className="login-box">
                <div className="login-logo"><i className="fa-solid fa-lock"></i></div>
                <h2 style={{color:'var(--lacivert)', marginBottom:'5px'}}>YÖNETİCİ GİRİŞİ</h2>
                <p style={{color:'#666', fontSize:'0.9em'}}>Proflash Nakliyat Paneli</p>
                <input 
                    type="password" 
                    className="login-input" 
                    placeholder="Şifrenizi Giriniz..." 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                />
                <button className="login-btn" onClick={handleLogin}>GİRİŞ YAP 🚀</button>
                {hataMesaji && <p style={{color:'red', marginTop:'10px', fontWeight:'bold'}}>❌ Hatalı Şifre!</p>}
            </div>
        </div>
      ) : (
        <div id="main-panel">
            <header className="header">
                <div className="header-content">
                    <div className="logo-area">
                        <div className="logo-icon"><i className="fa-solid fa-truck-fast"></i></div>
                        <div className="logo-text">
                            <h1>PROFLASH</h1>
                            <span>NAKLİYAT & LOJİSTİK</span>
                        </div>
                    </div>
                    <nav className="menu">
                        <a onClick={handleLogout}><i className="fa-solid fa-right-from-bracket"></i> Güvenli Çıkış</a>
                    </nav>
                </div>
            </header>

            <div className="container">
                <h2 id="baslik"><i className="fa-solid fa-bolt" style={{color:'var(--altin)'}}></i> {formData.id ? "Teklifi Düzenle" : "Yeni Teklif Oluştur"}</h2>
                
                <div className="section-header"><i className="fa-solid fa-user"></i> Müşteri Bilgileri</div>
                <div className="row">
                    <div className="col"><label>Ad Soyad</label><input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Ad Soyad Giriniz" /></div>
                    <div className="col"><label>Telefon</label><input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="0555 123 45 67" /></div>
                </div>

                <div className="section-header"><i className="fa-solid fa-location-dot"></i> Güzergah Bilgileri</div>
                <div className="row">
                    <div className="col">
                        <label>Nereden (İl)</label>
                        <select name="fromCity" value={formData.fromCity} onChange={(e) => handleCityChange(e, 'fromCity')}>
                            <option value="">İl Seç...</option>
                            {Object.keys(turkeyData).sort().map(il => <option key={il} value={il}>{il}</option>)}
                        </select>
                    </div>
                    <div className="col">
                        <label>Nereden (İlçe)</label>
                        <select name="fromDistrict" value={formData.fromDistrict} onChange={handleChange}>
                            <option value="">Önce İl Seç...</option>
                            {fromDistricts.map(ilce => <option key={ilce} value={ilce}>{ilce}</option>)}
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label>Nereye (İl)</label>
                        <select name="toCity" value={formData.toCity} onChange={(e) => handleCityChange(e, 'toCity')}>
                             <option value="">İl Seç...</option>
                             {Object.keys(turkeyData).sort().map(il => <option key={il} value={il}>{il}</option>)}
                        </select>
                    </div>
                    <div className="col">
                        <label>Nereye (İlçe)</label>
                        <select name="toDistrict" value={formData.toDistrict} onChange={handleChange}>
                            <option value="">Önce İl Seç...</option>
                            {toDistricts.map(ilce => <option key={ilce} value={ilce}>{ilce}</option>)}
                        </select>
                    </div>
                </div>

                <button className="btn-map" onClick={rotayiGoster}><i className="fa-solid fa-map-location-dot"></i> ROTAYI & MESAFEYİ GÖR</button>

                <div className="section-header"><i className="fa-solid fa-box-open"></i> Eşya & Detaylar</div>
                <div className="row">
                    <div className="col"><input type="text" name="floorInfo" value={formData.floorInfo} onChange={handleChange} placeholder="Kat Durumu (Örn: 3. Kat)" /></div>
                    <div className="col"><input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Eşya Tipi (Örn: 2+1)" /></div>
                </div>
                <div className="row">
                    <div className="col"><input type="text" name="fromNeighborhood" value={formData.fromNeighborhood} onChange={handleChange} placeholder="Nereden (Mahalle)" /></div>
                    <div className="col"><input type="text" name="toNeighborhood" value={formData.toNeighborhood} onChange={handleChange} placeholder="Nereye (Mahalle)" /></div>
                </div>

                <button className={`btn-save ${formData.id ? "btn-update" : ""}`} onClick={teklifKaydet}>
                   {formData.id ? <><i className="fa-solid fa-rotate"></i> GÜNCELLE</> : <><i className="fa-solid fa-bolt"></i> TEKLİFİ KAYDET</>}
                </button>
                
                {formData.id && (
                  <button onClick={duzenlemeIptal} style={{width:'100%', marginTop:'10px', background:'#6c757d', color:'white', padding:'10px', borderRadius:'10px', border:'none', cursor:'pointer'}}>❌ İPTAL</button>
                )}

                <h3 style={{marginTop:'40px', borderBottom:'1px solid #ddd', paddingBottom:'10px', color: 'var(--lacivert)'}}><i className="fa-solid fa-list-check"></i> Son Eklenen Kayıtlar</h3>
                
                <ul>
                    {quotes.map(item => (
                        <li key={item.id}>
                            <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
                                <div style={{flex:1}}>
                                    <span style={{fontWeight:'bold', fontSize:'1.2em', color: 'var(--lacivert)'}}><i className="fa-solid fa-user-tag"></i> {item.fullName}</span>
                                    <span style={{color: 'var(--kirmizi)', fontWeight:'700', marginLeft:'10px'}}><i className="fa-solid fa-phone"></i> {item.phoneNumber}</span>
                                    <div style={{marginTop:'10px', padding:'10px', background:'#fcfcfc', border:'1px solid #eee', borderRadius:'8px'}}>
                                        <div>📍 <b>Çıkış:</b> {item.fromCity}/{item.fromDistrict} ({item.fromNeighborhood})</div>
                                        <div>🏁 <b>Varış:</b> {item.toCity}/{item.toDistrict} ({item.toNeighborhood})</div>
                                    </div>
                                    <div style={{marginTop:'8px'}}>
                                        <span className="badge">🏠 {item.floorInfo || '-'}</span>
                                        <span className="badge">📦 {item.description || '-'}</span>
                                    </div>
                                    <a href={`https://www.google.com/maps/dir/${item.fromCity}+${item.fromDistrict}/${item.toCity}+${item.toDistrict}`} target="_blank" rel="noreferrer" style={{display:'inline-block', marginTop:'10px', padding:'8px 15px', background:'#198754', color:'white', textDecoration:'none', borderRadius:'5px', fontWeight:'bold', fontSize:'0.9em'}}>
                                        <i className="fa-solid fa-map-location-dot"></i> Mesafeyi Gör
                                    </a>
                                </div>
                                <div className="action-buttons">
                                    <button className="btn-edit" onClick={() => duzenleModunuAc(item)}><i className="fa-solid fa-pen"></i> Düzenle</button>
                                    <button className="btn-delete" onClick={() => teklifSil(item.id)}><i className="fa-solid fa-trash"></i> Sil</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      )}
    </>
  );
}