const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const projectPage = path.resolve('./src/templates/project.js')
    resolve(
      graphql(
        `
          {
            allContentfulProject {
              edges {
                node {
                  id
                  title
                  slug
                }
              }
            }
          }
          `,
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulProject.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/project/${post.node.slug}/`,
            component: projectPage,
            context: {
              ...post.node,
            },
          })
        })
      }),
    )
  })
}
