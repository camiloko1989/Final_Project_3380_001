import React, { useState, useEffect } from "react";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import '../App.css'

function Map(props) { //brings the id from the Shelter
  const [shelterMap, setShelterMap] = useState(null);

  useEffect(() => {  //fetch the API with the ID 
    async function fetchData() {
      const response = await fetch(
        `https://opendata.vancouver.ca/api/records/1.0/search/?dataset=homeless-shelter-locations&refine.recordid=${props.idmap}`
      );
      const json = await response.json();
      setShelterMap(json);
    }

    fetchData();
  }, [props.idmap]);

  const lat = shelterMap?.records?.[0]?.fields?.geo_point_2d?.[0]; //Sets coordinates
  const lng = shelterMap?.records?.[0]?.fields?.geo_point_2d?.[1];


  useEffect(() => { //uses leaflet API to set a map with the coordinates
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
    <div className="container-maps border border-5">
      {shelterMap?.records && lat && lng && (
        <div style={{ height: "400px" }} id="mapid" />
      )}
    </div>
  );
}

export default Map;
