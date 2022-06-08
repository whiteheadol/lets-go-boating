import React from 'react';
import RiverThumbnail from './RiverThumbnail';
import './HomeContainer.css';

const HomeContainer = ({ rivers }) => {
// Render a thumbnail for each piece in state
// Clicking on a thumbnail will change the url to the river's dynamic id

  const allThumbnails = rivers.map(element => {
    return (
      <RiverThumbnail
        key={element.id}
        name={element.run_name}
        river={element.river_name}
        state={element.state}
        image={element.img}
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
