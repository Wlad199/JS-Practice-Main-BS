import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import store from './store'; // подключаем хранилище
import {Provider} from 'react-redux'; // подключаем провайдер для доступа в хранилище


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
     <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
