import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: "/services", label: "Our Services" },
    { path: "/courses", label: "Beauty Courses" },
    { path: "/blog", label: "Beauty Blog" },
    { path: "/certificates", label: "Certificates" },
    { path: "/success-stories", label: "Success Stories" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" },
  ];

  const services = [
    "Skincare Treatments",
    "Hair Styling",
    "Bridal Makeup",
    "Nail Art & Care",
    "Beauty Courses",
  ];

  return (
    <footer
      id="site-footer"
      style={{
        background: "linear-gradient(135deg, #4A0E2E 0%, #2D1B2E 100%)",
        color: "#D4A0A7",
        paddingTop: "4rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        {/* Main Footer Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "3rem",
            paddingBottom: "3rem",
          }}
        >
          {/* Brand Column */}
          <div>
            <h3
              style={{
                fontSize: "1.75rem",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                color: "#FFF5EE",
                marginBottom: "1rem",
              }}
            >
              ✿ BeautyHub
            </h3>
            <p style={{ lineHeight: 1.8, fontSize: "0.9rem", color: "#D4A0A7" }}>
              Your trusted destination for premium beauty services, expert
              courses, and transformative self-care experiences.
            </p>
            {/* Social Icons */}
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem" }}>
              {["Facebook", "Instagram", "Twitter", "YouTube"].map((social) => (
                <a
                  key={social}
                  href={`https://${social.toLowerCase()}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "1px solid rgba(212, 160, 167, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#D4A0A7",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "#B76E79";
                    e.target.style.color = "#fff";
                    e.target.style.borderColor = "#B76E79";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "transparent";
                    e.target.style.color = "#D4A0A7";
                    e.target.style.borderColor = "rgba(212, 160, 167, 0.3)";
                  }}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "#FFF5EE",
                marginBottom: "1.25rem",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    style={{
                      fontSize: "0.9rem",
                      color: "#D4A0A7",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#FFF5EE";
                      e.target.style.paddingLeft = "8px";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#D4A0A7";
                      e.target.style.paddingLeft = "0";
                    }}
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "#FFF5EE",
                marginBottom: "1.25rem",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Our Services
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {services.map((service) => (
                <li key={service} style={{ fontSize: "0.9rem" }}>
                  ✦ {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "#FFF5EE",
                marginBottom: "1.25rem",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Get In Touch
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.9rem" }}>
              <p>📍 Kathmandu, Nepal</p>
              <p>📞 +977-9800000000</p>
              <p>✉️ info@beautyhub.com</p>
              <p>🕐 Sun - Fri: 9:00 AM - 7:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(212, 160, 167, 0.2)",
            padding: "1.5rem 0",
            textAlign: "center",
            fontSize: "0.85rem",
            color: "rgba(212, 160, 167, 0.7)",
          }}
        >
          <p>© {currentYear} BeautyHub. All rights reserved. Crafted with 💕</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
