import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "../Components/Page";
import Home from "./Home";

const Routing = () => {
  return (
    <BrowserRouter basename="/">
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
    </BrowserRouter>
  );
};

export default Routing;
