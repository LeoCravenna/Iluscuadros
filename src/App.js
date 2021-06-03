import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Bienvenidos a mi App E-Commerce con React JS llamada Iluscuadros.</code><br/>
          <code>Este proyecto es un emprendimiento mio y de mi hermano.</code><br/>
          <code>Mi nombre es Leonardo E. Cravenna.</code><br/>
          <code>La idea es realizar un e-commerce para venta de cuadros que están diseñados y vectorizados digitalmente.</code><br/>
          <code>Se visualizará un catálogo de dichos cuadros con la posibilidad de ver individualmente cada uno de ellos.</code><br/>
          <code>Dentro de la visualización individual se encontrará la imagen del cuadro, el nombre, una descripción, el valor y la posibilidad de agregarlo al carrito para adquirirlo.</code>
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          + info sobre React JS
        </a>
      </header>
    </div>
  );
}

export default App;
