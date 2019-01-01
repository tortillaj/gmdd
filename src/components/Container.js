import styled from 'styled-components'

import { media, shevy, themeValue } from './theme'
import { H2 } from './Typography'

export const ContainerTitle = styled(H2)`
  font-weight: 600;
  font-size: ${shevy.body.fontSize};
  line-height: ${shevy.body.lineHeight};
  margin-bottom: 0;
  font-family: ${themeValue('typography.sans')};
  text-transform: uppercase;
`
ContainerTitle.displayName = 'ContainerTitle'

export const ContainerContent = styled.div`
  margin: ${shevy.baseSpacing(1)} 0 0;

  ${media.medium`
    margin: ${shevy.baseSpacing(2)} 0 0;
  `};
`
ContainerContent.displayname = 'ContainerContent'

export const Container = styled.section`
  padding: ${shevy.baseSpacing(0.5)} 0 ${shevy.baseSpacing(4)};
  border-top: 3px solid ${themeValue('colors.foreground')};

  ${media.medium`padding: ${shevy.baseSpacing(0.5)} 0 ${shevy.baseSpacing(10)};`};
`
Container.displayName = 'Container'
