import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";

function Index() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route path="/storeId" component={ShopPage} />
      </div>
    </Router>
  );
}

export default withRoot(withStyles(styles)(Index));
