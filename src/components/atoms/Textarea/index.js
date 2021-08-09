import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const Textarea = ({ meta, ...props}) => {
  const isInvalid = meta.error && meta.touched
  let inputClasses = 'atom-textarea'

  if (isInvalid) inputClasses += ' atom-textarea__invalid'

  return <textarea {...props} {...props.input} className={inputClasses} />
}

Textarea.propTypes = {
  placeholder: PropTypes.string.isRequired,
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string
  }).isRequired
}

export default Textarea
