import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h3>Hi</h3>
                <p>Hi, I'm Mikhail Davydov<br />"and I engrave various" <br />"metal items."</p>
            </div>

            <div className="footer-section">
                <h3>Navigation</h3>
                <a href="/">Home</a>
                <a href="/gallery">Gallery</a>
                <a href="/faq">FAQ</a>
                <a href="/tos">ToS</a>
                <a href="/privacypolicy">Privacy Policy</a>
            </div>

            <div className="footer-section">
                <h3>Contact Us</h3>
                <a href="mailto:mikhailgraver@gmail.com">mikhailgraver@gmail.com</a>
                <a href="http://www.instagram.com/davydov910">Instagram</a>
                <a href="https://www.facebook.com/profile.php?id=100006169143368">Facebook</a>
                <a href="https://youtube.com/@mikhaildavydov910">YouTube</a>
            </div>
        </footer>
    );
}