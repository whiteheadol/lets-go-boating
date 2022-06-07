import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeNav from './Components/Homepage/HomeNav';
import HomeContainer from './Components/Homepage/HomeContainer';
import Form from './Components/Homepage/Form';
import './App.css';

function App() {
  // Fetch all data from API on load
  // Hold the state of all rivers here

  // define the ways in which you will change state (form inputs, favoriting...) using useState

  return (
    <div className="App">
      <h1>Let's Go Boating!</h1>
      <Switch>
        <Route exact path="/" render={() => {
          return (
            <div>
              <HomeNav />
              <HomeContainer />
              <Form />
            </div>
          )
        }} />
      </Switch>
    </div>
  );
}

export default App;
