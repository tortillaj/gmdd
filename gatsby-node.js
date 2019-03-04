const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const projectPage = path.resolve('./src/templates/project.js')
    return graphql(`{
            allFile(
    filter:{sourceInstanceName: { eq: "projects" }}
  ) {
    edges {
      node {
        sourceInstanceName
        childMarkdownRemark {
          frontmatter {
            route
            summary
          }
        }
      }
    }
  }}`,
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }

      const posts = result.data.allFile.edges
      posts.forEach((post, index) => {
        if (post.node.childMarkdownRemark) {
          createPage({
            path: `/${post.node.childMarkdownRemark.frontmatter.route}`,
            component: projectPage,
            context: {
              ...post.node.childMarkdownRemark.frontmatter,
            },
          })
        }
      })

      return resolve()
    })
  })
}
