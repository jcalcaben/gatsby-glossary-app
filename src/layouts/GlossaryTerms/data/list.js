import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const commaSeparated = ({ items }) => {
  if (items === null || items.length === 0) {
    return null
  }
  return items.join(', ')
}

commaSeparated.propTypes = {
  items: PropTypes.array,
}

const list = ({
  termTitle,
  children,
  classNames,
  label,
  LabelElement,
  labelProps,
}) => {
  if (children === null) {
    return null
  }
  const className = classnames(classNames)
  return (
    <div className={className}>
      <LabelElement {...labelProps}>{label}</LabelElement>
      <div>{children}</div>
    </div>
  )
}

list.propTypes = {
  children: PropTypes.any,
  classNames: PropTypes.string,
  label: PropTypes.string,
  LabelElement: PropTypes.any,
  labelProps: PropTypes.object,
}

export { commaSeparated }

export default list
