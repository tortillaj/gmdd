import React from 'react'
import { Helmet as GatsbyHelmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

export const Helmet = ({ title, children }) => (
  <StaticQuery
    query={graphql`
      query HelmetQuery {
        site {
          siteMetadata {
            title
            keywords
            description
          }
        }
      }
    `}
    render={data => {
      const pageTitle = title ? `${title} | ${data.site.siteMetadata.title}` : data.site.siteMetadata.title
      return (
        <GatsbyHelmet
          title={pageTitle}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords.join(',') },
          ]}
        >
          <html lang="en" />
          {children}
        </GatsbyHelmet>
      )
    }}
  />
)
