import React from 'react'

const About = () => {
    return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-6">
          Welcome to <span className="font-semibold">Glow Beauty</span>, your trusted destination for makeup, confidence,
          and self-expression. We believe makeup is more than just colors and brushes—it’s an art, a form of self-care,
          and a way to celebrate individuality.
        </p>
        <p className="text-lg mb-6">
          Our mission is to provide high-quality, cruelty-free, and affordable makeup products that empower everyone to
          feel beautiful in their own skin. From beginners to professionals, our products are designed to inspire
          creativity and boost confidence every day.
        </p>
        <p className="text-lg mb-6">
          Whether you’re going for a natural everyday glow or a bold, glamorous look, our products are crafted to help
          you shine with confidence. Join our growing community of makeup lovers and let us be part of your beauty
          journey.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Our Promise</h2>
        <ul className="list-disc list-inside text-left max-w-xl mx-auto">
          <li>Quality First – We use safe, skin-friendly ingredients.</li>
          <li>Cruelty-Free – No animal testing, ever.</li>
          <li>Inclusive Beauty – Shades and products for every skin tone.</li>
          <li>Affordable Luxury – Premium quality without the premium price tag.</li>
        </ul>
      </section>
    </div>
  );
}


export default About
