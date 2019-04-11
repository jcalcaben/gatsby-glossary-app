import React from 'react'
import styles from './term.module.css'

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { title, wordClasses, relatedTerms } = frontmatter
  return (
    <div className={styles.default}>
      <h2>{title}</h2>
      <span className={styles.wordClass}>{wordClasses}</span>
      <p dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      {relatedTerms ? (
        <span>
          See also:{' '}
          {relatedTerms.map((term, index) => (
            <span key={index}>{term}</span>
          ))}
        </span>
      ) : null}
    </div>
  )
}
