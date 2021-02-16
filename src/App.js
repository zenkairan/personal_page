import './App.css';

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/home';
import Xp from './components/experience';
import About from './components/about';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/xp" component={Xp} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
