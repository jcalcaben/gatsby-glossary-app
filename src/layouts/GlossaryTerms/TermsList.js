import React from 'react'
import Term from './Term'
import styles from './terms-list.module.css'

class TermsList extends React.Component {
  render() {
    let glossaryTerms = this.props.files.map(node => {
      return (
        <Term
          anchorId={node.file.name}
          key={node.file.publicURL}
          publicURL={node.file.publicURL}
        />
      )
    })

    return <div className={styles.list}>{glossaryTerms}</div>
  }
}

export default TermsList
