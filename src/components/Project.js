import styled from 'styled-components'

import {
  media,
  shevy,
  themeValue,
  fontSize,
} from './theme'
import {
  H1,
  P,
} from './Typography'

export const ProjectHeader = styled.header`
  padding: ${shevy.baseSpacing(1)} 0 0;
  
  ${media.large`padding: ${shevy.baseSpacing(3)} 0 0`};
`
ProjectHeader.displayName = 'ProjectHeader'

export const ProjectTitle = styled(H1)``
ProjectTitle.displayName = 'ProjectTitle'

export const ProjectIntro = styled.div`
  ${media.medium`flex: 1;`}
`
ProjectIntro.displayName = 'ProjectIntro'

export const ProjectIntroLead = styled.h2`
  ${media.medium`flex: 1;`};
   font-size: ${shevy.h4.fontSize};
   line-height: ${shevy.h4.lineHeight};
   margin-bottom: ${shevy.baseSpacing(1)};
`
ProjectIntroLead.displayName = 'ProjectIntroLead'

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;

  ${media.medium`
    flex-direction: row;
  `}
`
ProjectInfo.displayName = 'ProjectInfo'

export const ProjectMetaContainer = styled.dl`
  margin: ${shevy.baseSpacing(2)} 0 0;
  padding: ${shevy.baseSpacing(1)};
  background-color: ${themeValue('colors.backgroundDark')};
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  
  span {
    display: block;
    margin-top: ${shevy.baseSpacing(0.25)};
  }

  ${media.medium`
    display: block;
    column-count: 2;
    column-gap: ${shevy.baseSpacing(1)};
    margin: 0 0 0 ${shevy.baseSpacing(4)};
    flex-basis: ${shevy.baseSpacing(12)};
  `}
`
ProjectMetaContainer.displayName = 'ProjectMetaContainer'

export const ProjectMeta = styled.div`
  margin: 0 0 ${shevy.baseSpacing(0.75)};
  break-inside: avoid;
`
ProjectMeta.displayName = 'ProjectMeta'

export const ProjectMetaLabel = styled.dt`
  font-weight: 600;
  text-transform: uppercase;
`
ProjectMetaLabel.displayName = 'ProjectMetaLabel'

export const ProjectMetaContent = styled.dd`
  ${P} {
    margin: 0;
  }
`
ProjectMetaContent.displayName = 'ProjectMetaContent'
