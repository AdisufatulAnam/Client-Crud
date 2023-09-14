import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
//impoert boostrap css
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';


ReactDom.render(
  <React.StrictMode>
    <BrowserRouter>
    <App></App>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root')

);