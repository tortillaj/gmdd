import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import {
  FullPageLayout,
  H2,
  Inset,
  InsetInner,
  P,
  ProjectHeader,
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

const ProjectPageTemplate = ({ data: { contentfulProject } }) => (
  <FullPageLayout title={contentfulProject.client.name}>
    <Inset>
      <ProjectTitle>{contentfulProject.client.name}</ProjectTitle>

      <ProjectHeader>
        <ProjectIntro>
          <ProjectIntroLead
            dangerouslySetInnerHTML={{
              __html: contentfulProject.client.about.childMarkdownRemark.html,
            }}
          />
          <ProjectIntroInfo
            dangerouslySetInnerHTML={{
              __html: contentfulProject.intro.childMarkdownRemark.html,
            }}
          />
        </ProjectIntro>

        <ProjectMetaContainer>
          {contentfulProject.client.industry && (
            <ProjectMeta>
              <ProjectMetaLabel>Industry</ProjectMetaLabel>
              <ProjectMetaContent>
                {contentfulProject.client.industry.map(industry => <P key={industry}>{industry}</P>)}
              </ProjectMetaContent>
            </ProjectMeta>
          )}

          {contentfulProject.platform && (
            <ProjectMeta>
              <ProjectMetaLabel>Platform</ProjectMetaLabel>
              <ProjectMetaContent>
                {contentfulProject.platform.map(format => <P key={format}>{format}</P>)}
              </ProjectMetaContent>
            </ProjectMeta>
          )}

          {contentfulProject.technology && (
            <ProjectMeta>
              <ProjectMetaLabel>Technology</ProjectMetaLabel>
              <ProjectMetaContent>
                {contentfulProject.technology.map(tech => <P key={tech}>{tech}</P>)}
              </ProjectMetaContent>
            </ProjectMeta>
          )}

          {contentfulProject.deliverables && (
            <ProjectMeta>
              <ProjectMetaLabel>Deliverables</ProjectMetaLabel>
              <ProjectMetaContent>
                {contentfulProject.deliverables.map(deliverable => <P key={deliverable}>{deliverable}</P>)}
              </ProjectMetaContent>
            </ProjectMeta>
          )}

          {contentfulProject.timeline && (
            <ProjectMeta>
              <ProjectMetaLabel>Engagement timeline</ProjectMetaLabel>
              <ProjectMetaContent>
                {contentfulProject.timeline.map(time => <P key={time}>{time}</P>)}
              </ProjectMetaContent>
            </ProjectMeta>
          )}

        </ProjectMetaContainer>
      </ProjectHeader>
    </Inset>

    {contentfulProject.sections && (
      <Sections>
        {contentfulProject.sections.map(section => {
          if (section.internal) {
            switch (section.internal.type) {
              case 'ContentfulSectionImage': {
                return (
                  <SectionImage key={section.id}>
                    <Inset>
                      <Img fluid={section.image.fluid} alt={section.image.title} longdesc={section.image.description} />
                    </Inset>
                  </SectionImage>
                )
              }
              case 'ContentfulSectionCopy': {
                return (
                  <SectionCopy key={section.id}>
                    <Inset>
                      <InsetInner>
                        <H2 align="center">{section.title}</H2>
                        <SectionCopyText
                          dangerouslySetInnerHTML={{
                            __html: section.copy.childMarkdownRemark.html,
                          }}
                        />
                      </InsetInner>
                    </Inset>
                  </SectionCopy>
                )
              }
              case 'ContentfulSectionCarousel': {
                return (
                  <SectionCarousel key={section.id}>
                    {section.images.map(image => (
                      <img
                        key={image.resize.src}
                        src={image.resize.src}
                        alt={image.title}
                        height={image.height}
                        longdesc={image.description}
                      />
                    ))}
                  </SectionCarousel>
                )
              }
              case 'ContentfulSectionImageWithCopy': {
                return (
                  <Inset key={section.id}>
                    <InsetInner>
                      <SectionImageWithCopy>
                        <SectionImageWithCopyImage
                          position={section.imagePosition.imagePosition.toLowerCase()}
                          fixed={section.image.fixed}
                          alt={section.image.title}
                          longdesc={section.image.description}
                        />
                        <SectionImageWithCopyText>
                          <H2>{section.title}</H2>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: section.copy.childMarkdownRemark.html,
                            }}
                          />
                        </SectionImageWithCopyText>
                      </SectionImageWithCopy>
                    </InsetInner>
                  </Inset>
                )
              }
              default:
                return null
            }
          } else {
            return null
          }
        })}
      </Sections>
    )}
  </FullPageLayout>
)

export default ProjectPageTemplate

export const pageQuery = graphql`
  fragment SectionImageFragment on ContentfulSectionImage {
    internal {
      type
    }
    id
    title
    image {
      title
      description
      fluid(maxWidth: 1100) {
        ...GatsbyContentfulFluid
      }
    }
  }

  fragment SectionImageWithCopyFragment on ContentfulSectionImageWithCopy {
    internal {
      type
    }
    id
    title
    copy {
      childMarkdownRemark {
        html
      }
    }
    image {
      title
      description
      fixed(width: 340) {
        ...GatsbyContentfulFixed
      }
    }
    imagePosition {
      imagePosition
    }
  }

  fragment SectionCopyFragment on ContentfulSectionCopy {
    internal {
      type
    }
    id
    title
    copy {
      childMarkdownRemark {
        html
      }
    }
  }

  fragment SectionCarouselFragment on ContentfulSectionCarousel {
    internal {
      type
    }
    id
    title
    images {
      title
      description
      resize(width: 0, height: 250, resizingBehavior: NO_CHANGE) {
        height
        width
        src
      }
    }
  }

  query ProjectById($id: String!) {
    contentfulProject(id: { eq: $id }) {
      title
      intro {
        childMarkdownRemark {
          html
        }
      }
      timeline
      deliverables
      platform
      technology
      client {
        name
        industry
        about {
          childMarkdownRemark {
            html
          }
        }
      }
      sections {
        ...SectionCarouselFragment
        ...SectionCopyFragment
        ...SectionImageFragment
        ...SectionImageWithCopyFragment
      }
    }
  }
`
