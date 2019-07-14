import { Container } from '@bootstrap-styled/v4';
import React, { PropsWithChildren, ReactElement } from 'react';

const LayoutMain = ({ children }: PropsWithChildren<{}>): ReactElement => (
  <Container>
    <main>{children}</main>
  </Container>
);

export default LayoutMain;
