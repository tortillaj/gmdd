import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

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
  margin: 0 0 ${shevy.baseSpacing(0.5)};
  color: ${themeValue('colors.foreground')};
`
ProjectListName.displayName = 'ProjectListName'

export const ProjectListHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${shevy.baseSpacing(1)};

  ${media.medium`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  `}
`
ProjectListHeader.displayName = 'ProjectListHeader'

export const ProjectView = styled.div`
  transition: background 0.3s ease-out;
  border: 1px solid ${themeValue('colors.accent.base')};
  display: inline-block;
  color: ${themeValue('colors.always.black')};
  background-color: ${themeValue('colors.accent.highlight')};
  text-align: center;
  padding: ${shevy.baseSpacing(0.25)} ${shevy.baseSpacing(0.75)};

  &::after {
    font-family: sans;
    content: "\u276F";
    display: inline-block;
    margin-left: -${shevy.baseSpacing(0.25)};
    opacity: 0;
    transition: all 0.3s ease-out;
  }
`
ProjectView.displayName = 'ProjectView'

export const ProjectList = styled.ol``
ProjectList.displayName = 'ProjectList'
ProjectList.propTypes = {
  children: PropTypes.node.isRequired,
}

export const ProjectLink = styled(Link)`
  text-decoration: none;
  
  &:hover {
    ${ProjectView} {
      background-color: ${themeValue('colors.accent.interaction')};

      &::after {
        margin-left: ${shevy.baseSpacing(0.25)};
        opacity: 1;
      }
    }
  }
`
ProjectLink.displayName = 'ProjectLink'
