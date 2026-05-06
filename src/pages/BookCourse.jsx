import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { bookingsApi } from "../services/api";

const BookCourse = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const courseName = searchParams.get("name") || "Beauty Course";
  const coursePrice = searchParams.get("price") || "";
  const courseId = searchParams.get("courseId") || "";

  const [form, setForm] = useState({
    clientName: "",
    phone: "",
    email: "",
    education: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.clientName || !form.phone) {
      showToast("Please fill in all required fields", "error");
      return;
    }

    setLoading(true);
    try {
      await bookingsApi.bookCourse({
        courseId,
        clientName: form.clientName,
        phone: form.phone,
        email: form.email,
        education: form.education,
        notes: form.notes,
      });
      showToast("Course enrollment successful! 🎉");
      setTimeout(() => navigate("/my-bookings"), 2000);
    } catch {
      showToast("Enrollment saved locally. Connect backend to sync.", "success");
      const bookings = JSON.parse(localStorage.getItem("courseBookings") || "[]");
      bookings.push({ ...form, courseName, coursePrice, id: Date.now(), status: "PENDING", createdAt: new Date().toISOString() });
      localStorage.setItem("courseBookings", JSON.stringify(bookings));
      setTimeout(() => navigate("/my-bookings"), 2000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ paddingTop: "5rem", minHeight: "100vh", background: "#FFF5EE" }}>
      {toast && <div className={`toast toast-${toast.type}`}>{toast.message}</div>}

      <section
        style={{
          padding: "4rem 1.5rem 3rem",
          background: "linear-gradient(135deg, #4A0E2E 0%, #6B1D4A 100%)",
          textAlign: "center",
        }}
      >
        <span style={{ display: "inline-block", padding: "0.4rem 1.2rem", background: "rgba(212,175,55,0.2)", borderRadius: "50px", fontSize: "0.8rem", fontWeight: 600, color: "#F0D68A", marginBottom: "1rem" }}>
          🎓 Course Enrollment
        </span>
        <h1 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.5rem" }}>
          {courseName}
        </h1>
        {coursePrice && (
          <p style={{ fontSize: "1.25rem", color: "#D4A0A7", fontWeight: 600 }}>Course Fee: ${coursePrice}</p>
        )}
      </section>

      <section style={{ padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", background: "#FFFFFF", borderRadius: "1.5rem", padding: "2.5rem", boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}>
          <h2 style={{ fontSize: "1.5rem", fontFamily: "'Playfair Display', serif", color: "#4A0E2E", marginBottom: "0.5rem" }}>
            Enrollment Form
          </h2>
          <p style={{ fontSize: "0.9rem", color: "#999", marginBottom: "2rem" }}>
            Join our professional beauty course and kickstart your career.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input type="text" name="clientName" value={form.clientName} onChange={handleChange} placeholder="Enter your full name" className="form-input" required id="book-course-name" />
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number *</label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+977-9800000000" className="form-input" required id="book-course-phone" />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className="form-input" id="book-course-email" />
            </div>

            <div className="form-group">
              <label className="form-label">Education Background</label>
              <select name="education" value={form.education} onChange={handleChange} className="form-input" id="book-course-education">
                <option value="">Select your education level</option>
                <option value="SLC">SLC / SEE</option>
                <option value="Plus2">+2 / Intermediate</option>
                <option value="Bachelors">Bachelor's Degree</option>
                <option value="Masters">Master's Degree</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Why do you want to join? (Optional)</label>
              <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Tell us about your motivation..." className="form-textarea" id="book-course-notes" />
            </div>

            <button type="submit" className="btn-primary" disabled={loading} id="book-course-submit" style={{ width: "100%", marginTop: "0.5rem", opacity: loading ? 0.7 : 1 }}>
              {loading ? "Enrolling..." : "Confirm Enrollment 🎓"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BookCourse;
