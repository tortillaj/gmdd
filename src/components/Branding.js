import styled from 'styled-components'

import { media, shevy } from './theme'
import { Inset } from './Inset'

export const Branding = styled.header`
  padding: ${shevy.baseSpacing(2)} 0 ${shevy.baseSpacing(4)};

  ${Inset} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ${media.medium`padding: ${shevy.baseSpacing(4)} 0 ${shevy.baseSpacing(10)};`};
`
Branding.displayName = 'BrandingContainer'
