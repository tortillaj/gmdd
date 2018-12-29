import React, { Fragment } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { theme } from '../theme'
import { GlobalStyle, SiteHeader, SiteFooter, SiteMain } from '../03-organisms'

const Wrapper = styled.article`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`
Wrapper.displayName = 'FullPageLayoutWrapper'

export class FullPageLayout extends React.Component {
  static Header = SiteHeader
  static Main = SiteMain
  static Footer = SiteFooter
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyle />
          <Wrapper>{this.props.children}</Wrapper>
        </Fragment>
      </ThemeProvider>
    )
  }
}
