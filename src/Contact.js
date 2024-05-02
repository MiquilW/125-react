import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Contact Me Here:
        </h1>
        <h3>
          mwelsome@ucsd.edu
        </h3>
        <ul>
          <li><Link
            to="/"
            className="App-link"
          >
            Home
          </Link></li>
        </ul>
      </header>
    </div>
  );
}

export default App;
