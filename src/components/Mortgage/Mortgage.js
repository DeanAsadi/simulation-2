import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Wizard from "../Wizard/Wizard";

class Mortgage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MonthlyMortgageAmount: "",
      DesiredMonthlyRent: "",
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 0
    };
  }

  onSubmitHandler = () => {
    const {
      name,
      address,
      city,
      state,
      zip,
      img,
      monthly_mortgage,
      desired_mortgage
    } = this.state;

    axios.post("/api/house", {
      property_name: name,
      address: address,
      city: city,
      state: state,
      zip: zip,
      img: img,
      monthly_mortgage: monthly_mortgage,
      desired_mortgage: desired_mortgage
    });
    this.props.history.replace("/");
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    <Wizard submit={this.onSubmitHandler} />;
    return (
      <div>
        <Link to="/house">
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginTop: "30px", marginRight: "30px" }}
          >
            Previous Step
          </button>
        </Link>
        <br />
        <input
          name="MonthlyMortgageAmount"
          value={this.state.MonthlyMortgageAmount}
          onChange={this.handleChange}
          placeholder="Monthly Mortgage Amount"
          style={{ marginTop: "30px", width: "500px" }}
        />
        <br />
        <input
          name="DesiredMonthlyRent"
          value={this.state.DesiredMonthlyRent}
          onChange={this.handleChange}
          placeholder="Desired Monthly Rent"
          style={{ marginTop: "30px", width: "500px" }}
        />
        <br />
        <Link to="/">
          <button
            style={{ marginTop: "30px", marginRight: "50px" }}
            type="button"
            className="btn btn-danger"
          >
            Cancel
          </button>
        </Link>
        <button
          onClick={this.onSubmitHandler}
          style={{ marginTop: "30px" }}
          type="button"
          className="btn btn-success"
        >
          Complete
        </button>
      </div>
    );
  }
}

export default Mortgage;
