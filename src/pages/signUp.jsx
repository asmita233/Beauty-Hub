import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "", confirmPassword: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setError("Please fill in all required fields");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    localStorage.setItem("user", JSON.stringify({ name: form.name, email: form.email, phone: form.phone }));
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1000);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #4A0E2E 0%, #6B1D4A 40%, #B76E79 100%)",
        padding: "1.5rem",
        paddingTop: "5rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "440px",
          background: "#FFFFFF",
          borderRadius: "1.75rem",
          padding: "2.5rem",
          boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
          animation: "fadeInUp 0.6s ease-out",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <span style={{ fontSize: "2rem" }}>✿</span>
          <h1 style={{ fontSize: "1.75rem", fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#4A0E2E", marginTop: "0.5rem" }}>
            Create Account
          </h1>
          <p style={{ fontSize: "0.9rem", color: "#999", marginTop: "0.25rem" }}>
            Join BeautyHub and start your beauty journey
          </p>
        </div>

        {error && (
          <div style={{ padding: "0.75rem 1rem", background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: "0.75rem", color: "#DC2626", fontSize: "0.85rem", marginBottom: "1.25rem", textAlign: "center" }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name *</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" className="form-input" required id="signup-name" />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address *</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className="form-input" required id="signup-email" />
          </div>

          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+977-9800000000" className="form-input" id="signup-phone" />
          </div>

          <div className="form-group">
            <label className="form-label">Password *</label>
            <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Min. 6 characters" className="form-input" required id="signup-password" />
          </div>

          <div className="form-group">
            <label className="form-label">Confirm Password *</label>
            <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="Re-enter password" className="form-input" required id="signup-confirm" />
          </div>

          <button type="submit" className="btn-primary" disabled={loading} id="signup-submit" style={{ width: "100%", marginTop: "0.5rem", padding: "1rem", fontSize: "1rem", opacity: loading ? 0.7 : 1 }}>
            {loading ? "Creating Account..." : "Sign Up ✦"}
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "1.5rem", fontSize: "0.9rem", color: "#999" }}>
          Already have an account?{" "}
          <Link to="/signin" style={{ color: "#B76E79", fontWeight: 600 }}>Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
