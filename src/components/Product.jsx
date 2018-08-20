import React from "react";
import { Card, CardMedia, withStyles } from "@material-ui/core";

const styles = {
  media: {
    height: 150
  }
};

const Product = ({ classes, name, image }) => (
  <Card elevation={0}>
    <CardMedia className={classes.media} image={image} title={name} />
  </Card>
);

export default withStyles(styles)(Product);
