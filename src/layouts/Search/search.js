import React, { useState, useRef } from 'react'
import Scrim from '../Scrim'

import searchIcon from './search-icon.svg'
import SearchResults from './SearchResults'

import style from './search.module.css'

// Delete this
const dummyResults = [
  {
    anchorName: 'media-storage',
    title: 'media storage',
  },
  {
    anchorName: 'dynamic-media-url',
    title: 'dynamic media URL',
  },
]
// Delete this
const dummyRelatedResults = [
  {
    anchorName: 'banner',
    title: 'banner',
  },
  {
    anchorName: 'above-the-fold',
    title: 'above the fold',
  },
]

const Search = props => {
  const [value, setValue] = useState('')
  const [searchActive, setSearch] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const inputRef = useRef(null)

  const handleChange = event => {
    setValue(event.target.value)
    // decide if we need to show results or not
    event.target.value.length ? setShowResults(true) : setShowResults(false)
  }

  const handleToggleClick = event => {
    setSearch(true)
    setTimeout(function() {
      inputRef.current.focus()
    }, 0)
  }

  const handleClearClick = event => {
    setValue('')
    setShowResults(false)
    setSearch(false)
  }

  const handleSearchFocus = event => {
    setSearch(true)
  }

  // Warch the for the blur inside the seach box
  // https://stackoverflow.com/questions/11592966/get-the-newly-focussed-element-if-any-from-the-onblur-event/11592974#11592974
  const handleSearchBoxBlur = event => {
    var currentTarget = event.currentTarget

    setTimeout(function() {
      if (!currentTarget.contains(document.activeElement)) {
        setShowResults(false)
        setSearch(false)
      }
    }, 0)
  }

  const className = [
    style.searchContainer,
    searchActive ? style.searchBarActive : null,
    showResults ? style.searchBarSearching : null,
  ].join(' ')

  return (
    <div className={className}>
      <div
        className={style.searchBarWrapper}
        tabIndex="1"
        onBlur={handleSearchBoxBlur}
      >
        <div className={style.searchBar}>
          <input
            ref={inputRef}
            className={style.textInput}
            type="text"
            value={value}
            onChange={handleChange}
            onFocus={handleSearchFocus}
            placeholder="Search glossary"
          />
          <button
            aria-label="Cancel search"
            className={style.clearSearchButton}
            onClick={handleClearClick}
          >
            &times;
          </button>
        </div>
        <SearchResults
          active={showResults}
          results={dummyResults}
          relatedResults={dummyRelatedResults}
        />
      </div>

      <button className={style.searchToggle} onClick={handleToggleClick}>
        <img src={searchIcon} alt="Search" />
      </button>
      <Scrim
        enabled={searchActive}
        additionalClasses={style.scrim}
        clickAction={() => {
          setSearch(false)
        }}
      />
    </div>
  )
}

export default Search
