import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './redux/store';

import { ThemeProvider } from '@mui/material';
import theme from './themeConfig'
import axios from 'axios'   
//axios.defaults.baseURL = 'http://localhost:3001/'
axios.defaults.baseURL = 'https://foodandrecipes-production.up.railway.app/'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
 {/*      <ThemeProvider theme={theme}> */}
        <App />
   {/*    </ThemeProvider> */}
    </BrowserRouter>
  </Provider>
);


