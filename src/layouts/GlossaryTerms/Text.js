import PropTypes from 'prop-types'
import React from 'react'

const Text = ({ Element = 'span', className, children }) => {
  if (children === null) {
    return null
  }
  return <Element className={className}>{children}</Element>
}

Text.propTypes = {
  Element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.string,
}

export default Text
