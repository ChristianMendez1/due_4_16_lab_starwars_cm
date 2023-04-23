import {useState} from 'react'
import Starship from './services/sw-api'
import StarShipCard from './services/StarShipCard'
import './App.css';

function App({name}) {
  const  [starships, setStarships] = useState([])

  function getAllStarships(data) {
    setStarships(data)
  }

  console.log(starships)

  return (
  <div>
    <Starship getAllStarships={getAllStarships}/>
    {starships.map(element => <StarShipCard name={element.name}/>)}
  </div>

  );
}

export default App;
