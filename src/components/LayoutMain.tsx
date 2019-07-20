import React, { PropsWithChildren, ReactElement } from 'react';
import Container from 'react-bootstrap/Container';

const LayoutMain = ({ children }: PropsWithChildren<{}>): ReactElement => (
  <Container>
    <main>{children}</main>
  </Container>
);

export default LayoutMain;
