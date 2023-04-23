import Starship from "./sw-api"
import {useState} from 'react'

export default function StarShipCard({name}){

    return(
        <div class= 'starships'>
           {name}
        </div>
    )
}