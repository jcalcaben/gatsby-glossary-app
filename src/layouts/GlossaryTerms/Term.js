import React from 'react'
import GlossaryTerm from './GlossaryTerm'
import PropTypes from 'prop-types'
import styles from './GlossaryTerm.module.css'

const Term = ({anchorId, publicURL, data}) => {
  if (data == null) {
    return (
      <div id={anchorId} className={styles.loading}>
        Loading term
      </div>
    )
  }

  let { types } = data
  return types.includes('glossary') ? (
    <GlossaryTerm anchorId={anchorId} styles={styles} {...data} />
  ) : null
}

Term.propTypes = {
  publicUrl: PropTypes.string,
  anchorId: PropTypes.string,
  data: PropTypes.object,
}
export default Term
