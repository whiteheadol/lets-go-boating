import React from 'react';


const HomeContainer = ({ allRivers }) => {
// Render a thumbnail for each piece in state
// Clicking on a thumbnail will change the url to the river's dynamic id

  const allThumbnails = allRivers.map(element => {
    return (
      <p>river!</p>
    )
  })

  return(
    <div>
      {allThumbnails}
    </div>
  )
}

export default HomeContainer;
