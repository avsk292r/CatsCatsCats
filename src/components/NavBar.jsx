import { Link } from "react-router-dom"
import './css/NavBar.css'

function NavBar() {
    return (
        <nav className="nav">
            <Link to="/" className="nav-brand">My App</Link>
            <div className="nav-links">
                <Link to="/" className="nav-links">Home</Link>
            </div>
        </nav>
    )
}
export default NavBar
