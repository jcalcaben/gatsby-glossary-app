import React from 'react'
import GlossaryTerm from './GlossaryTerm'

class TermsList extends React.Component {
  render() {
    let glossaryTerms = this.props.files.map(file => {
      return <GlossaryTerm key={file.node.id} file={file.node} />
    })

    return <>{glossaryTerms}</>
  }
}

export default TermsList
