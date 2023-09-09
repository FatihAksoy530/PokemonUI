import { Link } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar-container">
            <Link className='to-home-btn' to="/">Home</Link>
            <h1>Navbar</h1>
        </nav>
    )
}