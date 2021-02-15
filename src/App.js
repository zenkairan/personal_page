import './App.css';

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/home';
import Xp from './components/experience';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/xp" component={Xp} />
      </Switch>
    </Router>
  );
}

export default App;
