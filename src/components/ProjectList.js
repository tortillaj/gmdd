import styled from 'styled-components'
import PropTypes from 'prop-types'

import { media, shevy, themeValue } from './theme'
import { H3 } from './Typography'

export const ProjectListItem = styled.li`
  margin-top: ${shevy.baseSpacing(1)};
  padding-bottom: ${shevy.baseSpacing(1)};
  /* border-bottom: 1px solid ${themeValue('colors.secondary.pale')}; */

  &:last-child {
    border: none;
  }

  & + & {
    ${media.medium`
      margin-top: ${shevy.baseSpacing(2)};
      padding-bottom: ${shevy.baseSpacing(2)};
    `};
  }
`
ProjectListItem.displayName = 'ProjectListItem'

export const ProjectListName = styled(H3)`
  font-weight: 600;
  font-style: italic;
`
ProjectListName.displayName = 'ProjectListName'

export const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;

  ${media.medium`
    flex-direction: row;
    justify-content: space-between;
  `}
`
ProjectHeader.displayName = 'ProjectHeader'

export const ProjectLink = styled.a`
`
ProjectLink.displayName = 'ProjectLink'

export const ProjectList = styled.ol``
ProjectList.displayName = 'ProjectList'
ProjectList.propTypes = {
  children: PropTypes.node.isRequired,
}
