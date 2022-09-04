import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <button className='btn-login'>LOGIN</button>
      <ul className='nav'>
        <li className='nav-list'>
        <a className='nav-link' href='../public/index.html'>Home</a>
        <a className='nav-link' href='../public/index.html'>Catálogo</a>
        <a className='nav-link' href='../public/index.html'>Inscripción</a>
        </li>
      </ul>
      <NavBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <a href="../public/index.html"></a>
      </header>
      </div> 
      );
}

export default App;
