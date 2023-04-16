import {useState, useEffect} from "react";

export default function GetAllStarships () {
  const [starships, setStarships] = useState([])

  useEffect(() =>{
    fetch('https://swapi.dev/api/starships')
      .then(response => {
        return response.json();
      })
      .then(data => {
        // console.log(data)
        setStarships(data.results)
        console.log(data.results)
      });
      // console.log(starships)
  }, [])

  const starshipsMap = starships.map((starship) => {
    return(
      <div class= 'starships'>{starship.name}</div>
    )
  })

    return (
      <div>
          {starshipsMap}
      </div>
    );
  };