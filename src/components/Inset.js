import styled from 'styled-components'
import PropTypes from 'prop-types'

import { media, shevy, themeValue } from './theme'

export const Inset = styled.div`
  max-width: ${themeValue('layout.siteWidth')};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${shevy.baseSpacing(0.5)};

  ${media.large`padding: 0;`}
`
Inset.displayName = 'Inset'

export const InsetInner = styled.div`
  width: ${props => props.width};
  margin: 0 auto;
`
InsetInner.displayName = 'InsetInner'
InsetInner.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
InsetInner.defaultProps = {
  width: shevy.baseSpacing(30),
}
