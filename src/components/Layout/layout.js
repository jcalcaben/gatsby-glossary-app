import React, { useState } from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { Header, Panel, Navigation } from '../../layouts'
import '../../static/css/reset.css'
import '../../templates/globals.css'

import styles from './layout.module.css'

const Layout = props => {
  const { children } = props
  const [showPanel, setPanel] = useState(false)

  const { site, navigation } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
        navigation: allTermsJson(
          filter: { types: { eq: "glossary" } }
          sort: { fields: [title] }
        ) {
          termsList: edges {
            term: node {
              name: title
            }
          }
        }
      }
    `
  )

  return (
    <div className={styles.default}>
      <Helmet
        title={site.siteMetadata.title}
        meta={[{ name: 'description', content: site.siteMetadata.description }]}
      />

      <div className={styles.container}>
        <header>
          <Header
            siteTitle={site.siteMetadata.title}
            menuClickAction={() => {
              setPanel(true)
            }}
          />
        </header>

        <main>{children}</main>

        <Panel
          active={showPanel}
          additionalClasses={styles.nav}
          clickAction={() => {
            setPanel(false)
          }}
        >
          <Navigation termsList={navigation.termsList} />
        </Panel>
      </div>
    </div>
  )
}

export default Layout
