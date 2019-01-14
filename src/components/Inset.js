import styled from 'styled-components'
import PropTypes from 'prop-types'

import { media, shevy, themeValue } from './theme'

export const Inset = styled.div`
  max-width: ${themeValue('layout.siteWidth')};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${shevy.baseSpacing(1)};

  ${media.large`padding: 0;`}
`
Inset.displayName = 'Inset'

export const InsetInner = styled.div`
  margin: 0 auto;
  width: 100%;
  ${media.large`max-width: ${props => props.width};`}
`
InsetInner.displayName = 'InsetInner'
InsetInner.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
InsetInner.defaultProps = {
  width: shevy.baseSpacing(44),
}
