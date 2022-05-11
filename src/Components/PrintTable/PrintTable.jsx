import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './PrintTable.css'
import { AiOutlineCaretDown, AiOutlineCaretUp} from "react-icons/ai";
import ModalBrandInfo from '../ModalBrandInfo/ModalBrandInfo';


function PrintTable({ tableData, setTableData}) {
//  отримумо значення из state  за допомогою хука
const columns = useSelector(state => state.columns)

const [sortedData, setSortedData] = useState(tableData)
const [activeBtn, setActiveBtn]  = useState('up0')
const [carInfo, setCarInfo] = useState({});
const [carIndex, setCarIndex] = useState(null);
const [brandShow, setBrandShow] = useState(false)

useEffect(()=>{
  const defaultSort =  tableData.sort((a,b) =>
{
  if (a[columns[0]] < b[columns[0]]) return -1
})
setSortedData(defaultSort)
},[tableData])


const sortUp = (columnsName, arr) => {
  const sortData = arr.sort((a,b) =>
  {
    if (a[columnsName] < b[columnsName]) return -1
  })
    setSortedData(sortData)
}

const sortDown = (columnsName, arr) => {
  const sortData = arr.sort((a,b) =>
  {
    if (a[columnsName] > b[columnsName]) return -1
  })
  setSortedData(sortData)
}

return (
  <>
    { (columns.length === 0) 
      ? 
      <p className={'warning'}>Empty! Select columns!</p> 
      :
      <div className='table_wrapper'>
        <div className={'columns title'}>
          {
              columns.map((item,index) => 
              <div className='title-item' key={uuidv4()}>
                {item}
                <div className='btn-sort-wrapper'>

                  <button  id={`up`+ index} onClick={(e)=>{
                    sortUp(item, tableData) 
                    setActiveBtn(e.currentTarget.id)
                  }} className={(activeBtn === 'up'+index) ? ['btn-sort', 'active-sort'].join(' ') : 'btn-sort'}><AiOutlineCaretUp/></button> 

                  <button  id={`down`+ index} onClick={(e)=>{
                      sortDown(item, tableData)
                      setActiveBtn(e.currentTarget.id)
                  }} className={(activeBtn === 'down'+index) ? ['btn-sort', 'active-sort'].join(' ') : 'btn-sort'}><AiOutlineCaretDown/></button>
                </div>
              </div>)
          }
        </div>
        {
          sortedData.map((item, index)=>
          <div className={'columns'} key={uuidv4() }onClick={(e)=> {
            setCarInfo(item)
            setCarIndex(index)
            setBrandShow(true)
            }}  >
              {columns.map((el)=> <p key={uuidv4()}>{item[el]}</p>)}
          </div>)
        }
        <ModalBrandInfo carInfo={carInfo} setCarInfo={setCarInfo} tableData={tableData} setTableData={setTableData} carIndex={carIndex} brandShow={brandShow} setBrandShow={setBrandShow}/>
      
      </div>
    }
  </>
  )
}
export default PrintTable
