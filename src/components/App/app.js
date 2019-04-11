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
    let { filesData } = this.props.data
    let { files } = filesData

    return (
      <Layout>
        <GlossaryTerms filesList={files} textFilter={this.state.textFilter} />
      </Layout>
    )
  }
}

export default App
