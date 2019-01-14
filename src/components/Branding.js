import React from 'react'
import styled, { css } from 'styled-components'

import { media, shevy, themeValue } from './theme'
import { Inset } from './Inset'
import { P } from './Typography'

export const BrandingMotto = styled(P)`
  display: inline-block;
  font-size: ${shevy.body.fontSize};
  line-height: 1;
  width: ${shevy.baseSpacing(8.5)};
  font-weight: 600;
  text-transform: uppercase;
  margin: 0 0 0 ${shevy.baseSpacing(0.5)};
  color: ${themeValue('colors.primary.highlight')};
`
BrandingMotto.displayName = 'BrandingMotto'

const BrandingWrapper = styled.header`
  margin-bottom: ${shevy.baseSpacing(1)};
  ${props => !props.large && css`background-color: ${themeValue('colors.foreground')};`}
`
BrandingWrapper.displayName = 'BrandingWrapper'

const BrandingInner = styled.div`
  padding-top: ${props =>
    props.large ? shevy.baseSpacing(2) : shevy.baseSpacing(0.5)};
  padding-bottom: ${props =>
    props.large ? shevy.baseSpacing(4) : shevy.baseSpacing(0.5)};

  ${props =>
    props.large &&
    css`
      border-top: 3px solid ${themeValue('colors.foreground')};
      display: flex;
      flex-direction: column;
      align-items: center;
    `}

  ${media.medium`
    padding-top: ${props =>
      props.large ? shevy.baseSpacing(4) : shevy.baseSpacing(0.5)};
    padding-bottom: ${props =>
      props.large ? shevy.baseSpacing(10) : shevy.baseSpacing(0.5)};
  `};
`
BrandingInner.displayName = 'BrandingInner'

export const Branding = ({ large, children, className }) => (
  <BrandingWrapper className={className} large={large}>
    <Inset>
      <BrandingInner large={large}>{children}</BrandingInner>
    </Inset>
  </BrandingWrapper>
)
