import React from 'react'
import { graphql } from 'gatsby'

import { Callout, Container, ContainerContent, Inset, H1, FullPageLayout } from '../components'

const ProjectPageTemplate = ({ data: { contentfulProject } }) => (
  <FullPageLayout title={contentfulProject.client.name}>
    <Inset>
      <H1>{contentfulProject.client.name}</H1>
    </Inset>

    <Inset>
      <Container>
        <ContainerContent>
          <Callout dangerouslySetInnerHTML={{ __html: contentfulProject.client.about.childMarkdownRemark.html }} />
        </ContainerContent>
      </Container>
    </Inset>
  </FullPageLayout>
)

export default ProjectPageTemplate

export const pageQuery = graphql`
  query ProjectById($id: String!) {
    contentfulProject(id: { eq: $id }) {
      title
      client {
        name
        about {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
