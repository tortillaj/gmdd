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
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: 'gmdd',
        pages: [
          {
            type: 'Project',
            match: '/projects/:uid',
            path: '/project',
            component: require.resolve('./src/templates/project.js'),
          },
          {
            type: 'Page',
            match: '/pages/:uid',
            path: '/page',
            component: require.resolve('./src/templates/page.js'),
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
