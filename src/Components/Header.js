import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background: #333;
  color: white;
`;

const NavLinks = styled.div`
  a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <Nav>
      <h1>HomeDecor</h1>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </NavLinks>
    </Nav>
  );
};

export default Header;
