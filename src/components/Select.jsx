import {React,useContext,useState} from 'react'
import Form from 'react-bootstrap/Form';
import {PokemonContext} from '../contexts/PokemonContext'
import {useNavigate} from "react-router-dom"

export default function Select() {
  const { db} = useContext(PokemonContext);
  const [idPokemon, setidPokemon] = useState(null);
  const navigate = useNavigate();
  
  const handlePokemon = (e)=>{
    const nomPokemon = e.target.value
    setidPokemon(nomPokemon)
  }
  return (
    <>
      <Form.Select aria-label="Default select example"  size="sm" onChange={handlePokemon}>
        <option>Selecciona Pokemon</option>
        
        {db.map(item =>
                  <option
                      value={item.name}
                      key={item.name}
                  >
                  {item.name}

                  </option>
              )}
      </Form.Select>
        <button onClick={()=>navigate(`/pokemon/${idPokemon}`)}>Seleccionar</button>
    </>
  )
}
