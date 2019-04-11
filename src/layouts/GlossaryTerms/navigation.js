import React from 'react'
import NavigationItem from './navigationItem'
import style from './navigation.module.css'
import encodeTermTitle from './encodeTermTitle'
import {Link} from 'gatsby'

const navigation = ({ termsList }) => {
  if (termsList === undefined) return null

  termsList.sort(function(a, b) {
    return a.term.frontmatter.title
      .toLowerCase()
      .localeCompare(b.term.frontmatter.title.toLowerCase())
  })

  let glossaryTerms = termsList.map(node => {
    return (
      <Link
        key={node.term.id}
        className={style.navigationItem}
        to={node.term.fields.slug}
      >
        {node.term.frontmatter.title}
      </Link>
    )
  })

  return <div className={style.navigation}>{glossaryTerms}</div>
}

export default navigation
