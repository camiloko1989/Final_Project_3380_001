import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import ShelterFilter from "./ShelterFilter";
import axios from "axios";
const API_URL = "/api/facility";

function Shelters() {
  const [shelter, setShelter] = useState([]);
  const [filter, setFilter] = useState("");

  //fetches the data from the API, it maps it to create an array of objects, they are displayed in form of cards
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => res.data)
      .then((data) => setShelter(data));
  }, []);

  //filter the data based on the current filter
  const filteredData = shelter.filter(
    (item) =>
      item.geo_local_area?.toLowerCase().includes(filter.toLowerCase()) ||
      item.facility?.toLowerCase().includes(filter.toLowerCase())
  );

  //it return each card
  return (
    <div className="shelter-card">
      <NavLink to="/shelterform" className="link-info">
        <button type="button" className="btn btn-primary">
          Add Shetler
        </button>
      </NavLink>
      <ShelterFilter setFilter={setFilter} />
      <div className="container-shelters">
        {filteredData.map((item) => (
          <div
            className="shelter-card"
            key={item._id}
            style={{ width: "25rem" }}
          >
            <div className="card border border-5 rounded-start">
              <div
                className="card-header card-title"
                style={{ fontWeight: "bold" }}
              >
                Area: {item.geo_local_area}
              </div>
              <div className="card-body">
                <h5 className="shelter-name-logo">
                  <div className="logo">
                    <img
                      src="/images/home-heart.png"
                      alt="Logo"
                      width={25}
                      height={25}
                    />
                  </div>
                  {item.facility}
                </h5>
                <p className="card-text">Phone: {item.phone}</p>
                <p className="card-text">Meals : {item.meals}</p>
                <p className="card-text">Pets allowed? : {item.pets}</p>
                <NavLink to={`/Details/${item._id}`}>
                  <button type="button" className="btn btn-primary btn-lg">
                    View Details
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}

export default Shelters;
