import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./component/Dashboard/Dashboard";
import Wizard from "./component/Wizard/Wizard";
import Header from "./component/Header/Header";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="Dashboard">Dashboard</Link>
        <br />
        <Link to="Wizard"> Wizard </Link>
        <br />
        <Header />
        <Dashboard />
        <Wizard />
      </div>
    );
  }
}

export default App;
