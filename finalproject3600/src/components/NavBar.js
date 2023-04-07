import { Link, NavLink } from "react-router-dom";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faPersonShelter } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="nav nav-masthead justify-content-center float-md-end">
          <li className="nav-link fw-bold py-1 px-0 active">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-link fw-bold py-1 px-0 active">
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li className="nav-link fw-bold py-1 px-0 active">
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
