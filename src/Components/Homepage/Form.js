import React from 'react';
import './Form.css';


const Form = ({ setSeasonText, setPermitBoolean, permitBoolean, filterRivers }) => {
  // bring the different ways in which you can setState in as props (probably destructure for ease)
  // invoke the set states here
  const submitFormHandler = (e) => {
    e.preventDefault();
    // will filter from homepage and only pass the things to be rendered down to the container?
  }

  const seasonChangeHandler = (e) => {
    setSeasonText(e.target.value)
  }

  const permitBooleanHandler = (e) => {
    if (!permitBoolean) {
      setPermitBoolean(e.target.value)
    } else {
      setPermitBoolean(false)
    }
  }

  return(
    <form>
      <h4>Narrow down your trip search:</h4>
      <select name="selectMonth"
        id="selectMonth"
        onChange={seasonChangeHandler}>
        <option value="any">Any</option>
        <option value="Jan">January</option>
        <option value="Feb">February</option>
        <option value="Mar">March</option>
        <option value="Apr">April</option>
        <option value="May">May</option>
        <option value="Jun">June</option>
        <option value="Jul">July</option>
        <option value="Aug">August</option>
        <option value="Sept">September</option>
        <option value="Oct">October</option>
        <option value="Nov">November</option>
        <option value="Dec">December</option>
      </select>
      <label for="selectMonth">What month would you like to go?</label>
      <input type="checkbox"
        name="permitBoolean"
        value={true}
        onChange={permitBooleanHandler}
      />
      <label for="permitBoolean">Check if you're open to lottery permits</label>
      <button onClick={filterRivers} type="submit">Search!</button>
    </form>
  )
}

export default Form;
