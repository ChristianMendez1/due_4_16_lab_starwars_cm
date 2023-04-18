
import GetAllStarships from './services/sw-api'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>Star Wars Starships</header>
      <GetAllStarships />
    </div>
  );
}

export default App;
