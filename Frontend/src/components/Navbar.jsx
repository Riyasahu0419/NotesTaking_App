import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">My Notes App</h1>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-item">Home</Link>
          </li>
          <li>
            <Link to="/signup" className="nav-item">Signup</Link>
          </li>
          <li>
            <Link to="/login" className="nav-item">Login</Link>
          </li>
          <li>
            <Link to="/createnote" className="nav-item">Create Note</Link>
          </li>
          <li>
            <Link to="/notes" className="nav-item">Notes</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
