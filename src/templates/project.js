import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import {
  FullPageLayout,
  H2,
  Inset,
  P,
  ProjectHeader,
  ProjectInfo,
  ProjectIntro,
  ProjectIntroInfo,
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
} from '../components'

export default ({ data: { markdownRemark } }) => (
  <FullPageLayout title={markdownRemark.frontmatter.name} headerBackgroundColor="colors.primary.interaction">
    <ProjectHeader backgroundColor="colors.primary.base">
      <Inset>
        <ProjectTitle>
          {markdownRemark.frontmatter.client}
        </ProjectTitle>

        <ProjectInfo>
          <ProjectIntro>
            <ProjectIntroLead>
              {markdownRemark.frontmatter.summary}
            </ProjectIntroLead>
            <ProjectIntroInfo
              dangerouslySetInnerHTML={{
                __html: markdownRemark.html,
              }}
            />
          </ProjectIntro>

          <ProjectMetaContainer>
            {markdownRemark.frontmatter.industry && (
              <ProjectMeta>
                <ProjectMetaLabel>Industry</ProjectMetaLabel>
                <ProjectMetaContent>
                  {markdownRemark.frontmatter.industry.map(industry => (
                    <P key={industry}>{industry}</P>
                  ))}
                </ProjectMetaContent>
              </ProjectMeta>
            )}

            {markdownRemark.frontmatter.platform && (
              <ProjectMeta>
                <ProjectMetaLabel>Platform</ProjectMetaLabel>
                <ProjectMetaContent>
                  {markdownRemark.frontmatter.platform.map(format => (
                    <P key={format}>{format}</P>
                  ))}
                </ProjectMetaContent>
              </ProjectMeta>
            )}

            {markdownRemark.frontmatter.technology && (
              <ProjectMeta>
                <ProjectMetaLabel>Technology</ProjectMetaLabel>
                <ProjectMetaContent>
                  {markdownRemark.frontmatter.technology.map(tech => (
                    <P key={tech}>{tech}</P>
                  ))}
                </ProjectMetaContent>
              </ProjectMeta>
            )}

            {markdownRemark.frontmatter.deliverables && (
              <ProjectMeta>
                <ProjectMetaLabel>Deliverables</ProjectMetaLabel>
                <ProjectMetaContent>
                  {markdownRemark.frontmatter.deliverables.map(deliverable => (
                    <P key={deliverable}>{deliverable}</P>
                  ))}
                </ProjectMetaContent>
              </ProjectMeta>
            )}

            {markdownRemark.frontmatter.timeline && (
              <ProjectMeta>
                <ProjectMetaLabel>Engagement timeline</ProjectMetaLabel>
                <ProjectMetaContent>
                  {markdownRemark.frontmatter.timeline.map(time => (
                    <P key={time}>{time}</P>
                  ))}
                </ProjectMetaContent>
              </ProjectMeta>
            )}
          </ProjectMetaContainer>
        </ProjectInfo>
      </Inset>
    </ProjectHeader>

    {markdownRemark.frontmatter.sections && (
      <Sections>
        {markdownRemark.frontmatter.sections.map((section, id) => {
          switch (section.type) {
            case 'SectionImage': {
              return (
                <SectionImage key={id}>
                  <Img
                    fluid={section.largeImage.src.childImageSharp.fluid}
                    alt={section.largeImage.alt}
                    longdesc={section.largeImage.description}
                  />
                </SectionImage>
              )
            }
            case 'SectionCopy': {
              return (
                <SectionCopy key={id}>

                  <H2 align="center">{section.title}</H2>
                  <SectionCopyText>
                    <P>{section.copy}</P>
                  </SectionCopyText>
                </SectionCopy>
              )
            }
            case 'Carousel': {
              return (
                <SectionCarousel key={id}>
                  {section.carousel.map(image => (
                    <img
                      key={image.childImageSharp.fixed.src}
                      src={image.childImageSharp.fixed}
                      alt={markdownRemark.frontmatter.client}
                    />
                  ))}
                </SectionCarousel>
              )
            }
            case 'SectionImageWithCopy': {
              return (
                <SectionImageWithCopy key={id}>
                  <SectionImageWithCopyImage
                    position={section.imagePosition}
                    fixed={section.smallImage.src.childImageSharp.fixed}
                    alt={section.smallImage.alt}
                    longdesc={section.smallImage.description}
                  />
                  <SectionImageWithCopyText>
                    <H2>{section.title}</H2>
                    <P>
                      {section.copy}
                    </P>
                  </SectionImageWithCopyText>
                </SectionImageWithCopy>
              )
            }
            default:
              return null
          }
        })}
      </Sections>
    )}
  </FullPageLayout>
)

export const pageQuery = graphql`
  query($route: String!) {
    markdownRemark(frontmatter: { route: { eq: $route } }) {
      html
      frontmatter {
        title
        client
        industry
        summary
        platform
        technology
        deliverables
        timeline
        sections {
          type
          imagePosition
          smallImage {
            alt
            src {
              childImageSharp {
                fixed(width: 280) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          largeImage {
            alt
            src {
              childImageSharp {
                fluid(maxWidth: 1100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          copy
          title
        }
      }
    }
  }
`
