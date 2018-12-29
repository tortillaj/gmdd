import styled from 'styled-components'

import { themeValue } from '../theme'

export const SiteMain = styled.main`
  flex: 1;
  margin: ${themeValue('layout.spacing.medium')} 0;
  @media all and (min-width: ${themeValue('sizes.large')}) {
    margin: ${themeValue('layout.spacing.xl')} 0;
  }
`
SiteMain.displayName = 'SiteMain'
