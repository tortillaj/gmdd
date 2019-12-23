const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Green Mountain Design & Development',
    keywords: [
      'web development',
      'web design',
      'vermont',
      'custom web development',
    ],
    description:
      'Custom web design and development in the Green Mountains of Vermont',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: path.join(__dirname, 'src', 'projects'),
      },
    },
    'gatsby-mdx',
    'gatsby-remark-copy-linked-files',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        excerpt_separator: `<!-- more -->`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-remark-abbr',
    {
      resolve: 'gatsby-remark-images',
      options: {
        maxWidth: 1170,
        quality: 100,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'ztr7eov',
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Green Mountain Design & Developmenent',
        short_name: 'GMDD',
        start_url: '/',
        background_color: '#2A6437',
        theme_color: '#2A6437',
        display: 'standalone',
        icon: 'src/images/favicon.png',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
