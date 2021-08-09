import { isPossiblePhoneNumber } from 'react-phone-number-input'

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)

export const required = value => (value || typeof value === 'number' ? undefined : 'Required')
export const email = value => value && !/.+@.+\..+/i.test(value) ? 'Invalid email address' : undefined
export const phoneNumber = value => value && isPossiblePhoneNumber(value) ? undefined : 'Invalid phone number'
