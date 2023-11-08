import logo from './logo.svg';
import flyer from './flyer.png';
import './App.css';

function App() {
  return (
    <div className="App">
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap" rel="stylesheet"/>
      <header className="App-header">
        <div>
          <img className="flyer" src={flyer}/>
          <h1>
            <a className="link" href="https://secure.inspirave.com/#toregister">RSVP</a>
          </h1>        
        </div>
      </header>
    </div>
  );
}

export default App;
