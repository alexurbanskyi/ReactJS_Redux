import React from 'react';
import './App.css';
import ModalForm from './Components/ModalForm/ModalForm';
import ModalWindow from './Components/ModalWindow/ModalWindow';
import PrintTable from './Components/PrintTable/PrintTable';
import TableHeader from './Components/TableHeader/TableHeader';

function App() {
  return (
    <div className="App">
      <ModalWindow/>
      <ModalForm/>
      <TableHeader/>
      <PrintTable/>
    </div>
  );
}
export default App;
