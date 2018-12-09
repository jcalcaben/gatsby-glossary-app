import React from 'react'

import MenuButtonStyle from './menu-button.css'

const MenuButton = ({ text, menuClick }) => (
  <button
    style={MenuButtonStyle}
    onClick={event => {
      event.preventDefault()
      menuClick()
    }}
  >
    {text}
  </button>
)

export default MenuButton
