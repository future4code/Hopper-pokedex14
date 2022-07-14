import './App.css';
import Rotas from './Components/Rotas';
import { GlobalState } from './Global/GlobalState';

function App() {
  return (
    <GlobalState>
      <Rotas/>
    </GlobalState>
  );
}

export default App;
