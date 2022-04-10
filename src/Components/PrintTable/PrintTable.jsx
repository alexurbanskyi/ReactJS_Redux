import React from 'react'
import { useSelector } from 'react-redux';
import tableData from '../../Data/data';
import { v4 as uuidv4 } from 'uuid';
import './PrintTable.css'

function PrintTable() {
//  отримумо значення из state  за допомогою хука
const columns = useSelector(state => state.columns)
console.log(columns);

// отримання всіх можливих колонок
const allColumns  = Object.keys(tableData[0]); 
console.log(allColumns)

// отримання колонок які ще не додані (всі - default)
const remainedColumns = allColumns.filter(i => columns.indexOf(i) < 0)
console.log(remainedColumns)

  return (
  <>
    { (columns.length === 0) 
      ? 
      <p className={'warning'}>Empty! Select columns!</p> 
      :
      <div className='table_wrapper'>
      <div className={'columns title'}>
         {
            columns.map((item) => <p key={uuidv4()}>{item}</p>)
         }
      </div>
      {
        tableData.map((item)=>
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
