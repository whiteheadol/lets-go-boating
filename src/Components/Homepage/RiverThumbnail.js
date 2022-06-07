import React from 'react';
import './RiverThumbnail.css'


const RiverThumbnail = ({ name, river, state, image }) => {
// If need reference, look at tomatillos, similar functionality to the movie details page
  return(
    <div className="thumbnail">
      <h3 className="thumbnail-title" >{name}, {river}</h3>
      <p>{state}</p>
      <img className="thumbnail-image" src={image} />
    </div>
  )
}

export default RiverThumbnail;
