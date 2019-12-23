import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-mdx'

import {
  FullPageLayout,
  H2,
  H3,
  Inset,
  P,
  ProjectHeader,
  ProjectInfo,
  ProjectIntro,
  ProjectIntroLead,
  ProjectMetaContainer,
  ProjectMeta,
  ProjectMetaLabel,
  ProjectMetaContent,
  ProjectTitle,
  Sections,
  SectionCarousel,
  SectionCopy,
  SectionCopyText,
  SectionImage,
  SectionImageWithCopy,
  SectionImageWithCopyImage,
  SectionImageWithCopyText,
  MDX_DesignSystem,
} from '../components'

export default ({ data: { mdx } }) => (
  <MDXProvider components={MDX_DesignSystem}>
    <FullPageLayout title={mdx.frontmatter.name} headerBackgroundColor="colors.primary.base">
      {console.log(mdx)}
      <ProjectHeader>
        <Inset>
          <ProjectInfo>
            <ProjectIntro>
              <ProjectTitle>
                {mdx.frontmatter.client}
              </ProjectTitle>

              <ProjectIntroLead>
                {mdx.frontmatter.summary}
              </ProjectIntroLead>

              <Img fixed={mdx.frontmatter.mainImage.childImageSharp.fixed}/>
            </ProjectIntro>

            <div>
              <ProjectMetaContainer>
                {mdx.frontmatter.deliverables && (
                  <ProjectMeta>
                    <ProjectMetaLabel>Deliverables</ProjectMetaLabel>
                    <ProjectMetaContent>
                      {mdx.frontmatter.deliverables.map(deliverable => (
                        <span key={deliverable}>{deliverable}</span>
                      ))}
                    </ProjectMetaContent>
                  </ProjectMeta>
                )}

                {mdx.frontmatter.industry && (
                  <ProjectMeta>
                    <ProjectMetaLabel>Industry</ProjectMetaLabel>
                    <ProjectMetaContent>
                      {mdx.frontmatter.industry.map(industry => (
                        <span key={industry}>{industry}</span>
                      ))}
                    </ProjectMetaContent>
                  </ProjectMeta>
                )}

                {mdx.frontmatter.platform && (
                  <ProjectMeta>
                    <ProjectMetaLabel>Platform</ProjectMetaLabel>
                    <ProjectMetaContent>
                      {mdx.frontmatter.platform.map(format => (
                        <span key={format}>{format}</span>
                      ))}
                    </ProjectMetaContent>
                  </ProjectMeta>
                )}

                {mdx.frontmatter.technology && (
                  <ProjectMeta>
                    <ProjectMetaLabel>Technology</ProjectMetaLabel>
                    <ProjectMetaContent>
                      {mdx.frontmatter.technology.map(tech => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </ProjectMetaContent>
                  </ProjectMeta>
                )}

                {mdx.frontmatter.timeline && (
                  <ProjectMeta>
                    <ProjectMetaLabel>Engagement timeline</ProjectMetaLabel>
                    <ProjectMetaContent>
                      {mdx.frontmatter.timeline.map(time => (
                        <span key={time}>{time}</span>
                      ))}
                    </ProjectMetaContent>
                  </ProjectMeta>
                )}
              </ProjectMetaContainer>
            </div>
          </ProjectInfo>
        </Inset>
      </ProjectHeader>

      <MDXRenderer>{mdx.code.body}</MDXRenderer>
    </FullPageLayout>
  </MDXProvider>
)

export const pageQuery = graphql`
    query($route: String!) {
        mdx(frontmatter: { route: { eq: $route } }) {
            code {
                body
            }
            frontmatter {
                title
                client
                mainImage {
                    childImageSharp {
                        fixed(height: 432, width: 600, cropFocus: NORTH) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
                industry
                summary
                platform
                technology
                deliverables
                timeline
            }
        }
    }
`
