import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';


import {createStore} from 'redux'; // создаем хранилище через метод createStore
import {Provider} from 'react-redux';
import rootReducer from './reducers' // передаем redusers
import initialState from './store/initialState' // передаем начальное состояние

const store = createStore(rootReducer, initialState) // создаем хранилище(1-й параметр это reducers, а 2-й параметр это начальные данные моего хранилища)




// оборачиваем в провайдер(все компоненты в App могут получить доступ к хранилищу и передаем store в качестве пропса хранилищю)
ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>  
    <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
