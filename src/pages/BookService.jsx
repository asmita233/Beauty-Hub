import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { bookingsApi } from "../services/api";

const BookService = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const serviceName = searchParams.get("name") || "Beauty Service";
  const servicePrice = searchParams.get("price") || "";
  const serviceId = searchParams.get("serviceId") || "";

  const [form, setForm] = useState({
    clientName: "",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: "",
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
      await bookingsApi.bookService({
        serviceId,
        clientName: form.clientName,
        phone: form.phone,
        email: form.email,
        preferredDate: form.preferredDate,
        preferredTime: form.preferredTime,
        notes: form.notes,
      });
      showToast("Service booked successfully! 🎉");
      setTimeout(() => navigate("/my-bookings"), 2000);
    } catch (err) {
      showToast("Booking saved locally. Connect backend to sync.", "success");
      // Store locally as fallback
      const bookings = JSON.parse(localStorage.getItem("serviceBookings") || "[]");
      bookings.push({ ...form, serviceName, servicePrice, id: Date.now(), status: "PENDING", createdAt: new Date().toISOString() });
      localStorage.setItem("serviceBookings", JSON.stringify(bookings));
      setTimeout(() => navigate("/my-bookings"), 2000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ paddingTop: "5rem", minHeight: "100vh", background: "#FFF5EE" }}>
      {/* Toast */}
      {toast && (
        <div className={`toast toast-${toast.type}`}>{toast.message}</div>
      )}

      {/* Header */}
      <section
        style={{
          padding: "4rem 1.5rem 3rem",
          background: "linear-gradient(135deg, #4A0E2E 0%, #6B1D4A 100%)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            color: "#FFFFFF",
            marginBottom: "0.5rem",
          }}
        >
          Book: {serviceName}
        </h1>
        {servicePrice && (
          <p style={{ fontSize: "1.25rem", color: "#D4A0A7", fontWeight: 600 }}>
            Starting from ${servicePrice}
          </p>
        )}
      </section>

      {/* Booking Form */}
      <section style={{ padding: "3rem 1.5rem" }}>
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            background: "#FFFFFF",
            borderRadius: "1.5rem",
            padding: "2.5rem",
            boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontFamily: "'Playfair Display', serif",
              color: "#4A0E2E",
              marginBottom: "0.5rem",
            }}
          >
            Appointment Details
          </h2>
          <p style={{ fontSize: "0.9rem", color: "#999", marginBottom: "2rem" }}>
            Fill in your details and we'll confirm your booking shortly.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                name="clientName"
                value={form.clientName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="form-input"
                required
                id="book-service-name"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+977-9800000000"
                className="form-input"
                required
                id="book-service-phone"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="form-input"
                id="book-service-email"
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div className="form-group">
                <label className="form-label">Preferred Date</label>
                <input
                  type="date"
                  name="preferredDate"
                  value={form.preferredDate}
                  onChange={handleChange}
                  className="form-input"
                  id="book-service-date"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Preferred Time</label>
                <input
                  type="time"
                  name="preferredTime"
                  value={form.preferredTime}
                  onChange={handleChange}
                  className="form-input"
                  id="book-service-time"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Special Notes</label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                placeholder="Any allergies, preferences, or special requests..."
                className="form-textarea"
                id="book-service-notes"
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              disabled={loading}
              id="book-service-submit"
              style={{ width: "100%", marginTop: "0.5rem", opacity: loading ? 0.7 : 1 }}
            >
              {loading ? "Booking..." : "Confirm Booking ✦"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BookService;
