import { Link } from 'gatsby';
import React, { ReactElement } from 'react';

import Page from '../components/Page';
import MainLayout from '../layouts';

const NotFoundPage = (): ReactElement => (
  <MainLayout>
    <Page>
      <h1>404: Page not found.</h1>
      <p>
        You've hit the void. <Link to="/">Go back.</Link>
      </p>
    </Page>
  </MainLayout>
);

export default NotFoundPage;
