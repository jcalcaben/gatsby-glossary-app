import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { StaticQuery, graphql } from 'gatsby'
import Header from '../components/header'
import './index.css'

import Scrim from '../components/scrim'

class App extends React.Component {
  render() {
    return <div>{this.props.children}</div>
  }
}

class Layout extends React.Component {
  constructor(props) {
    super(props)

    this.layout = React.createRef()
  }

  render() {
    const { children } = this.props

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <App ref={this.layout}>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            />
            <Header siteTitle={data.site.siteMetadata.title} />
            <div
              style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '0px 1.0875rem 1.45rem',
                paddingTop: 0,
              }}
            >
              {children}
            </div>
            <Scrim enabled={false} />
          </App>
        )}
      />
    )
  }
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
