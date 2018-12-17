module.exports = {
  siteMetadata: {
    title: 'Glossary',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
}
