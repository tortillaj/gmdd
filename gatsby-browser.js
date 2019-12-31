const { registerLinkResolver } = require('gatsby-source-prismic-graphql')
const { linkResolver } = require('./src/linkResolver')
registerLinkResolver(linkResolver)
