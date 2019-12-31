import React from 'react'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'

import { fontSize, shevy, themeValue } from './theme'
import { WYSIWYG } from './Typography'

const SectionCTAContainer = styled.section`
  background-color: ${themeValue('colors.grayscale.pale')};
  height: ${shevy.baseSpacing(22)};
  overflow: hidden;
  width: 100%;
  position: relative;
`
SectionCTAContainer.displayName = 'SectionCTAContainer'

const SectionCTABanner = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
`
SectionCTABanner.displayName = 'SectionCTABanner'

const SectionCTAOverlay = styled.span`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: ${themeValue('overlayColors.primaryLight')};
`
SectionCTAOverlay.displayName = 'SectionCTAOverlay'

const SectionCTAContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
SectionCTAContent.displayName = 'SectionCTAContent'

export const CTAButton = styled.a`
  ${fontSize(6)};
  appearance: none;
  transition: background 0.3s ease-out;
  border: 1px solid ${themeValue('colors.primary.base')};
  display: inline-block;
  cursor: pointer;
  color: ${themeValue('colors.always.white')};
  background-color: ${themeValue('colors.primary.base')};
  text-align: center;
  padding: ${shevy.baseSpacing(0.5)} ${shevy.baseSpacing(1)};
  margin: ${shevy.baseSpacing(1)} 0;
  text-decoration: none;

  &::after {
    content: '\u276F';
    display: inline-block;
    margin-left: -${shevy.baseSpacing(0.25)};
    opacity: 0;
    transition: all 0.3s ease-out;
  }

  &:hover {
    cursor: pointer;
    background-color: ${themeValue('colors.primary.interaction')};

    &::after {
      margin-left: ${shevy.baseSpacing(0.25)};
      opacity: 1;
    }
  }
`
CTAButton.displayName = 'CTAButton'

export const SectionCTA = ({
  alt,
  image,
  title,
  content,
  ctaLabel,
  ctaLink,
  ...rest
}) => {
  console.log(rest)
  return (
    <SectionCTAContainer {...rest}>
      <SectionCTABanner src={image} alt={alt} />

      <SectionCTAOverlay aria-hidden="true" />

      <SectionCTAContent>
        <RichText render={title} Component={WYSIWYG} />
        <RichText render={content} Component={WYSIWYG} />

        <CTAButton href={ctaLink}>{ctaLabel}</CTAButton>
      </SectionCTAContent>
    </SectionCTAContainer>
  )
}
