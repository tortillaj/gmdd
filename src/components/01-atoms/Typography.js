import styled from 'styled-components'

import { shevy } from '../theme'

export const H1 = styled.h1`
  font-size: ${shevy.h1.fontSize};
  line-height: ${shevy.h1.lineHeight};
  margin-bottom: ${shevy.h1.marginBottom};
`
H1.displayName = 'H1'

export const H2 = styled.h2`
  font-size: ${shevy.h2.fontSize};
  line-height: ${shevy.h2.lineHeight};
  margin-bottom: ${shevy.h2.marginBottom};
`
H2.displayName = 'H2'

export const H3 = styled.h3`
  font-size: ${shevy.h3.fontSize};
  line-height: ${shevy.h3.lineHeight};
  margin-bottom: ${shevy.h3.marginBottom};
`
H3.displayName = 'H3'

export const H4 = styled.h4`
  font-size: ${shevy.h4.fontSize};
  line-height: ${shevy.h4.lineHeight};
  margin-bottom: ${shevy.h4.marginBottom};
`
H4.displayName = 'H4'

export const P = styled.p`
  font-size: ${shevy.content.fontSize};
  line-height: ${shevy.content.lineHeight};
  margin-bottom: ${shevy.content.marginBottom};
`
P.displayName = 'P'
