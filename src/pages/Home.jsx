import React from 'react';
import Hero from '../components/Hero'; 

function Home() {
  return (
    <div>
      <Hero />

      <div style={{ padding: '60px 20px', textAlign: 'center', background: 'white' }}>
        <h2 style={{ color: '#0a1a2f', fontSize: '2.2rem', marginBottom: '20px' }}>
          PROFLASH <span style={{ color: '#d90429' }}>FARKIYLA TAŞININ</span>
        </h2>
        <div style={{ width: '100px', height: '4px', background: '#ffb703', margin: '0 auto 30px auto' }}></div>
        
        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: '#555', lineHeight: '1.8' }}>
          Proflash Nakliyat olarak, yılların verdiği tecrübe ve profesyonel ekibimizle eşyalarınızı güvenle taşıyoruz. 
          Şehir içi ve şehirler arası taşımacılıkta <strong>sigortalı, asansörlü ve ambalajlı</strong> hizmet sunuyoruz. 
        </p>

        {/* İSTATİSTİKLER - Telefonda alt alta gelmesi için flexWrap ekledik */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '30px', 
          marginTop: '50px', 
          flexWrap: 'wrap' // Bu satır telefonda sıkışınca alt alta atar
        }}>
          <div style={{ minWidth: '150px' }}>
            <h3 style={{ fontSize: '2.2rem', color: '#d90429', margin: 0 }}>81</h3>
            <span style={{ fontWeight: 'bold', color: '#0a1a2f' }}>İlde Hizmet</span>
          </div>
          <div style={{ minWidth: '150px' }}>
            <h3 style={{ fontSize: '2.2rem', color: '#d90429', margin: 0 }}>1000+</h3>
            <span style={{ fontWeight: 'bold', color: '#0a1a2f' }}>Mutlu Müşteri</span>
          </div>
          <div style={{ minWidth: '150px' }}>
            <h3 style={{ fontSize: '2.2rem', color: '#d90429', margin: 0 }}>%100</h3>
            <span style={{ fontWeight: 'bold', color: '#0a1a2f' }}>Memnuniyet</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;