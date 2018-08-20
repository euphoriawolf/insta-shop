import React, { Component } from "react";
import { withStyles, Grid } from "@material-ui/core";
import ProductsListStyle from "../assets/jss/components/ProductsListStyle";
import { ShopContextConsumer } from "../Context/Shop";
import Product from "./Product";
import Loader from "react-loaders";
import "../assets/sass/loader.scss";

class ProductsList extends Component {
  state = {};
  render() {
    return (
      <ShopContextConsumer>
        {({ products, loading }) => (
          <Grid container justify="space-around" alignItems="center">
            {loading ? (
              <Grid item>
                <Loader type="ball-spin-fade-loader" />
              </Grid>
            ) : (
              products.map(product => (
                <Grid item xs={6} md={4} key={product.id}>
                  <Product name={product.name} image={product.image} />
                </Grid>
              ))
            )}
            {}
          </Grid>
        )}
      </ShopContextConsumer>
    );
  }
}
export default withStyles(ProductsListStyle)(ProductsList);
