import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import {
  Header,
  TermsList as GlossaryTerms,
  Scrim,
  TermsDataProvider,
} from '../layouts'
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
  state = {
    showScrim: false,
    showPanel: false,
  }

  render() {
    let { filesData } = this.props.pageContext.result.data
    let { files } = filesData

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
            <Header
              siteTitle={data.site.siteMetadata.title}
              menuClickAction={() => {
                this.setState({ showScrim: true, showPanel: true })
              }}
            />
            <TermsDataProvider
              termFiles={files}
              termsData={{}}
              render={data => {
                return (
                  <GlossaryTerms
                    filesList={data.termFiles}
                    termsData={data.termsData}
                  />
                )
              }}
            />
            <Scrim
              enabled={this.state.showScrim}
              clickAction={() => {
                this.setState({ showScrim: false, showPanel: false})
              }}
            />
          </>
        )}
      />
    )
  }
}

export default Glossary
