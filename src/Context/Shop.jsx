import React, { Component } from "react";
import axios from "axios";

const ShopContext = React.createContext();

export class ShopContextProvider extends Component {
  state = {
    products: [],
    loading: true
  };
  getProducts(storeId) {
    const url = "https://api.myjson.com/bins/8hupv";
    axios
      .get(url)
      .then(respose =>
        this.setState({ products: respose.data, loading: false })
      )
      .catch(err => console.log(err));
  }
  componentDidMount() {
    this.getProducts();
  }
  render() {
    const { children } = this.props;
    const { products, loading } = this.state;
    return (
      <ShopContext.Provider
        value={{
          products: products,
          loading: loading
        }}
      >
        {children}
      </ShopContext.Provider>
    );
  }
}

export const ShopContextConsumer = ShopContext.Consumer;
