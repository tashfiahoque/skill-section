import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Skill from './Components/Skill/Skill';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Skill />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
