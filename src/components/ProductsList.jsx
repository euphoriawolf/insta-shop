import React, {Component } from"react"
import {withStyles} from '@material-ui/core'
import ProductsListStyle from "../assets/jss/components/ProductsListStyle"
import {ProductsContextConsumer } from "../Context/Shop"


class ProductsList extends Component{

  state ={}
  render(){
      return(
        <ProductsContextConsumer>
          {({ products }) => (
            <div>

              {products.map(product => (
                <h1>product.name</h1>
              ))}
            </div>
          )}
        </ProductsContextConsumer>
      )
  }

}
export default withStyles(ProductsListStyle)(ProductsList);