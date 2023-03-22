import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import GoogleMapReact from 'google-map-react'; //using google to generate maps
import Comments from './Comments'



function Details() {
  const { id } = useParams();  //uses the id that comes from the Shelter
  const [data, setData] = useState([]);
  const [comments, setComment] = useState([]);
  const [test, setest] = useState([]);
  

  

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        //it uses the id to fetch a filtered API and brings only info from the shelter
        `https://opendata.vancouver.ca/api/records/1.0/search/?dataset=homeless-shelter-locations&refine.recordid=${id}`
      );
      const json = await response.json();
      console.log(json);
      setShelter(json);
      console.log("records: " + json.records[0].fields.facility); //it shows that json.records is an array
    }

    fetchData();
  }, [id]);

  

  return (
    //returns JSX with info from the Shelter that matches above
    <div className="container">
      {shelter.records && (
        <div className="container">
          <div className="shelter">
            <h2 className="header">{shelter.records[0].fields.facility}</h2>
            <div className="main-information border border-5">
              <div className="shelter-info">
                <div className="logo">
                  <img
                    src="/images/category.png"
                    alt="Logo"
                    width={25}
                    height={25}
                  />
                </div>
                <div className="content-shelter">
                  <p>Category: {shelter.records[0].fields.category}</p>
                </div>
              </div>
              <div className="shelter-info">
                <div className="logo">
                  <img
                    src="/images/phone.png"
                    alt="Logo"
                    width={25}
                    height={25}
                  />
                </div>
                <div className="content-shelter">
                  <p>Phone: {shelter.records[0].fields.phone}</p>
                </div>
              </div>
              <div className="shelter-info">
                <div className="logo">
                  <img
                    src="/images/coffee.png"
                    alt="Logo"
                    width={25}
                    height={25}
                  />
                </div>
                <div className="content-shelter">
                  <p>Meals: {shelter.records[0].fields.meals}</p>
                </div>
              </div>
              <div className="shelter-info">
                <div className="logo">
                  <img
                    src="/images/paw-filled.png"
                    alt="Logo"
                    width={25}
                    height={25}
                  />
                </div>
                <div className="content-shelter">
                  <p>Pets allowed? {shelter.records[0].fields.pets}</p>
                </div>
              </div>
              <div className="shelter-info">
                <div className="logo">
                  <img
                    src="/images/shopping-cart.png"
                    alt="Logo"
                    width={25}
                    height={25}
                  />
                </div>
                <div className="content-shelter">
                  <p>Carts allowed? {shelter.records[0].fields.carts}</p>
                </div>
              </div>
              <div className="shelter-info">
                <div className="logo">
                  <img
                    src="/images/current-location.png"
                    alt="Logo"
                    width={25}
                    height={25}
                  />
                </div>
                <div className="content-shelter">
                  <p>
                    Location Area: {shelter.records[0].fields.geo_local_area}
                  </p>
                  <p>
                    Coordinate1: {shelter.records[0].fields.geo_point_2d[0]}
                  </p>
                  <p>
                    Coordinate2: {shelter.records[0].fields.geo_point_2d[1]}
                  </p>
                </div>
              </div>
            </div>
          </div>
         
        </div>  
          
        
      )}
       
     
      <Comments
      
      id ={id}  /> 
      
    </div>
    
  );
  
}

export default Details; 