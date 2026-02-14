import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

function Hero() {
  const form = useRef();

  const turkeyData = { "Adana": ["Aladağ", "Ceyhan", "Çukurova", "Feke", "İmamoğlu", "Karaisalı", "Karataş", "Kozan", "Pozantı", "Saimbeyli", "Sarıçam", "Seyhan", "Tufanbeyli", "Yumurtalık", "Yüreğir"], "Adıyaman": ["Besni", "Çelikhan", "Gerger", "Gölbaşı", "Kahta", "Merkez", "Samsat", "Sincik", "Tut"], "Afyonkarahisar": ["Başmakçı", "Bayat", "Bolvadin", "Çay", "Çobanlar", "Dazkırı", "Dinar", "Emirdağ", "Evciler", "Hocalar", "İhsaniye", "İscehisar", "Kızılören", "Merkez", "Sandıklı", "Sinanpaşa", "Sultandağı", "Şuhut"], "Ağrı": ["Diyadin", "Doğubayazıt", "Eleşkirt", "Hamur", "Merkez", "Patnos", "Taşlıçay", "Tutak"], "Aksaray": ["Ağaçören", "Eskil", "Gülağaç", "Güzelyurt", "Merkez", "Ortaköy", "Sarıyahşi", "Sultanhanı"], "Amasya": ["Göynücek", "Gümüşhacıköy", "Hamamözü", "Merkez", "Merzifon", "Suluova", "Taşova"], "Ankara": ["Akyurt", "Altındağ", "Ayaş", "Bala", "Beypazarı", "Çamlıdere", "Çankaya", "Çubuk", "Elmadağ", "Etimesgut", "Evren", "Gölbaşı", "Güdül", "Haymana", "Kahramankazan", "Kalecik", "Keçiören", "Kızılcahamam", "Mamak", "Nallıhan", "Polatlı", "Pursaklar", "Sincan", "Şereflikoçhisar", "Yenimahalle"], "Antalya": ["Akseki", "Aksu", "Alanya", "Demre", "Döşemealtı", "Elmalı", "Finike", "Gazipaşa", "Gündoğmuş", "İbradı", "Kaş", "Kemer", "Kepez", "Konyaaltı", "Korkuteli", "Kumluca", "Manavgat", "Muratpaşa", "Serik"], "Ardahan": ["Çıldır", "Damal", "Göle", "Hanak", "Merkez", "Posof"], "Artvin": ["Ardanuç", "Arhavi", "Borçka", "Hopa", "Kemalpaşa", "Merkez", "Murgul", "Şavşat", "Yusufeli"], "Aydın": ["Bozdoğan", "Buharkent", "Çine", "Didim", "Efeler", "Germencik", "İncirliova", "Karacasu", "Karpuzlu", "Koçarlı", "Köşk", "Kuşadası", "Kuyucak", "Nazilli", "Söke", "Sultanhisar", "Yenipazar"], "Balıkesir": ["Altıeylül", "Ayvalık", "Balya", "Bandırma", "Bigadiç", "Burhaniye", "Dursunbey", "Edremit", "Erdek", "Gömeç", "Gönen", "Havran", "İvrindi", "Karesi", "Kepsut", "Manyas", "Marmara", "Savaştepe", "Sındırgı", "Susurluk"], "Bartın": ["Amasra", "Kurucaşile", "Merkez", "Ulus"], "Batman": ["Beşiri", "Gercüş", "Hasankeyf", "Kozluk", "Merkez", "Sason"], "Bayburt": ["Aydıntepe", "Demirözü", "Merkez"], "Bilecik": ["Bozüyük", "Gölpazarı", "İnhisar", "Merkez", "Osmaneli", "Pazaryeri", "Söğüt", "Yenipazar"], "Bingöl": ["Adaklı", "Genç", "Karlıova", "Kiğı", "Merkez", "Solhan", "Yayladere", "Yedisu"], "Bitlis": ["Adilcevaz", "Ahlat", "Güroymak", "Hizan", "Merkez", "Mutki", "Tatvan"], "Bolu": ["Dörtdivan", "Gerede", "Göynük", "Kıbrıscık", "Mengen", "Merkez", "Mudurnu", "Seben", "Yeniçağa"], "Burdur": ["Ağlasun", "Altınyayla", "Bucak", "Çavdır", "Çeltikçi", "Gölhisar", "Karamanlı", "Kemer", "Merkez", "Tefenni", "Yeşilova"], "Bursa": ["Büyükorhan", "Gemlik", "Gürsu", "Harmancık", "İnegöl", "İznik", "Karacabey", "Keles", "Kestel", "Mudanya", "Mustafakemalpaşa", "Nilüfer", "Orhaneli", "Orhangazi", "Osmangazi", "Yenişehir", "Yıldırım"], "Çanakkale": ["Ayvacık", "Bayramiç", "Biga", "Bozcaada", "Çan", "Eceabat", "Ezine", "Gelibolu", "Gökçeada", "Lapseki", "Merkez", "Yenice"], "Çankırı": ["Atkaracalar", "Bayramören", "Çerkeş", "Eldivan", "Ilgaz", "Kızılırmak", "Korgun", "Kurşunlu", "Merkez", "Orta", "Şabanözü", "Yapraklı"], "Çorum": ["Alaca", "Bayat", "Boğazkale", "Dodurga", "İskilip", "Kargı", "Laçin", "Mecitözü", "Merkez", "Oğuzlar", "Ortaköy", "Osmancık", "Sungurlu", "Uğurludağ"], "Denizli": ["Acıpayam", "Babadağ", "Baklan", "Bekilli", "Beyağaç", "Bozkurt", "Buldan", "Çal", "Çameli", "Çardak", "Çivril", "Güney", "Honaz", "Kale", "Merkezefendi", "Pamukkale", "Sarayköy", "Serinhisar", "Tavas"], "Diyarbakır": ["Bağlar", "Bismil", "Çermik", "Çınar", "Çüngüş", "Dicle", "Eğil", "Ergani", "Hani", "Hazro", "Kayapınar", "Kocaköy", "Kulp", "Lice", "Silvan", "Sur", "Yenişehir"], "Düzce": ["Akçakoca", "Cumayeri", "Çilimli", "Gölyaka", "Gümüşova", "Kaynaşlı", "Merkez", "Yığılca"], "Edirne": ["Enez", "Havsa", "İpsala", "Keşan", "Lalapaşa", "Meriç", "Merkez", "Süloğlu", "Uzunköprü"], "Elazığ": ["Ağın", "Alacakaya", "Arıcak", "Baskil", "Karakoçan", "Keban", "Kovancılar", "Maden", "Merkez", "Palu", "Sivrice"], "Erzincan": ["Çayırlı", "İliç", "Kemah", "Kemaliye", "Merkez", "Otlukbeli", "Refahiye", "Tercan", "Üzümlü"], "Erzurum": ["Aşkale", "Aziziye", "Çat", "Hınıs", "Horasan", "İspir", "Karaçoban", "Karayazı", "Köprüköy", "Narman", "Oltu", "Olur", "Palandöken", "Pasinler", "Pazaryolu", "Şenkaya", "Tekman", "Tortum", "Uzundere", "Yakutiye"], "Eskişehir": ["Alpu", "Beylikova", "Çifteler", "Günyüzü", "Han", "İnönü", "Mahmudiye", "Mihalgazi", "Mihalıççık", "Odunpazarı", "Sarıcakaya", "Seyitgazi", "Sivrihisar", "Tepebaşı"], "Gaziantep": ["Araban", "İslahiye", "Karkamış", "Nizip", "Nurdağı", "Oğuzeli", "Şahinbey", "Şehitkamil", "Yavuzeli"], "Giresun": ["Alucra", "Bulancak", "Çamoluk", "Çanakçı", "Dereli", "Doğankent", "Espiye", "Eynesil", "Görele", "Güce", "Keşap", "Merkez", "Piraziz", "Şebinkarisar", "Tirebolu", "Yağlıdere"], "Gümüşhane": ["Kelkit", "Köse", "Kürtün", "Merkez", "Şiran", "Torul"], "Hakkari": ["Çukurca", "Derecik", "Merkez", "Şemdinli", "Yüksekova"], "Hatay": ["Altınözü", "Antakya", "Arsuz", "Belen", "Defne", "Dörtyol", "Erzin", "Hassa", "İskenderun", "Kırıkhan", "Kumlu", "Payas", "Reyhanlı", "Samandağ", "Yayladğı"], "Iğdır": ["Aralık", "Karakoyunlu", "Merkez", "Tuzluca"], "Isparta": ["Aksu", "Atabey", "Eğirdir", "Gelendost", "Gönen", "Keçiborlu", "Merkez", "Senirkent", "Sütçüler", "Şarkikaraağaç", "Uluborlu", "Yalvaç", "Yenişarbademli"], "İstanbul": ["Adalar", "Arnavutköy", "Ataşehir", "Avcılar", "Bağcılar", "Bahçelievler", "Bakırköy", "Başakşehir", "Bayrampaşa", "Beşiktaş", "Beykoz", "Beylikdüzü", "Beyoğlu", "Büyükçekmece", "Çatalca", "Çekmeköy", "Esenler", "Esenyurt", "Eyüpsultan", "Fatih", "Gaziosmanpaşa", "Güngören", "Kadıköy", "Kağıthane", "Kartal", "Küçükçekmece", "Maltepe", "Pendik", "Sancattepe", "Sarıyer", "Silivri", "Sultanbeyli", "Sultangazi", "Şile", "Şişli", "Tuzla", "Ümraniye", "Üsküdar", "Zeytinburnu"], "İzmir": ["Aliağa", "Balçova", "Bayındır", "Bayraklı", "Bergama", "Beydağ", "Bornova", "Buca", "Çeşme", "Çiğli", "Dikili", "Foça", "Gaziemir", "Güzelbahçe", "Karabağlar", "Karaburun", "Karşıyaka", "Kemalpaşa", "Kınık", "Kiraz", "Konak", "Menderes", "Menemen", "Narlıdere", "Ödemiş", "Seferihisar", "Selçuk", "Tire", "Torbalı", "Urla"], "Kahramanmaraş": ["Afşin", "Andırın", "Çağlayancerit", "Dulkadiroğlu", "Ekinözü", "Elbistan", "Göksun", "Nurhak", "Onikişubat", "Pazarcık", "Türkoğlu"], "Karabük": ["Eflani", "Eskipazar", "Merkez", "Ovacık", "Safranbolu", "Yenice"], "Karaman": ["Ayrancı", "Başyayla", "Ermenek", "Kazımkarabekir", "Merkez", "Sarıveliler"], "Kars": ["Akyaka", "Arpaçay", "Digor", "Kağızman", "Merkez", "Sarıkamış", "Selim", "Susuz"], "Kastamonu": ["Abana", "Ağlı", "Araç", "Azdavay", "Bozkurt", "Cide", "Çatalzeytin", "Daday", "Devrekani", "Doğanyurt", "Hanönü", "İhsangazi", "İnebolu", "Küre", "Merkez", "Pınarbaşı", "Seydiler", "Şenpazar", "Taşköprü", "Tosya"], "Kayseri": ["Akkışla", "Bünyan", "Develi", "Felahiye", "Hacılar", "İncesu", "Kocasinan", "Melikgazi", "Özvatan", "Pınarbaşı", "Sarıoğlan", "Sarız", "Talas", "Tomarza", "Yahyalı", "Yeşilhisar"], "Kırıkkale": ["Bahşılı", "Balışeyh", "Çelebi", "Delice", "Karakeçili", "Keskin", "Merkez", "Sulakyurt", "Yahşihan"], "Kırklareli": ["Babaeski", "Demirköy", "Kofçaz", "Lüleburgaz", "Merkez", "Pehlivanköy", "Pınarhisar", "Vize"], "Kırşehir": ["Akçakent", "Akpınar", "Boztepe", "Çiçekdağı", "Kaman", "Merkez", "Mucur"], "Kilis": ["Elbeyli", "Merkez", "Musabeyli", "Polateli"], "Kocaeli": ["Başiskele", "Çayırova", "Darıca", "Derince", "Dilovası", "Gebze", "Gölcük", "İzmit", "Kandıra", "Karamürsel", "Kartepe", "Körfez"], "Konya": ["Ahırlı", "Akören", "Akşehir", "Altınekin", "Beyşehir", "Bozkır", "Cihanbeyli", "Çeltik", "Çumra", "Derbent", "Derebucak", "Doğanhisar", "Emirgazi", "Ereğli", "Güneysınır", "Hadim", "Halkapınar", "Hüyük", "Ilgın", "Kadınhanı", "Karapınar", "Karatay", "Kulu", "Meram", "Sarayönü", "Selçuklu", "Seydişehir", "Taşkent", "Tuzlukçu", "Yalıhüyük", "Yunak"], "Kütahya": ["Altıntaş", "Aslanapa", "Çavdarhisar", "Domaniç", "Dumlupınar", "Emet", "Gediz", "Hisarcık", "Merkez", "Pazarlar", "Simav", "Şaphane", "Tavşanlı"], "Malatya": ["Akçadağ", "Arapgir", "Arguvan", "Battalgazi", "Darende", "Doğanşehir", "Doğanyol", "Hekimhan", "Kale", "Kuluncak", "Pütürge", "Yazıhan", "Yeşilyurt"], "Manisa": ["Ahmetli", "Akhisar", "Alaşehir", "Demirci", "Gölmarmara", "Gördes", "Kırkağaç", "Köprübaşı", "Kula", "Salihli", "Sarıgöl", "Saruhanlı", "Selendi", "Soma", "Şehzadeler", "Turgutlu", "Yunusemre"], "Mardin": ["Artuklu", "Dargeçit", "Derik", "Kızıltepe", "Mazıdağı", "Midyat", "Nusaybin", "Ömerli", "Savur", "Yeşilli"], "Mersin": ["Akdeniz", "Anamur", "Aydıncık", "Bozyazı", "Çamlıyayla", "Erdemli", "Gülnar", "Mezitli", "Mut", "Silifke", "Tarsus", "Toroslar", "Yenişehir"], "Muğla": ["Bodrum", "Dalaman", "Datça", "Fethiye", "Kavaklıdere", "Köyceğiz", "Marmaris", "Menteşe", "Milas", "Ortaca", "Seydikemer", "Ula", "Yatağan"], "Muş": ["Bulanık", "Hasköy", "Korkut", "Malazgirt", "Merkez", "Varto"], "Nevşehir": ["Acıgöl", "Avanos", "Derinkuyu", "Gülşehir", "Hacıbektaş", "Kozaklı", "Merkez", "Ürgüp"], "Niğde": ["Altunhisar", "Bor", "Çamardı", "Çiftlik", "Merkez", "Ulukışla"], "Ordu": ["Akkuş", "Altınordu", "Aybastı", "Çamaş", "Çatalpınar", "Çaybaşı", "Fatsa", "Gölköy", "Gülyalı", "Gürgentepe", "İkizce", "Kabadüz", "Kabataş", "Korgan", "Kumru", "Mesudiye", "Perşembe", "Ulubey", "Ünye"], "Osmaniye": ["Bahçe", "Düziçi", "Hasanbeyli", "Kadirli", "Merkez", "Sumbas", "Toprakkale"], "Rize": ["Ardeşen", "Çamlıhemşin", "Çayeli", "Derepazarı", "Fındıklı", "Güneysu", "Hemşin", "İkizdere", "İyidere", "Kalkandere", "Merkez", "Pazar"], "Sakarya": ["Adapazarı", "Akyazı", "Arifiye", "Erenler", "Ferizli", "Geyve", "Hendek", "Karapürçek", "Karasu", "Kaynarca", "Kocaali", "Pamukova", "Sapanca", "Serdivan", "Söğütlü", "Taraklı"], "Samsun": ["19 Mayıs", "Alaçam", "Asarcık", "Atakum", "Ayvacık", "Bafra", "Canik", "Çarşamba", "Havza", "İlkadım", "Kavak", "Ladik", "Salıpazarı", "Tekkeköy", "Terme", "Vezirköprü", "Yakakent"], "Siirt": ["Baykan", "Eruh", "Kurtalan", "Merkez", "Pervari", "Şirvan", "Tillo"], "Sinop": ["Ayancık", "Boyabat", "Dikmen", "Durağan", "Erfelek", "Gerze", "Merkez", "Saraydüzü", "Türkeli"], "Sivas": ["Akıncılar", "Altınyayla", "Divriği", "Doğanşar", "Gemerek", "Gölova", "Gürün", "Hafik", "İmranlı", "Kangal", "Koyulhisar", "Merkez", "Suşehri", "Şarkışla", "Ulaş", "Yıldızeli", "Zara"], "Şanlıurfa": ["Akçakale", "Birecik", "Bozova", "Ceylanpınar", "Eyyübiye", "Halfeti", "Haliliye", "Harran", "Hilvan", "Karaköprü", "Siverek", "Suruç", "Viranşehir"], "Şırnak": ["Beytüşşebap", "Cizre", "Güçlükonak", "İdil", "Merkez", "Silopi", "Uludere"], "Tekirdağ": ["Çerkezköy", "Çorlu", "Ergene", "Hayrabolu", "Kapaklı", "Malkara", "Marmaraereğlisi", "Muratlı", "Saray", "Süleymanpaşa", "Şarköy"], "Tokat": ["Almus", "Artova", "Başçiftlik", "Erbaa", "Merkez", "Niksar", "Pazar", "Reşadiye", "Sulusaray", "Turhal", "Yeşilyurt", "Zile"], "Trabzon": ["Akçaabat", "Araklı", "Arsin", "Beşikdüzü", "Çarşıbaşı", "Çaykara", "Dernekpazarı", "Düzköy", "Hayrat", "Köprübaşı", "Maçka", "Of", "Ortahisar", "Sürmene", "Şalpazarı", "Tonya", "Vakfıkebir", "Yomra"], "Tunceli": ["Çemişgezek", "Hozat", "Mazgirt", "Merkez", "Nazımiye", "Ovacık", "Pertek", "Pülümür"], "Uşak": ["Banaz", "Eşme", "Karahallı", "Merkez", "Sivaslı", "Ulubey"], "Van": ["Bahçesaray", "Başkale", "Çaldıran", "Çatak", "Edremit", "Erciş", "Gevaş", "Gürpınar", "İpekyolu", "Muradiye", "Özalp", "Saray", "Tuşba"], "Yalova": ["Altınova", "Armutlu", "Çınarcık", "Çiftlikköy", "Merkez", "Termal"], "Yozgat": ["Akdağmadeni", "Aydıncık", "Boğazlıyan", "Çandır", "Çayıralan", "Çekerek", "Kadışehri", "Merkez", "Saraykent", "Sarıkaya", "Sorgun", "Şefaatli", "Yenifakılı", "Yerköy"], "Zonguldak": ["Alaplı", "Çaycuma", "Devrek", "Ereğli", "Gökçebey", "Kilimli", "Kozlu", "Merkez"] };

  const [formData, setFormData] = useState({
    user_name: "", user_phone: "", 
    fromCity: "", fromDistrict: "", 
    toCity: "", toDistrict: "", 
    from_floor: "", to_floor: "", room_type: "1+1"
  });

  const iller = Object.keys(turkeyData).sort();

  const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };

  const handleCityChange = (e, type) => {
    const city = e.target.value;
    if (type === 'from') { setFormData({ ...formData, fromCity: city, fromDistrict: "" }); } 
    else { setFormData({ ...formData, toCity: city, toDistrict: "" }); }
  };

  const sendQuote = async (e) => {
    e.preventDefault();
    const backendData = {
        fullName: formData.user_name, phoneNumber: formData.user_phone,
        fromCity: formData.fromCity, fromDistrict: formData.fromDistrict, fromNeighborhood: "AnaSayfa Form", 
        toCity: formData.toCity, toDistrict: formData.toDistrict, toNeighborhood: "AnaSayfa Form",
        floorInfo: `Çıkış: ${formData.from_floor} / Varış: ${formData.to_floor}`, description: `Eşya: ${formData.room_type}`
    };

    try {
        // Backend Kaydı
        await fetch("https://proflashapi.onrender.com/api/Quotes", { 
          method: "POST", 
          headers: { "Content-Type": "application/json" }, 
          body: JSON.stringify(backendData) 
        });

        // EmailJS Gönderimi
        await emailjs.sendForm('service_q9ei8t8', 'template_d1ds2eb', form.current, { publicKey: 'Kb7IHYqjxFURFSYfE' });

        // Başarı Mesajı
        Swal.fire({ 
          title: 'Talebiniz Alındı!', 
          text: 'Teklif talebiniz başarıyla bize ulaştı. En kısa sürede yetkililerimiz kontrolleri sağlayıp size geri dönüş yapacaktır.', 
          icon: 'success', 
          confirmButtonColor: '#ffb703',
          confirmButtonText: 'Tamam'
        });

        // Formu Sıfırla
        setFormData({ user_name: "", user_phone: "", fromCity: "", fromDistrict: "", toCity: "", toDistrict: "", from_floor: "", to_floor: "", room_type: "1+1" });

    } catch (error) { 
        console.error("Hata:", error);
        Swal.fire('Hata', 'İşlem sırasında bir sorun oluştu, lütfen bizi arayın.', 'error');
    }
  };

  return (
    <div style={heroSectionStyle}>
      <div style={contentContainer}>
        
        {/* SOL TARAFTAKİ YAZILAR */}
        <div style={textSide}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: '900', lineHeight: '1.1', marginBottom: '15px' }}>
            PROFLASH <br /> <span style={{ color: '#ffb703' }}>NAKLİYAT</span>
          </h1>
          <p style={{ fontSize: '1.3rem', marginBottom: '35px', color: '#f0f0f0' }}>
            Ankara Merkezli, Tüm Türkiye'ye <br /> <span style={{color:'#ffb703', fontWeight:'bold'}}>Güvenli</span> ve Ambalajlı Taşımacılık.
          </p>
          
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom:'30px' }}>
             <div style={iconBoxStyle}>
                <div style={smallCircleStyle}><i className="fa-solid fa-user-shield"></i></div>
                <strong style={{fontSize:'0.9rem'}}>Güvenli</strong>
             </div>
             <div style={iconBoxStyle}>
                <div style={smallCircleStyle}><i className="fa-solid fa-truck-ramp-box"></i></div>
                <strong style={{fontSize:'0.9rem'}}>Asansörlü</strong>
             </div>
             <div style={iconBoxStyle}>
                <div style={smallCircleStyle}><i className="fa-solid fa-box-open"></i></div>
                <strong style={{fontSize:'0.9rem'}}>Ambalajlı</strong>
             </div>
          </div>
        </div>

        {/* SAĞ TARAFTAKİ FORM */}
        <div style={formSide}>
          <h2 style={{ textAlign: 'center', color: '#0a1a2f', fontSize: '1.5rem', marginBottom:'15px', fontWeight:'800' }}>Hemen Fiyat Al ⚡</h2>
          <form ref={form} onSubmit={sendQuote}>
            <input type="hidden" name="user_name" value={formData.user_name} />
            <input type="hidden" name="user_phone" value={formData.user_phone} />
            <input type="hidden" name="from_location" value={`${formData.fromCity} / ${formData.fromDistrict}`} />
            <input type="hidden" name="to_location" value={`${formData.toCity} / ${formData.toDistrict}`} />
            <input type="hidden" name="from_floor" value={formData.from_floor} />
            <input type="hidden" name="to_floor" value={formData.to_floor} />
            <input type="hidden" name="room_type" value={formData.room_type} />

            <div style={rowStyle}>
              <div style={colStyle}><label style={labelStyle}>Ad Soyad</label><input style={inputStyle} type="text" name="user_name" value={formData.user_name} onChange={handleChange} placeholder="Adınız" required /></div>
              <div style={colStyle}><label style={labelStyle}>Telefon</label><input style={inputStyle} type="tel" name="user_phone" value={formData.user_phone} onChange={handleChange} placeholder="05XX..." required /></div>
            </div>

            <div style={rowStyle}>
               <div style={colStyle}>
                  <label style={labelStyle}>Nereden (İl)</label>
                  <select style={inputStyle} value={formData.fromCity} onChange={(e) => handleCityChange(e, 'from')}><option value="">Seçiniz</option>{iller.map(il => <option key={il} value={il}>{il}</option>)}</select>
               </div>
               <div style={colStyle}>
                  <label style={labelStyle}>İlçe</label>
                  <select style={inputStyle} value={formData.fromDistrict} onChange={(e) => setFormData({...formData, fromDistrict: e.target.value})} disabled={!formData.fromCity}><option value="">Seçiniz</option>{formData.fromCity && turkeyData[formData.fromCity].map(ilce => <option key={ilce} value={ilce}>{ilce}</option>)}</select>
               </div>
            </div>

            <div style={rowStyle}>
               <div style={colStyle}>
                  <label style={labelStyle}>Nereye (İl)</label>
                  <select style={inputStyle} value={formData.toCity} onChange={(e) => handleCityChange(e, 'to')}><option value="">Seçiniz</option>{iller.map(il => <option key={il} value={il}>{il}</option>)}</select>
               </div>
               <div style={colStyle}>
                  <label style={labelStyle}>İlçe</label>
                  <select style={inputStyle} value={formData.toDistrict} onChange={(e) => setFormData({...formData, toDistrict: e.target.value})} disabled={!formData.toCity}><option value="">Seçiniz</option>{formData.toCity && turkeyData[formData.toCity].map(ilce => <option key={ilce} value={ilce}>{ilce}</option>)}</select>
               </div>
            </div>

            <div style={rowStyle}>
              <div style={colStyle}><label style={labelStyle}>Mevcut Kat</label><input style={inputStyle} type="text" name="from_floor" value={formData.from_floor} onChange={handleChange} placeholder="Örn: 3" /></div>
              <div style={colStyle}><label style={labelStyle}>Yeni Kat</label><input style={inputStyle} type="text" name="to_floor" value={formData.to_floor} onChange={handleChange} placeholder="Örn: 5" /></div>
            </div>

            <label style={labelStyle}>Eşya Tipi / Detay</label>
            <input list="room-options" name="room_type" value={formData.room_type} onChange={handleChange} style={inputStyle} placeholder="2+1, Ofis..." />
            <datalist id="room-options">
              <option value="1+1" /><option value="2+1" /><option value="3+1" /><option value="Villa" /><option value="Ofis" />
            </datalist>

            <button type="submit" style={buttonStyle}>TEKLİFİ GÖNDER 🚀</button>
          </form>
        </div>
      </div>
    </div>
  );
}

