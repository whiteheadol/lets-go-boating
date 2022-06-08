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
    <div>
      <p>{currentTrip.run_name}</p>
    </div>
  )
}

export default Details;
