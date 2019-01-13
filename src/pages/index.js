import React from 'react'
import { graphql } from 'gatsby'

import {
  BlankLayout,
  Branding,
  Callout,
  Container,
  ContainerContent,
  ContainerTitle,
  Em,
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
  Footer,
} from '../components'
import { Logo } from '../components/Logo'

const IndexPage = ({
  data: {
    allContentfulProject: { edges },
  },
}) => (
  <BlankLayout>
    <Branding large>
      <Logo />
    </Branding>

    <Main>
      <Inset>
        <Container>
          <ContainerTitle>About</ContainerTitle>

          <ContainerContent>
            <Callout>
              Located in beautiful Vermont,{' '}
              <Em>Green Mountain Design &amp; Development</Em> is a custom web
              design and development shop. We excel in identifying and defining
              the unique qualities of our clients. Let us help you succeed.
            </Callout>
          </ContainerContent>
        </Container>

        <Container>
          <ContainerTitle>Projects</ContainerTitle>

          <ContainerContent>
            <ProjectList>
              {edges.map(project => {
                return (
                  <ProjectListItem key={project.node.id}>
                    <ProjectLink to={`project/${project.node.slug}`}>
                      <ProjectListHeader>
                        <ProjectListName>
                          {project.node.client.name}
                        </ProjectListName>
                        <ProjectView>View the project</ProjectView>
                      </ProjectListHeader>

                      <ProjectCarousel>
                        {project.node.carousel.map(image => (
                          <ProjectCarouselItem key={image.resize.src}>
                            <img
                              src={image.resize.src}
                              alt={image.title}
                              height={image.height}
                            />
                          </ProjectCarouselItem>
                        ))}
                      </ProjectCarousel>
                    </ProjectLink>
                  </ProjectListItem>
                )
              })}
            </ProjectList>
          </ContainerContent>
        </Container>
      </Inset>
    </Main>

    <Footer />
  </BlankLayout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allContentfulProject(sort: { fields: projectDate, order: DESC }) {
      edges {
        node {
          id
          title
          slug
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
