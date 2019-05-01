import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'

export class Navbar extends Component {
  render() {
    return (
      <div>
          <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
            { /* 
        https://www.iconfinder.com/icons/1243689/call_phone_icon
        Creative Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk */}  
        <Link to='/'><img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5"></li>
            <Link to="/" className="nav-link">Products</Link>
        </ul>
        <Link to="./cart" className="ml-auto">
            <ButtonContainer><span><i className="fas fa-cart-plus"/></span>Cart</ButtonContainer>
        </Link>
        </nav>
      </div>
    )
  }
}

const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background: transparent;
border: 0.05rem solid var(--lightBlue);

`

export default Navbar
