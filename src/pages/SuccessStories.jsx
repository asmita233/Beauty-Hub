import React, { useState, useEffect } from "react";
import { successStudentsApi } from "../services/api";

const fallbackStudents = [
  {
    id: 1,
    name: "Maya Adhikari",
    course: "Professional Makeup Artistry",
    achievement: "Started 'Maya Beauty Studio'",
    story: "Maya transformed her passion into a thriving business in Pokhara after completing our 3-month masterclass.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
    year: "2023",
  },
  {
    id: 2,
    name: "Rohan Tamang",
    course: "Advanced Hair Styling",
    achievement: "Senior Stylist at Hotel Yak & Yeti",
    story: "Rohan's creative hair coloring skills landed him a prestigious role at one of Nepal's top luxury hotels.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    year: "2022",
  },
  {
    id: 3,
    name: "Sophiya Rai",
    course: "Skincare Specialist Program",
    achievement: "Certified Medical Aesthetician",
    story: "Sophiya now works closely with dermatologists, providing clinical-grade facial treatments.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
    year: "2024",
  },
];

const SuccessStoriesPage = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await successStudentsApi.getAll();
        if (response.data && response.data.length > 0) {
          setStudents(response.data);
        } else {
          setStudents(fallbackStudents);
        }
      } catch {
        setStudents(fallbackStudents);
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
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
          Our Graduates
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
          Success Stories
        </h1>
        <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.7)", maxWidth: "600px", margin: "0 auto" }}>
          Meet the talented individuals who have built successful careers after training with BeautyHub.
        </p>
      </section>

      {/* Stories Grid */}
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
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "2.5rem",
              }}
            >
              {students.map((student, idx) => (
                <div
                  key={student.id || idx}
                  style={{
                    background: "#fff",
                    borderRadius: "1.5rem",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 12px 32px rgba(0,0,0,0.06)",
                    border: "1px solid rgba(0,0,0,0.04)",
                    animation: `fadeInUp 0.6s ease-out ${idx * 0.2}s both`,
                  }}
                >
                  <div style={{ position: "relative", height: "300px", overflow: "hidden" }}>
                    <img
                      src={student.image || student.imageUrl || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80"}
                      alt={student.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <div style={{ position: "absolute", top: "1rem", left: "1rem", background: "rgba(74, 14, 46, 0.8)", color: "#fff", padding: "0.4rem 1rem", borderRadius: "50px", fontSize: "0.8rem", fontWeight: 600 }}>
                      Class of {student.year}
                    </div>
                  </div>
                  <div style={{ padding: "2rem" }}>
                    <h3 style={{ fontSize: "1.4rem", fontFamily: "'Playfair Display', serif", color: "#4A0E2E", marginBottom: "0.25rem" }}>
                      {student.name}
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "#B76E79", fontWeight: 700, marginBottom: "1rem" }}>
                      {student.course}
                    </p>
                    <div style={{ background: "rgba(183, 110, 121, 0.05)", padding: "1rem", borderRadius: "0.75rem", marginBottom: "1.25rem", borderLeft: "4px solid #B76E79" }}>
                      <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "#4A0E2E" }}>
                        🏆 {student.achievement}
                      </p>
                    </div>
                    <p style={{ fontSize: "0.95rem", color: "#6B6B6B", lineHeight: 1.8, fontStyle: "italic" }}>
                      "{student.story}"
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

export default SuccessStoriesPage;
