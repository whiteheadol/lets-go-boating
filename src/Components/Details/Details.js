import React, { useEffect } from 'react';
import './Details.css';

const Details = ({ currentTrip, setCurrentTrip, setFavRivers, currentId, allRivers }) => {
  // bring in the setState that allows a user to add a trip to their bucket list here
  // allow it to change when that button is clicked

  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/rivers/${currentId}`)
      .then(response => response.json())
      .then(data => {
        setCurrentTrip(data)
      })
  }, )


  // use params to fetch the specific trip needed, and display what I want to (again, if confused, refer to tomatillos functionality)
  // add a route in the main app component to render the right thing!

  return(
    <div className="details-container">
      <p><strong className="trip-name">{currentTrip.run_name}, </strong>{currentTrip.river_name.join(', ')} | {currentTrip.state.join(' | ')}</p>
      <p><strong>Difficulty: </strong>{currentTrip.difficulty.join(', ')}</p>
      <p><strong>Permit by Lottery: </strong>{currentTrip.permit_by_lottery}</p>
      <p><strong>Typical Season: </strong>{currentTrip.season.join(' | ')}</p>
      <p><strong>Length in Days: </strong>{currentTrip.length_in_days.join(' | ')}</p>
      <p><strong>Length in Miles: </strong>{currentTrip.length_in_miles}</p>
      <p><strong>Put-in: </strong>{currentTrip.put_in}</p>
      <p><strong>Take-out: </strong>{currentTrip.take_out}</p>
      <p><strong>Wild and Scenic: </strong>{currentTrip.wild_and_scenic}</p>
    </div>
  )
}

export default Details;
