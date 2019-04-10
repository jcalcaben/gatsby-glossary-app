import React from 'react'
import { graphql } from 'gatsby'
import App from '../components/App'

const IndexPage = ({ data }) => <App data={data} />

export default IndexPage

export const query = graphql`
  {
    filesData: allFile(
      filter: { relativeDirectory: { eq: "terms" } }
      sort: { fields: [name] }
    ) {
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
    navigation: allTermsJson(
      filter: { types: { eq: "glossary" } }
      sort: { fields: [title] }
    ) {
      termsList: edges {
        term: node {
          name: title
        }
      }
    }
  }
`
