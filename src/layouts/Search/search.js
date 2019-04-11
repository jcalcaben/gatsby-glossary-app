import React, { useState } from 'react'
import style from './search.module.css'
import Results from './results'

function Search() {
  const [searchTerm, setSearchTerm] = useState()
  const [searchResults, setSearchResults] = useState([])

  return (
    <div className={style.searchBar}>
      <input
        className={style.textInput}
        type="text"
        value={searchTerm}
        onChange={event => {
          let results = getSearchResults(event.target.value);
          setSearchResults(results);
        }}
        placeholder="Search glossary"
      />
      <Results>{searchResults}</Results>
    </div>
  )
}

function getSearchResults(query) {
  if (!query || !window.__LUNR__) return []
  const lunrIndex = window.__LUNR__['en']
  const results = lunrIndex.index.search(query) // you can  customize your search , see https://lunrjs.com/guides/searching.html
  return results.map(({ ref }) => lunrIndex.store[ref])
}

export default Search
