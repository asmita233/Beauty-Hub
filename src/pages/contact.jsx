import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div style={{ paddingTop: "5rem", minHeight: "100vh" }}>
      {submitted && <div className="toast toast-success">Message sent successfully! We'll get back to you soon. 💌</div>}

      {/* Header */}
      <section style={{ padding: "4rem 1.5rem 3rem", background: "linear-gradient(135deg, #4A0E2E 0%, #6B1D4A 100%)", textAlign: "center" }}>
        <span style={{ display: "inline-block", padding: "0.4rem 1.2rem", background: "rgba(255,255,255,0.1)", borderRadius: "50px", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4A0A7", marginBottom: "1rem" }}>
          Get In Touch
        </span>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#FFFFFF", marginBottom: "1rem" }}>
          Contact Us
        </h1>
        <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.7)", maxWidth: "600px", margin: "0 auto" }}>
          Have questions or want to book a consultation? We'd love to hear from you.
        </p>
      </section>

      {/* Contact Content */}
      <section style={{ padding: "clamp(3rem, 8vw, 5rem) 1.5rem", background: "#FFF5EE" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "3rem" }}>
          {/* Contact Info */}
          <div>
            <h2 style={{ fontSize: "1.75rem", fontFamily: "'Playfair Display', serif", color: "#4A0E2E", marginBottom: "1rem" }}>
              Let's Connect
            </h2>
            <p style={{ fontSize: "0.95rem", color: "#6B6B6B", lineHeight: 1.8, marginBottom: "2rem" }}>
              Visit our parlour or reach out through any of the channels below. We're always happy to help with your beauty needs.
            </p>

            {[
              { icon: "📍", label: "Address", value: "Kathmandu, Nepal" },
              { icon: "📞", label: "Phone", value: "+977-9800000000" },
              { icon: "✉️", label: "Email", value: "info@beautyhub.com" },
              { icon: "🕐", label: "Hours", value: "Sun - Fri: 9 AM - 7 PM" },
            ].map((item, idx) => (
              <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.5rem" }}>
                <span style={{ width: "50px", height: "50px", borderRadius: "0.75rem", background: "rgba(183,110,121,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", flexShrink: 0 }}>
                  {item.icon}
                </span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#4A0E2E", marginBottom: "0.15rem" }}>{item.label}</div>
                  <div style={{ fontSize: "0.9rem", color: "#6B6B6B" }}>{item.value}</div>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div style={{ width: "100%", height: "200px", borderRadius: "1rem", background: "linear-gradient(135deg, rgba(183,110,121,0.1), rgba(74,14,46,0.1))", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1.5rem", border: "2px dashed rgba(183,110,121,0.2)" }}>
              <span style={{ color: "#B76E79", fontWeight: 500 }}>📍 Map — Kathmandu, Nepal</span>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ background: "#FFFFFF", borderRadius: "1.5rem", padding: "2.5rem", boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}>
            <h3 style={{ fontSize: "1.3rem", fontFamily: "'Playfair Display', serif", color: "#4A0E2E", marginBottom: "1.5rem" }}>
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Full name" className="form-input" required id="contact-name" />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className="form-input" required id="contact-email" />
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="How can we help?" className="form-input" id="contact-subject" />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us more..." className="form-textarea" required id="contact-message" />
              </div>
              <button type="submit" className="btn-primary" style={{ width: "100%" }} id="contact-submit">
                Send Message ✦
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
