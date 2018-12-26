import React from 'react'
import PropTypes from 'prop-types'

const FormType = ({ form, wordClasses }) => {
  return (
    <>
      <i>{form}</i> [ {wordClasses.join(', ')} ]
    </>
  )
}

FormType.propTypes = {
  form: PropTypes.string,
  wordClasses: PropTypes.array,
}

export default FormType
