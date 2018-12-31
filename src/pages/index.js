import React from 'react'
import { graphql } from 'gatsby'

import {
  BlankLayout,
  Branding,
  Container,
  ContainerContent,
  ContainerTitle,
  Em,
  Inset,
  P,
  ProjectCarousel,
  ProjectCarouselItem,
  ProjectList,
  ProjectListItem,
  ProjectListName,
  SiteMain,
  SiteFooter,
} from '../components'
import { Logo } from '../components/Logo'

const IndexPage = ({ data: { allContentfulProject: { edges } } }) => (
  <BlankLayout>
    <Branding>
    <Logo />
    </Branding>

    <SiteMain>
      <Inset>
        <Container>
          <ContainerTitle>About</ContainerTitle>

          <ContainerContent>
            <P>
              Located in beautiful Vermont, <Em>Green Mountain Design &amp; Development</Em> is a custom web design and
              development shop.  We excel in identifying and defining the unique qualities of our clients. Let us help you succeed.
            </P>
          </ContainerContent>
        </Container>

        <Container>
          <ContainerTitle>Projects</ContainerTitle>

          <ContainerContent>
            <ProjectList>
              {edges.map(project => {
                return (
                  <ProjectListItem key={project.node.id}>
                    <ProjectListName>
                      {project.node.client.name} 
                      <span aria-hidden="true">&#8594;</span>
                      <small>{project.node.title}</small>
                    </ProjectListName>

                    <ProjectCarousel>
                      {project.node.carousel.map(image => (
                        <ProjectCarouselItem key={image.resize.src}>
                          <img src={image.resize.src} alt={image.title || ''} height={image.height} />
                        </ProjectCarouselItem>
                      ))}
                    </ProjectCarousel>
                  </ProjectListItem>
                )
              })}
            </ProjectList>
          </ContainerContent>
        </Container>
      </Inset>
    </SiteMain>

    <SiteFooter />
  </BlankLayout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allContentfulProject {
      edges {
        node {
          id
          title
          carousel {
            title
            description
            resize(width: 0, height: 200, resizingBehavior: NO_CHANGE) {
              height
              width
              src
            }
          }
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
    }
  }
`
