import React from "react";
import { Switch, Route } from "react-router-dom";
import VistaAuto from "./vistaAuto";
import ComparadorAuto from "./comparadorAuto";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/vistaAuto" component={VistaAuto} />
      <Route path="/comparadorAuto" component={ComparadorAuto} />
    </Switch>
  );
};

export default Routes;
