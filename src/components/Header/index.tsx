import { Link } from 'gatsby';
import React, { ReactElement } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Logo, StyledHeader } from './styledComponents';

const Header = (): ReactElement => (
  <StyledHeader>
    <Container>
      <Link to="/">
        <Logo />
      </Link>

      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">
              Acceuil
            </Link>
            <Link to="/about" className="nav-link">
              A propos
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </StyledHeader>
);

export default Header;
