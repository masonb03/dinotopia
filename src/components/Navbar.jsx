import {Link} from "react-router-dom";
import '../styles/Nav.css';

export default function Navbar() {
    return (
        <div className="nav-links">
            <nav>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/library">Catalog</Link>
                    <Link to="/about">About us</Link>
                </div>
            </nav>
        </div>
    )
}