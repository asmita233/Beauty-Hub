import React from "react";

import "./About.css";

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <div className="about-image">
                    <img src="/assets/images/makeup.jpg" alt="Beauty Hub Studio" />
                </div>

                <div className="about-content">
                    <h2>About Us</h2>
                    <p>
                        Welcome to <strong>Beauty Hub</strong>, your destination for all things beauty.
                        we are a here to provide premium services and expert care related to all kind of beauty. Whether you're looking for a stunning bridal makeover, a rejuvenating faial, or the latest beauty trends, our professional team is here to help you look and feel your best.

                    </p>
                    <p>
                        With over <strong>10 years of experience</strong> in this field, We take pride in using only high-quality, skin-safe products in a clean and relaxing environment. 
                        Come experience the art of beauty at Beauty Hub-where self-care meets style.
                    </p>
                    <button className="about-btn">Learn More</button>
                </div>
            </div>
        </section>
    );
};
export default About;