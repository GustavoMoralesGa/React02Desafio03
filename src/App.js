import './App.css';
import Home from './components/Home'
import Navbar from './components/NavBar'
import Pokemon from './components/Pokemon'
import {PokemonProvider} from './contexts/PokemonContext'
import Pokemones from './components/Pokemones';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <PokemonProvider>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Pokemones" element={<Pokemones />} />
            <Route path="/Pokemon/:id" element={<Pokemon />} />
          </Routes>
      </BrowserRouter>
    </PokemonProvider>
    
  );
}

export default App;
