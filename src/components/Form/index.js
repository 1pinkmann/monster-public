import React from 'react'
import './style.css';
import FirstStepOfForm from './FirstStep'
import FourthStepOfForm from './FourthStep'


const FormComponent = ({ userData, step, sendDataAndNext, id, setShowForm }) => {

  if (step === 1) {
      return (
          <FirstStepOfForm userData={userData} sendDataAndNext={sendDataAndNext} id={id} />
      );
  }

  if (step === 2) {
      return (
          <FourthStepOfForm id={id} setShowForm={setShowForm} />
      );
  }
}

export default FormComponent
