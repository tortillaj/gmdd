import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { media, shevy, themeValue } from './theme'
import { Strong } from './Typography'
import { Inset } from './Inset'

export const Wrapper = styled.article`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`
Wrapper.displayName = 'Wrapper'

export const Main = styled.main`
  flex: 1;
`
Main.displayName = 'Main'
Main.propTypes = {
  children: PropTypes.node.isRequired,
}

const FooterWrapper = styled.footer`
  color: ${themeValue('colors.background')};
  background-color: ${themeValue('colors.foreground')};
  height: ${shevy.baseSpacing(4)};
  padding: ${shevy.baseSpacing(0.5)} 0;

  ${Inset} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ${Strong} {
    text-transform: uppercase;
  }
`
FooterWrapper.displayName = 'FooterWrapper'

export const Footer = () => (
  <FooterWrapper>
    <Inset>
      <Strong>(802) 456-0013</Strong>
      <Strong>Calais, Vermont</Strong>
    </Inset>
  </FooterWrapper>
)
