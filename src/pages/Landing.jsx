import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const heroImages = [
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80",
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1600&q=80",
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1600&q=80",
];

const stats = [
  { number: "500+", label: "Happy Clients" },
  { number: "50+", label: "Expert Stylists" },
  { number: "100+", label: "Services" },
  { number: "15+", label: "Years Experience" },
];

const featuredServices = [
  {
    icon: "🧖‍♀️",
    title: "Skincare",
    desc: "Deep cleansing facials, hydration therapy, and rejuvenation treatments.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
  },
  {
    icon: "💇‍♀️",
    title: "Hair Styling",
    desc: "Expert cuts, color, styling, and therapeutic hair spa treatments.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80",
  },
  {
    icon: "💄",
    title: "Makeup",
    desc: "Bridal, party, and professional makeup by certified artists.",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80",
  },
  {
    icon: "💅",
    title: "Nail Art",
    desc: "Manicure, pedicure, gel polish, and custom nail art designs.",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
  },
];

const testimonials = [
  {
    name: "Anisha Sharma",
    role: "Bride-to-be",
    text: "BeautyHub made my bridal look absolutely stunning! The team's attention to detail was incredible.",
    avatar: "👩",
    rating: 5,
  },
  {
    name: "Priya Thapa",
    role: "Regular Client",
    text: "Best skincare treatments in town. My skin has never looked better after their facial sessions.",
    avatar: "👩‍🦱",
    rating: 5,
  },
  {
    name: "Sita Rai",
    role: "Course Graduate",
    text: "The beauty course gave me skills and confidence to start my own journey. Highly recommended!",
    avatar: "👩‍🎓",
    rating: 5,
  },
];

