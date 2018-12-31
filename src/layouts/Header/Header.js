import React from 'react'
import Link from 'gatsby-link'

import MenuButton from '../MenuButton'

import styles from './Header.module.css'

const Header = ({ siteTitle }) => (
  <div className={styles.container}>
    <div className={styles.title}>
      <h1 className={styles.header}>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
    <MenuButton
      text="Menu"
      menuClick={() => {
        console.log('Menu clicked!')
      }}
      additionalClasses={styles.menuButton}
    />
  </div>
)

export default Header
