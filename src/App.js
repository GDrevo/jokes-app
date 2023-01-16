import './App.css';
import Joke from "./components/Joke"
import JokeList from './components/JokeList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <JokeList />
      </header>
    </div>
  );
}

export default App;
