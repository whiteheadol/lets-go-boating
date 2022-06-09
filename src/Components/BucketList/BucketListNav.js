import React from 'react';
import { Link } from 'react-router-dom';
import './BucketListNav.css';

const BucketListNav = () => {
  return(
    <div className="bl-nav">
      <img className="nav-image" src="https://p.kindpng.com/picc/s/173-1733025_rafting-kayaking-canoe-clip-art-rafting-silhouette-png.png" />
      <h1>Your Bucket List:</h1>
      <Link to={`/`}><button className='home-btn'><strong>Home</strong></button></Link>
    </div>
  )
}

export default BucketListNav;
