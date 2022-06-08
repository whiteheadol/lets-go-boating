import React from 'react';
import './RiverThumbnail.css'
import { Link } from 'react-router-dom';

const RiverThumbnail = ({ name, river, state, image, id }) => {
// If need reference, look at tomatillos, similar functionality to the movie details page
  return(
    <Link to={`/${id}`} className="thumbnail">
      <div className="thumbnail">
        <h3 className="thumbnail-title" >{name}, {river}</h3>
        <p>{state}</p>
        <img className="thumbnail-image" src={image} />
      </div>
    </Link>
  )
}

export default RiverThumbnail;
