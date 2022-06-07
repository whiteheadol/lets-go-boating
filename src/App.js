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
  const [favRivers, setFavs] = useState([]);

  // define the ways in which you will change state (form inputs, favoriting...) using useState
  useEffect(() => {
    fetch("http://localhost:4000/api/v1/rivers")
      .then(response => response.json())
      .then(data => setRivers(data.rivers))
  }, [])

  return (
    <div className="App">
      <h1>Let's Go Boating!</h1>
      <Switch>
        <Route exact path="/" render={() => {
          return (
            <div>
              <HomeNav />
              <HomeContainer allRivers={allRivers} />
              <Form />
            </div>
          )
        }} />
      </Switch>
    </div>
  );
}

export default App;
