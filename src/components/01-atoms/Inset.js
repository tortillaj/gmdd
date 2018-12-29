import styled from 'styled-components'

import { themeValue } from '../theme'

export const Inset = styled.div`
  max-width: ${themeValue('layout.siteWidth')};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${themeValue('layout.spacing.large')};
  @media all and (min-width: ${themeValue('sizes.large')}) {
    padding: 0;
  }
`
Inset.displayName = 'Inset'

export const InsetInner = styled.div`
  width: 80%;
  margin: 0 auto;
`
InsetInner.displayName = 'InsetInner'
