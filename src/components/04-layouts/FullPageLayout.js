import React, { Fragment } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import { theme } from '../theme'
import { GlobalStyle, Helmet, SiteHeader, SiteFooter, SiteMain } from '../03-organisms'
import { Inset } from '../01-atoms'

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
    const { title } = this.props

    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyle />

          <StaticQuery
            query={graphql`
              query SiteTitleQuery {
                site {
                  siteMetadata {
                    title
                    keywords
                    description
                  }
                }
              }
            `}
            render={data => (
              <Fragment>
                <Helmet title={title} />
                <Wrapper>
                  <SiteHeader>
                    <Inset>
                      {data.site.siteMetadata.title}
                    </Inset>
                  </SiteHeader>

                  <SiteMain>
                    <Inset>{this.props.children}</Inset>
                  </SiteMain>

                  <SiteFooter>
                    <Inset>Here is the Footer</Inset>
                  </SiteFooter>
                </Wrapper>
              </Fragment>
            )}
          />
        </Fragment>
      </ThemeProvider>
    )
  }
}
