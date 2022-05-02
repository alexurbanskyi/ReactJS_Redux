import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import tableData from '../../Data/data';
import { v4 as uuidv4 } from 'uuid';
import './PrintTable.css'
import { AiOutlineCaretDown, AiOutlineCaretUp} from "react-icons/ai";

function PrintTable() {

  
//  отримумо значення из state  за допомогою хука
const columns = useSelector(state => state.columns)

const defSort =  [...tableData].sort((a,b) =>
{
  if (a[columns[0]] < b[columns[0]]) return -1
})

const [sortedData, setSortedData] = useState(defSort)
 
const sortUp = (columnsName, arr) => {
  const sortData = [...arr].sort((a,b) =>
  {
    if (a[columnsName] < b[columnsName]) return -1
  })
    setSortedData(sortData)
}

const sortDown = (columnsName, arr) => {
  const sortData = [...arr].sort((a,b) =>
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
            columns.map((item) => <p className='title-item' key={uuidv4()}>
              {item}
              <div className='btn-sort-wrapper'>
                <button onClick={()=>sortUp(item, tableData)} className='btn-sort'><AiOutlineCaretUp/></button> 
                <button onClick={()=>sortDown(item, tableData)} className='btn-sort'><AiOutlineCaretDown/></button>
              </div>
              </p>)
         }
      </div>
      {
        sortedData.map((item)=>
         <div className={'columns'} key={uuidv4()} >
            {columns.map((el)=> <p key={uuidv4()}>{item[el]}</p>)}
         </div>)
      }
    </div>
    }
  </>
  )
}
export default PrintTable
