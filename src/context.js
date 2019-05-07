import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data'


const ProductContext = React.createContext();
//provider

// consumer

 class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct
    }
    componentDidMount(){
      this.storeProducts()
    }
    storeProducts = ()=>{
      let tempProducts= []
      storeProducts.forEach(item=>{
        const singleItem = {...item}
        tempProducts = [...tempProducts,singleItem]

      })
      this.setState(()=>{
        return {products:tempProducts}
      })
    }
    getItem = (id) =>{
      const product = this.state.products.find(item => item.id ===id)
      return product
    }

    handleDetail = id => {
      const product = this.getItem(id)
      this.setState(()=> {
        return {detailProduct: product}
      })
    }

    addToCart = (id) => { 
        const product = this.getItem();
        this.setState(()=>{
          return {detailProduct:product}
        })
    }
  
  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart
      }}>
          {this.props.children}
      </ProductContext.Provider>


    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};


