import React, { useState, useEffect } from 'react'
import GlossaryTerm from './glossaryTerm'
import PropTypes from 'prop-types'
import styles from './glossaryTerm.module.css'

const fetchJsonData = (publicURL, callback) => {
  fetch(publicURL)
    .then(response => {
      return response.json()
    })
    .then(callback)
    .catch(error => {
      console.log('Error fetching: ' + publicURL)
      console.log(error)
    })
}

const Term = ({ anchorId, publicURL }) => {
  const [data, setData] = useState()

  useEffect(() => {
    if (data == null) {
      fetchJsonData(publicURL, data => {
        setData(data)
      })
    }
  })

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
  anchorId: PropTypes.string,
  publicUrl: PropTypes.string,
}
export default Term
