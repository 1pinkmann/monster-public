import React from 'react'

import './style.css'

const Button = ({
  isDisabled,
  children,
  onPress,
  isOutline,
  fullWidth,
  ...props
}) => {
  const handleOnPress = params => {
    if (!isDisabled && onPress) onPress(params)
  }
  let buttonClasses = "atom-button"
  if (isDisabled) {
    buttonClasses += " atom-button__disable"
  } else if (isOutline) {
    buttonClasses += " atom-button__outline"
  } else {
    buttonClasses += " atom-button__active"
  }
  if (fullWidth) buttonClasses += " atom-button__full-width"

  return (
    <button onClick={handleOnPress} {...props} className={buttonClasses}>
      {children}
    </button>
  )
}

export default Button
