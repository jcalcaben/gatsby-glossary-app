import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import {
  Header,
  TermsList as GlossaryTerms,
  Scrim,
  Panel,
  Navigation,
  TextFilter,
} from '../layouts'
import '../static/css/reset.css'
import './globals.css'

import styles from './Glossary.module.css'

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
    textFilter: null,
  }

  updateTextFilter(value) {
    console.log(value)
    this.setState({ textFilter: value.toLowerCase() })
  }

  render() {
    let { filesData } = this.props.pageContext.result.data
    let { files } = filesData
    let { navigation } = this.props.pageContext.result.data

    return (
      <StaticQuery
        query={titleQuery}
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
            <TextFilter
              changeHandler={value => {
                this.setState({ textFilter: value.toLowerCase() })
              }}
            />
            <GlossaryTerms
              filesList={files}
              textFilter={this.state.textFilter}
            />
            <Scrim
              enabled={this.state.showScrim}
              clickAction={() => {
                this.setState({ showScrim: false, showPanel: false })
              }}
            />
            <Panel active={this.state.showPanel}>
              <Navigation termsList={navigation.termsList} />
            </Panel>
          </div>
        )}
      />
    )
  }
}

export default Glossary
