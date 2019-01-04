import styled from 'styled-components'

import { media, shevy, themeValue } from './theme'
import { P } from './Typography'

export const ProjectIntro = styled(P)`
  font-size: ${shevy.h4.fontSize};
  line-height: ${shevy.h4.lineHeight};
  margin: 0;

  ${media.medium`
    flex: 1;
    font-size: ${shevy.h2.fontSize};
    line-height: ${shevy.h2.lineHeight};
  `};
`
ProjectIntro.displayName = 'ProjectIntro'

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
  ${media.medium`
    margin: 0 ${shevy.baseSpacing(2)} 0 0;
    flex-basis: ${shevy.baseSpacing(7)};
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
