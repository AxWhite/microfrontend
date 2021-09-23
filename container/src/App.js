import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

const Homescreen = React.lazy(
  () => import('homescreen/HomescreenIndex')
);

const Details = React.lazy(
  () => import('details/DetailsIndex')
)

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <Homescreen />
          </Route>
        </Switch>
    </Router>
  )
}

export default App;
