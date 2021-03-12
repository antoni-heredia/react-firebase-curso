import React from 'react'
import Usuarios from './components/Usuarios.jsx'
import Usuario from './components/Usuario.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
function App() {

  return (
    <div className="container">

    <Router>
      <Link to="/">Inicio</Link>

      <Switch>
        <Route exact path="/">
          <Usuarios></Usuarios>
        </Route>
        <Route exact path="/usuario/:id">
          <Usuario></Usuario>
        </Route>
      </Switch>
    </Router>

   </div>
  );
}

export default App;
