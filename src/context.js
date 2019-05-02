import React, { Component } from 'react'

const ProductContext = React.createContext();
//provider

// consumer

export class ProductProvider extends Component {

  render() {
    return (
      <ProductContext.Provider value="hello from context">
          {this.props.children}
      </ProductContext.Provider>


    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};


