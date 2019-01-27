import React from 'react'
import Term from './term'
import styles from './termsList.module.css'
import PropTypes from 'prop-types'

const TermsList = ({ filesList, textFilter }) => {
  let glossaryTerms = filesList.map(node => {
    return (
      <Term
        anchorId={node.file.name}
        key={node.file.publicURL}
        publicURL={node.file.publicURL}
        textFilter={textFilter}
      />
    )
  })

  return <div className={styles.list}>{glossaryTerms}</div>
}

TermsList.propTypes = {
  filesList: PropTypes.array.isRequired,
  textFilter: PropTypes.string,
}

export default TermsList
