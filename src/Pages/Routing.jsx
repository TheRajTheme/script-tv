import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "../Components/Page";
import Home from "./Home";

const Routing = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Page>
              <Home />
            </Page>
          }
        />
      </Routes>
    </Router>
  );
};

export default Routing;
