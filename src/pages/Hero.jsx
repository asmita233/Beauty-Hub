import React from "react";
import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <div className="overlay">
                <div className="hero-content">
                    <h3 className="hero-subtitle">Beauty Hub</h3>
                    <h1 className="hero-title">Bringing out the beauty in you and Enhancing your inner beauty</h1>
                    <div className="divider" />
                    <button className="hero-btn">Book Appointment</button>

                </div>
            </div>
        </section>
    );
};

export default Hero;