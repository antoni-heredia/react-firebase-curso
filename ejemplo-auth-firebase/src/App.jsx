import React from 'react'
import Inicio from './components/Inicio.jsx'
import Admin from './components/Admin.jsx'
import Login from './components/Login.jsx'
import Menu from './components/Menu.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <div className="container">
      <Router>
        <Menu></Menu>

        <Switch>
        <Route exact path="/" component={Inicio}></Route>
        <Route path="/admin" component={Admin}></Route>
        <Route path="/login" component={Login}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
