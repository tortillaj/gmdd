import styled from 'styled-components'
import { Link } from 'gatsby'

import { media, shevy } from './theme'

export const MainMenuItem = styled(Link)`
  font-weight: 600;
  color: inherit;
  text-transform: uppercase;
  text-decoration: none;
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
