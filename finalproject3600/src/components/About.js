import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsPraying } from "@fortawesome/free-solid-svg-icons";
import { Outlet, NavLink } from "react-router-dom";

function About() {
  return (
    <div className="about-container">
      <h1 className="display-5 fw-bold text-body-emphasis">Who are we?</h1>
      <p className="col-lg-6 mx-auto">
        We are free information provider about homeless shelters, including
        facility, category, location, phone, meals, pets, etc.
      </p>
      <p className="col-lg-6 mx-auto">
        This website aims to help people with needs and volunteers to locate
        correct information. Although we started with only Vancouver, we invite
        you to help others by{" "}
        <NavLink to="/shelterform" className="link-info">
          adding
        </NavLink>{" "}
        or editing the information of other cities in BC here.
      </p>
      <p className="col-lg-6 mx-auto">
        <NavLink to="/" className="link-info">
          Click here
        </NavLink>{" "}
        to start browsing.
      </p>
    </div>
  );
}

export default About;
