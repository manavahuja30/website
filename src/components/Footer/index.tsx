import { StaticQuery, graphql } from 'gatsby';
import React, { ReactElement } from 'react';

import Footer from './Footer';

interface StaticQueryProps {
  site: {
    siteMetadata: {
      contact: {
        email: string;
      };
    };
  };
}
const ConnectedFooter = (): ReactElement => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        site {
          siteMetadata {
            contact {
              email
            }
          }
        }
      }
    `}
  >
    {(data: StaticQueryProps): ReactElement => (
      <Footer mailTo={data.site.siteMetadata.contact.email} />
    )}
  </StaticQuery>
);

export * from './styledComponents';
export default ConnectedFooter;
