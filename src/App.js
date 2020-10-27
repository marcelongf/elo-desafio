import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Register from './features/register';
import Header from './features/header';
import Panel from './features/panel';
import CreateLead from './features/leads/create';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Router>
          <Header />
          <Switch>
            <Route path="/create-lead" component={CreateLead} />
            <Route path="/panel" component={Panel} />
            <Route path="/register" component={Register} />
          </Switch>
        </Router>
      </DndProvider>
    </>
  );
}

export default App;
