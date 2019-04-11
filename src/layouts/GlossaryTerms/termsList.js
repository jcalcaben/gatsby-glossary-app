import React from 'react'
import Term from '../../components/Term'
import styles from './termsList.module.css'
import PropTypes from 'prop-types'

const TermsList = ({ termsData }) => {
  let glossaryTerms = termsData.map(child => {
    return (
      <Term
        className={styles.listItem}
        key={child.node.id}
        data={{ markdownRemark: child.node }}
      />
    )
  })

  return <div className={styles.list}>{glossaryTerms}</div>
}

TermsList.propTypes = {
  termsData: PropTypes.array,
}

export default TermsList
