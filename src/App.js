import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Register from './features/register';
import Header from './features/header';
import Panel from './features/panel';
import CreateLead from './features/leads/create';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/create-lead" component={CreateLead} />
          <Route path="/panel" component={Panel} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
