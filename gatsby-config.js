module.exports = {
  siteMetadata: {
    title: 'exigo',
    description: '', // TODO
    language: 'en',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-transformer-json',
      options: {
        typeName: 'Json',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'exigo',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399', // TODO
        theme_color: '#663399', // TODO
        display: 'minimal-ui',
        icon: 'src/assets/favicon.png', // TODO
        legacy: true,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-typescript',
  ],
};
