import styled from 'styled-components'
import { Link } from 'gatsby'

import { media, shevy, themeValue } from './theme'

export const MainMenuItem = styled(Link)`
  font-weight: 600;
  text-decoration: none;
  color: ${themeValue('colors.primary.highlight')};
  text-transform: uppercase;
`
MainMenuItem.displayName = 'MainMenuItem'

export const MainMenu = styled.nav`
  display: flex;
  align-items: center;
  margin-top: ${shevy.baseSpacing(0.5)};

  ${MainMenuItem} + ${MainMenuItem} {
    margin-left: ${shevy.baseSpacing(1)};
  }

  ${media.medium`margin-top: 0;`}
`
MainMenu.displayName = 'MainMenu'
