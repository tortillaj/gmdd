import React from 'react'
import { RichText } from 'prismic-reactjs'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import {
  FullPageLayout,
  ProjectHeader,
  ProjectInfo,
  ProjectIntro,
  ProjectMeta,
  ProjectIntroLead,
  ProjectTitle,
  Inset,
  ProjectMetaContainer,
  ProjectMetaLabel,
  ProjectMetaContent,
  SectionImage,
  SectionCopy,
  SectionBlockquote,
  SectionImageWithCopy,
  SectionCarousel,
  WYSIWYG,
} from '../components'

export const query = graphql`
  query ProjectQuery($uid: String) {
    prismic {
      allProjects(uid: $uid) {
        edges {
          node {
            body1 {
              ... on PRISMIC_ProjectBody1Facebook__open_graph_ {
                type
                label
                primary {
                  imageSharp {
                    childImageSharp {
                      fixed(height: 250, width: 375, cropFocus: NORTH) {
                        src
                      }
                    }
                  }
                  image
                  section
                  tags
                  type
                }
              }
            }
            _meta {
              type
              id
              uid
              lang
              lastPublicationDate
              firstPublicationDate
            }
            meta_title
            meta_description
            canonical_url
            project_name
            client_name
            summary
            project_details
            engagement_timeline
            technologies
            industry
            platform
            deliverables
            main_image
            main_imageSharp {
              childImageSharp {
                fixed(height: 432, width: 600, cropFocus: NORTH) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            body {
              ... on PRISMIC_ProjectBodyCarousel {
                type
                carousel_fields: fields {
                  image
                  imageSharp {
                    childImageSharp {
                      fixed(height: 200) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                }
              }
              ... on PRISMIC_ProjectBodyImage_with_copy {
                type
                image_with_copy_primary: primary {
                  content
                  image_position
                  image
                  imageSharp {
                    childImageSharp {
                      fixed(width: 280) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                }
              }
              ... on PRISMIC_ProjectBodyFullWidth_image {
                type
                fullwidth_image_primary: primary {
                  image
                  imageSharp {
                    childImageSharp {
                      fluid(maxWidth: 1100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
              ... on PRISMIC_ProjectBodyQuote {
                type
                quote_primary: primary {
                  citation
                  content
                }
              }
              ... on PRISMIC_ProjectBodyMultiColumn_text {
                type
                label
                multicolumn_text_primary: primary {
                  column_count
                  content
                }
              }
            }
          }
        }
      }
    }
  }
`

