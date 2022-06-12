import React, { useEffect } from 'react';
import './Form.css';


const Form = ({ setSeasonText, setPermitBoolean, filterRivers, seasonText, permitBoolean }) => {

  const seasonChangeHandler = (e) => {
    setSeasonText(e.target.value)
  }

  const permitBooleanHandler = (e) => {
    if (permitBoolean === 'false') {
      setPermitBoolean(e.target.value)
    } else {
      setPermitBoolean("false")
    }
  }

  return(
    <form>
      <p className="form-heading">Narrow down your trip search:</p>
      <label htmlFor="selectMonth">What month would you like to go?</label>
      <select name="selectMonth"
        id="selectMonth"
        onChange={seasonChangeHandler}
        value={seasonText}
        >
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
      <label htmlFor="permitBoolean" className="check-label">
      Check if you're open to trips that require a lottery permit:
      </label>
      <input type="checkbox"
      className="checkbox"
      name="permitBoolean"
      value="true"
      onChange={permitBooleanHandler}
      />
      <button onClick={filterRivers} type="submit" className="submit-btn" ><strong>Search!</strong></button>
    </form>
  )
}

export default Form;
