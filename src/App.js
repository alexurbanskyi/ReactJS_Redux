import { useState } from 'react';
import './App.css';
import ModalWindow from './Components/ModalWindow/ModalWindow';
import MyButton from './Components/MyButton/MyButton';
import PrintTable from './Components/PrintTable/PrintTable';

function App() {

  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="App">
      <ModalWindow
        modalShow={modalShow} 
        setModalShow={setModalShow} 
      />
      <div className='table_header'>
        <h2>
          Car Info
        </h2>
        <MyButton onClick={()=>setModalShow(true)}>Select Grid Columns</MyButton>
      </div>
      <PrintTable/>
    </div>
  );
}
export default App;