const heroSectionStyle = { background: 'linear-gradient(rgba(10, 26, 47, 0.8), rgba(10, 26, 47, 0.8)), url("https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1500") center/cover', minHeight: '85vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px 20px', color: 'white' };
const contentContainer = { display: 'flex', flexWrap: 'wrap', maxWidth: '1200px', width: '100%', justifyContent: 'center', alignItems: 'center', gap: '40px' };
const textSide = { flex: '1', minWidth: '320px', textAlign: 'center' };
const formSide = { flex: '1', maxWidth: '450px', minWidth: '300px', backgroundColor: 'white', padding: '25px', borderRadius: '20px', color: '#333', boxShadow: '0 15px 50px rgba(0,0,0,0.5)', borderTop: '6px solid #ffb703' };
const rowStyle = { display: 'flex', gap: '12px', marginBottom: '10px' };
const colStyle = { flex: '1' };
const inputStyle = { width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '10px', fontSize: '14px' };
const labelStyle = { display: 'block', marginBottom: '4px', fontWeight: 'bold', fontSize: '12px' };
const buttonStyle = { width: '100%', padding: '16px', background: 'linear-gradient(135deg, #d90429, #a8001d)', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '17px', cursor: 'pointer', marginTop: '15px' };
const iconBoxStyle = { display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(217, 4, 41, 0.25)', padding: '8px 18px', borderRadius: '50px', border: '1px solid rgba(255, 183, 3, 0.4)' };
const smallCircleStyle = { width: '35px', height: '35px', background: '#ffb703', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0a1a2f' };

export default Hero;