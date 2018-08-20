import React from "react";
import { ShopContextProvider } from "../Context/Shop";
import { withStyles, Grid } from "@material-ui/core";
import ShopPageStyle from "../assets/jss/pages/ShopPageStyle";
import Nav from "../components/Nav";
import Profile from "../components/Profile";
import ProductsList from "../components/ProductsList"

const ShopPage = ({ classes }) => (
  <div>
    <ShopContextProvider>
      <Nav />
      <div className={classes.root}>
        <Grid container direction="column" alignItems="stretch">
          <Grid item className={classes.profile}>
            <Profile />
          </Grid>
          <Grid item>
            <ProductsList />
          </Grid>
        </Grid>
      </div>
    </ShopContextProvider>
  </div>
);

export default withStyles(ShopPageStyle)(ShopPage);
