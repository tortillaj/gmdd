import styled from 'styled-components'

import { media, shevy, themeValue } from './theme'
import { Inset } from './Inset'

const BrandingElement = Inset.withComponent('header')
BrandingElement.displayName = 'BrandingElement'

export const Branding = styled(BrandingElement)`
  padding: ${shevy.baseSpacing(2)} 0 ${shevy.baseSpacing(4)};
  border-top: 3px solid ${themeValue('colors.foreground')};
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.medium`padding: ${shevy.baseSpacing(4)} 0 ${shevy.baseSpacing(10)};`};
`
Branding.displayName = 'BrandingContainer'
