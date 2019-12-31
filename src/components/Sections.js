import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { media, shevy, themeValue } from "./theme"
import { Inset } from "./Inset"

export const Sections = styled.div`
  margin: 0;
`
Sections.displayName = "Sections"

//
//
//
// Section - Image
//
//
const SectionImageContainer = styled.section`
  padding: ${shevy.baseSpacing(2)} 0;
  background-color: ${themeValue("colors.grayscale.pale")};

  ${media.medium`padding: ${shevy.baseSpacing(4)} 0;`}
`
SectionImageContainer.displayName = "SectionImageContainer"

export const SectionImage = ({ alt, fluid, ...rest }) => {
  return (
    <SectionImageContainer {...rest}>
      <Inset>
        <Img alt={alt} fluid={fluid} />
      </Inset>
    </SectionImageContainer>
  )
}
