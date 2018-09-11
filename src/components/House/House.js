import React, { Component } from "react";
import { Link } from "react-router-dom";

class House extends Component {
  state = {
    img: ""
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <Link to="/wizard">
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginTop: "30px", marginRight: "265px" }}
          >
            Previous Step
          </button>
        </Link>
        <Link to="/mortgage">
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
          name="img"
          value={this.state.img}
          onChange={this.handleChange}
          placeholder="Image URL"
          style={{ marginTop: "100px", width: "500px" }}
        />
        <br />
        <Link to="/">
          <button
            style={{ marginTop: "60px" }}
            type="button"
            className="btn btn-danger"
          >
            Cancel
          </button>
        </Link>
      </div>
    );
  }
}

export default House;
