import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-[#f5f2ec] text-[#3a2e2e] font-serif">
      <header style={{padding: "1rem", backgroundColor: "white", boxShadow: "0 2px 4px rgba(0,0,0,0.1)"}}>
        <h1 style={{fontSize: "2rem", fontWeight: "bold"}}>TOHAF.ae</h1>
        <nav style={{marginTop: "0.5rem"}}>
          <a href="#shop" style={{marginRight: "1rem"}}>المتجر / Shop</a>
          <a href="#about" style={{marginRight: "1rem"}}>من نحن / About</a>
          <a href="#contact" style={{marginRight: "1rem"}}>تواصل معنا / Contact</a>
          <a href="#sell">اعرض تحفك / Sell</a>
        </nav>
      </header>

      <main style={{padding: "2rem"}}>
        <section style={{textAlign: "center", padding: "3rem 0"}}>
          <h2 style={{fontSize: "2rem"}}>مرحبًا بكم في TOHAF.ae</h2>
          <p style={{fontSize: "1.2rem", maxWidth: "600px", margin: "1rem auto"}}>
            اكتشفوا أفخم التحف المختارة بعناية من الطراز العربي الأوروبي – نُرسل إلى جميع أنحاء العالم.
          </p>
        </section>

        <section id="shop" style={{padding: "2rem 0"}}>
          <h3 style={{fontSize: "1.5rem", textAlign: "center"}}>التحف المتوفرة / Available Artifacts</h3>
          <div style={{display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1rem"}}>
            {[1,2,3].map(i => (
              <div key={i} style={{background: "white", borderRadius: "1rem", boxShadow: "0 2px 6px rgba(0,0,0,0.1)", padding: "1rem", width: "200px"}}>
                <div style={{height: "150px", background: "#ccc", borderRadius: "0.5rem", marginBottom: "1rem"}}></div>
                <h4>اسم التحفة / Item Name</h4>
                <p style={{fontSize: "0.9rem"}}>وصف مختصر / Short Description</p>
                <strong>$250</strong>
              </div>
            ))}
          </div>
        </section>

        <section id="sell" style={{padding: "2rem", background: "#eae4d8", borderRadius: "1rem", margin: "2rem 0", textAlign: "center"}}>
          <h3 style={{fontSize: "1.5rem"}}>اعرض تحفك للبيع / List Your Artifact</h3>
          <p style={{maxWidth: "600px", margin: "1rem auto"}}>
            هل تملك تحفة فريدة؟ اعرضها على موقعنا مقابل 5% فقط من قيمتها، أو اختر عرض VIP لتحصل على أماكن مميزة مقابل 10%.
          </p>
          <button style={{padding: "0.5rem 1rem", border: "1px solid #333", borderRadius: "0.5rem"}}>ابدأ الآن / Start Now</button>
        </section>

        <section id="about" style={{textAlign: "center", padding: "2rem 0"}}>
          <h3 style={{fontSize: "1.5rem"}}>من نحن / About Us</h3>
          <p style={{maxWidth: "600px", margin: "1rem auto"}}>
            TOHAF.ae هو متجر إلكتروني إماراتي يعنى بجمع وعرض أجمل التحف الفاخرة من التراث العربي والأوروبي. نؤمن أن كل قطعة تروي حكاية.
          </p>
        </section>

        <section id="contact" style={{textAlign: "center", padding: "2rem 0"}}>
          <h3 style={{fontSize: "1.5rem"}}>تواصل معنا / Contact Us</h3>
          <p>راسلنا عبر <a href="mailto:info@tohaf.ae">info@tohaf.ae</a> أو عبر واتساب.</p>
        </section>
      </main>

      <footer style={{textAlign: "center", padding: "1rem", borderTop: "1px solid #ccc", fontSize: "0.9rem"}}>
        &copy; 2025 TOHAF.ae - جميع الحقوق محفوظة / All rights reserved
      </footer>
    </div>
  );
}

export default App;