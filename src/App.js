import Welcome from './pages/Welcome';

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
          <Switch>
            <Route path="/" exact component = {Welcome}/>
          </Switch>
      </Router>
    </>
  );
}

export default App;
