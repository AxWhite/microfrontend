import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Router } from 'react-router-dom';
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('root')
);
