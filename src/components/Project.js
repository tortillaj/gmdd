import styled from 'styled-components'

import { media, shevy } from './theme'
import { P, WYSIWYG } from './Typography'

export const ProjectIntro = styled.div`
  ${media.medium`flex: 1;`}
`
ProjectIntro.displayName = 'ProjectIntro'

export const ProjectIntroLead = styled.div`
  ${media.medium`flex: 1;`};

  p {
    font-size: ${shevy.h4.fontSize};
    line-height: ${shevy.h4.lineHeight};
    margin-bottom: ${shevy.baseSpacing(1)};

    ${media.medium`
      font-size: ${shevy.h2.fontSize};
      line-height: ${shevy.h2.lineHeight};
      margin-bottom: ${shevy.baseSpacing(3)};
    `};
  }
`
ProjectIntroLead.displayName = 'ProjectIntroLead'

export const ProjectIntroInfo = styled(WYSIWYG)`
  p {
    ${media.medium`font-size: ${shevy.h4.fontSize};`}
  }
`
ProjectIntroInfo.displayName = 'ProjectIntroInfo'

export const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${shevy.baseSpacing(2)};

  ${media.medium`
    flex-direction: row;
    align-items: flex-end;
    margin-top: ${shevy.baseSpacing(3)};
  `}
`
ProjectHeader.displayName = 'ProjectHeader'

export const ProjectMetaContainer = styled.dl`
  display: flex;
  justify-content: space-between;

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
