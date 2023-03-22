import React, { useEffect } from 'react';
import {shelter} from './Details'
import L from 'leaflet';

function Map() {

  useEffect(() => {
    // Get the coordinates
    const lat = shelter.records[0].fields.geo_point_2d[0];
    const lng = shelter.records[0].fields.geo_point_2d[1];

    // Create the map
    const mymap = L.map('mapid').setView([lat, lng], 13);

    // Add the tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(mymap);

    // Add a marker
    L.marker([lat, lng]).addTo(mymap);

    // Cleanup
    return () => {
      mymap.remove();
    };
  }, []);

  return (
    <div style={{ height: '400px' }} id="mapid" />
  );
}

export default Map;