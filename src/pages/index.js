import React from 'react'

import { FullPageLayout, H1, Inset, P } from '../components'

const IndexPage = () => (
  <FullPageLayout>
    <FullPageLayout.Header>
      <Inset>Here is the header</Inset>
    </FullPageLayout.Header>
    <FullPageLayout.Main>
      <Inset>
        <H1>Hi people</H1>
        <P>Welcome to your new Gatsby site.</P>
        <P>Now go build something great.</P>
      </Inset>
    </FullPageLayout.Main>
    <FullPageLayout.Footer>
      <Inset>Here is the Footer</Inset>
    </FullPageLayout.Footer>
  </FullPageLayout>
)

export default IndexPage
