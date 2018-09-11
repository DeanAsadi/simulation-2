import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  state = {
    houses: []
  };

  componentDidMount() {
    this.handleGet();
  }
  handleGet = () => {
    axios.get("/api/houses").then(response => {
      this.setState({ houses: response.data });
      console.log("houses--->", this.state.houses);
    });
  };

  handleDelete = id => {
    axios.delete(`/api/house/${id}`).then(() => {
      alert("Delete successful, Refresh page");
    });
  };

  render() {
    const { houses } = this.state;
    let displayHouses = houses.map(house => {
      return (
        <div key={house.id} style={style}>
          <h3> Property name: {house.property_name}</h3>
          <img src={house.img} alt="img" />
          <h4> Address: {house.address} </h4>
          <h5>
            {house.city}, {house.state}, {house.zip}
          </h5>
          <div>Monthly Mortgage: {house.monthly_mortgage}</div>
          <div>Desired Mortgage: {house.desired_mortgage}</div>
          <button
            style={{ marginTop: "40px" }}
            onClick={id => this.handleDelete(house.id)}
            type="button"
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      );
    });
    return (
      <div>
        <Link to="/wizard">
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginTop: "20px" }}
          >
            Add New Property
          </button>
        </Link>
        {displayHouses}
      </div>
    );
  }
}
export default Dashboard;

//styling----------------
const style = {
  border: "1px solid red",
  margin: "10px",
  width: "600px",
  marginLeft: "410px"
};
