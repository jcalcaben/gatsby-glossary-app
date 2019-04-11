import React from 'react'

import NavigationItem from '../GlossaryTerms/navigationItem'

import style from './searchResults.module.css'

const List = props => {
  const { items } = props

  return (
    <div>
      {items.map((item, index) => {
        return (
          <NavigationItem
            key={index}
            anchorName={item.anchorName}
            title={item.title}
            classes={style.searchResultsItem}
          />
        )
      })}
    </div>
  )
}

const SearchResults = props => {
  const { active, results, relatedResults } = props

  if (results === undefined) return null

  const className = [style.searchResults, active ? style.active : null].join(
    ' '
  )

  return (
    <div className={className}>
      <List items={results} />

      {relatedResults ? (
        <>
          <h3 className={style.searchResultsSubtitle}>Related terms</h3>
          <List items={relatedResults} />
        </>
      ) : null}
    </div>
  )
}

export default SearchResults