export default ({ data }) => {
  const doc = data.prismic.allProjects.edges.slice(0, 1)
    .pop()
  if (!doc) return null
  const page = doc.node
  const openGraph = page.body1 ? page.body1[0].primary : null
  const tags = openGraph
    ? `${page.deliverables}, ${page.technologies}, ${openGraph.tags}`
    : `${page.deliverables}, ${page.technologies}`
  const tagList = tags.split(',')
    .map(tag => ({
      property: 'article:tag',
      content: tag,
    }))

  return (
    <FullPageLayout
      title={doc.node.client_name}
      headerBackgroundColor="colors.primary.base"
      pageMeta={[
        { name: 'description', content: page.meta_description },
        { property: 'og:type', content: openGraph ? openGraph.type : '' },
        { property: 'og:description', content: page.meta_description },
        { property: 'og:image', content: openGraph && openGraph.imageSharp
            ? `https://greenmountain.design${openGraph.imageSharp.childImageSharp.fixed.src}`
            : '' },
        { property: 'og:image:width', content: 375 },
        { property: 'og:image:height', content: 250 },
        { property: 'article:section', content: openGraph ? openGraph.section : '' },
        { property: 'article:published_time', content: page._meta.firstPublicationDate },
        { property: 'article:revised_time', content: page._meta.lastPublicationDate },
        { name: 'language', content: page._meta.lang },
        { name: 'revised', content: page._meta.lastPublicationDate },
      ].concat(tagList)}
    >
      <ProjectHeader>
        <Inset>
          <ProjectInfo>
            <ProjectIntro>
              <ProjectTitle>
                {doc.node.project_name}, {doc.node.client_name}
              </ProjectTitle>

              <ProjectIntroLead>{doc.node.summary}</ProjectIntroLead>

              <Img
                fixed={doc.node.main_imageSharp.childImageSharp.fixed}
                alt={doc.node.main_image.alt}
              />
            </ProjectIntro>

            <div>
              <ProjectMetaContainer>
                {doc.node.deliverables && (
                  <ProjectMeta>
                    <ProjectMetaLabel>Deliverables</ProjectMetaLabel>
                    <ProjectMetaContent>
                      {doc.node.deliverables}
                    </ProjectMetaContent>
                  </ProjectMeta>
                )}

                {doc.node.industry && (
                  <ProjectMeta>
                    <ProjectMetaLabel>Industry</ProjectMetaLabel>
                    <ProjectMetaContent>{doc.node.industry}</ProjectMetaContent>
                  </ProjectMeta>
                )}

                {doc.node.platform && (
                  <ProjectMeta>
                    <ProjectMetaLabel>Platform</ProjectMetaLabel>
                    <ProjectMetaContent>{doc.node.platform}</ProjectMetaContent>
                  </ProjectMeta>
                )}

                {doc.node.technologies && (
                  <ProjectMeta>
                    <ProjectMetaLabel>Technology</ProjectMetaLabel>
                    <ProjectMetaContent>
                      {doc.node.technologies}
                    </ProjectMetaContent>
                  </ProjectMeta>
                )}

                {doc.node.engagement_timeline && (
                  <ProjectMeta>
                    <ProjectMetaLabel>Engagement timeline</ProjectMetaLabel>
                    <ProjectMetaContent>
                      {doc.node.engagement_timeline}
                    </ProjectMetaContent>
                  </ProjectMeta>
                )}
              </ProjectMetaContainer>
            </div>
          </ProjectInfo>
        </Inset>
      </ProjectHeader>

      <SectionCopy backgroundColor="colors.accent.pale">
        <RichText render={doc.node.project_details} />
      </SectionCopy>

      {doc.node.body &&
      doc.node.body.map((section, index) => {
        switch (section.type) {
          case 'quote':
            return (
              <SectionBlockquote
                key={`${section.type}-${index}`}
                citation={section.quote_primary.citation}
                content={section.quote_primary.content}
              />
            )
          case 'image_with_copy':
            return (
              <SectionImageWithCopy
                key={`${section.type}-${index}`}
                fixed={
                  section.image_with_copy_primary.imageSharp.childImageSharp
                    .fixed
                }
                alt={section.image_with_copy_primary.image.alt}
                imagePosition={section.image_with_copy_primary.image_position.toLowerCase()}
              >
                <RichText render={section.image_with_copy_primary.content}/>
              </SectionImageWithCopy>
            )
          case 'full-width_image':
            return (
              <SectionImage
                key={`${section.type}-${index}`}
                fluid={
                  section.fullwidth_image_primary.imageSharp.childImageSharp
                    .fluid
                }
              />
            )
          case 'carousel':
            return (
              <SectionCarousel
                key={`${section.type}-${index}`}
                images={section.carousel_fields.map(field => ({
                  url: field.image.url,
                  alt: field.image.alt,
                  fixed: field.imageSharp.childImageSharp.fixed,
                }))}
              />
            )
          case 'multicolumn_text':
            return (
              <SectionCopy
                key={`${section.type}-${index}`}
                columns={section.multicolumn_text_primary.column_count}
              >
                <WYSIWYG text={section.multicolumn_text_primary.content}/>
              </SectionCopy>
            )
          default:
            return null
        }
      })}
    </FullPageLayout>
  )
}
