import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Header, TermsList as GlossaryTerms, Scrim } from '../layouts'

import '../static/css/reset.css'
import './Glossary.css'

const titleQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
class Glossary extends Component {
  render() {
    let { allFile } = this.props.pageContext.result.data
    let { edges: files } = allFile

    return (
      <StaticQuery
        query={titleQuery}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            />
            <Header siteTitle={data.site.siteMetadata.title} />
            <GlossaryTerms files={files} />
            <Scrim enabled={false} />
          </>
        )}
      />
    )
  }
}

export default Glossary
