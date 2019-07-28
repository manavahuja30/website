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
              Accueil
            </Link>

            <Link to="/enseignes-lumineuses" className="nav-link">
              Enseignes lumineuses
            </Link>
            <Link to="/signaletiques" className="nav-link">
              Signalétiques
            </Link>
            <Link to="/amenagement-de-terrasse" className="nav-link">
              Aménagement de terrasse
            </Link>
            <Link to="/stores" className="nav-link">
              Stores
            </Link>
            <Link to="/services" className="nav-link">
              Services
            </Link>
            <Link to="/realisations" className="nav-link">
              Réalisations
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </StyledHeader>
);

export default Header;
