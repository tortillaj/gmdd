import styled from 'styled-components'
import PropTypes from 'prop-types'

import { media, shevy, themeValue } from './theme'

export const ProjectListItem = styled.li`
  margin-top: ${shevy.baseSpacing(0.5)};

  & + & {
    ${media.medium`margin-top: ${shevy.baseSpacing(1)};`}
  }
`
ProjectListItem.displayName = 'ProjectListItem'

export const ProjectList = styled.ul``
ProjectList.displayName = 'ProjectList'
ProjectList.propTypes = {
  children: PropTypes.node.isRequired,
}
