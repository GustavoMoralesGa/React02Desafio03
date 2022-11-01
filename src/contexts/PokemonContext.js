import axios from 'axios';
import { createContext,useState,useEffect} from "react";
const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {  
      const [db, setDb] = useState(null);
      
      useEffect(() => {
        getAllPokemons();
      }, []);

      const getAllPokemons = async () => {

        try {
          const res = await axios('https://pokeapi.co/api/v2/pokemon?limit=151');
          const data = res.data.results
          setDb(data)
        } catch (e) {
          throw e;
        }
      };
      const data = {db};
      return <PokemonContext.Provider value={data}>{children}</PokemonContext.Provider>;
  };
  export { PokemonProvider,PokemonContext };