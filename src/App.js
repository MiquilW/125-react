import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='slide'>
          Michael Welsome
        </h1>
        <h3>
          Software Developer
        </h3>
        <ul>
          <li><a
            className="App-link"
            href="https://github.com/MiquilW"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a></li>
          <li><Link
            to="/contact"
            className="App-link"
          >
            Contact
          </Link></li>
        </ul>
      </header>
    </div>
  );
}

export default App;
