import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-item active">Home</Link>
            <Link to="/gallery" className="nav-item">Gallery</Link>
            <Link to="/faq" className="nav-item">FAQ</Link>
            <Link to="/buynow" className="nav-item buy">Buy now!</Link>
        </nav>
    );
}