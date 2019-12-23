//
//
//
// Section - Blockquote
//
//
import styled from 'styled-components'
import {
  media,
  shevy,
  themeValue,
} from './theme'
import {
  P,
  WYSIWYG,
} from './Typography'
import {
  Inset,
  InsetInner,
} from './Inset'
import React from 'react'

const SectionBlockquoteContainer = styled.blockquote`
  padding: ${shevy.baseSpacing(2)} 0;
  background-color: ${themeValue('colors.grayscale.pale')};

  ${media.medium`padding: ${shevy.baseSpacing(4)} 0;`}
`
SectionBlockquoteContainer.displayName = 'SectionBlockquoteContainer'

export const SectionBlockquoteText = styled(WYSIWYG)`
  text-align: center;

  ${media.medium`
    ${P} {
      font-size: ${shevy.h4.fontSize};
    }
  `}
`
SectionBlockquoteText.displayName = 'SectionBlockquoteText'

export const SectionBlockquote = ({ children, ...rest }) => (
  <SectionBlockquoteContainer {...rest}>
    <Inset>
      <InsetInner>
        <SectionBlockquoteText>
          {children}
        </SectionBlockquoteText>
      </InsetInner>
    </Inset>
  </SectionBlockquoteContainer>
)
