import React from 'react';
import {Switch,Route} from 'react-router-dom'
import './App.css';
import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import ProductList  from './components/ProductList'
import Details  from './components/Details'
import Cart from './components/Cart/Cart'
import Default from './components/Default'
import Modal from './components/Modal'


export class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <h3>hello from app</h3> */}
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
    </React.Fragment>
    )
  }
}



export default App;
