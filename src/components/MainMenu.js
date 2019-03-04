import styled from 'styled-components'
import { Link } from 'gatsby'

import { media, shevy, themeValue } from './theme'

export const MainMenuItem = styled(Link)`
  font-weight: 600;
  color: ${themeValue('colors.foreground')};
  text-transform: uppercase;

  &:hover {
    color: ${themeValue('colors.primary.base')};
  }
`
MainMenuItem.displayName = 'MainMenuItem'

export const MainMenu = styled.nav`
  display: flex;
  align-items: center;

  ${MainMenuItem} + ${MainMenuItem} {
    margin-left: ${shevy.baseSpacing(1)};
  }

  ${media.medium`margin-top: 0;`}
`
MainMenu.displayName = 'MainMenu'
