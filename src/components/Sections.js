import styled, { css } from 'styled-components'
import Img from 'gatsby-image'

import { media, shevy, themeValue } from './theme'
import { WYSIWYG } from './Typography'

export const Sections = styled.div`
  margin: ${shevy.baseSpacing(4)} 0 0;
`
Sections.displayName = 'Sections'

export const SectionImage = styled.section`
  padding: ${shevy.baseSpacing(2)};
  background-color: ${themeValue('colors.secondary.pale')};

  ${media.medium`padding: ${shevy.baseSpacing(4)} 0;`}
`
SectionImage.displayName = 'SectionImage'

export const SectionImageWithCopyImage = styled(Img)`
  margin: 0 auto;
  ${props =>
    props.position === 'right'
      ? css`
          order: 1;
          ${media.medium`margin-left: ${shevy.baseSpacing(2)};`}
        `
      : css`
          order: 0;
          ${media.medium`margin-right: ${shevy.baseSpacing(2)};`}
        `}
`
SectionImageWithCopyImage.displayName = 'SectionImageWithCopyImage'

export const SectionImageWithCopyText = styled(WYSIWYG)`
  padding: ${shevy.baseSpacing(1)} 0;

  ${media.medium`
    padding: ${shevy.baseSpacing(2)} 0;
    flex: 1;
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

export const SectionImageWithCopy = styled.section`
  padding: ${shevy.baseSpacing(2)};
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.small`
    flex-direction: row;
    justify-content: flex-start;
  `}

  ${media.medium`
    padding: ${shevy.baseSpacing(4)} 0;
  `}
`
SectionImageWithCopy.displayName = 'SectionImageWithCopy'

export const SectionCopy = styled.section`
  padding: ${shevy.baseSpacing(2)};
  background-color: ${themeValue('colors.secondary.pale')};

  ${media.medium`padding: ${shevy.baseSpacing(4)} 0;`}
`
SectionCopy.displayName = 'SectionCopy'

export const SectionCopyText = styled(WYSIWYG)`
  text-align: center;

  ${media.medium`
    p {
      font-size: ${shevy.h4.fontSize};
    }
  `}
`
SectionCopyText.displayName = 'SectionCopyText'

export const SectionCarousel = styled.section`
  padding: 0 ${shevy.baseSpacing(2)};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  img {
    margin: ${shevy.baseSpacing(1)};
  }

  ${media.medium`padding: ${shevy.baseSpacing(4)} 0;`}
`
SectionCarousel.displayName = 'SectionCarousel'
