import styled from 'styled-components'

import { shevy } from '../theme'

export const SiteFooter = styled.footer`
  background-color: black;
  height: ${shevy.baseSpacing(10)};
  padding: ${shevy.baseSpacing(0.5)} 0;
`
SiteFooter.displayName = 'SiteFooter'
