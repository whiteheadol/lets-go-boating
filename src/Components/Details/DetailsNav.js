import React from 'react';
import { Link } from 'react-router-dom';
import './DetailsNav.css';

const DetailsNav = ({ setPermitBoolean, setSeasonText, filterRivers }) => {

  // const resetForm = (e) => {
  //   setPermitBoolean('true');
  //   setSeasonText('any');
  //   filterRivers(e);
  // }

  // onClick={(e) => resetForm(e)

  return(
    <div className="details-nav">
      <img src="" />
      <h1>Let's Go Boating!</h1>
      <Link to={`/`}><button className='home-btn'>Home</button></Link>
      <Link to ={`/list`}><button className='bl-btn'>Bucket List</button></Link>
    </div>
  )
}

export default DetailsNav;
