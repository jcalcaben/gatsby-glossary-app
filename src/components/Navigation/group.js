import React from 'react'
import style from './navigation.module.css'
import { Link } from 'gatsby'

const Group = ({ label, termsList }) => {

  termsList.sort(sortFunction);

  let links = termsList.map(node => {
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

  return (
    <>
    <h3 className={style.groupLabel}>{label.toUpperCase()}</h3>
    {links}
    </>
  );
}

function sortFunction(a, b) {
  return a.term.frontmatter.title
    .toLowerCase()
    .localeCompare(b.term.frontmatter.title.toLowerCase())
}

export default Group;
