import Hola from './components/Hola'
import Contador from './components/Contador'
import Listado from './components/Listado'
import Temperatura from './components/Temperatura'
import Formulario from './components/Formulario'
import './App.css';

function App() {
  return (
    <div className="App mt-5">
      <h1>Primer proyecto</h1>
      <Hola></Hola>
      <Contador></Contador>
      <Listado></Listado>
      <Temperatura></Temperatura>
      <Formulario></Formulario>
    </div >
      
    
  );
}

export default App;
