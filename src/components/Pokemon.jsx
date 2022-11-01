import {React,useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import PokemonCard from './Card';



export default function Pokemon() {
  
  const [info, setInfo] = useState(null)
  const { id } = useParams();

  useEffect(() => {
    getPokemon(id);
  }, []);
  
  const getPokemon = async (pokemonId) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    const users = await data.json()
    setInfo(users)
  };

  return (
    <div className="d-flex justify-content-center">
      <PokemonCard 
        info={info}
      />
    </div>
  )
}
