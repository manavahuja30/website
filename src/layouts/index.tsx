import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'

import Header from '../components/Header'
import LayoutMain from '../components/LayoutMain'
import BootstrapProvider from "@bootstrap-styled/provider"
import theme from '../styles/theme'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

const IndexLayout: React.FC = ({ children }) => (
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
    render={(data: StaticQueryProps) => (
      <BootstrapProvider theme={theme}>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords }
          ]}
        />
        <Header title={data.site.siteMetadata.title} />
        <LayoutMain>{children}</LayoutMain>
      </BootstrapProvider>
    )}
  />
)

export default IndexLayout
