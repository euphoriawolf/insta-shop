import React from "react";
import { ShopContextProvider } from "../Context/Shop";
import { withStyles, Grid } from "@material-ui/core";
import ShopPageStyle from "../assets/jss/pages/ShopPageStyle";
import Nav from "../components/Nav";

const ShopPage = ({ classes }) => (
  <div className={classes.root}>
    <ShopContextProvider>
      <Grid container>
        <Grid item>
          <Nav />
        </Grid>
        <Grid item />
        <Grid item />
      </Grid>
    </ShopContextProvider>
  </div>
);

export default withStyles(ShopPageStyle)(ShopPage);
