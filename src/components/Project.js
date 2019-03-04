import styled, { css } from 'styled-components'

import {
  media,
  shevy,
  themeValue,
} from './theme'
import {
  H1,
  P,
  WYSIWYG,
} from './Typography'

export const ProjectHeader = styled.header`
  ${props => props.backgroundColor && css`background-color: ${themeValue(props.backgroundColor)}`};
  padding: ${shevy.baseSpacing(3)} 0;
  color: ${themeValue('colors.always.white')};
  
  ${media.large`padding: ${shevy.baseSpacing(7)} 0 ${shevy.baseSpacing(5)};`};
`
ProjectHeader.displayName = 'ProjectHeader'

export const ProjectTitle = styled(H1)`
  ${media.medium`max-width: 60%;`}
`
ProjectTitle.displayName = 'ProjectTitle'

export const ProjectIntro = styled.div`
  ${media.medium`flex: 1;`}
`
ProjectIntro.displayName = 'ProjectIntro'

export const ProjectIntroLead = styled.p`
  ${media.medium`flex: 1;`};
   font-size: ${shevy.h4.fontSize};
   line-height: ${shevy.h4.lineHeight};
   margin-bottom: ${shevy.baseSpacing(1)};

   ${media.medium`
     font-size: ${shevy.h2.fontSize};
     line-height: ${shevy.h2.lineHeight};
     margin-bottom: ${shevy.baseSpacing(3)};
    `};
`
ProjectIntroLead.displayName = 'ProjectIntroLead'

export const ProjectIntroInfo = styled(WYSIWYG)`
  p {
    ${media.medium`font-size: ${shevy.h4.fontSize};`}
  }
`
ProjectIntroInfo.displayName = 'ProjectIntroInfo'

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${shevy.baseSpacing(2)};

  ${media.medium`
    flex-direction: row;
    align-items: flex-end;
    margin-top: ${shevy.baseSpacing(3)};
  `}
`
ProjectInfo.displayName = 'ProjectInfo'

export const ProjectMetaContainer = styled.dl`
  display: flex;
  flex-wrap: wrap;
  margin: ${shevy.baseSpacing(2)} 0 0;

  ${media.medium`
    display: block;
    margin: 0 ${shevy.baseSpacing(4)} 0 0;
    flex-basis: ${shevy.baseSpacing(12)};
    order: -1;
  `}
`
ProjectMetaContainer.displayName = 'ProjectMetaContainer'

export const ProjectMeta = styled.div`
  margin: ${shevy.baseSpacing(0.75)} 0 0;
  width: 50%;
  
  ${media.small`width: ${shevy.baseSpacing(10)};`};

  ${media.medium`width: auto;`}
`
ProjectMeta.displayName = 'ProjectMeta'

export const ProjectMetaLabel = styled.dt`
  font-weight: 600;
`
ProjectMetaLabel.displayName = 'ProjectMetaLabel'

export const ProjectMetaContent = styled.dd`
  ${P} {
    margin: 0;
  }
`
ProjectMetaContent.displayName = 'ProjectMetaContent'
