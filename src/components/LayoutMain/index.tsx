import React, { PropsWithChildren, ReactElement } from 'react';
import Container from 'react-bootstrap/Container';

import Footer from '../Footer';
import { Main } from './styledComponents';

const LayoutMain = ({ children }: PropsWithChildren<{}>): ReactElement => (
  <>
    <Main role="main" className="flex-shrink-0">
      <Container>{children}</Container>
    </Main>
    <Footer />
  </>
);

export default LayoutMain;
