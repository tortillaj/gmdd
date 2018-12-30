import styled from 'styled-components'

import { media, shevy } from '../theme'

export const SiteHeader = styled.header`
  display: flex;
  background-color: black;
  padding: ${shevy.baseSpacing(0.5)} 0;

  ${media.large`padding: ${shevy.baseSpacing(1)} 0;`}
`
SiteHeader.displayName = 'SiteHeader'
