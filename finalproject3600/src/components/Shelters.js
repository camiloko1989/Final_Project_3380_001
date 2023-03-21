import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Shelters() {
  const [data, setData] = useState([]);
  
  //fetches the data from the API, it maps it to create an array of objects, they are displayed in form of cards
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://opendata.vancouver.ca/api/records/1.0/search/?dataset=homeless-shelter-locations&q=&rows=61&facet=facility&facet=category&facet=meals&facet=pets&facet=carts&facet=geo_local_area"
      );
      //const response = await fetch('http://127.0.0.1:5000/api/facility');
      const json = await response.json();
      setData(json.records);
    }

    fetchData();
  }, []);

  //it return each card
  return (
    <div className="container">
      {data.map((item) => (
        <div key={item.recordid} className="card" style={{ width: "25rem" }}>
          <div className="card">
            <div className="card-header">{item.fields.geo_local_area}</div>
            <div className="card-body">
              <h5 className="card-title">{item.fields.facility}</h5>
              <p className="card-text">Phone: {item.fields.phone}</p>
              <p className="card-text">Meals : {item.fields.meals}</p>
              <p className="card-text">Pets allowed? : {item.fields.pets}</p>
              <NavLink to={`/details/${item.recordid}`}>
                <button type="button" className="btn btn-primary btn-lg">
                  View Details
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shelters;
