import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeNav from './Components/Homepage/HomeNav';
import HomeContainer from './Components/Homepage/HomeContainer';
import Form from './Components/Homepage/Form';
import Details from './Components/Details/Details';
import DetailsNav from './Components/Details/DetailsNav';
import BucketListContainer from './Components/BucketList/BucketListContainer';
import BucketListNav from './Components/BucketList/BucketListNav';
import Error from './Components/Error/Error';
import './App.css';

function App() {

  const [allRivers, setRivers] = useState([]);
  const [filteredRivers, setFilteredRivers] = useState([]);
  const [favRivers, setFavRivers] = useState([]);
  const [seasonText, setSeasonText] = useState('any');
  const [permitBoolean, setPermitBoolean] = useState('false');
  const [currentTrip, setCurrentTrip] = useState();
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch("https://river-api-22.herokuapp.com/api/v1/rivers")
      .then(response => response.json())
      .then(data => {
        setError(false)
        setFilteredRivers(data.rivers)
        setRivers(data.rivers)
        setCurrentTrip(data.rivers[0])
      })
      .catch(err => {
        setError(true)
      })
  }, [])

  const filterRivers = (e) => {
    e.preventDefault();
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
          return <div>
              <HomeNav />
              <div className="main-page">
                {error && <p className="load-error">We're so sorry - there was a problem loading your data. Please try again later!</p>}
                <Form
                setSeasonText={setSeasonText}
                setPermitBoolean={setPermitBoolean}
                permitBoolean={permitBoolean}
                filterRivers={filterRivers}
                seasonText={seasonText}
                permitBoolean={permitBoolean}
                />
                <HomeContainer
                  rivers={filteredRivers}
                  setCurrentTrip={setCurrentTrip}
                />
              </div>
            </div>
        }} />
        <Route exact path="/list"
        render={() => {
          return <div>
            <BucketListNav />
            <BucketListContainer
              favRivers={favRivers}
            />
          </div>
        }}
        />
        <Route exact path="/rivers/:id"
          render={({match}) => {
            return <div className="details-page">
              <DetailsNav />
              <Details
                currentTrip={currentTrip}
                setCurrentTrip={setCurrentTrip}
                setFavRivers={setFavRivers}
                currentId={match.params.id}
                allRivers={allRivers}
                setFavRivers={setFavRivers}
                favRivers={favRivers}
              />
            </div>
          }}
        />
        <Route path="*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
