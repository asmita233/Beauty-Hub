import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/courses", label: "Courses" },
    { path: "/blog", label: "Blog" },
    { path: "/about", label: "About" },
    { path: "/certificates", label: "Certificates" },
    { path: "/success-stories", label: "Success Stories" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      id="main-navigation"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? "0.75rem 0" : "1.25rem 0",
        background: scrolled
          ? "rgba(255, 245, 238, 0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : "none",
        transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          id="nav-logo"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              fontSize: "1.75rem",
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              background: "linear-gradient(135deg, #B76E79, #4A0E2E)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ✿ BeautyHub
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            listStyle: "none",
            gap: "0.25rem",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                id={`nav-link-${link.label.toLowerCase()}`}
                style={{
                  padding: "0.5rem 1rem",
                  borderRadius: "50px",
                  fontSize: "0.9rem",
                  fontWeight: isActive(link.path) ? 600 : 500,
                  color: isActive(link.path) ? "#B76E79" : "#4A4A4A",
                  background: isActive(link.path)
                    ? "rgba(183, 110, 121, 0.1)"
                    : "transparent",
                  transition: "all 0.3s ease",
                  display: "block",
                }}
                onMouseEnter={(e) => {
                  if (!isActive(link.path)) {
                    e.target.style.color = "#B76E79";
                    e.target.style.background = "rgba(183, 110, 121, 0.05)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(link.path)) {
                    e.target.style.color = "#4A4A4A";
                    e.target.style.background = "transparent";
                  }
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }} className="desktop-nav">
          <Link
            to="/my-bookings"
            id="nav-my-bookings"
            style={{
              padding: "0.6rem 1.25rem",
              borderRadius: "50px",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#B76E79",
              border: "2px solid #B76E79",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#B76E79";
              e.target.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "#B76E79";
            }}
          >
            My Bookings
          </Link>
          <Link
            to="/signin"
            id="nav-signin"
            style={{
              padding: "0.6rem 1.5rem",
              borderRadius: "50px",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#fff",
              background: "linear-gradient(135deg, #B76E79, #8E4A55)",
              boxShadow: "0 4px 15px rgba(183, 110, 121, 0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-1px)";
              e.target.style.boxShadow = "0 6px 20px rgba(183, 110, 121, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 15px rgba(183, 110, 121, 0.3)";
            }}
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-toggle"
          style={{
            display: "none",
            flexDirection: "column",
            gap: "5px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            zIndex: 1001,
          }}
          aria-label="Toggle menu"
        >
          <span
            style={{
              width: "24px",
              height: "2px",
              background: "#4A0E2E",
              borderRadius: "2px",
              transition: "all 0.3s",
              transform: isOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            }}
          />
          <span
            style={{
              width: "24px",
              height: "2px",
              background: "#4A0E2E",
              borderRadius: "2px",
              transition: "all 0.3s",
              opacity: isOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              width: "24px",
              height: "2px",
              background: "#4A0E2E",
              borderRadius: "2px",
              transition: "all 0.3s",
              transform: isOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          id="mobile-menu"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(255, 245, 238, 0.98)",
            backdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",
            animation: "fadeIn 0.3s ease-out",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                fontSize: "1.5rem",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                color: isActive(link.path) ? "#B76E79" : "#4A0E2E",
                padding: "0.5rem 2rem",
                transition: "color 0.3s",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <Link to="/my-bookings" className="btn-secondary" style={{ padding: "0.6rem 1.5rem" }}>
              My Bookings
            </Link>
            <Link to="/signin" className="btn-primary" style={{ padding: "0.6rem 1.5rem" }}>
              Sign In
            </Link>
          </div>
        </div>
      )}

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

export default Nav;
