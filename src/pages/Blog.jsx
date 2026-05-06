import React from "react";

const blogs = [
  {
    id: 1,
    title: "Top 5 Skincare Tips for Glowing Skin",
    date: "July 25, 2025",
    category: "Skincare",
    snippet: "Discover the best skincare practices for glowing, youthful skin using natural and affordable products that work wonders.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Why You Should Try Organic Beauty Treatments",
    date: "July 30, 2025",
    category: "Wellness",
    snippet: "Explore the benefits of going organic in your beauty regime and how it helps both your skin and the environment.",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Bridal Makeup Trends 2025",
    date: "August 1, 2025",
    category: "Makeup",
    snippet: "We break down this year's most popular bridal makeup looks to inspire your big day and make you shine!",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "How to Choose the Right Hair Color for Your Skin Tone",
    date: "August 5, 2025",
    category: "Hair",
    snippet: "Selecting a hair color that complements your skin tone can transform your entire look. Here's how to find your match.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80",
    readTime: "5 min read",
  },
  {
    id: 5,
    title: "Nail Art Inspiration: Trending Designs This Season",
    date: "August 10, 2025",
    category: "Nails",
    snippet: "From minimalist elegance to bold statement nails, explore the hottest nail art trends you need to try right now.",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
    readTime: "4 min read",
  },
  {
    id: 6,
    title: "Self-Care Sunday: Building Your Perfect Routine",
    date: "August 15, 2025",
    category: "Wellness",
    snippet: "Learn how to create a holistic self-care routine that nurtures your mind, body, and soul every weekend.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80",
    readTime: "7 min read",
  },
];

const Blog = () => {
  return (
    <div style={{ paddingTop: "5rem" }}>
      {/* Header */}
      <section style={{ padding: "4rem 1.5rem 3rem", background: "linear-gradient(135deg, #4A0E2E 0%, #6B1D4A 100%)", textAlign: "center" }}>
        <span style={{ display: "inline-block", padding: "0.4rem 1.2rem", background: "rgba(255,255,255,0.1)", borderRadius: "50px", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4A0A7", marginBottom: "1rem" }}>
          Beauty Blog
        </span>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#FFFFFF", marginBottom: "1rem" }}>
          Tips, Trends & Tutorials
        </h1>
        <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.7)", maxWidth: "600px", margin: "0 auto" }}>
          Expert beauty advice and inspiration from our team of professionals.
        </p>
      </section>

      {/* Featured Post */}
      <section style={{ padding: "clamp(3rem, 8vw, 5rem) 1.5rem", background: "#FFF5EE" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "2rem",
              marginBottom: "3rem",
              background: "#FFFFFF",
              borderRadius: "1.5rem",
              overflow: "hidden",
              boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src={blogs[0].image}
              alt={blogs[0].title}
              style={{ width: "100%", height: "100%", minHeight: "300px", objectFit: "cover" }}
              loading="lazy"
            />
            <div style={{ padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span style={{ display: "inline-block", padding: "0.3rem 0.8rem", background: "rgba(183,110,121,0.1)", borderRadius: "50px", fontSize: "0.75rem", fontWeight: 600, color: "#B76E79", marginBottom: "1rem", width: "fit-content" }}>
                ✨ Featured • {blogs[0].category}
              </span>
              <h2 style={{ fontSize: "1.75rem", fontFamily: "'Playfair Display', serif", color: "#4A0E2E", marginBottom: "1rem", lineHeight: 1.3 }}>
                {blogs[0].title}
              </h2>
              <p style={{ fontSize: "0.95rem", color: "#6B6B6B", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                {blogs[0].snippet}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", fontSize: "0.8rem", color: "#999" }}>
                <span>📅 {blogs[0].date}</span>
                <span>⏱️ {blogs[0].readTime}</span>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {blogs.slice(1).map((blog, idx) => (
              <article
                key={blog.id}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "1.25rem",
                  overflow: "hidden",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                  transition: "all 0.4s ease",
                  cursor: "pointer",
                  border: "1px solid rgba(0,0,0,0.04)",
                  animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s both`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 16px 40px rgba(183,110,121,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)";
                }}
              >
                <div style={{ overflow: "hidden" }}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    style={{ width: "100%", height: "200px", objectFit: "cover", transition: "transform 0.6s ease" }}
                    loading="lazy"
                    onMouseEnter={(e) => { e.target.style.transform = "scale(1.05)"; }}
                    onMouseLeave={(e) => { e.target.style.transform = "scale(1)"; }}
                  />
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <span style={{ padding: "0.2rem 0.6rem", background: "rgba(183,110,121,0.1)", borderRadius: "50px", fontSize: "0.7rem", fontWeight: 600, color: "#B76E79" }}>
                      {blog.category}
                    </span>
                    <span style={{ fontSize: "0.75rem", color: "#999" }}>{blog.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: "1.1rem", fontFamily: "'Playfair Display', serif", fontWeight: 600, color: "#4A0E2E", marginBottom: "0.5rem", lineHeight: 1.4 }}>
                    {blog.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "#6B6B6B", lineHeight: 1.7, marginBottom: "1rem" }}>
                    {blog.snippet}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "0.8rem", color: "#999" }}>📅 {blog.date}</span>
                    <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#B76E79" }}>Read More →</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
