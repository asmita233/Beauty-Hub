import React, { useState } from "react";
import { bookingsApi } from "../services/api";

const MyBookings = () => {
  const [clientName, setClientName] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceBookings, setServiceBookings] = useState([]);
  const [courseBookings, setCourseBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [toast, setToast] = useState(null);
  const [activeTab, setActiveTab] = useState("services");

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!clientName || !phone) {
      showToast("Please enter your name and phone number", "error");
      return;
    }

    setLoading(true);
    setSearched(true);

    try {
      const [svcRes, crsRes] = await Promise.allSettled([
        bookingsApi.getMyServiceBookings(clientName, phone),
        bookingsApi.getMyCourseBookings(clientName, phone),
      ]);
      setServiceBookings(svcRes.status === "fulfilled" ? svcRes.value.data || [] : []);
      setCourseBookings(crsRes.status === "fulfilled" ? crsRes.value.data || [] : []);
    } catch {
      // Fallback to localStorage
      const localSvc = JSON.parse(localStorage.getItem("serviceBookings") || "[]")
        .filter((b) => b.clientName === clientName && b.phone === phone);
      const localCrs = JSON.parse(localStorage.getItem("courseBookings") || "[]")
        .filter((b) => b.clientName === clientName && b.phone === phone);
      setServiceBookings(localSvc);
      setCourseBookings(localCrs);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async (type, id) => {
    if (!confirm("Are you sure you want to cancel this booking?")) return;
    try {
      if (type === "service") {
        await bookingsApi.cancelService(id);
      } else {
        await bookingsApi.cancelCourse(id);
      }
      showToast("Booking cancelled successfully");
      handleSearch({ preventDefault: () => {} });
    } catch {
      showToast("Cancelled locally", "success");
      if (type === "service") {
        const updated = serviceBookings.filter((b) => b.id !== id);
        setServiceBookings(updated);
        localStorage.setItem("serviceBookings", JSON.stringify(updated));
      } else {
        const updated = courseBookings.filter((b) => b.id !== id);
        setCourseBookings(updated);
        localStorage.setItem("courseBookings", JSON.stringify(updated));
      }
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toUpperCase()) {
      case "CONFIRMED": return { bg: "#D4EDDA", color: "#155724" };
      case "COMPLETED": return { bg: "#CCE5FF", color: "#004085" };
      case "CANCELLED": return { bg: "#F8D7DA", color: "#721C24" };
      default: return { bg: "#FFF3CD", color: "#856404" };
    }
  };

  return (
    <div style={{ paddingTop: "5rem", minHeight: "100vh", background: "#FFF5EE" }}>
      {toast && <div className={`toast toast-${toast.type}`}>{toast.message}</div>}

      {/* Header */}
      <section style={{ padding: "4rem 1.5rem 3rem", background: "linear-gradient(135deg, #4A0E2E 0%, #6B1D4A 100%)", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.5rem" }}>
          My Bookings
        </h1>
        <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.7)" }}>
          Track your service and course bookings
        </p>
      </section>

      {/* Search Form */}
      <section style={{ padding: "2.5rem 1.5rem 1rem" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", background: "#FFFFFF", borderRadius: "1.5rem", padding: "2rem", boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}>
          <form onSubmit={handleSearch}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Your Name</label>
                <input type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder="Full name" className="form-input" required id="booking-search-name" />
              </div>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Phone Number</label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+977-98..." className="form-input" required id="booking-search-phone" />
              </div>
            </div>
            <button type="submit" className="btn-primary" disabled={loading} id="booking-search-btn" style={{ width: "100%", marginTop: "1.25rem" }}>
              {loading ? "Searching..." : "Find My Bookings 🔍"}
            </button>
          </form>
        </div>
      </section>

      {/* Results */}
      {searched && (
        <section style={{ padding: "1.5rem 1.5rem 4rem" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            {/* Tabs */}
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", justifyContent: "center" }}>
              <button
                onClick={() => setActiveTab("services")}
                id="tab-services"
                style={{
                  padding: "0.6rem 1.5rem",
                  borderRadius: "50px",
                  border: "none",
                  background: activeTab === "services" ? "linear-gradient(135deg, #B76E79, #8E4A55)" : "#FFFFFF",
                  color: activeTab === "services" ? "#fff" : "#4A4A4A",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                🧖 Services ({serviceBookings.length})
              </button>
              <button
                onClick={() => setActiveTab("courses")}
                id="tab-courses"
                style={{
                  padding: "0.6rem 1.5rem",
                  borderRadius: "50px",
                  border: "none",
                  background: activeTab === "courses" ? "linear-gradient(135deg, #B76E79, #8E4A55)" : "#FFFFFF",
                  color: activeTab === "courses" ? "#fff" : "#4A4A4A",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                🎓 Courses ({courseBookings.length})
              </button>
            </div>

            {/* Booking Cards */}
            {activeTab === "services" && (
              serviceBookings.length === 0 ? (
                <div style={{ textAlign: "center", padding: "3rem", background: "#fff", borderRadius: "1rem" }}>
                  <p style={{ fontSize: "3rem", marginBottom: "1rem" }}>🧖‍♀️</p>
                  <p style={{ color: "#999" }}>No service bookings found</p>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {serviceBookings.map((booking, idx) => {
                    const statusStyle = getStatusColor(booking.status);
                    return (
                      <div key={booking.id || idx} style={{ background: "#fff", borderRadius: "1rem", padding: "1.5rem", boxShadow: "0 4px 16px rgba(0,0,0,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                        <div>
                          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "#4A0E2E", marginBottom: "0.25rem" }}>
                            {booking.serviceName || booking.service?.name || "Beauty Service"}
                          </h3>
                          <p style={{ fontSize: "0.85rem", color: "#999" }}>
                            {booking.preferredDate || booking.createdAt?.split("T")[0] || "N/A"} {booking.preferredTime && `at ${booking.preferredTime}`}
                          </p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                          <span style={{ padding: "0.3rem 0.8rem", borderRadius: "50px", fontSize: "0.75rem", fontWeight: 600, background: statusStyle.bg, color: statusStyle.color }}>
                            {booking.status || "PENDING"}
                          </span>
                          {(booking.status || "PENDING") !== "CANCELLED" && (
                            <button onClick={() => handleCancel("service", booking.id)} style={{ padding: "0.3rem 0.8rem", borderRadius: "50px", border: "1px solid #DC3545", background: "transparent", color: "#DC3545", fontSize: "0.75rem", fontWeight: 600, cursor: "pointer" }}>
                              Cancel
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )
            )}

            {activeTab === "courses" && (
              courseBookings.length === 0 ? (
                <div style={{ textAlign: "center", padding: "3rem", background: "#fff", borderRadius: "1rem" }}>
                  <p style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎓</p>
                  <p style={{ color: "#999" }}>No course enrollments found</p>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {courseBookings.map((booking, idx) => {
                    const statusStyle = getStatusColor(booking.status);
                    return (
                      <div key={booking.id || idx} style={{ background: "#fff", borderRadius: "1rem", padding: "1.5rem", boxShadow: "0 4px 16px rgba(0,0,0,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                        <div>
                          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "#4A0E2E", marginBottom: "0.25rem" }}>
                            {booking.courseName || booking.course?.name || "Beauty Course"}
                          </h3>
                          <p style={{ fontSize: "0.85rem", color: "#999" }}>
                            Enrolled: {booking.createdAt?.split("T")[0] || "N/A"}
                          </p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                          <span style={{ padding: "0.3rem 0.8rem", borderRadius: "50px", fontSize: "0.75rem", fontWeight: 600, background: statusStyle.bg, color: statusStyle.color }}>
                            {booking.status || "PENDING"}
                          </span>
                          {(booking.status || "PENDING") !== "CANCELLED" && (
                            <button onClick={() => handleCancel("course", booking.id)} style={{ padding: "0.3rem 0.8rem", borderRadius: "50px", border: "1px solid #DC3545", background: "transparent", color: "#DC3545", fontSize: "0.75rem", fontWeight: 600, cursor: "pointer" }}>
                              Cancel
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default MyBookings;
