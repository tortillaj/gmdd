import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

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

const IndexPage = (
  {
    data: { allMarkdownRemark: { edges } }
  },
) => {

  const [isMobile, setMobile] = useState(false)

  const handleResize = () => {
    if (window.innerWidth > 700) {
      setMobile(false)
    } else {
      setMobile(true)
    }

    console.log(isMobile)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <BlankLayout>
      <Branding large>
        <Logo/>
      </Branding>

      <Main>
        <Inset>
          <Container>
            <ContainerTitle id="about">About</ContainerTitle>

            <ContainerContent>
              <Callout>
                Located in beautiful Vermont,{' '}
                <Em>Green Mountain Design &amp; Development</Em> is a custom web
                design and development agency. We excel in identifying and defining
                the unique qualities of our clients. Let us help you succeed.
              </Callout>
            </ContainerContent>
          </Container>

          <Container>
            <ContainerTitle id="projects">Projects</ContainerTitle>

            <ContainerContent>
              <ProjectList>
                {edges.map(project => {
                  const fm = project.node.frontmatter

                  return (
                    <ProjectListItem
                      key={project.node.id}
                    >
                      <ProjectLink to={`/${fm.route}`}>
                        <ProjectListHeader>
                          <ProjectListName>{fm.client}</ProjectListName>

                          {!isMobile && (
                            <ProjectView>View the project</ProjectView>
                          )}
                        </ProjectListHeader>

                        <ProjectCarousel>
                          {fm.carousel.map(image => (
                            <ProjectCarouselItem
                              key={image.childImageSharp.fixed.src}
                            >
                              <Img fixed={image.childImageSharp.fixed}/>
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

      <Footer/>
    </BlankLayout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query projects {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/md/"}},
      sort: {fields: frontmatter___order, order:ASC})
    {
      edges {
        node {
          id
          frontmatter {
            title
            client
            route
            carousel {
              childImageSharp {
                fixed(height:246) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
