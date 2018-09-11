import React, { Component } from "react";
import "./App.css";

//Components
import Header from "./components/Header/Header";

// Routes
import { HashRouter as Router } from "react-router-dom";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />

            <div>{routes}</div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
