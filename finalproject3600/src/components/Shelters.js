import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import ShelterFilter from "./ShelterFilter";

function Shelters() {
  const [shelter, setShelter] = useState([]);
  const [filter, setFilter] = useState("");

  //fetches the data from the API, it maps it to create an array of objects, they are displayed in form of cards
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://opendata.vancouver.ca/api/records/1.0/search/?dataset=homeless-shelter-locations"
      );
      //const response = await fetch('http://127.0.0.1:5000/api/facility');
      const json = await response.json();
      setShelter(json.records);
    }

    fetchData();
  }, []);

  //filter the data based on the current filter
  const filteredData = shelter.filter(
    (item) =>
      item.fields.geo_local_area.toLowerCase().includes(filter.toLowerCase()) ||
      item.fields.facility.toLowerCase().includes(filter.toLowerCase())
  );

  //it return each card
  return (
    <div className="shelter-card">
      <NavLink to="/shelterform" className="link-info">
        <button type="button" className="btn btn-primary">
          Add Shelter
        </button>
      </NavLink>
      <ShelterFilter setFilter={setFilter} />
      <div className="container-shelters">
        {filteredData.map((item) => (
          <div
            className="shelter-card"
            key={item.recordid}
            style={{ width: "25rem" }}
          >
            <div className="card border border-5 rounded-start">
              <div className="card-header card-title">
                Area: {item.fields.geo_local_area}
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
                  {item.fields.facility}
                </h5>
                <p className="card-text">Phone: {item.fields.phone}</p>
                <p className="card-text">Meals : {item.fields.meals}</p>
                <p className="card-text">Pets allowed? : {item.fields.pets}</p>
                <NavLink to={`/Details/${item.recordid}`}>
                  <button type="button" className="btn btn-primary btn-lg">
                    View Details
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shelters;
