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
      <Link to={`/`}><button className='home-btn'><strong>Home</strong></button></Link>
      <Link to ={`/list`}><button className='bl-btn'><strong>Bucket List</strong></button></Link>
    </div>
  )
}

export default DetailsNav;