function Landing() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      {/* ========== HERO SECTION ========== */}
      <section
        id="hero-section"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Background Images with Crossfade */}
        {heroImages.map((img, idx) => (
          <div
            key={idx}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: currentSlide === idx ? 1 : 0,
              transition: "opacity 1.5s ease-in-out",
            }}
          />
        ))}

        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(135deg, rgba(74, 14, 46, 0.75) 0%, rgba(45, 45, 45, 0.6) 100%)",
          }}
        />

        {/* Hero Content */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            textAlign: "center",
            padding: "0 1.5rem",
            maxWidth: "800px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "all 1s ease-out 0.3s",
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "0.5rem 1.5rem",
              background: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              borderRadius: "50px",
              fontSize: "0.85rem",
              fontWeight: 500,
              color: "#FFD4D4",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            ✨ Welcome to BeautyHub
          </span>

          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            Where Beauty
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #D4A0A7, #F0D68A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontStyle: "italic",
              }}
            >
              Meets Elegance
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              color: "rgba(255, 255, 255, 0.85)",
              lineHeight: 1.8,
              maxWidth: "600px",
              margin: "0 auto 2.5rem",
            }}
          >
            Experience premium beauty services, expert courses, and
            transformative treatments that bring out the best in you.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/services" className="btn-primary" id="hero-explore-btn">
              Explore Services ✦
            </Link>
            <Link to="/courses" className="btn-secondary" id="hero-courses-btn" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.5)" }}>
              View Courses →
            </Link>
          </div>

          {/* Slide Indicators */}
          <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", marginTop: "3rem" }}>
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
                style={{
                  width: currentSlide === idx ? "2rem" : "0.5rem",
                  height: "0.5rem",
                  borderRadius: "50px",
                  border: "none",
                  background: currentSlide === idx ? "#D4A0A7" : "rgba(255,255,255,0.4)",
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========== STATS BAR ========== */}
      <section
        id="stats-section"
        style={{
          background: "linear-gradient(135deg, #4A0E2E, #6B1D4A)",
          padding: "3rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "2rem",
            textAlign: "center",
          }}
        >
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 700,
                  fontFamily: "'Playfair Display', serif",
                  color: "#D4A0A7",
                  marginBottom: "0.25rem",
                }}
              >
                {stat.number}
              </div>
              <div style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== FEATURED SERVICES ========== */}
      <section id="featured-services" style={{ padding: "clamp(3rem, 8vw, 6rem) 1.5rem", background: "#FFF5EE" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="section-label">What We Offer</span>
            <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
              Our Signature Services
            </h2>
            <p className="section-subtitle">
              Discover our curated collection of beauty treatments designed to
              pamper, rejuvenate, and transform.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {featuredServices.map((service, idx) => (
              <div
                key={idx}
                className="card"
                style={{ cursor: "pointer" }}
              >
                <div style={{ overflow: "hidden", position: "relative" }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="card-image"
                    loading="lazy"
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      left: "1rem",
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.9)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                    }}
                  >
                    {service.icon}
                  </div>
                </div>
                <div className="card-body">
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 600,
                      color: "#4A0E2E",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "#6B6B6B", lineHeight: 1.7 }}>
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link to="/services" className="btn-primary" id="view-all-services-btn">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section
        id="why-choose-us"
        style={{
          padding: "clamp(3rem, 8vw, 6rem) 1.5rem",
          background: "linear-gradient(180deg, #FFF5EE 0%, #FFFFFF 100%)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="section-label">Why BeautyHub</span>
            <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
              The BeautyHub Difference
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                icon: "🌿",
                title: "Natural Products",
                desc: "We use only premium, cruelty-free, and organic beauty products for all our treatments.",
              },
              {
                icon: "👩‍🎨",
                title: "Expert Artists",
                desc: "Our certified beauty professionals bring years of experience and artistic vision.",
              },
              {
                icon: "💎",
                title: "Premium Experience",
                desc: "From the moment you walk in, experience luxury, comfort, and personalized attention.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  textAlign: "center",
                  padding: "2.5rem 2rem",
                  background: "#FFFFFF",
                  borderRadius: "1.25rem",
                  border: "1px solid rgba(0,0,0,0.04)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
                  transition: "all 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 16px 48px rgba(183, 110, 121, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.06)";
                }}
              >
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, rgba(183,110,121,0.1), rgba(74,14,46,0.1))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    margin: "0 auto 1.5rem",
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 600,
                    color: "#4A0E2E",
                    marginBottom: "0.75rem",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#6B6B6B", lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section
        id="testimonials-section"
        style={{
          padding: "clamp(3rem, 8vw, 6rem) 1.5rem",
          background: "#FFFFFF",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="section-label">Testimonials</span>
            <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
              What Our Clients Say
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                style={{
                  padding: "2rem",
                  borderRadius: "1.25rem",
                  background: "#FFF5EE",
                  border: "1px solid rgba(183,110,121,0.1)",
                  transition: "all 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(183, 110, 121, 0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Stars */}
                <div style={{ marginBottom: "1rem", fontSize: "1rem", color: "#D4AF37" }}>
                  {"★".repeat(t.rating)}
                </div>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#4A4A4A",
                    lineHeight: 1.8,
                    fontStyle: "italic",
                    marginBottom: "1.5rem",
                  }}
                >
                  "{t.text}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #D4A0A7, #B76E79)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.25rem",
                    }}
                  >
                    {t.avatar}
                  </span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.95rem", color: "#4A0E2E" }}>
                      {t.name}
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "#B76E79" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section
        id="cta-section"
        style={{
          padding: "clamp(3rem, 8vw, 5rem) 1.5rem",
          background:
            "linear-gradient(135deg, #4A0E2E 0%, #6B1D4A 50%, #B76E79 100%)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              color: "#FFFFFF",
              marginBottom: "1rem",
            }}
          >
            Ready to Begin Your Beauty Journey?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.8,
              marginBottom: "2rem",
            }}
          >
            Book your appointment today and let our experts bring out the best in you.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              to="/services"
              className="btn-primary"
              id="cta-book-btn"
              style={{
                background: "#FFFFFF",
                color: "#4A0E2E",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              }}
            >
              Book Now ✦
            </Link>
            <Link
              to="/contact"
              className="btn-secondary"
              id="cta-contact-btn"
              style={{ color: "#fff", borderColor: "rgba(255,255,255,0.5)" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;