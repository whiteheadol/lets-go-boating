import React from 'react';
import './HomeNav.css';
import { Link } from 'react-router-dom';

const HomeNav = () => {

  return(
    <div className="home-nav">
      <img src="" />
      <h1>Let's Go Boating!</h1>
      <Link to={`/list`}><button>Bucket List</button></Link>
    </div>
  )
}

export default HomeNav;
