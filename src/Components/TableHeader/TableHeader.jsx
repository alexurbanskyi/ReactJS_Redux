import React from 'react'
import { useDispatch } from 'react-redux'
import MyButton from '../MyButton/MyButton'
import './TableHeader.css'

function TableHeader() {
   const dispatch = useDispatch()
  
   const openModalGrid = () =>{
      dispatch({type:'openModalGrid'})
   }
   const openModalAddCar = () =>{
      dispatch({type:'openModalAddCar'})
   }
   return (
      <div className='table_header'>
         <h2>
            Car Info
         </h2>
         <div className='btn-holder'>
            <MyButton onClick={()=>openModalAddCar()}>Add New Car</MyButton>
            <MyButton  onClick={()=>openModalGrid()}>Select Grid Columns</MyButton>
         </div>
      </div>
   )
}
export default TableHeader