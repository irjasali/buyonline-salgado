import logo from './logo.svg';
import './App.css';
import Saludo from './components/saludos'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />       
       <Saludo mensaje="Hola bienvenido...!" nombre="Irving Salgado" />
       <Saludo mensaje="Desde" ciudad="Acapulco, Gro, México"/>
      </header>
    </div>
  );
}

export default App;
