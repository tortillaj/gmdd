import styled from 'styled-components'
import PropTypes from 'prop-types'

import { media, shevy, themeValue } from './theme'
import { H3 } from './Typography'

export const ProjectCarousel = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
  height: ${shevy.baseSpacing(7)};
  overflow-x: scroll;
`
ProjectCarousel.displayName = 'ProjectCarousel'

export const ProjectCarouselItem = styled.div`
  /* height: ${shevy.baseSpacing(9)}; */
  height: inherit;
  margin-right: ${shevy.baseSpacing(1)};
  /* box-shadow: 0 0 1px rgba(0, 0, 0, 0.2); */

  img { 
    height: 100%;
    width: auto;
    display: block;
  }
`
ProjectCarouselItem.displayName = 'ProjectCarouselItem'

export const ProjectListItem = styled.li`
  margin-top: ${shevy.baseSpacing(1)};
  padding-bottom: ${shevy.baseSpacing(1)};
  border-bottom: 1px solid ${themeValue('colors.secondary.pale')};

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
  color: ${themeValue('colors.secondary.interaction')};

  small {
    font-weight: 700;
    color: ${themeValue('colors.foreground')};
    font-family: ${themeValue('typography.sans')};
    font-style: normal;
  }

  span[aria-hidden] {
    margin: 0 ${shevy.baseSpacing(0.5)};
    font-size: 80%;
  }
`
ProjectListName.displayName = 'ProjectListName'

export const ProjectList = styled.ul``
ProjectList.displayName = 'ProjectList'
ProjectList.propTypes = {
  children: PropTypes.node.isRequired,
}
