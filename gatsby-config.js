module.exports = {
  siteMetadata: {
    title: 'Glossary',
    description: 'Magento Glossary Project'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-66243208-3",
        // Avoids sending pageview hits from custom paths
        exclude: [],
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
      },
    },
  ],
}
