import React, { useState, useEffect } from "react";
import { certificatesApi } from "../services/api";

const fallbackCertificates = [
  {
    id: 1,
    title: "Master of Makeup Artistry",
    issuedBy: "BeautyHub Academy",
    description: "Awarded for exceptional skill in bridal and editorial makeup techniques.",
    image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=600&q=80",
    date: "2024-12-15",
  },
  {
    id: 2,
    title: "Advanced Skincare Specialist",
    issuedBy: "International Beauty Institute",
    description: "Certification in advanced dermatological treatments and chemical peels.",
    image: "https://images.unsplash.com/photo-1606326666490-391110a503f6?w=600&q=80",
    date: "2024-11-20",
  },
  {
    id: 3,
    title: "Professional Hair Stylist",
    issuedBy: "Global Style Academy",
    description: "Certified in creative cutting, coloring, and chemical hair treatments.",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&q=80",
    date: "2024-10-05",
  },
];

const CertificatesPage = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await certificatesApi.getAll();
        if (response.data && response.data.length > 0) {
          setCertificates(response.data);
        } else {
          setCertificates(fallbackCertificates);
        }
      } catch {
        setCertificates(fallbackCertificates);
      } finally {
        setLoading(false);
      }
    };
    fetchCertificates();
  }, []);

  return (
    <div style={{ paddingTop: "5rem", minHeight: "100vh", background: "#FFF5EE" }}>
      {/* Header */}
      <section
        style={{
          padding: "4rem 1.5rem 3rem",
          background: "linear-gradient(135deg, #4A0E2E 0%, #6B1D4A 100%)",
          textAlign: "center",
        }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "0.4rem 1.2rem",
            background: "rgba(255,255,255,0.1)",
            borderRadius: "50px",
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#D4A0A7",
            marginBottom: "1rem",
          }}
        >
          Our Achievements
        </span>
        <h1
          style={{
            fontSize: "clamp(2rem, 4vw, 3.25rem)",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            color: "#FFFFFF",
            marginBottom: "1rem",
          }}
        >
          Certifications
        </h1>
        <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.7)", maxWidth: "600px", margin: "0 auto" }}>
          We are proud of our professional recognitions and the high standards we maintain in the beauty industry.
        </p>
      </section>

      {/* Certificates Grid */}
      <section style={{ padding: "clamp(3rem, 8vw, 6rem) 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {loading ? (
            <div className="page-loader">
              <div className="spinner" />
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "2rem",
              }}
            >
              {certificates.map((cert, idx) => (
                <div
                  key={cert.id || idx}
                  className="card"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${idx * 0.15}s both`,
                    padding: "1rem",
                    background: "#fff",
                    border: "1px solid rgba(183,110,121,0.2)",
                  }}
                >
                  <div style={{ overflow: "hidden", borderRadius: "0.75rem", position: "relative" }}>
                    <img
                      src={cert.image || cert.imageUrl || "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=600&q=80"}
                      alt={cert.title}
                      style={{ width: "100%", height: "250px", objectFit: "cover" }}
                      loading="lazy"
                    />
                    <div style={{ position: "absolute", bottom: "1rem", right: "1rem", background: "rgba(183, 110, 121, 0.9)", color: "#fff", padding: "0.25rem 0.75rem", borderRadius: "50px", fontSize: "0.75rem", fontWeight: 600 }}>
                      Verified
                    </div>
                  </div>
                  <div style={{ padding: "1.25rem 0.5rem" }}>
                    <h3 style={{ fontSize: "1.2rem", fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#4A0E2E", marginBottom: "0.5rem" }}>
                      {cert.title}
                    </h3>
                    <p style={{ fontSize: "0.85rem", color: "#B76E79", fontWeight: 600, marginBottom: "0.75rem" }}>
                      {cert.issuedBy} • {cert.date}
                    </p>
                    <p style={{ fontSize: "0.9rem", color: "#6B6B6B", lineHeight: 1.6 }}>
                      {cert.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CertificatesPage;
