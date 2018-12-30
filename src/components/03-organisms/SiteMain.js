import styled from 'styled-components'
import PropTypes from 'prop-types'

import { media, shevy } from '../theme'

export const SiteMain = styled.main`
  flex: 1;
  margin: ${shevy.baseSpacing(1)} 0;
  
  ${media.large`margin: ${shevy.baseSpacing(2)} 0;`}
`
SiteMain.displayName = 'SiteMain'
SiteMain.propTypes = {
  children: PropTypes.node.isRequired,
}
