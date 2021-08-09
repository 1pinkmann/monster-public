import React from 'react'
import PropTypes from 'prop-types'
import PhoneInput from 'react-phone-number-input'

import './style.css'
import './tel.css'

const Input = ({ meta, ...props}) => {
  const isInvalid = meta.error && meta.touched
  let inputClasses = 'atom-input'

  if (isInvalid) inputClasses += ' atom-input__invalid'

  if (props.input.type === 'tel') {
    return <PhoneInput international defaultCountry="US" {...props} {...props.input} className={inputClasses} />
  }

  return <input {...props} {...props.input} className={inputClasses} />
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string
  }).isRequired
}

export default Input
