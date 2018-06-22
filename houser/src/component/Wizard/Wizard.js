import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Link } from "react-router-dom";

class Wizard extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: 0
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = () => {
    const { name, address, city, state, zipcode } = this.state;
    axios.post("/api/houses", {
      name,
      address,
      city,
      state,
      zipcode
    });
  };

  render() {
    return (
      <div>
        Wizard
        <div>
          <input
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
            placeholder="name"
            type="text"
          />
          <input
            value={this.state.address}
            onChange={this.handleChange}
            name="address"
            placeholder="address"
            type="text"
          />
          <input
            value={this.state.city}
            onChange={this.handleChange}
            name="city"
            placeholder="city"
            type="text"
          />
          <input
            value={this.state.state}
            onChange={this.handleChange}
            name="state"
            placeholder="state"
            type="text"
          />
          <input
            value={this.state.zipcode}
            onChange={this.handleChange}
            name="zipcode"
            placeholder="zipcode"
            type="text"
          />
          <button onClick={this.onSubmit}>Submit</button>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Wizard;
