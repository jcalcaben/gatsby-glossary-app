import React from 'react'
import PropTypes from 'prop-types'
import FormType from './form-type'

const FormTypes = ({ formTypes }) => {
  if (formTypes == null) {
    return null
  }
  let forms = formTypes.map(formType => {
    const { form, wordClasses } = formType
    return <FormType form={form} wordClasses={wordClasses} />
  })

  return <>{forms}</>
}

FormTypes.propTypes = {
  formTypes: PropTypes.array,
}

export default FormTypes
