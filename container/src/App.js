import React, { Suspense, useEffect } from 'react';

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import 'antd/dist/antd.css';
import './App.css';
import AppLayout from '../../homescreen/src/components/Layout';

const defaultHistory = createBrowserHistory();

const Homescreen = React.lazy(
  () => import('homescreen/HomescreenIndex')
);

const Details = React.lazy(
  () => import('details/DetailsIndex')
)

function App({ history = defaultHistory }) {

  return (
    <AppLayout>
      <BrowserRouter>
            <React.Fragment>
              <Switch>
                <Route exact path="/" render={() => <Homescreen history={history} />} />
                <Route exact path="/about" render={() => <h1>Hello world</h1>} />
                <Route exact path="/details/:id" render={() => <Details history={history} />} />
              </Switch>
            </React.Fragment>
      </BrowserRouter>
    </AppLayout>  

  )
}

export default App;
