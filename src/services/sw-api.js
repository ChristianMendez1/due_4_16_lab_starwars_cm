import {useState, useEffect} from "react";

export default function Starship (props) {
  const [starships, setStarships] = useState([])

  useEffect(() =>{
    fetch('https://swapi.dev/api/starships')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setStarships(data.results)
      });
  }, [])

  props.getAllStarships(starships)
  };