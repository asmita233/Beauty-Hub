import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import BlogPreview from "../components/BlogPreview";
import CTASection from "../components/CTASection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";


const LandingPage = () => {
    return(
        <div>
            <Hero />
            <About />
            <Services />
            <Gallery />
            <Testimonials />
            <BlogPreview />
            <CTASection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default LandingPage;