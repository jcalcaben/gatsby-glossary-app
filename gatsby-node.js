/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        filesData: allFile(filter: { relativeDirectory: { eq: "terms" } }) {
          files: edges {
            file: node {
              id
              relativePath
              relativeDirectory
              name
              publicURL
            }
          }
        }
        site {
          siteMetadata {
            title
          }
        }
      }
    `).then(result => {
      createPage({
        path: 'glossary',
        component: require.resolve('./src/templates/Glossary.js'),
        context: { result },
      })
      resolve()
    })
  })
}
