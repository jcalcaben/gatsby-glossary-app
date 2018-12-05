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
        allFile(filter: {relativeDirectory: {eq: "terms"}}) {
              edges {
                      node {
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
        path: 'foo/bar/',
        component: require.resolve('./src/templates/test.js'),
        context: {result},
      })
      resolve()
    })
  })
}
