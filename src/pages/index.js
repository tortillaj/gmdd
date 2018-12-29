import React from 'react'

import { FullPageLayout, H1, P } from '../components'

const IndexPage = () => (
  <FullPageLayout>
    <FullPageLayout.Header>Here is the header</FullPageLayout.Header>
    <FullPageLayout.Main>
      <H1>Hi people</H1>
      <P>Welcome to your new Gatsby site.</P>
      <P>Now go build something great.</P>
    </FullPageLayout.Main>
    <FullPageLayout.Footer>Here is the Footer</FullPageLayout.Footer>
  </FullPageLayout>
)

export default IndexPage
