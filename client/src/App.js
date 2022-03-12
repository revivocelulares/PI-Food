import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './componentes/home/index';
import Detalles from './componentes/detalles/index';
import Crear from './componentes/crear/crear';
import Landing from './componentes/inicio/landing';

function App() {
  return (
    <Switch>
      <Route exact path="/detalles/:id" component={Detalles} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/crearReceta" component={Crear} />
      <Route path="/" component={Landing} />
    </Switch>
  );
}

export default App;
