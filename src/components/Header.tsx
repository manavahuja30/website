import { Link } from 'gatsby';
import React, { ReactElement } from 'react';

import Container from './Container';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps): ReactElement => (
  <header>
    <Container>
      <Link to="/">{title}</Link>
    </Container>
  </header>
);

export default Header;
