import React, { useState, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../App.css";
import axios from "axios";
const API_URL = "/api/facility/";

function Map(props) {
  //brings the id from the Shelter
  const [shelterMap, setShelterMap] = useState(null);

  useEffect(() => {
    //fetch the API with the ID
    // async function fetchData() {
    //   const response = await fetch(
    //     `https://opendata.vancouver.ca/api/records/1.0/search/?dataset=homeless-shelter-locations&refine.recordid=${props.idmap}`
    //   );
    //   const json = await response.json();
    //   setShelterMap(json);
    // }

    // fetchData();
    axios
      .get(API_URL + props.idmap)
      .then((res) => res.data)
      .then((data) => setShelterMap(data));
  }, [props.idmap]);

  const lat = shelterMap?.geo_point_2d?.lat; //Sets coordinates
  const lng = shelterMap?.geo_point_2d?.lon;

  useEffect(() => {
    //uses leaflet API to set a map with the coordinates
    if (lat && lng) {
      const mymap = L.map("mapid").setView([lat, lng], 15);
      L.Icon.Default.imagePath = "/images/map-pin-filled.png";

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(mymap);

      L.marker([lat, lng]).addTo(mymap);

      return () => {
        mymap.remove();
      };
    }
  }, [lat, lng]);

  return (
    <div>
      {shelterMap && lat && lng && (
        <div style={{ height: "400px" }} id="mapid" />
      )}
    </div>
  );
}

export default Map;
