import React from 'react'
import { graphql } from 'gatsby'

import {
  Container,
  ContainerContent,
  FullPageLayout,
  H1,
  Inset,
  P,
  ProjectHeader,
  ProjectIntro,
  ProjectMetaContainer,
  ProjectMeta,
  ProjectMetaLabel,
  ProjectMetaContent,
} from '../components'

const ProjectPageTemplate = ({ data: { contentfulProject } }) => (
  <FullPageLayout title={contentfulProject.client.name}>
    {console.log(contentfulProject)}

    <Inset>
      <H1>{contentfulProject.client.name}</H1>

      <ProjectHeader>
        <ProjectIntro dangerouslySetInnerHTML={{ __html: contentfulProject.client.about.childMarkdownRemark.html }} />

        <ProjectMetaContainer>
          {contentfulProject.client.industry && (
            <ProjectMeta>
              <ProjectMetaLabel>Industry</ProjectMetaLabel>
              <ProjectMetaContent>
                {contentfulProject.client.industry.map(industry => <P>{industry}</P>)}
              </ProjectMetaContent>
            </ProjectMeta>
          )}

          {contentfulProject.timeline && (
            <ProjectMeta>
              <ProjectMetaLabel>Engagement timeline</ProjectMetaLabel>
              <ProjectMetaContent>{contentfulProject.timeline.map(time => <P>{time}</P>)}</ProjectMetaContent>
            </ProjectMeta>
          )}

          {contentfulProject.platform && (
            <ProjectMeta>
              <ProjectMetaLabel>Platform</ProjectMetaLabel>
              <ProjectMetaContent>{contentfulProject.platform.map(format => <P>{format}</P>)}</ProjectMetaContent>
            </ProjectMeta>
          )}

          {contentfulProject.technology && (
            <ProjectMeta>
              <ProjectMetaLabel>Technology</ProjectMetaLabel>
              <ProjectMetaContent>
                {contentfulProject.technology.map(tech => <P>{tech}</P>)}
              </ProjectMetaContent>
            </ProjectMeta>
          )}

          {contentfulProject.deliverables && (
            <ProjectMeta>
              <ProjectMetaLabel>Deliverables</ProjectMetaLabel>
              <ProjectMetaContent>
                {contentfulProject.deliverables.map(deliverable => <P>{deliverable}</P>)}
              </ProjectMetaContent>
            </ProjectMeta>
          )}
        </ProjectMetaContainer>
      </ProjectHeader>
    </Inset>
  </FullPageLayout>
)

export default ProjectPageTemplate

export const pageQuery = graphql`
  query ProjectById($id: String!) {
    contentfulProject(id: { eq: $id }) {
      title
      timeline
      deliverables
      platform
      client {
        name
        industry
        about {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
