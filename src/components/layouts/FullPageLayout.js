import React, { Fragment } from 'react'
import { ThemeProvider, ThemeConsumer } from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'

import { theme } from '../theme'
import { GlobalStyle } from '../GlobalStyle'
import { Helmet } from '../Helmet'
import { Footer, Main, Wrapper } from '../Chrome'
import { CondensedLogo } from '../Logo'
import { Branding, BrandingMotto } from '../Branding'

export class FullPageLayout extends React.Component {
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
              <ThemeConsumer>
                {theme => (
                  <Fragment>
                    <Helmet title={title} />
                    <Wrapper>
                      <Branding>
                        <Link to="/">
                          <CondensedLogo
                            color={theme.colors.primary.base}
                            height={24}
                          />
                        </Link>
                        <BrandingMotto>
                          {data.site.siteMetadata.title}
                        </BrandingMotto>
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
