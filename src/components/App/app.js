import React, { Component } from 'react'
import Layout from '../Layout'
import { TermsList as GlossaryTerms } from '../../layouts'
import '../../static/css/reset.css'
import '../../templates/globals.css'

class App extends Component {
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
    let { allMarkdownRemark } = this.props.data

    let { edges } = allMarkdownRemark

    return (
      <Layout>
        <GlossaryTerms termsData={edges} />
      </Layout>
    )
  }
}

export default App
