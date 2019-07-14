import { Link } from 'gatsby';
import React, { ReactElement } from 'react';

import Page from '../components/Page';
import IndexLayout from '../layouts';

const NotFoundPage = (): ReactElement => (
  <IndexLayout>
    <Page>
      <h1>404: Page not found.</h1>
      <p>
        You've hit the void. <Link to="/">Go back.</Link>
      </p>
    </Page>
  </IndexLayout>
);

export default NotFoundPage;
