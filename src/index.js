import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {DimentionsProvider} from './DimentionsContext'

ReactDOM.render(
  (<DimentionsProvider>
    <App />
  </DimentionsProvider>),
  document.getElementById('root')
);


reportWebVitals();
