import { StaticQuery, graphql } from 'gatsby';
import 'modern-normalize';
import React, { PropsWithChildren, ReactElement } from 'react';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import LayoutMain from '../components/LayoutMain';
import '../styles/main.scss';

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
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
          link={[
            {
              href:
                'https://fonts.googleapis.com/css?family=Open+Sans&display=swap',
              rel: 'stylesheet',
            },
          ]}
        />
        <Header />
        <LayoutMain>{children}</LayoutMain>
      </>
    )}
  />
);

export default IndexLayout;
