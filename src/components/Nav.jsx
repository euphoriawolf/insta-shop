import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  withStyles,
  IconButton
} from "@material-ui/core";
import NavStyle from "../assets/jss/components/NavStyle";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasketOutlined";
import PollIcon from "@material-ui/icons/PollOutlined";

const Nav = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="fixed" className={classes.background} elevation={0}>
      <Toolbar className={classes.toolBar}>
        <IconButton color="inherit">
          <PollIcon />
        </IconButton>
        <Typography variant="title" color="inherit" className={classes.name}>
          ShopFeed
        </Typography>
        <IconButton color="inherit">
          <ShoppingBasketIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  </div>
);
export default withStyles(NavStyle)(Nav);
