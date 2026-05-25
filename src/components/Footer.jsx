const Footer = () => {
 return (
    <footer className="footer">
        <div className="footer-container">

            {/* brand Name */}

            <div className="footer-column">
                <h3>Beauty Hub</h3>
                <p>Your one-stop destination for beauty, wellness and confidence.</p>
            </div>
            {/* links */}
            <div className="footer-column">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#hero">Hero</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#blog">Blog</a></li>
                </ul>
            </div>

            {/* contact details */}
            <div className="footer-column">
                <h4>Contact Us</h4>
                <p> +977-9804346486</p>
                <p> beautyhub19@gmail.com</p>
                <p> Itahari, Dharan Line, Sunsari</p>
            </div>

            {/* Social Media Links */}
            <div className="footer-column">
                <h4>Follow Us</h4>
                <div className="spcial-icos">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-tiktok"></i></a>
            </div>
            </div>

        </div>

        <div className="footer-bottom">
            <p> @ 2025 Beauty Hub. All Rights Reserved.</p>
        </div>
       
    </footer>
 );

};
export default Footer;