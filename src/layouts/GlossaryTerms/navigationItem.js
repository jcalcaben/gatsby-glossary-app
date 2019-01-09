import React from 'react'
import useTermData from './useTermData'

const NavigationItem = ({ anchorName, publicURL }) => {
  const data = useTermData(publicURL)

  if (data === undefined) {
    return <span>Loading...</span>
  }

  let { types, title } = data

  const anchorLink = "#"+anchorName

  return types.includes('glossary') ? <a href={anchorLink}>{title}</a> : null
}

export default NavigationItem
