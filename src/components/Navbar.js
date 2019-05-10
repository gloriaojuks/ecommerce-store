import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.png'
import styled from 'styled-components'
import {ButtonContainer} from './Button'

export class Navbar extends Component {
  render() {
    return (
      <div>
          <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            { /* 
        https://www.iconfinder.com/icons/1243689/call_phone_icon
        Creative Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk */}  
        <Link to='/'><img src={logo} alt="store" width="50px" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5"></li>
            <Link to="/" className="nav-link">products</Link>
        </ul>
        <Link to="./cart" className="ml-auto">
            <ButtonContainer><span><i className="fas fa-cart-plus"/></span>My Cart </ButtonContainer>
        </Link>
        </NavWrapper>
      </div>
    )
  }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{color:var(--mainBlack)!important;font-size:1.3rem;text-transform: capitalize}
`;

export default Navbar
