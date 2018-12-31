import React from 'react'
import Term from './term'
import styles from './termsList.module.css'

const TermsList = ({ filesList, termsData }) => {
  let glossaryTerms = filesList.map(node => {
    return (
      <Term
        anchorId={node.file.name}
        key={node.file.publicURL}
        publicURL={node.file.publicURL}
        data={termsData[node.file.publicURL]}
      />
    )
  })

  return <div className={styles.list}>{glossaryTerms}</div>
}

export default TermsList
