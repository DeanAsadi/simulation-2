import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Wizard from "./components/Wizard/Wizard";
import House from "./components/House/House";
import Mortgage from "./components/Mortgage/Mortgage";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/wizard" component={Wizard} />
    <Route path="/house/step1" component={House} />
    <Route path="/house" component={House} />
    <Route path="/mortgage" component={Mortgage} />
  </Switch>
);
