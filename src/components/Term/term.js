import React from 'react'
import styles from './term.module.css'

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { title, wordClasses, relatedTerms, tags } = frontmatter;
    return (
    <div className={styles.default}>
        <h2>{title}</h2>
        <span className={styles.wordClass}>{wordClasses}</span>
        <p dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        {relatedTerms ? (
            <div>
                See also: {relatedTerms.map((term, index) => 
                    <a href="#" className={styles.relatedTerm} key={index}>{term}</a>
            )}
            </div>
        ) : null}
        {tags ? (
            <div>
                {tags.map((tag, index) => 
                    <a href="#" className={styles.relatedTerm} key={index}>{tag}</a>
                )}
            </div>
        ) : null}
    </div>
  )
}