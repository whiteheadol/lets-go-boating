import React from 'react';
import { Link } from 'react-router-dom';
import './DetailsNav.css';

const DetailsNav = () => {
  return(
    <div className="details-nav">
      <img src="" />
      <h1>Let's Go Boating!</h1>
      <Link to={`/`}><button className='home-btn'>Home</button></Link>
      <button className='bl-btn'>Bucket List</button>
    </div>
  )
}

export default DetailsNav;
