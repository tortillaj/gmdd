//
//
//
// Section - Carousel
//
//
import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import {
  graphql,
  StaticQuery,
} from 'gatsby'

import {
  media,
  shevy,
} from './theme'
import { Inset } from './Inset'

const SectionCarouselContainer = styled.section`
  padding: ${shevy.baseSpacing(2)} 0;

  ${media.medium`
    padding: ${shevy.baseSpacing(4)} 0;
  `}
`
SectionCarouselContainer.displayName = 'SectionCarouselContainer'

const SectionCarouselImageList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  ${media.medium`
    flex-wrap: nowrap;
  `}
`
SectionCarouselImageList.displayName = 'SectionCarouselImageList'

const SectionCarouselImage = styled(Img)`
  margin: ${shevy.baseSpacing(1)};
`
SectionCarouselImage.displayName = 'SectionCarouselImage'

export const SectionCarousel = ({ images, ...rest }) => {
  const query = graphql`query {
      sectionCarousel: allFile {
          edges {
              node {
                  relativePath
                  name
                  childImageSharp {
                      fixed(height:200) {
                          ...GatsbyImageSharpFixed
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
        if (!data.sectionCarousel || !images) return null

        const carouselImages = []
        images.forEach(image => carouselImages.push(image.filename))

        const loadedImages = data.sectionCarousel.edges.filter(n => {
          return carouselImages.find(wanted => wanted.search(n.node.relativePath) >= 0)
        })

        if (!loadedImages) return null

        return (

          <SectionCarouselContainer {...rest}>
            <Inset>
              <SectionCarouselImageList>
                {loadedImages.map(image => (
                  <SectionCarouselImage
                    key={image.node.name}
                    alt={image.node.alt}
                    fixed={image.node.childImageSharp.fixed}
                  />
                ))}
              </SectionCarouselImageList>
            </Inset>
          </SectionCarouselContainer>

        )
      }}
    />
  )
}
