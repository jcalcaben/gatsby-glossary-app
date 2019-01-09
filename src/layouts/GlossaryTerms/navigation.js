import React from 'react'
import NavigationItem from './navigationItem'
import style from './navigation.module.css'

const navigation = ({ filesList }) => {
  let glossaryTerms = filesList.map(node => {
    return (
      <NavigationItem
        classes={style.navigationItem}
        key={node.file.name}
        anchorName={node.file.name}
        publicURL={node.file.publicURL}
      />
    )
  })

  return <div className={style.navigation}>{glossaryTerms}</div>
}

export default navigation
