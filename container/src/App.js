import React, { useEffect } from 'react';

import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import 'antd/dist/antd.css';
import './App.css';
import AppLayout from './components/Layout';

const Homescreen = React.lazy(() => import('homescreen/Homescreen'));
const Details = React.lazy(() => import('details/Details'));

function App() {

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    console.log('[OnInit]', 'Container');
  }, []);

  let component = null;

  if (location.pathname.includes('details')) {
    component = <Details history={history} />;
  }

  if (location.pathname === '/') {
    component = <Homescreen history={history} />;
  }

  return (
    <AppLayout>
      <React.Fragment>
        <React.Suspense fallback="Loading...">
          {component}
        </React.Suspense>
      </React.Fragment>
    </AppLayout>
  )
}

export default App;
