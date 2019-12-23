const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const projectPage = path.resolve('./src/templates/project.js')
    return graphql(`
      {
        allMdx(
          filter: {fileAbsolutePath: {regex: "/projects/"}}
        ) {
          edges {
            node {
              frontmatter {
                  route
                  summary
                }
            }
          }
        }
      }`,
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }

      const posts = result.data.allMdx.edges.forEach((post, index) => {
        createPage({
          path: `/${post.node.frontmatter.route}`,
          component: projectPage,
          context: {
            ...post.node.frontmatter,
          },
        })
      })

      return resolve()
    })
  })
}
