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
  ProjectList,
  ProjectListItem,
  SiteMain,
  SiteFooter,
} from '../components'
import { Logo } from '../components/Logo'

const IndexPage = ({ data: { allFile: { edges } } }) => (
  <BlankLayout>
    <Branding>
      <Inset>
        <Logo />
      </Inset>
    </Branding>

    <SiteMain>
      <Inset>
        <Container>
          <ContainerTitle>About</ContainerTitle>

          <ContainerContent>
            <P>
              Located in beautiful Vermont, <Em>Green Mountain Design &amp; Development</Em> is a custom web design and
              development shop. We excel in identifying and defining the unique qualities of our clients, and revealing
              those to the world.
            </P>
          </ContainerContent>
        </Container>

        <Container>
          <ContainerTitle>Projects</ContainerTitle>

          <ContainerContent>
            <ProjectList>
            {edges.map(project => {
              console.log(project)
              return (
                <ProjectListItem key={project.node.id}>
                  <h2>{project.node.childMarkdownRemark.frontmatter.title}</h2>
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
    allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
      edges {
        node {
          id
          childMarkdownRemark {
            html
            frontmatter {
              title
              images
            }
          }
        }
      }
    }
  }
`
