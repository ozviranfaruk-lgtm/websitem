import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

function Contact() {
  const form = useRef();

  // --- 81 İL VE TÜM İLÇELER VERİSİ ---
  const turkeyData = { "Adana": ["Aladağ", "Ceyhan", "Çukurova", "Feke", "İmamoğlu", "Karaisalı", "Karataş", "Kozan", "Pozantı", "Saimbeyli", "Sarıçam", "Seyhan", "Tufanbeyli", "Yumurtalık", "Yüreğir"], "Adıyaman": ["Besni", "Çelikhan", "Gerger", "Gölbaşı", "Kahta", "Merkez", "Samsat", "Sincik", "Tut"], "Afyonkarahisar": ["Başmakçı", "Bayat", "Bolvadin", "Çay", "Çobanlar", "Dazkırı", "Dinar", "Emirdağ", "Evciler", "Hocalar", "İhsaniye", "İscehisar", "Kızılören", "Merkez", "Sandıklı", "Sinanpaşa", "Sultandağı", "Şuhut"], "Ağrı": ["Diyadin", "Doğubayazıt", "Eleşkirt", "Hamur", "Merkez", "Patnos", "Taşlıçay", "Tutak"], "Aksaray": ["Ağaçören", "Eskil", "Gülağaç", "Güzelyurt", "Merkez", "Ortaköy", "Sarıyahşi", "Sultanhanı"], "Amasya": ["Göynücek", "Gümüşhacıköy", "Hamamözü", "Merkez", "Merzifon", "Suluova", "Taşova"], "Ankara": ["Akyurt", "Altındağ", "Ayaş", "Bala", "Beypazarı", "Çamlıdere", "Çankaya", "Çubuk", "Elmadağ", "Etimesgut", "Evren", "Gölbaşı", "Güdül", "Haymana", "Kahramankazan", "Kalecik", "Keçiören", "Kızılcahamam", "Mamak", "Nallıhan", "Polatlı", "Pursaklar", "Sincan", "Şereflikoçhisar", "Yenimahalle"], "Antalya": ["Akseki", "Aksu", "Alanya", "Demre", "Döşemealtı", "Elmalı", "Finike", "Gazipaşa", "Gündoğmuş", "İbradı", "Kaş", "Kemer", "Kepez", "Konyaaltı", "Korkuteli", "Kumluca", "Manavgat", "Muratpaşa", "Serik"], "Ardahan": ["Çıldır", "Damal", "Göle", "Hanak", "Merkez", "Posof"], "Artvin": ["Ardanuç", "Arhavi", "Borçka", "Hopa", "Kemalpaşa", "Merkez", "Murgul", "Şavşat", "Yusufeli"], "Aydın": ["Bozdoğan", "Buharkent", "Çine", "Didim", "Efeler", "Germencik", "İncirliova", "Karacasu", "Karpuzlu", "Koçarlı", "Köşk", "Kuşadası", "Kuyucak", "Nazilli", "Söke", "Sultanhisar", "Yenipazar"], "Balıkesir": ["Altıeylül", "Ayvalık", "Balya", "Bandırma", "Bigadiç", "Burhaniye", "Dursunbey", "Edremit", "Erdek", "Gömeç", "Gönen", "Havran", "İvrindi", "Karesi", "Kepsut", "Manyas", "Marmara", "Savaştepe", "Sındırgı", "Susurluk"], "Bartın": ["Amasra", "Kurucaşile", "Merkez", "Ulus"], "Batman": ["Beşiri", "Gercüş", "Hasankeyf", "Kozluk", "Merkez", "Sason"], "Bayburt": ["Aydıntepe", "Demirözü", "Merkez"], "Bilecik": ["Bozüyük", "Gölpazarı", "İnhisar", "Merkez", "Osmaneli", "Pazaryeri", "Söğüt", "Yenipazar"], "Bingöl": ["Adaklı", "Genç", "Karlıova", "Kiğı", "Merkez", "Solhan", "Yayladere", "Yedisu"], "Bitlis": ["Adilcevaz", "Ahlat", "Güroymak", "Hizan", "Merkez", "Mutki", "Tatvan"], "Bolu": ["Dörtdivan", "Gerede", "Göynük", "Kıbrıscık", "Mengen", "Merkez", "Mudurnu", "Seben", "Yeniçağa"], "Burdur": ["Ağlasun", "Altınyayla", "Bucak", "Çavdır", "Çeltikçi", "Gölhisar", "Karamanlı", "Kemer", "Merkez", "Tefenni", "Yeşilova"], "Bursa": ["Büyükorhan", "Gemlik", "Gürsu", "Harmancık", "İnegöl", "İznik", "Karacabey", "Keles", "Kestel", "Mudanya", "Mustafakemalpaşa", "Nilüfer", "Orhaneli", "Orhangazi", "Osmangazi", "Yenişehir", "Yıldırım"], "Çanakkale": ["Ayvacık", "Bayramiç", "Biga", "Bozcaada", "Çan", "Eceabat", "Ezine", "Gelibolu", "Gökçeada", "Lapseki", "Merkez", "Yenice"], "Çankırı": ["Atkaracalar", "Bayramören", "Çerkeş", "Eldivan", "Ilgaz", "Kızılırmak", "Korgun", "Kurşunlu", "Merkez", "Orta", "Şabanözü", "Yapraklı"], "Çorum": ["Alaca", "Bayat", "Boğazkale", "Dodurga", "İskilip", "Kargı", "Laçin", "Mecitözü", "Merkez", "Oğuzlar", "Ortaköy", "Osmancık", "Sungurlu", "Uğurludağ"], "Denizli": ["Acıpayam", "Babadağ", "Baklan", "Bekilli", "Beyağaç", "Bozkurt", "Buldan", "Çal", "Çameli", "Çardak", "Çivril", "Güney", "Honaz", "Kale", "Merkezefendi", "Pamukkale", "Sarayköy", "Serinhisar", "Tavas"], "Diyarbakır": ["Bağlar", "Bismil", "Çermik", "Çınar", "Çüngüş", "Dicle", "Eğil", "Ergani", "Hani", "Hazro", "Kayapınar", "Kocaköy", "Kulp", "Lice", "Silvan", "Sur", "Yenişehir"], "Düzce": ["Akçakoca", "Cumayeri", "Çilimli", "Gölyaka", "Gümüşova", "Kaynaşlı", "Merkez", "Yığılca"], "Edirne": ["Enez", "Havsa", "İpsala", "Keşan", "Lalapaşa", "Meriç", "Merkez", "Süloğlu", "Uzunköprü"], "Elazığ": ["Ağın", "Alacakaya", "Arıcak", "Baskil", "Karakoçan", "Keban", "Kovancılar", "Maden", "Merkez", "Palu", "Sivrice"], "Erzincan": ["Çayırlı", "İliç", "Kemah", "Kemaliye", "Merkez", "Otlukbeli", "Refahiye", "Tercan", "Üzümlü"], "Erzurum": ["Aşkale", "Aziziye", "Çat", "Hınıs", "Horasan", "İspir", "Karaçoban", "Karayazı", "Köprüköy", "Narman", "Oltu", "Olur", "Palandöken", "Pasinler", "Pazaryolu", "Şenkaya", "Tekman", "Tortum", "Uzundere", "Yakutiye"], "Eskişehir": ["Alpu", "Beylikova", "Çifteler", "Günyüzü", "Han", "İnönü", "Mahmudiye", "Mihalgazi", "Mihalıççık", "Odunpazarı", "Sarıcakaya", "Seyitgazi", "Sivrihisar", "Tepebaşı"], "Gaziantep": ["Araban", "İslahiye", "Karkamış", "Nizip", "Nurdağı", "Oğuzeli", "Şahinbey", "Şehitkamil", "Yavuzeli"], "Giresun": ["Alucra", "Bulancak", "Çamoluk", "Çanakçı", "Dereli", "Doğankent", "Espiye", "Eynesil", "Görele", "Güce", "Keşap", "Merkez", "Piraziz", "Şebinkaharhisar", "Tirebolu", "Yağlıdere"], "Gümüşhane": ["Kelkit", "Köse", "Kürtün", "Merkez", "Şiran", "Torul"], "Hakkari": ["Çukurca", "Derecik", "Merkez", "Şemdinli", "Yüksekova"], "Hatay": ["Altınözü", "Antakya", "Arsuz", "Belen", "Defne", "Dörtyol", "Erzin", "Hassa", "İskenderun", "Kırıkhan", "Kumlu", "Payas", "Reyhanlı", "Samandağ", "Yayladağı"], "Iğdır": ["Aralık", "Karakoyunlu", "Merkez", "Tuzluca"], "Isparta": ["Aksu", "Atabey", "Eğirdir", "Gelendost", "Gönen", "Keçiborlu", "Merkez", "Senirkent", "Sütçüler", "Şarkikaraağaç", "Uluborlu", "Yalvaç", "Yenişarbademli"], "İstanbul": ["Adalar", "Arnavutköy", "Ataşehir", "Avcılar", "Bağcılar", "Bahçelievler", "Bakırköy", "Başakşehir", "Bayrampaşa", "Beşiktaş", "Beykoz", "Beylikdüzü", "Beyoğlu", "Büyükçekmece", "Çatalca", "Çekmeköy", "Esenler", "Esenyurt", "Eyüpsultan", "Fatih", "Gaziosmanpaşa", "Güngören", "Kadıköy", "Kağıthane", "Kartal", "Küçükçekmece", "Maltepe", "Pendik", "Sancaktepe", "Sarıyer", "Silivri", "Sultanbeyli", "Sultangazi", "Şile", "Şişli", "Tuzla", "Ümraniye", "Üsküdar", "Zeytinburnu"], "İzmir": ["Aliağa", "Balçova", "Bayındır", "Bayraklı", "Bergama", "Beydağ", "Bornova", "Buca", "Çeşme", "Çiğli", "Dikili", "Foça", "Gaziemir", "Güzelbahçe", "Karabağlar", "Karaburun", "Karşıyaka", "Kemalpaşa", "Kınık", "Kiraz", "Konak", "Menderes", "Menemen", "Narlıdere", "Ödemiş", "Seferihisar", "Selçuk", "Tire", "Torbalı", "Urla"], "Kahramanmaraş": ["Afşin", "Andırın", "Çağlayancerit", "Dulkadiroğlu", "Ekinözü", "Elbistan", "Göksun", "Nurhak", "Onikişubat", "Pazarcık", "Türkoğlu"], "Karabük": ["Eflani", "Eskipazar", "Merkez", "Ovacık", "Safranbolu", "Yenice"], "Karaman": ["Ayrancı", "Başyayla", "Ermenek", "Kazımkarabekir", "Merkez", "Sarıveliler"], "Kars": ["Akyaka", "Arpaçay", "Digor", "Kağızman", "Merkez", "Sarıkamış", "Selim", "Susuz"], "Kastamonu": ["Abana", "Ağlı", "Araç", "Azdavay", "Bozkurt", "Cide", "Çatalzeytin", "Daday", "Devrekani", "Doğanyurt", "Hanönü", "İhsangazi", "İnebolu", "Küre", "Merkez", "Pınarbaşı", "Seydiler", "Şenpazar", "Taşköprü", "Tosya"], "Kayseri": ["Akkışla", "Bünyan", "Develi", "Felahiye", "Hacılar", "İncesu", "Kocasinan", "Melikgazi", "Özvatan", "Pınarbaşı", "Sarıoğlan", "Sarız", "Talas", "Tomarza", "Yahyalı", "Yeşilhisar"], "Kırıkkale": ["Bahşılı", "Balışeyh", "Çelebi", "Delice", "Karakeçili", "Keskin", "Merkez", "Sulakyurt", "Yahşihan"], "Kırklareli": ["Babaeski", "Demirköy", "Kofçaz", "Lüleburgaz", "Merkez", "Pehlivanköy", "Pınarhisar", "Vize"], "Kırşehir": ["Akçakent", "Akpınar", "Boztepe", "Çiçekdağı", "Kaman", "Merkez", "Mucur"], "Kilis": ["Elbeyli", "Merkez", "Musabeyli", "Polateli"], "Kocaeli": ["Başiskele", "Çayırova", "Darıca", "Derince", "Dilovası", "Gebze", "Gölcük", "İzmit", "Kandıra", "Karamürsel", "Kartepe", "Körfez"], "Konya": ["Ahırlı", "Akören", "Akşehir", "Altınekin", "Beyşehir", "Bozkır", "Cihanbeyli", "Çeltik", "Çumra", "Derbent", "Derebucak", "Doğanhisar", "Emirgazi", "Ereğli", "Güneysınır", "Hadim", "Halkapınar", "Hüyük", "Ilgın", "Kadınhanı", "Karapınar", "Karatay", "Kulu", "Meram", "Sarayönü", "Selçuklu", "Seydişehir", "Taşkent", "Tuzlukçu", "Yalıhüyük", "Yunak"], "Kütahya": ["Altıntaş", "Aslanapa", "Çavdarhisar", "Domaniç", "Dumlupınar", "Emet", "Gediz", "Hisarcık", "Merkez", "Pazarlar", "Simav", "Şaphane", "Tavşanlı"], "Malatya": ["Akçadağ", "Arapgir", "Arguvan", "Battalgazi", "Darende", "Doğanşehir", "Doğanyol", "Hekimhan", "Kale", "Kuluncak", "Pütürge", "Yazıhan", "Yeşilyurt"], "Manisa": ["Ahmetli", "Akhisar", "Alaşehir", "Demirci", "Gölmarmara", "Gördes", "Kırkağaç", "Köprübaşı", "Kula", "Salihli", "Sarıgöl", "Saruhanlı", "Selendi", "Soma", "Şehzadeler", "Turgutlu", "Yunusemre"], "Mardin": ["Artuklu", "Dargeçit", "Derik", "Kızıltepe", "Mazıdağı", "Midyat", "Nusaybin", "Ömerli", "Savur", "Yeşilli"], "Mersin": ["Akdeniz", "Anamur", "Aydıncık", "Bozyazı", "Çamlıyayla", "Erdemli", "Gülnar", "Mezitli", "Mut", "Silifke", "Tarsus", "Toroslar", "Yenişehir"], "Muğla": ["Bodrum", "Dalaman", "Datça", "Fethiye", "Kavaklıdere", "Köyceğiz", "Marmaris", "Menteşe", "Milas", "Ortaca", "Seydikemer", "Ula", "Yatağan"], "Muş": ["Bulanık", "Hasköy", "Korkut", "Malazgirt", "Merkez", "Varto"], "Nevşehir": ["Acıgöl", "Avanos", "Derinkuyu", "Gülşehir", "Hacıbektaş", "Kozaklı", "Merkez", "Ürgüp"], "Niğde": ["Altunhisar", "Bor", "Çamardı", "Çiftlik", "Merkez", "Ulukışla"], "Ordu": ["Akkuş", "Altınordu", "Aybastı", "Çamaş", "Çatalpınar", "Çaybaşı", "Fatsa", "Gölköy", "Gülyalı", "Gürgentepe", "İkizce", "Kabadüz", "Kabataş", "Korgan", "Kumru", "Mesudiye", "Perşembe", "Ulubey", "Ünye"], "Osmaniye": ["Bahçe", "Düziçi", "Hasanbeyli", "Kadirli", "Merkez", "Sumbas", "Toprakkale"], "Rize": ["Ardeşen", "Çamlıhemşin", "Çayeli", "Derepazarı", "Fındıklı", "Güneysu", "Hemşin", "İkizdere", "İyidere", "Kalkandere", "Merkez", "Pazar"], "Sakarya": ["Adapazarı", "Akyazı", "Arifiye", "Erenler", "Ferizli", "Geyve", "Hendek", "Karapürçek", "Karasu", "Kaynarca", "Kocaali", "Pamukova", "Sapanca", "Serdivan", "Söğütlü", "Taraklı"], "Samsun": ["19 Mayıs", "Alaçam", "Asarcık", "Atakum", "Ayvacık", "Bafra", "Canik", "Çarşamba", "Havza", "İlkadım", "Kavak", "Ladik", "Salıpazarı", "Tekkeköy", "Terme", "Vezirköprü", "Yakakent"], "Siirt": ["Baykan", "Eruh", "Kurtalan", "Merkez", "Pervari", "Şirvan", "Tillo"], "Sinop": ["Ayancık", "Boyabat", "Dikmen", "Durağan", "Erfelek", "Gerze", "Merkez", "Saraydüzü", "Türkeli"], "Sivas": ["Akıncılar", "Altınyayla", "Divriği", "Doğanşar", "Gemerek", "Gölova", "Gürün", "Hafik", "İmranlı", "Kangal", "Koyulhisar", "Merkez", "Suşehri", "Şarkışla", "Ulaş", "Yıldızeli", "Zara"], "Şanlıurfa": ["Akçakale", "Birecik", "Bozova", "Ceylanpınar", "Eyyübiye", "Halfeti", "Haliliye", "Harran", "Hilvan", "Karaköprü", "Siverek", "Suruç", "Viranşehir"], "Şırnak": ["Beytüşşebap", "Cizre", "Güçlükonak", "İdil", "Merkez", "Silopi", "Uludere"], "Tekirdağ": ["Çerkezköy", "Çorlu", "Ergene", "Hayrabolu", "Kapaklı", "Malkara", "Marmaraereğlisi", "Muratlı", "Saray", "Süleymanpaşa", "Şarköy"], "Tokat": ["Almus", "Artova", "Başçiftlik", "Erbaa", "Merkez", "Niksar", "Pazar", "Reşadiye", "Sulusaray", "Turhal", "Yeşilyurt", "Zile"], "Trabzon": ["Akçaabat", "Araklı", "Arsin", "Beşikdüzü", "Çarşıbaşı", "Çaykara", "Dernekpazarı", "Düzköy", "Hayrat", "Köprübaşı", "Maçka", "Of", "Ortahisar", "Sürmene", "Şalpazarı", "Tonya", "Vakfıkebir", "Yomra"], "Tunceli": ["Çemişgezek", "Hozat", "Mazgirt", "Merkez", "Nazımiye", "Ovacık", "Pertek", "Pülümür"], "Uşak": ["Banaz", "Eşme", "Karahallı", "Merkez", "Sivaslı", "Ulubey"], "Van": ["Bahçesaray", "Başkale", "Çaldıran", "Çatak", "Edremit", "Erciş", "Gevaş", "Gürpınar", "İpekyolu", "Muradiye", "Özalp", "Saray", "Tuşba"], "Yalova": ["Altınova", "Armutlu", "Çınarcık", "Çiftlikköy", "Merkez", "Termal"], "Yozgat": ["Akdağmadeni", "Aydıncık", "Boğazlıyan", "Çandır", "Çayıralan", "Çekerek", "Kadışehri", "Merkez", "Saraykent", "Sarıkaya", "Sorgun", "Şefaatli", "Yenifakılı", "Yerköy"], "Zonguldak": ["Alaplı", "Çaycuma", "Devrek", "Ereğli", "Gökçebey", "Kilimli", "Kozlu", "Merkez"] };

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
    
    // --- BURASI CANLI RENDER ADRESİNE GÜNCELLENDİ ---
    const backendData = {
        fullName: formData.user_name, 
        phoneNumber: formData.user_phone,
        fromCity: formData.fromCity, 
        fromDistrict: formData.fromDistrict, 
        fromNeighborhood: "Merkez", // API beklediği için sabit verdik
        toCity: formData.toCity, 
        toDistrict: formData.toDistrict, 
        toNeighborhood: "Merkez", // API beklediği için sabit verdik
        floorInfo: `Çıkış: ${formData.from_floor} / Varış: ${formData.to_floor}`, 
        description: `Eşya Durumu: ${formData.room_type}`
    };

    try {
        // Canlı Render API linkimizi buraya yazdık!
        await fetch("https://proflashapi.onrender.com/api/Quotes", { 
            method: "POST", 
            headers: { "Content-Type": "application/json" }, 
            body: JSON.stringify(backendData) 
        });
        console.log("Veri başarıyla Render Veritabanına gönderildi!");
    } catch (error) { 
        console.log("Backend gönderiminde bir sorun oluştu, ama mail gidecek."); 
    }

    // EmailJS mail gönderme işlemi devam ediyor
    emailjs.sendForm('service_q9ei8t8', 'template_d1ds2eb', form.current, { publicKey: 'Kb7IHYqjxFURFSYfE' })
      .then(() => {
          Swal.fire({ 
              title: 'Harika!', 
              text: 'Teklifiniz başarıyla alındı. Sizi en kısa sürede arayıp dönüş sağlayacağız! ✨', 
              icon: 'success', 
              confirmButtonColor: '#ffb703' 
          });
          setFormData({ 
              user_name: "", user_phone: "", fromCity: "", fromDistrict: "", 
              toCity: "", toDistrict: "", from_floor: "", to_floor: "", room_type: "1+1" 
          });
      });
  };

  // --- STİLLER ---
  const pageStyle = { padding: '40px 5%', backgroundColor: '#f4f6f9', minHeight: '100vh' };
  const headerBoxStyle = { textAlign: 'center', marginBottom: '40px' };
  const contactInfoBox = { display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginTop: '30px' };
  const infoCard = { background: 'white', padding: '25px', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', minWidth: '220px', textAlign: 'center', borderBottom: '4px solid #d90429' };
  const formBoxStyle = { maxWidth: '850px', width: '100%', margin: '0 auto', padding: '40px', borderTop: '5px solid #0a1a2f', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', backgroundColor: 'white' };
  const sectionHeader = { background: 'linear-gradient(to right, #0a1a2f, #1e3a5f)', color: 'white', padding: '12px 20px', borderRadius: '8px', fontWeight: 'bold', marginTop: '25px', marginBottom: '15px', borderLeft: '5px solid #ffb703', display: 'flex', alignItems: 'center', gap: '10px' };
  const inputStyle = { width: '100%', padding: '14px', marginBottom: '10px', border: '2px solid #ddd', borderRadius: '10px', fontSize: '15px', backgroundColor: '#fcfcfc', transition: '0.3s', outline: 'none' };
  const buttonStyle = { width: '100%', padding: '16px', background: 'linear-gradient(135deg, #d90429, #a8001d)', color: 'white', border: 'none', fontWeight: 'bold', fontSize: '18px', cursor: 'pointer', borderRadius: '10px', marginTop: '30px', boxShadow: '0 8px 20px rgba(217, 4, 41, 0.3)', borderBottom: '4px solid #8a0018' };

  return (
    <div style={pageStyle}>
      <div style={headerBoxStyle}>
        <h1 style={{color: '#0a1a2f', fontSize: '2.5rem', marginBottom:'10px'}}>BİZE ULAŞIN</h1>
        <p style={{color: '#666', fontSize:'1.1rem'}}>7/24 Profesyonel hizmet için bir telefon uzağınızdayız.</p>
        <div style={contactInfoBox}>
            <div style={infoCard}>
                <div style={{fontSize:'2.5rem', marginBottom:'10px'}}>📞</div>
                <h3 style={{margin:'0 0 5px 0', color:'#0a1a2f'}}>Telefon</h3>
                <a href="tel:05522820686" style={{textDecoration:'none', color:'#d90429', fontWeight:'bold', fontSize:'1.1rem'}}>0552 282 06 86</a>
            </div>
            <div style={infoCard}>
                <div style={{fontSize:'2.5rem', marginBottom:'10px'}}>📧</div>
                <h3 style={{margin:'0 0 5px 0', color:'#0a1a2f'}}>E-Posta</h3>
                <a href="mailto:ozviranfaruk@gmail.com" style={{textDecoration:'none', color:'#0a1a2f', fontWeight:'bold'}}>ozviranfaruk@gmail.com</a>
            </div>
            <div style={infoCard}>
                <div style={{fontSize:'2.5rem', marginBottom:'10px'}}>📍</div>
                <h3 style={{margin:'0 0 5px 0', color:'#0a1a2f'}}>Adres</h3>
                <span style={{color:'#555'}}>Ankara, Türkiye</span>
            </div>
        </div>
      </div>

      <div style={formBoxStyle}>
        <div style={{textAlign:'center', marginBottom:'30px'}}>
           <h2 style={{margin:0, fontSize:'2rem', color:'#0a1a2f'}}>HEMEN FİYAT AL ⚡</h2>
           <p style={{color:'#888'}}>Formu doldurun, sizi 5 dakika içinde arayalım.</p>
        </div>
        
        <form ref={form} onSubmit={sendQuote}>
          <input type="hidden" name="user_name" value={formData.user_name} />
          <input type="hidden" name="user_phone" value={formData.user_phone} />
          <input type="hidden" name="from_location" value={`${formData.fromCity} / ${formData.fromDistrict}`} />
          <input type="hidden" name="to_location" value={`${formData.toCity} / ${formData.toDistrict}`} />
          <input type="hidden" name="from_floor" value={formData.from_floor} />
          <input type="hidden" name="to_floor" value={formData.to_floor} />
          <input type="hidden" name="room_type" value={formData.room_type} />

          <div style={sectionHeader}>👤 Müşteri Bilgileri</div>
          <div style={{display:'flex', gap:'20px', flexWrap:'wrap'}}>
            <div style={{flex:1, minWidth:'250px'}}><label style={{display:'block', marginBottom:'5px', fontWeight:'bold', color:'#0a1a2f'}}>Ad Soyad</label><input style={inputStyle} type="text" value={formData.user_name} name="user_name" onChange={handleChange} required placeholder="Adınız Soyadınız" /></div>
            <div style={{flex:1, minWidth:'250px'}}><label style={{display:'block', marginBottom:'5px', fontWeight:'bold', color:'#0a1a2f'}}>Telefon</label><input style={inputStyle} type="tel" value={formData.user_phone} name="user_phone" onChange={handleChange} required placeholder="0555..." /></div>
          </div>

          <div style={sectionHeader}>📍 Nereden (Çıkış)</div>
          <div style={{display:'flex', gap:'20px', flexWrap:'wrap'}}>
            <div style={{flex:1, minWidth:'250px'}}><label style={{display:'block', marginBottom:'5px', fontWeight:'bold', color:'#0a1a2f'}}>İl</label><select style={inputStyle} value={formData.fromCity} onChange={(e) => handleCityChange(e, 'from')}><option value="">Seçiniz...</option>{iller.map(il => <option key={il} value={il}>{il}</option>)}</select></div>
            <div style={{flex:1, minWidth:'250px'}}><label style={{display:'block', marginBottom:'5px', fontWeight:'bold', color:'#0a1a2f'}}>İlçe</label><select style={inputStyle} value={formData.fromDistrict} onChange={(e) => setFormData({...formData, fromDistrict: e.target.value})} disabled={!formData.fromCity}><option value="">Önce İl...</option>{formData.fromCity && turkeyData[formData.fromCity].map(ilce => <option key={ilce} value={ilce}>{ilce}</option>)}</select></div>
          </div>

          <div style={sectionHeader}>🏁 Nereye (Varış)</div>
          <div style={{display:'flex', gap:'20px', flexWrap:'wrap'}}>
            <div style={{flex:1, minWidth:'250px'}}><label style={{display:'block', marginBottom:'5px', fontWeight:'bold', color:'#0a1a2f'}}>İl</label><select style={inputStyle} value={formData.toCity} onChange={(e) => handleCityChange(e, 'to')}><option value="">Seçiniz...</option>{iller.map(il => <option key={il} value={il}>{il}</option>)}</select></div>
            <div style={{flex:1, minWidth:'250px'}}><label style={{display:'block', marginBottom:'5px', fontWeight:'bold', color:'#0a1a2f'}}>İlçe</label><select style={inputStyle} value={formData.toDistrict} onChange={(e) => setFormData({...formData, toDistrict: e.target.value})} disabled={!formData.toCity}><option value="">Önce İl...</option>{formData.toCity && turkeyData[formData.toCity].map(ilce => <option key={ilce} value={ilce}>{ilce}</option>)}</select></div>
          </div>

          <div style={sectionHeader}>📦 Eşya Detayları</div>
          <div style={{display:'flex', gap:'20px', flexWrap:'wrap'}}>
            <div style={{flex:1, minWidth:'250px'}}><label style={{display:'block', marginBottom:'5px', fontWeight:'bold', color:'#0a1a2f'}}>Mevcut Ev Katı</label><input style={inputStyle} type="text" name="from_floor" value={formData.from_floor} onChange={handleChange} required placeholder="Örn: 3. Kat" /></div>
            <div style={{flex:1, minWidth:'250px'}}><label style={{display:'block', marginBottom:'5px', fontWeight:'bold', color:'#0a1a2f'}}>Yeni Ev Katı</label><input style={inputStyle} type="text" name="to_floor" value={formData.to_floor} onChange={handleChange} required placeholder="Örn: 5. Kat" /></div>
          </div>
          <label style={{display:'block', marginBottom:'5px', fontWeight:'bold', color:'#0a1a2f'}}>Eşya Durumu</label>
          <select name="room_type" value={formData.room_type} onChange={handleChange} style={inputStyle}>
            <option>1+1</option><option>2+1</option><option>3+1</option><option>4+1</option><option>Villa</option><option>Ofis</option><option>Parça Eşya</option>
          </select>

          <button type="submit" style={buttonStyle}>TEKLİFİ GÖNDER 🚀</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;