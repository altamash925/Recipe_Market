import { NavLink, Link } from "react-router-dom";
import { ChefHat } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <ChefHat size={36} />
          <span>
            Recipe<span className="logo-highlight">Market</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="navbar-links">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/recipes"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Recipes
          </NavLink>

          <NavLink
            to="/share-recipe"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Share Recipe
          </NavLink>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;