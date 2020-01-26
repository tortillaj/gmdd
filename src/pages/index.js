import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { RichText } from 'prismic-reactjs'

import linkResolver from '../linkResolver'
import {
  BlankLayout,
  Branding,
  Callout,
  Container,
  ContainerContent,
  ContainerTitle,
  Inset,
  ProjectCarousel,
  ProjectCarouselItem,
  ProjectListHeader,
  ProjectLink,
  ProjectList,
  ProjectListItem,
  ProjectListName,
  ProjectView,
  Main,
  SectionCTA,
  Footer,
} from '../components'
import { Logo } from '../components/Logo'

export const query = graphql`
  query HomepageQuery {
    prismic {
      page(uid: "homepage", lang: "en-us") {
        title
        meta_title
        meta_description
        canonical_url
        _meta {
          lang
          lastPublicationDate
          firstPublicationDate
        }
        body1 {
          ... on PRISMIC_PageBody1Facebook__open_graph_ {
            primary {
              section
              tags
              type
              imageSharp {
                childImageSharp {
                  fixed(width: 300, height: 250) {
                    src
                  }
                }
              }
            }
          }
        }
        body {
          ... on PRISMIC_PageBodyCta_banner {
            type
            primary {
              image_banner
              image_bannerSharp {
                childImageSharp {
                  fixed(height: 498) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
              banner_text
              banner_title
              cta_label
              cta_link {
                ... on PRISMIC__ExternalLink {
                  url
                }
              }
            }
          }
          ... on PRISMIC_PageBodyProject_list {
            type
            primary {
              section_title
            }
            fields {
              project {
                ... on PRISMIC_Project {
                  _meta {
                    type
                    id
                    uid
                  }
                  project_name
                  client_name
                  featured_images {
                    image
                    imageSharp {
                      childImageSharp {
                        fixed(height: 374) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          ... on PRISMIC_PageBodyContent {
            type
            primary {
              section_title
              content
            }
          }
        }
      }
    }
  }
`

export default ({ data }) => {
  const page = data.prismic.page
  const openGraph = page.body1[0].primary

  return (
    <BlankLayout title={page.meta_title}
                 pageMeta={[
                   { name: 'description', content: page.meta_description },
                   { property: 'og:type', content: openGraph.type },
                   { property: 'og:description', content: page.meta_description },
                   { property: 'article:section', content: openGraph.section },
                   { property: 'article:tags', content: openGraph.tags },
                   { property: 'article:published_time', content: page._meta.firstPublicationDate },
                   { property: 'article:revised_time', content: page._meta.lastPublicationDate },
                   { name: 'language', content: page._meta.lang },
                   { name: 'revised', content: page._meta.lastPublicationDate },
                 ]}>
      <Branding large>
        <Logo/>
      </Branding>

      <Main>
        <Inset>
          {page.body.map((section, index) => (
            <React.Fragment key={`${section.type}-${index}`}>
              {section.type === 'content' && (
                <Container>
                  <RichText
                    render={section.primary.section_title}
                    Component={ContainerTitle}
                    id={`${section.type}-${index}`}
                  />

                  <ContainerContent>
                    <RichText
                      render={section.primary.content}
                      Component={Callout}
                    />
                  </ContainerContent>
                </Container>
              )}

              {section.type === 'project_list' && (
                <Container>
                  <RichText
                    render={section.primary.section_title}
                    Component={ContainerTitle}
                    id={`${section.type}-${index}`}
                  />

                  <ContainerContent>
                    <ProjectList>
                      {section.fields &&
                      section.fields.map(field => (
                        <ProjectListItem key={field.project._meta.uid}>
                          <ProjectLink to={linkResolver(field.project._meta)}>
                            <ProjectListHeader>
                              <ProjectListName>
                                {field.project.project_name},{' '}
                                {field.project.client_name}
                              </ProjectListName>
                              <ProjectView>View the project</ProjectView>
                            </ProjectListHeader>

                            <ProjectCarousel>
                              {field.project.featured_images.map(
                                featured_image => (
                                  <ProjectCarouselItem
                                    key={featured_image.image.url}
                                  >
                                    <Img
                                      fixed={
                                        featured_image.imageSharp
                                          .childImageSharp.fixed
                                      }
                                      alt={featured_image.image.alt}
                                    />
                                  </ProjectCarouselItem>
                                ),
                              )}
                            </ProjectCarousel>
                          </ProjectLink>
                        </ProjectListItem>
                      ))}
                    </ProjectList>
                  </ContainerContent>
                </Container>
              )}

              {section.type === 'cta_banner' && (
                <SectionCTA
                  alt={section.primary.image_banner.alt}
                  image={section.primary.image_banner.url}
                  title={section.primary.banner_title}
                  content={section.primary.banner_text}
                  ctaLabel={section.primary.cta_label}
                  ctaLink={section.primary.cta_link.url}
                />
              )}
            </React.Fragment>
          ))}
        </Inset>
      </Main>

      <Footer/>
    </BlankLayout>
  )
}
