import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeNav from './Components/Homepage/HomeNav';
import HomeContainer from './Components/Homepage/HomeContainer';
import Form from './Components/Homepage/Form';
import './App.css';

function App() {
  // Fetch all data from API on load
  // Hold the state of all rivers here

  const [allRivers, setRivers] = useState([]);
  const [filteredRivers, setFilteredRivers] = useState([]);
  const [favRivers, setFavs] = useState([]);
  const [seasonText, setSeasonText] = useState('any');
  const [permitBoolean, setPermitBoolean] = useState('false');

  // define the ways in which you will change state (form inputs, favoriting...) using useState
  useEffect(() => {
    fetch("http://localhost:4000/api/v1/rivers")
      .then(response => response.json())
      .then(data => {
        setFilteredRivers(data.rivers)
        setRivers(data.rivers)
      })
  }, [])

  // Create a method to filter all rivers based on the state properties updated by the form. Pass this information down as allRivers to HomeContainer
  // Would this let me remove the submit button from the Form component?
  const filterRivers = (e) => {
    e.preventDefault();
    // setFilteredRivers(allRivers)
    const helperArray = [];
    if (seasonText === 'any' && permitBoolean === 'true') {
      setFilteredRivers(allRivers)
    } else if (seasonText === 'any' && permitBoolean === 'false') {
      allRivers.forEach(river => {
        if (river.permit_by_lottery === 'false') {
          helperArray.push(river)
        }
        setFilteredRivers(helperArray);
      })
    } else if (seasonText !== 'any' && permitBoolean === 'false') {
      allRivers.forEach(river => {
        if (river.season.includes(seasonText) && river.permit_by_lottery === 'false') {
          helperArray.push(river)
        }
        setFilteredRivers(helperArray);
      })
    } else if (seasonText !== 'any' && permitBoolean === 'true') {
        allRivers.forEach(river => {
          if (river.season.includes(seasonText)) {
            helperArray.push(river)
          }
        })
        setFilteredRivers(helperArray);
    }
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => {
          return (
            <div>
              <HomeNav />
              <div className="main-page">
                <HomeContainer
                  rivers={filteredRivers}
                />
                <Form
                  setSeasonText={setSeasonText}
                  setPermitBoolean={setPermitBoolean}
                  permitBoolean={permitBoolean}
                  filterRivers={filterRivers}
                />
              </div>
            </div>
          )
        }} />
      </Switch>
    </div>
  );
}

export default App;
