import React from 'react'
import style from './search.module.css'

function Results({ children }) {
  const listItems = children.map(child => {
    return <li key={child.url} className={style.result}><a href={child.url}>{child.title}</a></li>
  })
  return <ul className={style.results}>{listItems}</ul>
}

export default Results
