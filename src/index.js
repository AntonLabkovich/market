import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Provider from './context/provider';

ReactDOM.render(
  <Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
