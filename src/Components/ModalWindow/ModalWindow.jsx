import React, { useState } from 'react'
import MyButton from '../MyButton/MyButton'
import { v4 as uuidv4 } from 'uuid';
import './ModalWindow.css'
import { useDispatch, useSelector } from 'react-redux';
import tableData from '../../Data/data';

function ModalWindow({modalShow, setModalShow}) {
   

//    const [dragItem, setDragItem] = useState('');
//    const [value, setValue] = useState('');
   
//   function del(id){
//      let temp = addedColumns.filter((el)=>(el !== id))
//      setAddedColumns(temp)
//    setRemainingColumns([...remainingColumns,id]);
//    }

//    function dragStart(e,item){
//       console.log(item)
//       setDragItem(item)
//       console.log(dragItem)
//     }

//     let filtredGrids =  remainingColumns.filter((el)=>el.includes(value))
//     console.log(filtredGrids)

//  отримумо значення из state  за допомогою хука (додані колонки)
const columns = useSelector(state => state.columns)
console.log(columns);

// отримання всіх можливих колонок
const allColumns  = Object.keys(tableData[0]); 
console.log(allColumns)

// отримання колонок які ще не додані (всі - default)
const remainedColumns = allColumns.filter(i => columns.indexOf(i) < 0)
console.log(remainedColumns)

// створення функціії за допомогою хука useDispath
const dispatch = useDispatch()

//  action для видалення колонки
const deleteColumns = (el) => {
   dispatch({type:'delete', payload: el });
 }
  return (
   <div className={modalShow ? 'modal active' : 'modal'}>
      <div className={modalShow ? 'modal_content active' : 'modal_content'}>
         {/*
         <div className='grids_wrapper'>
            
            <div className='grids'>
               {
                  (remainingColumns.length === 0) 
                  ?  
                 <p className={'warning'}>All columns added</p> 
                 :
               <div className='remain_wrapper'>

               <input className='input' placeholder='Search' value={value} onChange={(e)=>setValue(e.target.value)}></input>
               {
                  filtredGrids.map((item) => 
               <div 
                  className='remain' 
                  key={item}
                  draggable={true}
                  onDragStart={(e)=> dragStart(e,item)}
                  >
                  {item}
               </div>)
               }
               </div>

               }
            </div>

            <div 
               className='grids'
               onDragOver= {(e)=>{
                  e.preventDefault()
                }}
                onDrop={(e)=>{
                  e.preventDefault()
                  setAddedColumns ([...addedColumns, dragItem])
                  let temp = remainingColumns.filter((el)=> el!==dragItem);
                  console.log(temp)
                  setRemainingColumns(temp) 
                  setValue('');     
               }}
               >

               {
               (addedColumns.length === 0) 
                ?  
               <p className={'warning'}>No added columns</p> 
               :
               <div className='add_wrapper'>

                 {addedColumns.map((item) => 
                     <div className='added' key={uuidv4()}>       
                        <p>{item}</p>
                        <p className='delete' id={item} onClick={(event)=> del(event.target.id)}>x</p>
                     </div> )
                  }
               </div>
               }

            </div>
                     
         </div> */}

          <h2 className='modal_title'>
            Select columns for the grid
         </h2>
       
         <div className='grids_wrapper'>
            <div className='grids'>
               <div  className='remain_wrapper'>
                  {
                     remainedColumns.map((item) => 
                     <div 
                        className='remain' 
                        key={item}
                        draggable={true}
                        // onDragStart={(e)=> dragStart(e,item)}
                        >
                        {item}
                     </div>)
                  }
               </div>
            </div>

            <div className='grids'>
               {
                  (columns.length === 0) 
                  ?  
                  <p className={'warning'}>No added columns</p> 
                  :
                  <div className='added_wrapper'>
                     {columns.map((item) => 
                           <div className='added' key={uuidv4()}>       
                              <p>{item}</p>
                              <p className='delete' onClick={(el)=>deleteColumns(item)}>x</p>
                           </div> )
                     }
                  </div>
               }
            </div>

         </div>
       
         <div className='btn_holder'>
            <MyButton onClick={()=>setModalShow(false)}>Apply</MyButton>
         </div>
      </div>
   </div>
  )
}

export default ModalWindow
