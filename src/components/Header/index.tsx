import {
  Collapse,
  Container,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarToggler,
} from '@bootstrap-styled/v4';
import { Link } from 'gatsby';
import React, { ReactElement, useState } from 'react';

import { Logo, StyledHeader } from './styledComponents';

const Header = (): ReactElement => {
  const [isOpen, setOpen] = useState(true);
  return (
    <StyledHeader>
      <Container>
        <Link to="/">
          <Logo />
        </Link>

        <Navbar color="faded" light toggleable="lg">
          <div className="d-flex justify-content-between">
            <NavbarToggler onClick={(): void => setOpen(!isOpen)} />
          </div>
          <Collapse navbar isOpen={isOpen}>
            <Nav navbar className="mr-auto">
              <NavItem>
                <Link to="/" activeClassName="active">
                  <NavLink>Acceuil</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/about" activeClassName="active">
                  <NavLink>A propos</NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </StyledHeader>
  );
};

export default Header;
