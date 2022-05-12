import React, { useState } from 'react';
import './App.css';
import ModalForm from './Components/ModalForm/ModalForm';
import ModalWindow from './Components/ModalWindow/ModalWindow';
import PrintTable from './Components/PrintTable/PrintTable';
import TableHeader from './Components/TableHeader/TableHeader';
import Data from './Data/data';

function App() {
  const [tableData, setTableData] = useState(Data)
  return (
    <div className="App">
      <ModalWindow
        // modalShow={modalShow} 
        // setModalShow={setModalShow}
        tableData={tableData}
      />
      <ModalForm/>
      <TableHeader/>
      <PrintTable 
        tableData={tableData} 
        setTableData={setTableData}
      />
    </div>
  );
}
export default App;
