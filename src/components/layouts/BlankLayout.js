import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../theme'
import { GlobalStyle } from '../GlobalStyle'
import { Helmet } from '../Helmet'
import { Wrapper } from '../Chrome'

export class BlankLayout extends React.Component {
  render() {
    const { title } = this.props

    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyle />

          <Helmet title={title} />
          <Wrapper>{this.props.children}</Wrapper>
        </Fragment>
      </ThemeProvider>
    )
  }
}
