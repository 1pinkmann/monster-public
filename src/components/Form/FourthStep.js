import React from 'react'

import Button from '../atoms/Button'

const FirstStep = ({id, setShowForm}) => {
  
  const handleClick = () => {
    setShowForm(true);
  }

  return (
    <form className="form position-absolute" id={id}>
      <h3>Schedule a call with our education expert:</h3>

      <div className='form-footer'>
          <div className='form-footer-top-space-for-element form-footer-horizontal-buttons'>
            <Button fullWidth type='button' onClick={handleClick} >Click here to schedule a call</Button>
          </div>
        </div>
    </form>
  )
}

export default FirstStep
