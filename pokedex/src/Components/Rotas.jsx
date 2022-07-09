import { 
  BrowserRouter,
  Routes, 
  Route,
} from 'react-router-dom';
import Detalhes from '../Pages/Detalhes';

import HomePage from '../Pages/Home';
import Pokedex from '../Pages/Pokedex';

const Rotas = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/Pokedex" element={<Pokedex/>}/>
              <Route path="/Detalhes/:id" element={<Detalhes/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default Rotas;