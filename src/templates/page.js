import React from 'react'
import { graphql } from 'gatsby'

export const query = graphql`
  query PageQuery($uid: String) {
    prismic {
      allPages(uid: $uid) {
        edges {
          node {
            _meta {
              type
              id
              uid
            }
            title
          }
        }
      }
    }
  }
`

export default ({ data }) => {
  const doc = data.prismic.allPages.edges.slice(0, 1).pop()
  if (!doc) return null
  return (
    <div>
      <h1>Page: {doc.node.title[0].text}</h1>
    </div>
  )
}
