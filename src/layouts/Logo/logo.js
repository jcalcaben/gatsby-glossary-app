import React from 'react'
import Link from 'gatsby-link'

import styles from './logo.module.css'
import mLogo from './m-logo.svg'
import magentoLogo from './magento-logo.svg'

const Logo = props => {
  const { text, additionalClasses } = props
  const className = [styles.logo, additionalClasses].join(' ')

  return (
    <Link to="/" className={className}>
      <img src={mLogo} className={styles.mLogo} alt="" />
      <img src={magentoLogo} className={styles.magentoLogo} alt="" />
      <span className={styles.siteTitle}>{text}</span>
    </Link>
  )
}

export default Logo
