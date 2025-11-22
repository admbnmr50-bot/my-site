/* Portfolio Section (Pure React - Masonry + Filter + Lightbox Slider) */
import { useState, useMemo, useEffect } from "react";

function Portfolio() {
  // عدد الصور الإجمالي (غيّره لو أضفت/حذفت صور)
  const TOTAL = 48;

  // تصنيف الصور حسب النطاق (مثال: 1-16 كهرباء، 17-32 شاشات، 33-48 شبكات)
  const getCategory = (index) => {
    const n = index + 1;
    if (n <= 16) return "كهرباء";
    if (n <= 32) return "شاشات";
    return "شبكات";
  };

  // بناء مصفوفة الصور مع التصنيفات والعناوين
  const images = useMemo(() => {
    return Array.from({ length: TOTAL }, (_, i) => ({
      id: i + 1,
      src: `/${i + 1}.jpg`, // الصور يجب أن تكون في public/1.jpg ... public/48.jpg
      alt: `عمل رقم ${i + 1}`,
      category: getCategory(i),
      title: `عمل رقم ${i + 1}`,
    }));
  }, [TOTAL]);

  const [filter, setFilter] = useState("الكل"); // فلاتر: الكل, كهرباء, شاشات, شبكات
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filtered = useMemo(
    () => (filter === "الكل" ? images : images.filter((img) => img.category === filter)),
    [images, filter]
  );

  // فتح اللايت بوكس على صورة معينة (index داخل filtered)
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const gotoNext = () => setCurrentIndex((idx) => (idx + 1) % filtered.length);
  const gotoPrev = () => setCurrentIndex((idx) => (idx - 1 + filtered.length) % filtered.length);

  // لوحة المفاتيح: Esc لإغلاق، أسهم للتنقل
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") gotoNext();
      if (e.key === "ArrowLeft") gotoPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, filtered.length]);

  return (
    <section className="bcn-section" id="portfolio">
      <h2 className="bcn-section-title">أعمالنا</h2>

      {/* Filter Buttons */}
      <div className="portfolio-filters">
        {["الكل", "كهرباء", "شاشات", "شبكات"].map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid (CSS columns) */}
      <div className="bcn-portfolio-grid masonry">
        {filtered.map((img, idx) => (
          <div
            className="bcn-portfolio-item masonry-item"
            key={img.id}
            onClick={() => openLightbox(idx)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === "Enter") openLightbox(idx); }}
          >
            <div className="bcn-portfolio-img">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px 12px 0 0" }}
              />
            </div>
            <span className="portfolio-caption">{img.title}</span>
            <span className="portfolio-tag">{img.category}</span>
          </div>
        ))}
      </div>

      {/* Lightbox + Slider */}
      {lightboxOpen && filtered.length > 0 && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lb-close" onClick={closeLightbox} aria-label="Close">×</button>
            <button className="lb-prev" onClick={gotoPrev} aria-label="Prev">‹</button>

            <div className="lb-image-wrap">
              <img
                src={filtered[currentIndex].src}
                alt={filtered[currentIndex].alt}
                className="lb-image"
              />
              <div className="lb-caption">
                <div>{filtered[currentIndex].title}</div>
                <div className="lb-category">{filtered[currentIndex].category}</div>
                <div className="lb-counter">{currentIndex + 1} / {filtered.length}</div>
              </div>
            </div>

            <button className="lb-next" onClick={gotoNext} aria-label="Next">›</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default function App() {
  return (
    <div className="bcn-bg">
      {/* ... بقية الصفحة كما كانت (navbar, hero, about, services) */}
      {/* استبدل الجزء الخاص بالأعمال بهذا المكون */}
      <Portfolio />

      {/* بقية الأقسام (why, contact) ... */}
    </div>
  );
}
