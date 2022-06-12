import React from 'react';
import './BucketListThumbnail.css'
import { Link } from 'react-router-dom';

const BucketListThumbnail = ({ name, river, state, image, id, season }) => {
// If need reference, look at tomatillos, similar functionality to the movie details page
  return(
    <Link to={`/rivers/${id}`} className="bl-thumbnail" id={id}>
      <div className="thumbnail-styling">
        <div>
          <h3 className="thumbnail-title" >{name}, {river.join(' | ')}</h3>
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

export default BucketListThumbnail;
