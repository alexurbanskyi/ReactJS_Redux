import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux'
import App from './App';
import Data from './Data/data';

// створення початкових даних полів колонок
const defaultColumns = {
  columns: ['brand', 'price', 'fuel'],
  modalGrid: false,
  modalAddCar: false,
  tableData: Data
}  
// створення reducer
const reducer = (state = defaultColumns, action) => {
 switch (action.type) {
  case 'delete':
    return {...state, columns: state.columns.filter((el)=> el !== action.payload)}
  case 'add':
    return {...state, columns: [...state.columns, action.payload]}
  case 'openModalGrid':
    return {...state, modalGrid: true}
  case 'closeModalGrid':
    return {...state, modalGrid: false}
  case 'openModalAddCar':
    return {...state, modalAddCar: true}
  case 'closeModalAddCar':
    return {...state, modalAddCar: false}
  case 'addNewCar':
    return {...state, tableData: [...state.tableData, action.payload]}  
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

