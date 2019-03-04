import React from 'react'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'

import {
  media,
  shevy,
  themeValue,
} from './theme'
import { WYSIWYG } from './Typography'
import {
  Inset,
  InsetInner,
} from './Inset'

export const Sections = styled.div`
  margin: ${shevy.baseSpacing(4)} 0 0;
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
  background-color: ${themeValue('colors.secondary.pale')};

  ${media.medium`padding: ${shevy.baseSpacing(4)} 0;`}
`
SectionImageContainer.displayName = 'SectionImageContainer'

export const SectionImage = ({ children, ...rest }) => (
  <SectionImageContainer {...rest}>
    <Inset>
      {children}
    </Inset>
  </SectionImageContainer>
)

//
//
//
// Section - Image with Copy
//
//
export const SectionImageWithCopyImage = styled(Img)`
  margin: 0 auto;
  max-width: 100% !important;
  order: 1;
  
  ${props =>
  props.position === 'right'
    ? css`
          ${media.small`
            margin-left: ${shevy.baseSpacing(2)};
            order: 1;
          `}
        `
    : css`
          ${media.small`
            margin-right: ${shevy.baseSpacing(2)};
            order: 0;
           `}
        `}
`
SectionImageWithCopyImage.displayName = 'SectionImageWithCopyImage'

export const SectionImageWithCopyText = styled(WYSIWYG)`
  padding: 0 0 ${shevy.baseSpacing(1)} 0;
  flex: 1;
  text-align: center;
  
  ${media.small`
    padding: 0;
    text-align: left;
  `};

  ${media.medium`
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;

    p {
      font-size: ${shevy.h4.fontSize};
    }
  `}
`
SectionImageWithCopyText.displayName = 'SectionImageWithCopyText'

const SectionImageWithCopyInner = styled.section`
  padding: ${shevy.baseSpacing(2)} 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.small`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  `}

  ${media.medium`
    padding: ${shevy.baseSpacing(4)} 0;
  `}
`
SectionImageWithCopyInner.displayName = 'SectionImageWithCopyInner'

export const SectionImageWithCopy = ({ children, ...rest }) => (
  <Inset>
    <InsetInner>
      <SectionImageWithCopyInner {...rest}>
        {children}
      </SectionImageWithCopyInner>
    </InsetInner>
  </Inset>
)

//
//
//
// Section - Copy
//
//
const SectionCopyContainer = styled.section`
  padding: ${shevy.baseSpacing(2)} 0;
  background-color: ${themeValue('colors.secondary.pale')};

  ${media.medium`padding: ${shevy.baseSpacing(4)} 0;`}
`
SectionCopyContainer.displayName = 'SectionCopyContainer'

export const SectionCopyText = styled(WYSIWYG)`
  text-align: center;

  ${media.medium`
    p {
      font-size: ${shevy.h4.fontSize};
    }
  `}
`
SectionCopyText.displayName = 'SectionCopyText'

export const SectionCopy = ({ children, ...rest }) => (
  <SectionCopyContainer {...rest}>
    <Inset>
      {children}
    </Inset>
  </SectionCopyContainer>
)

//
//
//
// Section - Carousel
//
//
export const SectionCarousel = styled.section`
  padding: 0 ${shevy.baseSpacing(2)} 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  img {
    margin: ${shevy.baseSpacing(1)};
  }

  ${media.medium`padding: ${shevy.baseSpacing(4)} 0;`}
`
SectionCarousel.displayName = 'SectionCarousel'
