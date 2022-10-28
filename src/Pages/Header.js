import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {

const navLinkStyles = ({isActive}) => {
  return {
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: isActive ? 'none' : 'underline',
  }
}

  return <>
  <nav>
  <NavLink style={navLinkStyles} to='/' end>Home</NavLink>
  <NavLink style={navLinkStyles} to='/product'>Products</NavLink>
  <NavLink style={navLinkStyles} to='/users'>Users</NavLink>

  </nav>
  </>;
};

export default Header;
