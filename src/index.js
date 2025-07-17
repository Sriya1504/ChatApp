import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import '/node_modules/primeflex/primeflex.css';
import 'primeflex/themes/primeone-light.css';
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


