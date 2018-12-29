import styled from 'styled-components'

import { themeValue } from '../theme'

export const SiteHeader = styled.header`
  display: flex;
  background-image: linear-gradient(${themeValue('colors.primary.interaction')}, ${themeValue('colors.primary.base')});
  padding: ${themeValue('layout.spacing.medium')} 0;
`
SiteHeader.displayName = 'SiteHeader'
