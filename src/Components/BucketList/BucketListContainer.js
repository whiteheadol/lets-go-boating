import React from 'react';
import BucketListThumbnail from './BucketListThumbnail';

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
        setCurrentTrip={setCurrentTrip}
      />
    )
  })

  return(
    <div>
      <h2>Your Bucket List:</h2>
      <div className="all-thumbnails">
        {favThumbnails}
      </div>
    </div>
  )
}

export default BucketListContainer;
