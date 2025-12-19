import React from "react";
import "./Blog.css";

const blogs = [
  {
    id: 1,
    title: "Top 5 Skincare Tips for Glowing Skin",
    date: "July 25, 2025",
    snippet:
      "Discover the best skincare practices for glowing, youthful skin using natural and affordable products...",
    image: "src/assets/images/skincare.jpg",
  },
  {
    id: 2,
    title: "Why You Should Try Organic Beauty Treatments",
    date: "July 30, 2025",
    snippet:
      "Explore the benefits of going organic in your beauty regime and how it helps both your skin and the environment.",
    image: "src/assets/images/organicbeautytreatment.jpg",
  },
  {
    id: 3,
    title: "Bridal Makeup Trends 2025",
    date: "July 26, 2025",
    snippet:
      "We break down this year's most popular bridal makeup looks to inspire your big day!",
    image: "src/assets/images/bridalmakeup.jpeg",
  },

  {
    id: 4,
    title: "How to Choose the Right Hair Color for Your Skin Tone",
    date: "August 1, 2025",
    snippet:
      "Selecting a hair color that complements your skin tone can transform your entire look. Here's how to find your perfect match.",
    image: "src/assets/images/haircolor.webp",
  },

  {
    id: 5,
    title: "Nail Extensions",
    date: "August 5, 2025",
    snippet:
      "Pamper yourself with beautiful Nail design so visit our MakeupStudio to get your nails done",
    image: "src/assets/images/nailextensions.webp"
  },
];

const Blog = () => {
  return (
    <div className="blog-page">
      <section className="blog-hero">
        <h1>Blog Page</h1>
        <p>Beauty tips, trends and tutorials from our experts</p>
      </section>

      <section className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img
              src={blog.image}
              alt={blog.title}
              className="blog-image"
              loading="lazy"
            />
            <div className="blog-content">
              <h2>{blog.title}</h2>
              <p className="blog-date">{blog.date}</p>
              <p className="blog-snippet">{blog.snippet}</p>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Blog;
