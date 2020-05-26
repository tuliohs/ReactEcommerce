import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';


import './App.css';

import HomeScreen from './home/HomeScreen';
import CategoriaScreen from './categoria/CategoriaScreen';
import GetCategoria from './web/GetCategoria';


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/">
              <HomeScreen />
          </Route>
          <Route path="/categorias/:id">
              <CategoriaScreen />
          </Route>
          <Route path="/compras">
              <h1>Carrinho de compras</h1>
          </Route>
          <Route path="/web">
            <h1>Web</h1>
              <GetCategoria/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )

}

export default App;
