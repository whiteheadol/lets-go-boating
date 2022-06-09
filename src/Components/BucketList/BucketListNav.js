import React from 'react';
import { Link } from 'react-router-dom';
import './BucketListNav.css';

const BucketListNav = () => {
  return(
    <div className="bl-nav">
      <img src="" />
      <h1>Let's Go Boating!</h1>
      <Link to={`/`}><button className='home-btn'>Home</button></Link>
    </div>
  )
}

export default BucketListNav;
