import React from 'react'
import Link from 'gatsby-link'

import MenuButton from './menu-button'

const HeaderStyle = {
  background: 'rebeccapurple',
  marginBottom: '1.45rem',
  display: 'flex',
  alignItems: 'center',
}

const TitleStyle = {
  margin: '0 auto',
  padding: '0.5rem 0rem',
}

const HeaderLinkStyle = {
  color: 'white',
  textDecoration: 'none',
}

const TitleHeaderStyle = { margin: 0 }

const Header = ({ siteTitle }) => (
  <div style={HeaderStyle}>
    <div style={TitleStyle}>
      <h1 style={TitleHeaderStyle}>
        <Link to="/" style={HeaderLinkStyle}>
          {siteTitle}
        </Link>
      </h1>
    </div>
    <MenuButton
      text="Menu"
      menuClick={() => {
        console.log('Menu clicked!')
      }}
    />
  </div>
)

export default Header
