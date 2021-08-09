import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const Select = ({ meta, defaultOption, options, ...props}) => {
  const isInvalid = meta.error && meta.touched
  let inputClasses = 'atom-select'

  if (isInvalid) inputClasses += ' atom-select__invalid'

  const renderOptions = () => {
    return options.map(({ label, value }) => (
      <option key={label} value={value}>{label}</option>
    ))
  }

  return (
    <div className='atom-select-wrapper'>
      <select {...props} defaultValue={defaultOption} {...props.input} className={inputClasses} required>
        <option disabled value=''>{defaultOption}</option>
        {renderOptions()}
      </select>
    </div>
  )
}

Select.propTypes = {
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
  }).isRequired,
  options: PropTypes.array.isRequired,
  defaultOption: PropTypes.any,
}

export default Select
