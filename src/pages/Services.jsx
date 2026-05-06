import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { servicesApi } from "../services/api";

// Fallback data when backend is not available
const fallbackServices = [
  {
    id: 1,
    name: "Skincare Treatments",
    price: 40,
    durationMinutes: 60,
    description: "Deep cleansing facials, hydration therapy, and acne solutions tailored to your skin type.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    category: "Skincare",
  },
  {
    id: 2,
    name: "Haircare & Styling",
    price: 30,
    durationMinutes: 45,
    description: "Hair spa, cut, color, and styling services using premium products and techniques.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80",
    category: "Hair",
  },
  {
    id: 3,
    name: "Bridal Makeup",
    price: 150,
    durationMinutes: 120,
    description: "Complete bridal look with professional makeup, hairstyling, and beauty treatments.",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
    category: "Makeup",
  },
  {
    id: 4,
    name: "Nail Art & Care",
    price: 25,
    durationMinutes: 45,
    description: "Manicure, pedicure, gel polish, and custom nail art with long-lasting finish.",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
    category: "Nails",
  },
  {
    id: 5,
    name: "Body Spa & Massage",
    price: 60,
    durationMinutes: 90,
    description: "Full body relaxation massage with aromatherapy oils for complete rejuvenation.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80",
    category: "Body",
  },
  {
    id: 6,
    name: "Eyebrow & Lash Treatment",
    price: 20,
    durationMinutes: 30,
    description: "Eyebrow threading, tinting, lash extensions and lash lifts for a defined look.",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80",
    category: "Face",
  },
];

const categories = ["All", "Skincare", "Hair", "Makeup", "Nails", "Body", "Face"];

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await servicesApi.getAll();
        if (response.data && response.data.length > 0) {
          setServices(response.data);
        } else {
          setServices(fallbackServices);
        }
      } catch {
        // Backend not running, use fallback
        setServices(fallbackServices);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <div style={{ paddingTop: "5rem" }}>
      {/* Page Header */}
      <section
        id="services-header"
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
          Our Services
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
          Beauty Services
        </h1>
        <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.7)", maxWidth: "600px", margin: "0 auto" }}>
          Explore our complete range of beauty treatments designed to pamper and rejuvenate you.
        </p>
      </section>

      {/* Category Filter */}
      <section
        style={{
          padding: "2rem 1.5rem 0",
          background: "#FFF5EE",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-${cat.toLowerCase()}`}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "0.5rem 1.5rem",
                borderRadius: "50px",
                border: activeCategory === cat ? "none" : "2px solid rgba(0,0,0,0.1)",
                background: activeCategory === cat
                  ? "linear-gradient(135deg, #B76E79, #8E4A55)"
                  : "transparent",
                color: activeCategory === cat ? "#fff" : "#4A4A4A",
                fontWeight: 600,
                fontSize: "0.85rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section
        id="services-grid"
        style={{
          padding: "2.5rem 1.5rem clamp(3rem, 8vw, 6rem)",
          background: "#FFF5EE",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {loading ? (
            <div className="page-loader">
              <div className="spinner" />
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {filteredServices.map((service, idx) => (
                <div
                  key={service.id || idx}
                  className="card"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s both`,
                  }}
                >
                  <div style={{ overflow: "hidden", position: "relative" }}>
                    <img
                      src={
                        service.image ||
                        service.imageUrl ||
                        `https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80`
                      }
                      alt={service.name || service.title}
                      className="card-image"
                      loading="lazy"
                    />
                    {/* Price Badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: "1rem",
                        right: "1rem",
                        padding: "0.4rem 1rem",
                        background: "rgba(74, 14, 46, 0.85)",
                        backdropFilter: "blur(10px)",
                        color: "#FFD4D4",
                        borderRadius: "50px",
                        fontSize: "0.85rem",
                        fontWeight: 700,
                      }}
                    >
                      ${service.price || "N/A"}
                    </div>
                  </div>
                  <div className="card-body">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {service.category && (
                        <span
                          style={{
                            padding: "0.2rem 0.75rem",
                            background: "rgba(183, 110, 121, 0.1)",
                            borderRadius: "50px",
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            color: "#B76E79",
                          }}
                        >
                          {service.category}
                        </span>
                      )}
                      {service.durationMinutes && (
                        <span style={{ fontSize: "0.8rem", color: "#999" }}>
                          🕐 {service.durationMinutes} min
                        </span>
                      )}
                    </div>
                    <h3
                      style={{
                        fontSize: "1.15rem",
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 600,
                        color: "#4A0E2E",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {service.name || service.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.88rem",
                        color: "#6B6B6B",
                        lineHeight: 1.7,
                        marginBottom: "1.25rem",
                      }}
                    >
                      {service.description}
                    </p>
                    <Link
                      to={`/book-service?serviceId=${service.id}&name=${encodeURIComponent(service.name || service.title)}&price=${service.price}`}
                      className="btn-primary"
                      style={{ width: "100%", fontSize: "0.85rem", padding: "0.7rem" }}
                    >
                      Book Now →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && filteredServices.length === 0 && (
            <div style={{ textAlign: "center", padding: "4rem 0", color: "#999" }}>
              <p style={{ fontSize: "1.1rem" }}>No services found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
