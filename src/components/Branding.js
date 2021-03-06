import React from 'react'
import styled, { css } from 'styled-components'

import { media, shevy, themeValue, fontSize } from './theme'
import { Inset } from './Inset'
import { P } from './Typography'

export const BrandingMotto = styled(P)`
  ${fontSize(6)};
  line-height: 1;
  display: none;
  width: ${shevy.baseSpacing(7)};
  font-weight: 600;
  text-transform: uppercase;
  margin: 0 0 0 ${shevy.baseSpacing(0.5)};
  color: inherit;
  ${media.medium`display: inline-block;`};
`
BrandingMotto.displayName = 'BrandingMotto'

const BrandingWrapper = styled.header`
  ${props =>
    props.large &&
    css`
      margin-bottom: ${shevy.baseSpacing(4)};
    `};
  ${props =>
    props.large &&
    css`
      color: ${themeValue('colors.foreground')};
    `};

  ${props =>
    !props.large &&
    css`
      border-top: 6px solid ${themeValue('colors.foreground')};
      background-color: ${props =>
        props.backgroundColor && themeValue(props.backgroundColor)};
      color: ${themeValue('colors.always.white')};
    `};

  a {
    color: inherit;
  }
`
BrandingWrapper.displayName = 'BrandingWrapper'

const BrandingInner = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${props =>
    props.large ? shevy.baseSpacing(2) : shevy.baseSpacing(0.5)};
  padding-bottom: ${props =>
    props.large ? shevy.baseSpacing(4) : shevy.baseSpacing(0.5)};

  ${media.medium`
    padding-top: ${props =>
      props.large ? shevy.baseSpacing(4) : shevy.baseSpacing(0.5)};
    padding-bottom: ${props =>
      props.large ? shevy.baseSpacing(10) : shevy.baseSpacing(0.5)};
    flex-direction: row;
  `};

  ${props =>
    props.large &&
    css`
      border-top: 6px solid ${themeValue('colors.foreground')};
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}
`
BrandingInner.displayName = 'BrandingInner'

export const Branding = ({ backgroundColor, large, children, className }) => (
  <BrandingWrapper
    className={className}
    large={large}
    backgroundColor={backgroundColor}
  >
    <Inset>
      <BrandingInner large={large}>{children}</BrandingInner>
    </Inset>
  </BrandingWrapper>
)
