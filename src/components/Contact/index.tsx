import { StaticQuery, graphql } from 'gatsby';
import React, { ReactElement } from 'react';

import Contact from './Contact';

interface StaticQueryProps {
  site: {
    siteMetadata: {
      contact: {
        email: string;
      };
    };
  };
}

const ConnectedContact = (): ReactElement => (
  <StaticQuery
    query={graphql`
      query ContactQuery {
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
      <Contact mailTo={data.site.siteMetadata.contact.email} />
    )}
  </StaticQuery>
);

export default ConnectedContact;
