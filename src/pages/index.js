import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import withRoot from "../withRoot";
import LandingPage from "./LandingPage";
import ShopPage from "./ShopPage";

function Index() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route path="/:shopId" component={ShopPage} />
      </div>
    </Router>
  );
}

export default withRoot(Index);
