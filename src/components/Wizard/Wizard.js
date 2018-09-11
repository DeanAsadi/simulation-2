import React, { Component } from "react";
import { Link } from "react-router-dom";
import { submit } from "../Mortgage/Mortgage";


// Also try export deafult OR export on method onSubmitHandeler in Mortgage.
class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log("PROPS FROM WIZARD---> ", this.props.submit);

    const { name, address, city, state, zip } = this.state;
    return (
      <div>
        <Link to="/">
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginTop: "25px", marginRight: "265px" }}
          >
            Previous Step
          </button>
        </Link>
        <Link to="/house">
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginTop: "30px" }}
          >
            Next Step
          </button>
        </Link>
        <br />
        <input
          style={inputStyle}
          name="name"
          value={name}
          onChange={this.handleInputChange}
          placeholder="Property name"
        />
        <br />
        <input
          style={inputStyle}
          name="address"
          value={address}
          onChange={this.handleInputChange}
          placeholder=" Address"
        />
        <br />
        <input
          style={inputStyle}
          name="city"
          value={city}
          onChange={this.handleInputChange}
          placeholder=" City"
        />
        <br />
        <input
          style={inputStyle}
          name="state"
          value={state}
          onChange={this.handleInputChange}
          placeholder="State"
        />
        <br />
        <input
          style={inputStyle}
          name="zip"
          value={zip}
          onChange={this.handleInputChange}
          placeholder="Zip Code"
        />
        <br />

        <Link to="/">
          <button type="button" className="btn btn-danger">
            Cancel
          </button>
        </Link>
      </div>
    );
  }
}
export default Wizard;

const inputStyle = {
  width: "500px",
  marginTop: "20px"
};
