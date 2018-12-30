import styled from 'styled-components'

import { media, shevy, themeValue } from './theme'
import { H2, P } from './Typography'

export const ContainerTitle = styled(H2)`
  font-size: ${shevy.body.fontSize};
  line-height: ${shevy.body.lineHeight};
  margin-bottom: 0;
  font-family: ${themeValue('typography.sans')};

  ${media.medium`
    font-size: ${shevy.h5.fontSize};
    line-height: ${shevy.h5.lineHeight};
  `};
`
ContainerTitle.displayName = 'ContainerTitle'

export const ContainerContent = styled.div`
  margin: ${shevy.baseSpacing(1)} 0 0;

  ${P} {
    font-size: ${shevy.h4.fontSize};
    line-height: ${shevy.h4.lineHeight};
  }

  ${media.medium`
    margin: ${shevy.baseSpacing(2)} 0 0;

    ${P} {
      font-size: ${shevy.h2.fontSize};
      line-height: ${shevy.h2.lineHeight};
    }
  `};
`
ContainerContent.displayname = 'ContainerContent'

export const Container = styled.section`
  padding: ${shevy.baseSpacing(0.5)} 0 ${shevy.baseSpacing(4)};
  border-top: 3px solid black;

  ${media.medium`padding: ${shevy.baseSpacing(0.5)} 0 ${shevy.baseSpacing(10)};`};
`
Container.displayName = 'Container'
