import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {
  StaticQuery,
  graphql,
} from 'gatsby'

import {
  media,
  shevy,
  themeValue,
} from './theme'
import {
  Inset,
} from './Inset'

export const Sections = styled.div`
  margin: 0;
`
Sections.displayName = 'Sections'

//
//
//
// Section - Image
//
//
const SectionImageContainer = styled.section`
  padding: ${shevy.baseSpacing(2)} 0;
  background-color: ${themeValue('colors.grayscale.pale')};

  ${media.medium`padding: ${shevy.baseSpacing(4)} 0;`}
`
SectionImageContainer.displayName = 'SectionImageContainer'

export const SectionImage = ({ alt, filename, ...rest }) => {
  const query = graphql`query {
      sectionImage: allFile {
          edges {
              node {
                  relativePath
                  name
                  childImageSharp {
                      fluid(maxWidth: 1100) {
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
          }
      }
  }`
  return (
    <StaticQuery
      query={query}

      render={(data) => {
        if (!data.sectionImage) return null
        const image = data.sectionImage.edges.find(n => {
          return n.node.relativePath.includes(filename)
        })

        if (!image) return null

        return (
          <SectionImageContainer {...rest}>
            <Inset>
              <Img
                alt={alt}
                fluid={image.node.childImageSharp.fluid}
              />
            </Inset>
          </SectionImageContainer>
        )
      }}
    />
  )
}
