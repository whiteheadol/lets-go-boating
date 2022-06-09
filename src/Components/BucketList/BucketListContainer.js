import React from 'react';
import BucketListThumbnail from './BucketListThumbnail';
import './BucketListContainer.css';

const BucketListContainer = ({ favRivers, setCurrentTrip }) => {
  const favThumbnails = favRivers.map(element => {
    return (
      <BucketListThumbnail
        key={element.id}
        id={element.id}
        name={element.run_name}
        river={element.river_name}
        state={element.state}
        image={element.img}
        season={element.season}
        setCurrentTrip={setCurrentTrip}
      />
    )
  })

  return(
    <div className="bl-page">
      <div className="fav-thumbnails">
        {favThumbnails}
      </div>
    </div>
  )
}

export default BucketListContainer;
