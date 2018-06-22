import React from "react";
import ReactDOM from "react-dom";
import House from "../House/House";
import Wizard from "../Wizard/Wizard";
import { Link } from "react-router-dom";
import axios from "axios";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/houses")
      .then(response => this.setState({ houses: response.data }));
  }

  render() {
    const displayHouses = this.state.houses.map(house => {
      <h3>{house}</h3>;
    });
    console.log(displayHouses);
    return (
      <div>
        Dashboard
        <House />
        <button>Add New Property</button>
      </div>
    );
  }
}
export default Dashboard;
