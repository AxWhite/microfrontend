import React, { Suspense, useEffect } from 'react';

import { Router, Switch, Route, Redirect, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import 'antd/dist/antd.css';
import './App.css';
import AppLayout from './components/Layout';

const defaultHistory = createBrowserHistory();

const Homescreen = React.lazy(() => import('homescreen/Homescreen'));
const Details = React.lazy(() => import('details/Details'));

function App({ history = defaultHistory }) {
  return (
    <AppLayout>
      <Router history={history}>
        <React.Fragment>
          <Switch>
            <Route exact path="/" render={() =>
              <React.Suspense fallback="Loading...">
                <Homescreen history={history} />
              </React.Suspense>
            } />
            <Route exact path="/about" render={() => <h1>Hello World</h1>} />
            <Route exact path="/details/:id" render={() =>
              <React.Suspense fallback="Loading...">
                <Details history={history} />
              </React.Suspense>
            } />
          </Switch>
        </React.Fragment>
      </Router>
    </AppLayout>

  )
}

export default App;
