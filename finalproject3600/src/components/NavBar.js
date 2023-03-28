import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonShelter } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <FontAwesomeIcon
            icon={faPersonShelter}
            size="2xl"
            style={{ color: "#36568c" }}
          />
          <li className="nav-item active">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink to="/shelterform" className="nav-link">
              Add Shelter
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
    </div>
  );
}

export default NavBar;
