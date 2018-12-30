import styled from 'styled-components'

import { shevy, themeValue } from './theme'

export const H1 = styled.h1`
  font-size: ${shevy.h1.fontSize};
  line-height: ${shevy.h1.lineHeight};
  margin-bottom: ${shevy.h1.marginBottom};
  font-family: ${themeValue('typography.serif')};
`
H1.displayName = 'H1'

export const H2 = styled.h2`
  font-size: ${shevy.h2.fontSize};
  line-height: ${shevy.h2.lineHeight};
  margin-bottom: ${shevy.h2.marginBottom};
  font-family: ${themeValue('typography.serif')};
`
H2.displayName = 'H2'

export const H3 = styled.h3`
  font-size: ${shevy.h3.fontSize};
  line-height: ${shevy.h3.lineHeight};
  margin-bottom: ${shevy.h3.marginBottom};
  font-family: ${themeValue('typography.serif')};
`
H3.displayName = 'H3'

export const H4 = styled.h4`
  font-size: ${shevy.h4.fontSize};
  line-height: ${shevy.h4.lineHeight};
  margin-bottom: ${shevy.h4.marginBottom};
  font-family: ${themeValue('typography.serif')};
`
H4.displayName = 'H4'

export const P = styled.p`
  font-size: ${shevy.content.fontSize};
  line-height: ${shevy.content.lineHeight};
  margin-bottom: ${shevy.content.marginBottom};
  font-family: ${themeValue('typography.sans')};
`
P.displayName = 'P'

export const Em = styled.em`
  font-style: italic;
`
Em.displayName = 'Em'

export const Strong = styled.strong`
  font-weight: 600;
`
Strong.displayName = 'Strong'
