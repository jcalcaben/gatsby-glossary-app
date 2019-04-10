import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Header, Scrim, Panel, Navigation } from '../../layouts'
import '../../static/css/reset.css'
import '../../templates/globals.css'
import { StaticQuery, graphql } from 'gatsby'

import styles from './layout.module.css'

const layoutQuery = graphql`
  query LayoutQuery {
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

class Layout extends Component {
  state = {
    showScrim: false,
    showPanel: false,
    textFilter: null,
  }

  updateTextFilter(value) {
    this.setState({ textFilter: value.toLowerCase() })
  }

  render() {
    const { children } = this.props

    return (
      <StaticQuery
        query={layoutQuery}
        render={data => (
          <div className={styles.default}>
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
            {children}
            <Scrim
              enabled={this.state.showScrim}
              clickAction={() => {
                this.setState({ showScrim: false, showPanel: false })
              }}
            />
            <Panel active={this.state.showPanel}>
              <Navigation termsList={data.navigation.termsList} />
            </Panel>
          </div>
        )}
      />
    )
  }
}

export default Layout
