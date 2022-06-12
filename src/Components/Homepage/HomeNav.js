import React from 'react';
import './HomeNav.css';
import { Link } from 'react-router-dom';

const HomeNav = () => {
  return(
    <div className="home-nav">
      <img className="nav-image" src="https://p.kindpng.com/picc/s/173-1733025_rafting-kayaking-canoe-clip-art-rafting-silhouette-png.png" />
      <h1 className="home-title">Let's Go Boating!</h1>
      <Link to={`/list`}><button className="bucket-button"><strong>Bucket List</strong></button></Link>
    </div>
  )
}

export default HomeNav;
