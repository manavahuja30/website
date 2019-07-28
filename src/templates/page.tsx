import { graphql } from 'gatsby';
import React, { ReactElement } from 'react';

import Page from '../components/Page';
import MainLayout from '../layouts';

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
      };
    };
    markdownRemark: {
      html: string;
      excerpt: string;
      frontmatter: {
        title: string;
      };
    };
  };
}

const PageTemplate = ({ data }: PageTemplateProps): ReactElement => (
  <MainLayout>
    <Page>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Page>
  </MainLayout>
);

export default PageTemplate;

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
      }
    }
  }
`;
