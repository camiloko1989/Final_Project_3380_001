import './App.css';
import React, { useState, useEffect } from "react";

function Shelters() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://opendata.vancouver.ca/api/records/1.0/search/?dataset=homeless-shelter-locations&q=&facet=facility&facet=category&facet=meals&facet=pets&facet=carts&facet=geo_local_area');
      const json = await response.json();
      setData(json.records);
    }

    fetchData();
  }, []);

  
  return (
    <div className="container">
    {data.map(item => (
      <div className="card" style={{width: '18rem'}}>
        <h2 className="card-title">{item.fields.facility}</h2>
        <div className="card-body">
          <p className="card-text">Phone: {item.fields.phone}</p>
          <p className="card-text">Meals: {item.fields.meals}</p>
          <p className="card-text">Pets allowed: {item.fields.pets}</p>
        </div>
      </div>
    ))}
  </div>
    
  );
}

function Menu() {
  return (
    <nav>
      <ul className="nav justify-content-center">
        <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
      </ul>
    </nav>
  );
}

function Title() {
  return (
    <h1>Shelters in BC</h1>
  );
}

function App() {
  return (
    <div>
      <Menu />
      <Title />
      <Shelters />
       
    </div>
  );
}

export default App;
