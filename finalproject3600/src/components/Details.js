import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';



function Details() {
  const { id } = useParams();  //uses the id that comes from the Shelter
  const [data, setData] = useState([]);

  //fetch the API again
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://opendata.vancouver.ca/api/records/1.0/search/?dataset=homeless-shelter-locations&q=&rows=61&facet=facility&facet=category&facet=meals&facet=pets&facet=carts&facet=geo_local_area');
      const json = await response.json();
      setData(json.records);
    }

    fetchData();
  }, []);

  const shelter = data.find((item) => item.recordid === id); //looks for the element in the JSON that is equal to the id that comes in the URL

  return (   //returns JSX with info from the Shelter that matches above
    <div className="container">
      {shelter && (
        <div className="shelter">
          <h2 className="header">{shelter.fields.facility}</h2>
          <div className="main-information border border-5">
          <div className="shelter-info">
              <div className="logo">
                <img src="/images/category.png" alt="Logo" width={25} height={25}/>
              </div>
              <div className="content-shelter">
                <p>Category: {shelter.fields.category}</p>
              </div>
            </div>
            <div className="shelter-info">
              <div className="logo">
                <img src="/images/phone.png" alt="Logo" width={25} height={25}/>
              </div>
              <div className="content-shelter">
                <p>Phone: {shelter.fields.phone}</p>
              </div>
            </div>
            <div className="shelter-info">
              <div className="logo">
                <img src="/images/coffee.png" alt="Logo" width={25} height={25}/>
              </div>
              <div className="content-shelter">
                <p>Meals: {shelter.fields.meals}</p>
              </div>
            </div>
            <div className="shelter-info">
              <div className="logo">
                <img src="/images/paw-filled.png" alt="Logo" width={25} height={25}/>
              </div>
              <div className="content-shelter">
                <p>Pets allowed? {shelter.fields.pets}</p>
              </div>
            </div>
            <div className="shelter-info">
              <div className="logo">
                <img src="/images/shopping-cart.png" alt="Logo" width={25} height={25}/>
              </div>
              <div className="content-shelter">
                <p>Carts allowed? {shelter.fields.carts}</p>
              </div>
            </div>
            <div className="shelter-info">
              <div className="logo">
                <img src="/images/current-location.png" alt="Logo" width={25} height={25}/>
              </div>
              <div className="content-shelter">
                <p>Location Area: {shelter.fields.geo_local_area}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
