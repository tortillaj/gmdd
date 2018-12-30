import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import { theme } from '../theme'
import { GlobalStyle } from '../GlobalStyle'
import { Helmet } from '../Helmet'
import { Inset } from '../Inset'
import { SiteHeader, SiteFooter, SiteMain, Wrapper } from '../Chrome'

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

                  <SiteFooter />
                </Wrapper>
              </Fragment>
            )}
          />
        </Fragment>
      </ThemeProvider>
    )
  }
}
