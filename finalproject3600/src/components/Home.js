import React, { Component } from 'react';
import Shelters from "./Shelters";

//Home component, its just a title, description and it brings all the Shelters generated from the API

class Home extends Component {
    render() {
        {console.log("Home")}
        return (
            <div className="main-content home">
                <h1 className="main-title">Shelters in British Columbia</h1>
                <p>Here you can find shelters across the province</p>
                <p>Click on the information button of each shelter to see more information</p>
                <hr />
                <Shelters />
            </div>
            );
        }
}

export default Home;


