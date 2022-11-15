import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page from "../Components/Page";
import Home from "./Home";

const Routing = () => {
  return (
    <Router basename="/">
      <Switch>
      <Route
          path=""
          render={() => (
            <Page>
              <Home />
            </Page>
          )}
        />
      </Switch>
    </Router>
  );
};

export default Routing;
