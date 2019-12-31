import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { media, shevy, themeValue, fontSize } from "./theme"
import { H3 } from "./Typography"

export const ProjectListItem = styled.li`
  margin-top: ${shevy.baseSpacing(1)};
  padding-bottom: ${shevy.baseSpacing(1)};

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
ProjectListItem.displayName = "ProjectListItem"

export const ProjectListName = styled(H3)`
  font-weight: 600;
  font-style: italic;
  margin: 0 0 ${shevy.baseSpacing(0.5)};
  color: ${themeValue("colors.foreground")};
`
ProjectListName.displayName = "ProjectListName"

export const ProjectListHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${shevy.baseSpacing(0.5)};

  ${media.small`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  `}
`
ProjectListHeader.displayName = "ProjectListHeader"

export const ProjectView = styled.button`
  ${fontSize(6)};
  appearance: none;
  transition: background 0.3s ease-out;
  border: 1px solid ${themeValue("colors.primary.base")};
  display: inline-block;
  cursor: pointer;
  color: ${themeValue("colors.always.white")};
  background-color: ${themeValue("colors.primary.base")};
  text-align: center;
  padding: ${shevy.baseSpacing(0.25)} ${shevy.baseSpacing(0.75)};

  &::after {
    content: "\u276F";
    display: inline-block;
    margin-left: -${shevy.baseSpacing(0.25)};
    opacity: 0;
    transition: all 0.3s ease-out;
  }

  &:hover {
    cursor: pointer;
  }
`
ProjectView.displayName = "ProjectView"

export const ProjectList = styled.ol``
ProjectList.displayName = "ProjectList"
ProjectList.propTypes = {
  children: PropTypes.node.isRequired,
}

export const ProjectLink = styled(Link)`
  text-decoration: none;

  &:hover {
    ${ProjectView} {
      background-color: ${themeValue("colors.primary.interaction")};

      &::after {
        margin-left: ${shevy.baseSpacing(0.25)};
        opacity: 1;
      }
    }
  }
`
ProjectLink.displayName = "ProjectLink"
