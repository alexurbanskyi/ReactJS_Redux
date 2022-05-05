import React, { useState } from 'react'
import MyButton from '../MyButton/MyButton'
import { v4 as uuidv4 } from 'uuid';
import './ModalWindow.css'
import { useDispatch, useSelector } from 'react-redux';
// import tableData from '../../Data/data';

function ModalWindow({modalShow, setModalShow, tableData}) {
// стан для елемента який перетягуємо
const [dragItem, setDragItem] = useState('');

// стан для input
const [value, setValue] = useState('');
   
//  отримумо значення из state  за допомогою хука (додані колонки)
const columns = useSelector(state => state.columns);

// отримання всіх можливих колонок
const allColumns  = Object.keys(tableData[0]); 

// отримання колонок які ще не додані (всі - default)
const remainedColumns = allColumns.filter(i => columns.indexOf(i) < 0);

// список колонок відфільтрований по значенню input
let filtredGrids =  remainedColumns.filter((el)=>el.includes(value));
// console.log(filtredGrids);

// створення функціії за допомогою хука useDispath
const dispatch = useDispatch()

//  action для видалення колонки
const deleteColumns = (el) => {
   dispatch({type:'delete', payload: el });
   // console.log('delet', el)
 }

//  action для додавання колонки
const addColumns = (el) => {
   dispatch({type:'add', payload: el});
 }

// здерігаємо стан того елемента який ми хочемо перетягнути 
 function dragStart(e,item){
   setDragItem(item)
 }

 
  return (
   <div className={modalShow ? 'modal active' : 'modal'}>
      <div className={modalShow ? 'modal_content active' : 'modal_content'}>
         <h2 className='modal_title'>
            Select columns for the grid
         </h2>
       
         <div className='grids_wrapper'>
            <div className='grids'>
               {(remainedColumns.length === 0) 
                 ?  
                 <p className={'warning'}>All columns added</p> 
                 :
                  <div  className='remain_wrapper'>
                     <input className='input-search' placeholder='Search' value={value} onChange={(e)=>setValue(e.target.value)}></input>
                     {(filtredGrids.length === 0) 
                     ?  
                     <p className={'warning'}>Columns not found</p> 
                     :
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
               onDragOver= {(e)=>e.preventDefault()}
                onDrop={(e)=>{
                  e.preventDefault()
                  addColumns(dragItem)
                  setValue(''); 
               }}
               >
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
