import React from 'react'
import { graphql } from 'gatsby'
import App from '../components/App'

const IndexPage = ({ data }) => <App data={data} />

export default IndexPage

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            wordClasses
            tags
            synonyms
            relatedTerms
          }
          html
          id
        }
      }
    }
  }
`
