import React from 'react'

import Layout from '../layouts'
import { TermsList } from '../components/GlossaryTerms'

class App extends React.Component {
  render() {
    let { site, allFile } = this.props.pageContext.result.data
    let { edges: files } = allFile

    return (
      <>
        <Layout>{site.siteMetadata.title}</Layout>
        <TermsList files={files} />
      </>
    )
  }
}

export default App
