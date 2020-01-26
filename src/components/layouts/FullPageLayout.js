import React, { Fragment } from 'react'
import { ThemeProvider, ThemeConsumer } from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'

import { theme } from '../theme'
import { GlobalStyle } from '../GlobalStyle'
import { Helmet } from '../Helmet'
import { Footer, Main, Wrapper } from '../Chrome'
import { CondensedLogo } from '../Logo'
import { Branding, BrandingMotto } from '../Branding'
import { MainMenu, MainMenuItem } from '../MainMenu'

export class FullPageLayout extends React.Component {
  render() {
    const { title, headerBackgroundColor, pageMeta } = this.props

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
              <ThemeConsumer>
                {theme => (
                  <Fragment>
                    <Helmet title={title} pageMeta={pageMeta} />
                    <Wrapper>
                      <Branding backgroundColor={headerBackgroundColor}>
                        <Link to="/">
                          <CondensedLogo
                            color={theme.colors.always.white}
                            height={24}
                          />
                          <BrandingMotto>
                            {data.site.siteMetadata.title}
                          </BrandingMotto>
                        </Link>

                        <MainMenu>
                          <MainMenuItem to="/#about">About</MainMenuItem>
                          <MainMenuItem to="/#projects">Projects</MainMenuItem>
                        </MainMenu>
                      </Branding>

                      <Main>{this.props.children}</Main>

                      <Footer />
                    </Wrapper>
                  </Fragment>
                )}
              </ThemeConsumer>
            )}
          />
        </Fragment>
      </ThemeProvider>
    )
  }
}
