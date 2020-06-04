import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Provider } from 'react-redux'
import store from './store'

import Home from './pages/Home'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
