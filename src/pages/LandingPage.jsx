import React from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import BlogPreview from "./BlogPreview";
import CTASection from "./CTASection";
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