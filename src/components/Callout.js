import styled from 'styled-components'

import { Em, P } from './Typography'
import { media, shevy, themeValue } from './theme'

export const Callout = styled(P)`
  font-size: ${shevy.h3.fontSize};
  line-height: ${shevy.h3.lineHeight};
  font-family: ${themeValue('typography.serif')};
  font-weight: 400;

  ${media.medium`
    font-size: ${shevy.h1.fontSize};
    line-height: ${shevy.h1.lineHeight};
  `};

  ${Em} {
    color: ${themeValue('colors.primary.base')};
  }
`
Callout.displayName = 'Callout'
