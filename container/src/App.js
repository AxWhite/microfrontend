import React, { Suspense, useEffect } from 'react';

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import 'antd/dist/antd.css';
import './App.css';
import AppLayout from './components/Layout';

const defaultHistory = createBrowserHistory();

const Homescreen = React.lazy(() => import('homescreen/Homescreen'));
const Details = React.lazy(() => import('details/DetailsIndex'));

function App({ history = defaultHistory }) {

  return (
    <AppLayout>
      <BrowserRouter>
            <React.Fragment>
              <Switch>
                <Route exact path="/" render={() => 
                  <React.Suspense fallback="Loading...">
                    <Homescreen history={history}></Homescreen>
                  </React.Suspense>
                } />
                <Route exact path="/details/:id" render={() => 
                  <React.Suspense fallback="Loading...">
                    <Details history={history} />
                  </React.Suspense>
                } />
              </Switch>
            </React.Fragment>
      </BrowserRouter>
    </AppLayout>  

  )
}

export default App;
