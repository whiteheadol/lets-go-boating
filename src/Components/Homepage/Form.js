import React from 'react';
import './Form.css';


const Form = () => {
  // bring the different ways in which you can setState in as props (probably destructure for ease)
  // invoke the set states here
  return(
    <form>
      <h4>Form!</h4>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </form>
  )
}

export default Form;
