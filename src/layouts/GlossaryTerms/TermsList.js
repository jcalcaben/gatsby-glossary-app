import React from 'react'
import Term from './Term'

class TermsList extends React.Component {
  render() {
    let glossaryTerms = this.props.files.map(node => {
      return <Term key={node.file.id} publicURL={node.file.publicURL} />
    })

    return <div>{glossaryTerms}</div>
  }
}

export default TermsList
