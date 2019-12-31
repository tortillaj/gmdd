//
//
//
// Section - Carousel
//
//
import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { media, shevy } from './theme'
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
  return (
    <SectionCarouselContainer {...rest}>
      <Inset>
        <SectionCarouselImageList>
          {images.map(image => (
            <SectionCarouselImage
              key={image.url}
              alt={image.alt}
              fixed={image.fixed}
            />
          ))}
        </SectionCarouselImageList>
      </Inset>
    </SectionCarouselContainer>
  )
}
