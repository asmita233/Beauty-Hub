import React from "react";
import { Link } from "react-router-dom";

const teamMembers = [
  { name: "Anita Gurung", role: "Founder & Lead Stylist", emoji: "👩‍🎨", exp: "15 years" },
  { name: "Priya Shrestha", role: "Skincare Specialist", emoji: "👩‍⚕️", exp: "10 years" },
  { name: "Kavita Thapa", role: "Makeup Artist", emoji: "💄", exp: "8 years" },
  { name: "Suman Rai", role: "Hair Colorist", emoji: "🎨", exp: "12 years" },
];

const milestones = [
  { year: "2010", title: "Founded", desc: "BeautyHub started as a small parlour in Kathmandu." },
  { year: "2015", title: "Academy Launched", desc: "Opened our beauty training academy for aspiring professionals." },
  { year: "2020", title: "500+ Graduates", desc: "Over 500 students graduated from our professional courses." },
  { year: "2025", title: "Digital Expansion", desc: "Launched our online booking platform and expanded services." },
];

const About = () => {
  return (
    <div style={{ paddingTop: "5rem" }}>
      {/* Header */}
      <section style={{ padding: "4rem 1.5rem 3rem", background: "linear-gradient(135deg, #4A0E2E 0%, #6B1D4A 100%)", textAlign: "center" }}>
        <span style={{ display: "inline-block", padding: "0.4rem 1.2rem", background: "rgba(255,255,255,0.1)", borderRadius: "50px", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4A0A7", marginBottom: "1rem" }}>
          Our Story
        </span>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#FFFFFF", marginBottom: "1rem" }}>
          About BeautyHub
        </h1>
        <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.7)", maxWidth: "600px", margin: "0 auto" }}>
          More than a parlour — we're a community dedicated to celebrating beauty, confidence, and self-expression.
        </p>
      </section>

      {/* Mission */}
      <section style={{ padding: "clamp(3rem, 8vw, 5rem) 1.5rem", background: "#FFF5EE" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: "2rem", fontFamily: "'Playfair Display', serif", color: "#4A0E2E", marginBottom: "1rem" }}>
              Our Mission
            </h2>
            <p style={{ fontSize: "0.95rem", color: "#6B6B6B", lineHeight: 1.9, marginBottom: "1rem" }}>
              At <strong style={{ color: "#B76E79" }}>BeautyHub</strong>, we believe that beauty is more than skin deep. Our mission is to provide high-quality, cruelty-free beauty services and education that empower everyone to feel confident and beautiful in their own skin.
            </p>
            <p style={{ fontSize: "0.95rem", color: "#6B6B6B", lineHeight: 1.9 }}>
              From beginners to professionals, our expert team and comprehensive courses are designed to inspire creativity and boost confidence every day.
            </p>
          </div>
          <div style={{ borderRadius: "1.5rem", overflow: "hidden", boxShadow: "0 12px 40px rgba(0,0,0,0.1)" }}>
            <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80" alt="BeautyHub salon interior" style={{ width: "100%", height: "350px", objectFit: "cover" }} loading="lazy" />
          </div>
        </div>
      </section>

      {/* Our Promises */}
      <section style={{ padding: "clamp(3rem, 8vw, 5rem) 1.5rem", background: "#FFFFFF" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Our Values</span>
            <h2 className="section-title" style={{ marginTop: "0.75rem" }}>The BeautyHub Promise</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
            {[
              { icon: "🌿", title: "Quality First", desc: "Safe, skin-friendly ingredients in every product." },
              { icon: "🐰", title: "Cruelty-Free", desc: "No animal testing, ever. Period." },
              { icon: "🌈", title: "Inclusive Beauty", desc: "Shades and services for every skin tone." },
              { icon: "💰", title: "Affordable Luxury", desc: "Premium quality without the premium price." },
            ].map((item, idx) => (
              <div key={idx} style={{ textAlign: "center", padding: "2rem 1.5rem", borderRadius: "1rem", background: "#FFF5EE", transition: "all 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(183,110,121,0.12)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "#4A0E2E", marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "#6B6B6B", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: "clamp(3rem, 8vw, 5rem) 1.5rem", background: "#FFF5EE" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Meet The Team</span>
            <h2 className="section-title" style={{ marginTop: "0.75rem" }}>Expert Beauty Artists</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {teamMembers.map((member, idx) => (
              <div key={idx} style={{ textAlign: "center", padding: "2rem 1.5rem", background: "#FFFFFF", borderRadius: "1.25rem", boxShadow: "0 8px 24px rgba(0,0,0,0.05)", transition: "all 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "linear-gradient(135deg, #D4A0A7, #B76E79)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", margin: "0 auto 1rem" }}>
                  {member.emoji}
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "#4A0E2E", marginBottom: "0.25rem" }}>{member.name}</h3>
                <p style={{ fontSize: "0.8rem", color: "#B76E79", fontWeight: 600, marginBottom: "0.25rem" }}>{member.role}</p>
                <p style={{ fontSize: "0.8rem", color: "#999" }}>{member.exp} experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: "clamp(3rem, 8vw, 5rem) 1.5rem", background: "#FFFFFF" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Our Journey</span>
            <h2 className="section-title" style={{ marginTop: "0.75rem" }}>Milestones</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {milestones.map((m, idx) => (
              <div key={idx} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "linear-gradient(135deg, #B76E79, #4A0E2E)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.85rem", flexShrink: 0 }}>
                  {m.year}
                </div>
                <div style={{ paddingTop: "0.5rem" }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "#4A0E2E", marginBottom: "0.25rem" }}>{m.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "#6B6B6B", lineHeight: 1.7 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "4rem 1.5rem", background: "linear-gradient(135deg, #4A0E2E 0%, #B76E79 100%)", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontFamily: "'Playfair Display', serif", color: "#fff", marginBottom: "1.5rem" }}>
          Ready to Experience BeautyHub?
        </h2>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/services" className="btn-primary" style={{ background: "#fff", color: "#4A0E2E" }}>Explore Services</Link>
          <Link to="/courses" className="btn-secondary" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.5)" }}>View Courses</Link>
        </div>
      </section>
    </div>
  );
};

export default About;
