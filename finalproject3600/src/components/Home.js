import React, { Component } from "react";
import Shelters from "./Shelters";
import "../App.css";

//Home component, its just a title, description and it brings all the Shelters generated from the API

class Home extends Component {
  render() {
    {
      console.log("Home");
    }
    return (
      <div className="main-content home">
        <header className="header">
          <h1 className="title">Are you looking for a shelter to stay?</h1>
          <p className="description">
            Click on the View Details button of each shelter to see more
            information.
          </p>
        </header>
        <hr />
        <Shelters />
      </div>
    );
  }
}

export default Home;
