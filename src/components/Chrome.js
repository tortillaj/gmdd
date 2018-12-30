import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { media, shevy, themeValue } from './theme'
import { P } from './Typography'
import { Inset } from './Inset'

export const Wrapper = styled.article`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`
Wrapper.displayName = 'Wrapper'

export const SiteMain = styled.main`
  flex: 1;
  margin: ${shevy.baseSpacing(1)} 0;
  
  ${media.large`margin: ${shevy.baseSpacing(2)} 0;`}
`
SiteMain.displayName = 'SiteMain'
SiteMain.propTypes = {
  children: PropTypes.node.isRequired,
}

export const SiteHeader = styled.header`
  display: flex;
  color: ${themeValue('colors.background')};
  background-color: ${themeValue('colors.foreground')};
  padding: ${shevy.baseSpacing(0.5)} 0;

  ${media.large`padding: ${shevy.baseSpacing(1)} 0;`}
`
SiteHeader.displayName = 'SiteHeader'

const Footer = styled.footer`
  color: ${themeValue('colors.background')};
  background-color: ${themeValue('colors.foreground')};
  height: ${shevy.baseSpacing(10)};
  padding: ${shevy.baseSpacing(0.5)} 0;

  ${P} {
    font-size: ${shevy.h5.fontSize};
    line-height: ${shevy.h5.lineHeight};
    margin: 0;
  }
`
Footer.displayName = 'Footer'

export const SiteFooter = () => (
  <Footer>
    <Inset>
      <P>Calais, Vermont</P>
    </Inset>
  </Footer>
)
