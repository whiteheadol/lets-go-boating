import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
  // <img className="fof-image" src="" />
  return (
    <div className='fof-box'>
      <p className='fof-message'>Hey! This page doesn't exist!</p>
      <Link to='/' className='redirect'>Click here to go back to the main page.</Link>
    </div>
  );
};

export default Error;
