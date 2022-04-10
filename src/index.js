import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux'
import App from './App';

// створення початкових даних полів колонок
const defaultColumns = {
  columns: ['brand', 'color', 'year']
}  

// створення reducer
const reducer = (state = defaultColumns, action) => {
 switch (action.type) {
  case 'delete':
    return {...state, columns: state.columns.filter((el)=> el !== action.payload)}


  default:
    return state
 }
}

// створення STORE
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  
  document.getElementById('root')
);

