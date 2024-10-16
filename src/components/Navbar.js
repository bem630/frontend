// src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: white;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: ${(props) => (props.scroll ? '0 4px 8px rgba(0,0,0,0.1)' : 'none')};
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #333;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    &.active {
      color: #007bff;
    }
  }
`;

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    setScroll(window.scrollY > 50);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavbarContainer scroll={scroll}>
      <Logo>Electronorme</Logo>
      <NavLinks>
        <NavLink to="/" end>Accueil</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
