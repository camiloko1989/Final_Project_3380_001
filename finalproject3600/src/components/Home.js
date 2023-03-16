import React, { Component } from "react";
import Shelters from "./Shelters";
import "../App.css";

//Home component, its just a title, description and it brings all the Shelters generated from the API

class Home extends Component {
  render() {
    return (
      <div className="main-content home">
        <header className="header">
          <h1 className="title">Shelters across British Columbia</h1>
          <h2>
            Do you need a place to stay?
          </h2>
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
