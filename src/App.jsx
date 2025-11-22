
import "./App.css";

export default function App() {
  return (
    <div className="bcn-bg">
      <nav className="bcn-navbar">
        <div className="bcn-navbar-content">
          <img src="/SH.png" alt="Logo" className="bcn-logo" />
          <ul className="bcn-nav-list">
            <li>الرئيسية</li>
            <li>من نحن</li>
            <li>الخدمات</li>
            <li>الأعمال</li>
            <li>لماذا نحن؟</li>
            <li>تواصل معنا</li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="bcn-hero-section">
        <div className="bcn-hero-content">
          <h1 className="bcn-hero-title">ADAM – متخصص الشاشات والأنظمة الكهربائية في صنعاء</h1>
          <p className="bcn-hero-desc">
            خبرة منذ 2016 – تنفيذ احترافي وجودة مضمونة
          </p>
          <a href="#contact" className="bcn-hero-btn">اتصل الآن: 771199341</a>
        </div>
      </main>

      {/* About Section */}
      <section className="bcn-section" id="about">
        <h2 className="bcn-section-title">من نحن</h2>
        <p className="bcn-section-desc">فريق مهني بقيادة المهندس أدم عمر، متخصصون في الأنظمة الكهربائية، شبكات الإنترنت، وشاشات العرض الحديثة. نلتزم بأعلى معايير الجودة والسلامة.</p>
      </section>

      {/* Services Section */}
      <section className="bcn-section" id="services">
        <h2 className="bcn-section-title">خدماتنا</h2>
        <div className="bcn-services-grid">
          {/* Service Card 1 */}
          <div className="bcn-service-card">
            <div className="bcn-service-img bcn-img-placeholder">صورة الخدمة</div>
            <h3>تركيب شاشات LED</h3>
            <p>تركيب وبرمجة شاشات LED داخلية وخارجية بأحدث التقنيات وبجودة عالية.</p>
          </div>
          {/* Service Card 2 */}
          <div className="bcn-service-card">
            <div className="bcn-service-img bcn-img-placeholder">صورة الخدمة</div>
            <h3>تمديدات كهربائية</h3>
            <p>تنفيذ تمديدات كهربائية سكنية وتجارية مع ضمان الأمان والكفاءة.</p>
          </div>
          {/* Service Card 3 */}
          <div className="bcn-service-card">
            <div className="bcn-service-img bcn-img-placeholder">صورة الخدمة</div>
            <h3>شبكات MikroTik</h3>
            <p>تصميم وإعداد شبكات الإنترنت والتحكم الذكي باستخدام أجهزة MikroTik.</p>
          </div>
          {/* Service Card 4 */}
          <div className="bcn-service-card">
            <div className="bcn-service-img bcn-img-placeholder">صورة الخدمة</div>
            <h3>شاشات 3D الإعلانية</h3>
            <p>برمجة وعرض شاشات 3D الإعلانية لجذب الانتباه بأحدث المؤثرات البصرية.</p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bcn-section" id="portfolio">
        <h2 className="bcn-section-title">أعمالنا</h2>
        <div className="bcn-portfolio-grid">
          {[
            "لوحة كهربائية مفتوحة: تظهر القواطع، الأسلاك الملونة، والوحدات الكهربائية مرتبة بشكل منظم.",
            "فني كهربائي يعمل: يركب الأسلاك بعناية داخل لوحة تحكم.",
            "وحدات ADAM مثبتة: أضواء LED خضراء تشير للتشغيل السليم.",
            "تصميم سقفي حديث: إضاءة LED دائرية متدرجة كجزء من ديكور داخلي.",
            "لوحة كهربائية مغلقة: مع جهاز تحكم أو محول وتوصيلات خارجية واضحة.",
            "زاوية سقف مضاءة: توضح توزيع الإضاءة ونمط التصميم الداخلي.",
            "لوحة تحكم صغيرة: تحتوي وحدات تحكم وأشرطة أطراف بتوصيلات مرتبة.",
            "لوحة كهربائية مفتوحة: أسلاك متصلة بأشرطة الأطراف، تُظهر كثافة وتنظيم الأسلاك.",
            "لوحة كهربائية أخرى: صفوف الأسلاك واضحة، جزء من نفس المشروع أو لوحة ثانية.",
            "وحدات ADAM على رف: أضواء LED خضراء، زاوية عرض مختلفة عن الصورة 3.",
            "لوحة كهربائية من زاوية منخفضة: تظهر التوصيلات واللوحة من الأسفل.",
            "فني أثناء صيانة: يعمل على لوحة كهربائية داخل موقع العمل مع معدات السلامة.",
            "لوحة صغيرة حمراء: تحتوي على قواطع وأشرطة أطراف لتوصيلات فرعية.",
            "فني يركب لوحة كبيرة: يربط الوصلات بعناية مع إضاءة داخلية للوحة
            ."
          ].map((caption, i) => (
            <div className="bcn-portfolio-item" key={i}>
              <div className="bcn-portfolio-img">
                <img src={`/${i+1}.jpg`} alt={caption} style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'12px 12px 0 0'}} />
              </div>
              <span>{caption}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us Section */}
      <section className="bcn-section" id="why">
        <h2 className="bcn-section-title">لماذا نحن؟</h2>
        <div className="bcn-why-list">
          <div className="bcn-why-item">خبرة في الكهرباء والشاشات منذ 2016</div>
          <div className="bcn-why-item">تركيب وبرمجة شاشات LED و3D</div>
          <div className="bcn-why-item">أنظمة شبكات احترافية MikroTik</div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bcn-section" id="contact">
        <h2 className="bcn-section-title">تواصل معنا</h2>
        <div className="bcn-contact-box">
          <div>📞 771199341 / 730044892</div>
          <div>📧 aadm28285@gmail.com</div>
          <div>📍 صنعاء – اليمن</div>
          <a href="https://wa.me/967771199341" className="bcn-hero-btn" target="_blank" rel="noopener noreferrer">تواصل واتساب</a>
        </div>
      </section>
    </div>
  );
}
