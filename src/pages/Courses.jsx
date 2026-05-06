import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { coursesApi } from "../services/api";

const fallbackCourses = [
  {
    id: 1,
    name: "Professional Makeup Artistry",
    price: 500,
    durationWeeks: 12,
    description: "Comprehensive course covering bridal, editorial, and special effects makeup techniques.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80",
    level: "Beginner to Advanced",
  },
  {
    id: 2,
    name: "Advanced Hair Styling",
    price: 400,
    durationWeeks: 8,
    description: "Master cutting, coloring, perming, and trending hairstyle techniques.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80",
    level: "Intermediate",
  },
  {
    id: 3,
    name: "Skincare Specialist Program",
    price: 350,
    durationWeeks: 6,
    description: "Learn facial treatments, chemical peels, microdermabrasion, and skin analysis.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    level: "Beginner",
  },
  {
    id: 4,
    name: "Nail Art Masterclass",
    price: 250,
    durationWeeks: 4,
    description: "From basic manicure to advanced gel extensions and intricate nail art designs.",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
    level: "All Levels",
  },
];

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await coursesApi.getAll();
        if (response.data && response.data.length > 0) {
          setCourses(response.data);
        } else {
          setCourses(fallbackCourses);
        }
      } catch {
        setCourses(fallbackCourses);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div style={{ paddingTop: "5rem" }}>
      {/* Page Header */}
      <section
        id="courses-header"
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
          Learn & Grow
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
          Beauty Courses
        </h1>
        <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.7)", maxWidth: "600px", margin: "0 auto" }}>
          Transform your passion into a profession with our expert-led beauty courses and certifications.
        </p>
      </section>

      {/* Courses Grid */}
      <section
        id="courses-grid"
        style={{
          padding: "clamp(3rem, 8vw, 6rem) 1.5rem",
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
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "2rem",
              }}
            >
              {courses.map((course, idx) => (
                <div
                  key={course.id || idx}
                  style={{
                    background: "#FFFFFF",
                    borderRadius: "1.25rem",
                    overflow: "hidden",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                    transition: "all 0.4s ease",
                    border: "1px solid rgba(0,0,0,0.04)",
                    animation: `fadeInUp 0.5s ease-out ${idx * 0.15}s both`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 16px 48px rgba(183,110,121,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)";
                  }}
                >
                  <div style={{ overflow: "hidden", position: "relative" }}>
                    <img
                      src={course.image || course.imageUrl || "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80"}
                      alt={course.name}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        transition: "transform 0.6s ease",
                      }}
                      loading="lazy"
                    />
                    {/* Level Badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: "1rem",
                        left: "1rem",
                        padding: "0.3rem 0.8rem",
                        background: "rgba(212, 175, 55, 0.9)",
                        color: "#fff",
                        borderRadius: "50px",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                      }}
                    >
                      🎓 {course.level || "All Levels"}
                    </div>
                  </div>

                  <div style={{ padding: "1.5rem" }}>
                    <h3
                      style={{
                        fontSize: "1.15rem",
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 600,
                        color: "#4A0E2E",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {course.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.88rem",
                        color: "#6B6B6B",
                        lineHeight: 1.7,
                        marginBottom: "1.25rem",
                      }}
                    >
                      {course.description}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingTop: "1rem",
                        borderTop: "1px solid rgba(0,0,0,0.06)",
                        marginBottom: "1.25rem",
                      }}
                    >
                      <span style={{ fontWeight: 700, fontSize: "1.25rem", color: "#B76E79" }}>
                        ${course.price}
                      </span>
                      {course.durationWeeks && (
                        <span style={{ fontSize: "0.8rem", color: "#999" }}>
                          📅 {course.durationWeeks} Weeks
                        </span>
                      )}
                    </div>

                    <Link
                      to={`/book-course?courseId=${course.id}&name=${encodeURIComponent(course.name)}&price=${course.price}`}
                      className="btn-primary"
                      style={{ width: "100%", fontSize: "0.85rem", padding: "0.7rem" }}
                    >
                      Enroll Now →
                    </Link>
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

export default CoursesPage;
