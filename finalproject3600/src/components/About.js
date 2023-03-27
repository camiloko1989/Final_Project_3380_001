import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsPraying } from "@fortawesome/free-solid-svg-icons";
import { Outlet, NavLink } from "react-router-dom";

function About() {
  return (
    <div className="card-text">
      <p>
        We are free information provider about homeless shelters, including
        facility, category, location, phone, meals, pets, etc.
      </p>
      <p>
        This website aims to help people with needs and volunteers to locate
        correct information. And we invite you to help others by adding or
        editing relevant information here.
      </p>
      <p>
        <NavLink to="/">Click here</NavLink> to start browsing.
      </p>
    </div>
  );
}

export default About;
