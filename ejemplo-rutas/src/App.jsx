import React from 'react'
import Inicio from './components/Inicio.jsx'
import Base from './components/Base.jsx'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
function App() {
  return (
   <Router>
     <Switch>
       <Route path="/inicio">
        <Inicio></Inicio>
       </Route>
       <Route exact path="/">
        <Base></Base>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
