import React from 'react';
import './RiverThumbnail.css'
import { Link } from 'react-router-dom';

const RiverThumbnail = ({ name, river, state, image, id, season }) => {
// If need reference, look at tomatillos, similar functionality to the movie details page
  return(
    <Link to={`/${id}`} className="thumbnail">
      <div className="thumbnail-styling">
        <div>
          <h3 className="thumbnail-title" >{name}, {river}</h3>
          <p>{state.join(' | ')}</p>
          <p>{season.join(' | ')}</p>
        </div>
        <div>
          <img className="thumbnail-image" src={image} />
        </div>
      </div>
    </Link>
  )
}

export default RiverThumbnail;
