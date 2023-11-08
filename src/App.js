import logo from './logo.svg';
import flyer from './flyer.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img class="flyer" src={flyer}/>
          <h1>RSVP</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
