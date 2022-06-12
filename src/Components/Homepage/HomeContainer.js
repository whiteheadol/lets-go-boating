import React from 'react';
import RiverThumbnail from './RiverThumbnail';
import './HomeContainer.css';

const HomeContainer = ({ rivers, setCurrentTrip }) => {

  const allThumbnails = rivers.map(element => {
    return (
      <RiverThumbnail
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
    <div className="all-thumbnails">
      {allThumbnails}
    </div>
  )
}

export default HomeContainer;
