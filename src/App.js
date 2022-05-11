import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import ModalForm from './Components/ModalForm/ModalForm';
import ModalWindow from './Components/ModalWindow/ModalWindow';
import MyButton from './Components/MyButton/MyButton';
import PrintTable from './Components/PrintTable/PrintTable';
import Data from './Data/data';


function App() {

  const [modalShow, setModalShow] = useState(false);
  const [modalFormShow, setModalFormShow] = useState(false);
  const [tableData, setTableData] = useState(Data)
// console.log('APP Data',Data)
  return (
    <div className="App">
      <ModalWindow
        modalShow={modalShow} 
        setModalShow={setModalShow}
        tableData={tableData}
      />

      <ModalForm
        modalFormShow={modalFormShow}
        setModalFormShow={setModalFormShow}
        tableData={tableData}
        setTableData={setTableData}
      />
      
      <div className='table_header'>
        <h2>
          Car Info
        </h2>
        <div className='btn-holder'>
          <MyButton onClick={()=>setModalFormShow(true)}>Add New Car</MyButton>
          <MyButton onClick={()=>setModalShow(true)}>Select Grid Columns</MyButton>
        </div>
      </div>
      <PrintTable 
        tableData={tableData} 
        setTableData={setTableData}
      />
    </div>
  );
}
export default App;
