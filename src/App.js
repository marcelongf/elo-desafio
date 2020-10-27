import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Register from './features/register';
import Header from './features/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
