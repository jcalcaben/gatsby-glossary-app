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
    let { filesData, navigation, site } = this.props.data
    let { files } = filesData

    return (
      <div className={styles.default}>
        <Helmet
          title={site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header
          siteTitle={site.siteMetadata.title}
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
    )
  }
}

export default Glossary
