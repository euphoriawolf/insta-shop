import React, { Component } from "react";
import { withStyles, Grid } from "@material-ui/core";
import ProductsListStyle from "../assets/jss/components/ProductsListStyle";
import { ShopContextConsumer } from "../Context/Shop";
import Product from "./Product";

class ProductsList extends Component {
  state = {};
  render() {
    return (
      <ShopContextConsumer>
        {({ products }) => (
          <Grid container justify="space-around" alignItems="center">
            {products.map(product => (
              <Grid item xs={6} md={4}>
                <Product
                  key={product.id}
                  name={product.name}
                  image={product.image}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </ShopContextConsumer>
    );
  }
}
export default withStyles(ProductsListStyle)(ProductsList);
