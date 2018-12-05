module.exports = {
  siteMetadata: {
    title: 'Glossary',
  },
  plugins: [
    'gatsby-plugin-react-helmet',

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
}
