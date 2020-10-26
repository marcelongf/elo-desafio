import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';
import { Counter } from './features/counter/Counter';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/counter" component={Counter} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
