
import GetAllStarships from './services/sw-api'
import './App.css';

function App() {
  return (
    <div>
      <header>Star Wars Starships</header>
      <GetAllStarships />
    </div>
  );
}

export default App;
