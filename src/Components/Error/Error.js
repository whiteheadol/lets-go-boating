import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
  return (
    <div className='fof-box'>
      <p className='fof-message'>Oh no! This page doesn't exist!</p>
      <Link to='/' className='redirect'><strong className='redirect'>Click here to go back to the main page.</strong></Link>
      <img className="fof-image" src="https://confluence-solutions.com/wp-content/uploads/2020/04/raft-flip.jpg" />
    </div>
  );
};

export default Error;
