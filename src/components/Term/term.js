import React from 'react'
import styles from './term.module.css'
import Tag from '../Tag'
import { Link, navigate } from "gatsby"

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { title, wordClasses, relatedTerms, tags } = frontmatter;
    return (
        <div className={styles.term}>
            <span className={styles.termTitle}>{title}</span>
            <span className={styles.wordClass}>{wordClasses.join(', ')}</span>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
            {relatedTerms ? (
                <div>
                    See also: {relatedTerms.map((term, index) => 
                        <Link className={styles.relatedTermLink} to={`/${term}/`} key={index}>{term}</Link>
                )}
                </div>
            ) : null}
            {tags ? (
                <div className={styles.tagList}>
                    {tags.map((tag, index) => 
                        <Tag clickAction={() => navigate('/tag/' + tag)} key={index}>{tag}</Tag>
                    )}
                </div>
            ) : null}
        </div>
  )
}
