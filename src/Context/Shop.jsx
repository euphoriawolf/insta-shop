import React, { Component } from "react";
import axios from "axios";

const ShopContext = React.createContext();

class ShopContextProvider extends Component {
  state = {
    products: []
  };
  getProducts(storeId) {
    const url = "https://api.myjson.com/bins/8hupv";
    axios
      .get(url)
      .then(respose => this.setState({ products: respose.data }))
      .catch(err => console.log(err));
  }
  componentDidMount() {
    this.getProducts();
  }
  render() {
    const { children } = this.props;
    const { products } = this.state;
    return (
      <ShopContext.Provider
        value={{
          products: products
        }}
      >
        {children}
      </ShopContext.Provider>
    );
  }
}

export const ShopContextConsumer = ShopContext.Consumer;
