import BootstrapProvider from '@bootstrap-styled/provider';
import { StaticQuery, graphql } from 'gatsby';
import 'modern-normalize';
import React, { PropsWithChildren, ReactElement } from 'react';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import LayoutMain from '../components/LayoutMain';
import theme from '../styles/theme';

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      keywords: string;
    };
  };
}

const IndexLayout = ({ children }: PropsWithChildren<{}>): ReactElement => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps): ReactElement => (
      <BootstrapProvider theme={theme}>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
        />
        <Header title={data.site.siteMetadata.title} />
        <LayoutMain>{children}</LayoutMain>
      </BootstrapProvider>
    )}
  />
);

export default IndexLayout;
