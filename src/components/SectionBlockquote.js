//
//
//
// Section - Blockquote
//
//
import styled from "styled-components"
import { media, shevy, themeValue } from "./theme"
import { P, Em } from "./Typography"
import { Inset, InsetInner } from "./Inset"
import React from "react"

const SectionBlockquoteContainer = styled.blockquote`
  padding: ${shevy.baseSpacing(2)} 0;
  background-color: ${themeValue("colors.grayscale.pale")};
  text-align: center;

  ${P} {
    font-family: ${themeValue("typography.serif")};
  }

  ${media.medium`padding: ${shevy.baseSpacing(4)} 0;`}
  ${media.medium`
    ${P} {
      font-size: ${shevy.h4.fontSize};
    }
  `}
`
SectionBlockquoteContainer.displayName = "SectionBlockquoteContainer"

const Cite = styled(Em)``

export const SectionBlockquote = ({ content, citation, ...rest }) => (
  <SectionBlockquoteContainer {...rest}>
    <Inset>
      <InsetInner>
        <P>
          {content} - <Cite as="cite">{citation}</Cite>
        </P>
      </InsetInner>
    </Inset>
  </SectionBlockquoteContainer>
)
