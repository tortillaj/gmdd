import React from 'react'
import { Helmet as GatsbyHelmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

export const Helmet = ({ title, children, pageMeta }) => (
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
      return (
        <GatsbyHelmet
          titleTemplate={`%s | ${data.site.siteMetadata.title}, Vermont, USA`}
          title={title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            {
              name: 'keywords',
              content: data.site.siteMetadata.keywords.join(','),
            },
          ].concat(pageMeta)}
        >
          <html lang="en" />
          {children}
        </GatsbyHelmet>
      )
    }}
  />
)

Helmet.defaultProps = {
  pageMeta: [],
}
